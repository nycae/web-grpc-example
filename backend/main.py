import grpc
import doc_pb2
import doc_pb2_grpc

from concurrent import futures


class ServiceServicerI(doc_pb2_grpc.ServerServicer):
    def BusinessLogic(self, request, context):
        numeric_result = request.number_one + request.number_two
        string_result = f"Hello, {request.message}"

        return doc_pb2.Response(result=numeric_result, response_message=string_result)


if __name__ == '__main__':
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=3))
    doc_pb2_grpc.add_ServerServicer_to_server(ServiceServicerI(), server)
    server.add_insecure_port('localhost:50051')
    server.start()
    server.wait_for_termination()