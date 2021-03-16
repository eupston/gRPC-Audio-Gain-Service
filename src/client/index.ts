import {AudioSample} from '../proto/audiostreamer_pb'
import {client} from './utils'
import {AudioIO, SampleFormat16Bit} from 'naudiodon'


async function startAudioStream() {

    let micstream = AudioIO({
        inOptions: {
            channelCount: 2,
            sampleFormat: SampleFormat16Bit,
            sampleRate: 44100,
            deviceId: -1, // Use -1 or omit the deviceId to select the default device
            closeOnError: true // Close the stream if an audio error is detected, if set false then just log the error
        }
    });
    let sample = new AudioSample()
    let stream = client.audioStream()

    micstream.on('data', async (data) => {
        sample.setData(data)
        sample.setTimestamp(new Date() + " from client")
        stream.write(sample)
    })
    stream.on('data', (serversample) => {
        console.log(serversample.getData())
    })

    //Start streaming
    micstream.start();
}

startAudioStream()