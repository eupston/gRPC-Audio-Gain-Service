// source: audiostreamer.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.audiostreamer.AudioFormat', null, global);
goog.exportSymbol('proto.audiostreamer.AudioSample', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.audiostreamer.AudioSample = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.audiostreamer.AudioSample, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.audiostreamer.AudioSample.displayName = 'proto.audiostreamer.AudioSample';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.audiostreamer.AudioFormat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.audiostreamer.AudioFormat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.audiostreamer.AudioFormat.displayName = 'proto.audiostreamer.AudioFormat';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.audiostreamer.AudioSample.prototype.toObject = function(opt_includeInstance) {
  return proto.audiostreamer.AudioSample.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.audiostreamer.AudioSample} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audiostreamer.AudioSample.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.audiostreamer.AudioSample}
 */
proto.audiostreamer.AudioSample.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.audiostreamer.AudioSample;
  return proto.audiostreamer.AudioSample.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.audiostreamer.AudioSample} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.audiostreamer.AudioSample}
 */
proto.audiostreamer.AudioSample.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.audiostreamer.AudioSample.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.audiostreamer.AudioSample.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.audiostreamer.AudioSample} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audiostreamer.AudioSample.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string Timestamp = 1;
 * @return {string}
 */
proto.audiostreamer.AudioSample.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.audiostreamer.AudioSample} returns this
 */
proto.audiostreamer.AudioSample.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes Data = 2;
 * @return {!(string|Uint8Array)}
 */
proto.audiostreamer.AudioSample.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes Data = 2;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.audiostreamer.AudioSample.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes Data = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.audiostreamer.AudioSample.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.audiostreamer.AudioSample} returns this
 */
proto.audiostreamer.AudioSample.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.audiostreamer.AudioFormat.prototype.toObject = function(opt_includeInstance) {
  return proto.audiostreamer.AudioFormat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.audiostreamer.AudioFormat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audiostreamer.AudioFormat.toObject = function(includeInstance, msg) {
  var f, obj = {
    averagebytespersecond: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bitspersample: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blockalign: jspb.Message.getFieldWithDefault(msg, 3, 0),
    channels: jspb.Message.getFieldWithDefault(msg, 4, 0),
    extrasize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    samplerate: jspb.Message.getFieldWithDefault(msg, 6, 0),
    encoding: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.audiostreamer.AudioFormat}
 */
proto.audiostreamer.AudioFormat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.audiostreamer.AudioFormat;
  return proto.audiostreamer.AudioFormat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.audiostreamer.AudioFormat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.audiostreamer.AudioFormat}
 */
proto.audiostreamer.AudioFormat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAveragebytespersecond(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBitspersample(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBlockalign(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setChannels(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExtrasize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSamplerate(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEncoding(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.audiostreamer.AudioFormat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.audiostreamer.AudioFormat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.audiostreamer.AudioFormat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.audiostreamer.AudioFormat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAveragebytespersecond();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBitspersample();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getBlockalign();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getChannels();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getExtrasize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSamplerate();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getEncoding();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int32 AverageBytesPerSecond = 1;
 * @return {number}
 */
proto.audiostreamer.AudioFormat.prototype.getAveragebytespersecond = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.audiostreamer.AudioFormat} returns this
 */
proto.audiostreamer.AudioFormat.prototype.setAveragebytespersecond = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 BitsPerSample = 2;
 * @return {number}
 */
proto.audiostreamer.AudioFormat.prototype.getBitspersample = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.audiostreamer.AudioFormat} returns this
 */
proto.audiostreamer.AudioFormat.prototype.setBitspersample = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 BlockAlign = 3;
 * @return {number}
 */
proto.audiostreamer.AudioFormat.prototype.getBlockalign = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.audiostreamer.AudioFormat} returns this
 */
proto.audiostreamer.AudioFormat.prototype.setBlockalign = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 Channels = 4;
 * @return {number}
 */
proto.audiostreamer.AudioFormat.prototype.getChannels = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.audiostreamer.AudioFormat} returns this
 */
proto.audiostreamer.AudioFormat.prototype.setChannels = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 ExtraSize = 5;
 * @return {number}
 */
proto.audiostreamer.AudioFormat.prototype.getExtrasize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.audiostreamer.AudioFormat} returns this
 */
proto.audiostreamer.AudioFormat.prototype.setExtrasize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 SampleRate = 6;
 * @return {number}
 */
proto.audiostreamer.AudioFormat.prototype.getSamplerate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.audiostreamer.AudioFormat} returns this
 */
proto.audiostreamer.AudioFormat.prototype.setSamplerate = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string Encoding = 7;
 * @return {string}
 */
proto.audiostreamer.AudioFormat.prototype.getEncoding = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.audiostreamer.AudioFormat} returns this
 */
proto.audiostreamer.AudioFormat.prototype.setEncoding = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


goog.object.extend(exports, proto.audiostreamer);
