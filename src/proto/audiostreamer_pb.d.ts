// package: audiostreamer
// file: audiostreamer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class AudioSample extends jspb.Message { 
    getTimestamp(): string;
    setTimestamp(value: string): AudioSample;
    getData(): Uint8Array | string;
    getData_asU8(): Uint8Array;
    getData_asB64(): string;
    setData(value: Uint8Array | string): AudioSample;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioSample.AsObject;
    static toObject(includeInstance: boolean, msg: AudioSample): AudioSample.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioSample, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioSample;
    static deserializeBinaryFromReader(message: AudioSample, reader: jspb.BinaryReader): AudioSample;
}

export namespace AudioSample {
    export type AsObject = {
        timestamp: string,
        data: Uint8Array | string,
    }
}

export class AudioFormat extends jspb.Message { 
    getAveragebytespersecond(): number;
    setAveragebytespersecond(value: number): AudioFormat;
    getBitspersample(): number;
    setBitspersample(value: number): AudioFormat;
    getBlockalign(): number;
    setBlockalign(value: number): AudioFormat;
    getChannels(): number;
    setChannels(value: number): AudioFormat;
    getExtrasize(): number;
    setExtrasize(value: number): AudioFormat;
    getSamplerate(): number;
    setSamplerate(value: number): AudioFormat;
    getEncoding(): string;
    setEncoding(value: string): AudioFormat;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AudioFormat.AsObject;
    static toObject(includeInstance: boolean, msg: AudioFormat): AudioFormat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AudioFormat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AudioFormat;
    static deserializeBinaryFromReader(message: AudioFormat, reader: jspb.BinaryReader): AudioFormat;
}

export namespace AudioFormat {
    export type AsObject = {
        averagebytespersecond: number,
        bitspersample: number,
        blockalign: number,
        channels: number,
        extrasize: number,
        samplerate: number,
        encoding: string,
    }
}
