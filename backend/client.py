import grpc
import doc_pb2
import doc_pb2_grpc

channel = grpc.insecure_channel("localhost:80")
stub = doc_pb2_grpc.ServerStub(channel)

print(stub.BusinessLogic(doc_pb2.Request(number_one=1, number_two=2, message="Roberto")))