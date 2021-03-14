// package: audiostreamer
// file: audiostreamer.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as audiostreamer_pb from "./audiostreamer_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IAudioStreamService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getStream: IAudioStreamService_IGetStream;
    audioStream: IAudioStreamService_IAudioStream;
    getFormat: IAudioStreamService_IGetFormat;
}

interface IAudioStreamService_IGetStream extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, audiostreamer_pb.AudioSample> {
    path: "/audiostreamer.AudioStream/GetStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<audiostreamer_pb.AudioSample>;
    responseDeserialize: grpc.deserialize<audiostreamer_pb.AudioSample>;
}
interface IAudioStreamService_IAudioStream extends grpc.MethodDefinition<audiostreamer_pb.AudioSample, audiostreamer_pb.AudioSample> {
    path: "/audiostreamer.AudioStream/AudioStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<audiostreamer_pb.AudioSample>;
    requestDeserialize: grpc.deserialize<audiostreamer_pb.AudioSample>;
    responseSerialize: grpc.serialize<audiostreamer_pb.AudioSample>;
    responseDeserialize: grpc.deserialize<audiostreamer_pb.AudioSample>;
}
interface IAudioStreamService_IGetFormat extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, audiostreamer_pb.AudioFormat> {
    path: "/audiostreamer.AudioStream/GetFormat";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<audiostreamer_pb.AudioFormat>;
    responseDeserialize: grpc.deserialize<audiostreamer_pb.AudioFormat>;
}

export const AudioStreamService: IAudioStreamService;

export interface IAudioStreamServer {
    getStream: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, audiostreamer_pb.AudioSample>;
    audioStream: grpc.handleBidiStreamingCall<audiostreamer_pb.AudioSample, audiostreamer_pb.AudioSample>;
    getFormat: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, audiostreamer_pb.AudioFormat>;
}

export interface IAudioStreamClient {
    getStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<audiostreamer_pb.AudioSample>;
    getStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<audiostreamer_pb.AudioSample>;
    audioStream(): grpc.ClientDuplexStream<audiostreamer_pb.AudioSample, audiostreamer_pb.AudioSample>;
    audioStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<audiostreamer_pb.AudioSample, audiostreamer_pb.AudioSample>;
    audioStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<audiostreamer_pb.AudioSample, audiostreamer_pb.AudioSample>;
    getFormat(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: audiostreamer_pb.AudioFormat) => void): grpc.ClientUnaryCall;
    getFormat(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: audiostreamer_pb.AudioFormat) => void): grpc.ClientUnaryCall;
    getFormat(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: audiostreamer_pb.AudioFormat) => void): grpc.ClientUnaryCall;
}

export class AudioStreamClient extends grpc.Client implements IAudioStreamClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getStream(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<audiostreamer_pb.AudioSample>;
    public getStream(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<audiostreamer_pb.AudioSample>;
    public audioStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<audiostreamer_pb.AudioSample, audiostreamer_pb.AudioSample>;
    public audioStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<audiostreamer_pb.AudioSample, audiostreamer_pb.AudioSample>;
    public getFormat(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: audiostreamer_pb.AudioFormat) => void): grpc.ClientUnaryCall;
    public getFormat(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: audiostreamer_pb.AudioFormat) => void): grpc.ClientUnaryCall;
    public getFormat(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: audiostreamer_pb.AudioFormat) => void): grpc.ClientUnaryCall;
}
