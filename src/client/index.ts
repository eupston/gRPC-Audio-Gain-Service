import {AudioSample} from '../proto/audiostreamer_pb'
import {client} from './utils'
import {AudioIO, SampleFormat16Bit} from 'naudiodon'
const Speaker = require('speaker');

async function startAudioStream() {

    let micstream = AudioIO({
        inOptions: {
            channelCount: 1,
            sampleFormat: SampleFormat16Bit, //takes 2 bytes to store 1 sample
            sampleRate: 44100,
            deviceId: -1, // Use -1 or omit the deviceId to select the default device
            closeOnError: true // Close the stream if an audio error is detected
        }
    });

    // Create the Speaker instance
    const speaker = new Speaker({
        channels: 1,          // 2 channels
        bitDepth: 16,         // 16-bit samples
        sampleRate: 44100     // 44,100 Hz sample rate
    });

    let sample = new AudioSample()
    let stream = client.audioStream()

    // When mic stream receives data send to server
    // Buffer size is 4096 samples per chan ( stereo interleaved ) or ~180 ms @ 44100
    // 16Bit UNSIGNED int is between 0 - 65535
    micstream.on('data', (data) => {
        sample.setData(data)
        sample.setGainamt(2.0)
        sample.setTimestamp(new Date().getMilliseconds() + " from client")
        stream.write(sample)
    })

    //When servers sends back data pipe to the speaker
    stream.on('data', (serversample) => {
        let sample = serversample.getData()
        if(sample.length > 0 && sample){
            speaker.write(sample);
        }
    })

    //Start recording microphone streaming
    micstream.start();
}

startAudioStream()