import {AudioSample} from '../proto/audiostreamer_pb'
import {client} from './utils'
import {AudioIO, SampleFormat16Bit} from 'naudiodon'
const Speaker = require('speaker');


async function startAudioStream() {

    let micstream = AudioIO({
        inOptions: {
            channelCount: 2,
            sampleFormat: SampleFormat16Bit,
            sampleRate: 44100,
            deviceId: -1, // Use -1 or omit the deviceId to select the default device
            closeOnError: true // Close the stream if an audio error is detected
        }
    });

    // Create the Speaker instance
    const speaker = new Speaker({
        channels: 2,          // 2 channels
        bitDepth: 16,         // 16-bit samples
        sampleRate: 44100     // 44,100 Hz sample rate
    });

    let sample = new AudioSample()
    let stream = client.audioStream()

    //Start recording microphone streaming
    micstream.start();

    // When mic stream receives data send to server
    micstream.on('data', (data) => {
        sample.setData(data)
        sample.setTimestamp(new Date() + " from client")
        stream.write(sample)
    })

    //When servers sends back data pipe to the speaker
    stream.on('data', (serversample) => {
        if(serversample.getData()){
            speaker.write(serversample.getData());
        }
    })
}

startAudioStream()