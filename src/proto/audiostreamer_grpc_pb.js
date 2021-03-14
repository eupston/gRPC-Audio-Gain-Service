// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var audiostreamer_pb = require('./audiostreamer_pb.d.ts');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_audiostreamer_AudioFormat(arg) {
  if (!(arg instanceof audiostreamer_pb.AudioFormat)) {
    throw new Error('Expected argument of type audiostreamer.AudioFormat');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_audiostreamer_AudioFormat(buffer_arg) {
  return audiostreamer_pb.AudioFormat.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_audiostreamer_AudioSample(arg) {
  if (!(arg instanceof audiostreamer_pb.AudioSample)) {
    throw new Error('Expected argument of type audiostreamer.AudioSample');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_audiostreamer_AudioSample(buffer_arg) {
  return audiostreamer_pb.AudioSample.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var AudioStreamService = exports.AudioStreamService = {
  getStream: {
    path: '/audiostreamer.AudioStream/GetStream',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: audiostreamer_pb.AudioSample,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_audiostreamer_AudioSample,
    responseDeserialize: deserialize_audiostreamer_AudioSample,
  },
  audioStream: {
    path: '/audiostreamer.AudioStream/AudioStream',
    requestStream: true,
    responseStream: true,
    requestType: audiostreamer_pb.AudioSample,
    responseType: audiostreamer_pb.AudioSample,
    requestSerialize: serialize_audiostreamer_AudioSample,
    requestDeserialize: deserialize_audiostreamer_AudioSample,
    responseSerialize: serialize_audiostreamer_AudioSample,
    responseDeserialize: deserialize_audiostreamer_AudioSample,
  },
  getFormat: {
    path: '/audiostreamer.AudioStream/GetFormat',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: audiostreamer_pb.AudioFormat,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_audiostreamer_AudioFormat,
    responseDeserialize: deserialize_audiostreamer_AudioFormat,
  },
};

exports.AudioStreamClient = grpc.makeGenericClientConstructor(AudioStreamService);
