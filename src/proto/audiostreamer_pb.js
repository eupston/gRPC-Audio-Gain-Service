// source: audiostreamer.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
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
    data: msg.getData_asB64(),
    gainamt: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setGainamt(value);
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
  f = message.getGainamt();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
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


/**
 * optional float GainAmt = 3;
 * @return {number}
 */
proto.audiostreamer.AudioSample.prototype.getGainamt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.audiostreamer.AudioSample} returns this
 */
proto.audiostreamer.AudioSample.prototype.setGainamt = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


goog.object.extend(exports, proto.audiostreamer);
