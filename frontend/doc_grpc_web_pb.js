/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./doc_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ServerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ServerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Request,
 *   !proto.Response>}
 */
const methodDescriptor_Server_BusinessLogic = new grpc.web.MethodDescriptor(
  '/Server/BusinessLogic',
  grpc.web.MethodType.UNARY,
  proto.Request,
  proto.Response,
  /**
   * @param {!proto.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Request,
 *   !proto.Response>}
 */
const methodInfo_Server_BusinessLogic = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Response,
  /**
   * @param {!proto.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Response.deserializeBinary
);


/**
 * @param {!proto.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ServerClient.prototype.businessLogic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Server/BusinessLogic',
      request,
      metadata || {},
      methodDescriptor_Server_BusinessLogic,
      callback);
};


/**
 * @param {!proto.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Response>}
 *     Promise that resolves to the response
 */
proto.ServerPromiseClient.prototype.businessLogic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Server/BusinessLogic',
      request,
      metadata || {},
      methodDescriptor_Server_BusinessLogic);
};


module.exports = proto;

