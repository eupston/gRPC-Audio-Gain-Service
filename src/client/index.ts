import {AudioSample} from '../proto/audiostreamer_pb'
import {client} from './utils'

async function run() {
    let stream = client.audioStream()
    let sample = new AudioSample()
    sample.setData(new Uint8Array([0x0102]))
    sample.setTimestamp(new Date() + " from client")
    stream.write(sample)
    stream.end()
    stream.on('data', (serversample) => {
        console.log(serversample.getTimestamp())
        console.log(serversample.getData())
    })
    stream.on('end', function(event) {
        stream.end();
        process.exit();
    });
}

run()