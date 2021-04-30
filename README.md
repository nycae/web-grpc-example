Web gRPC example
================

Backend
-------

```console
$ python -m grpc_tools.protoc -I.. --python_out=. --grpc_python_out=. doc.proto
```

Frontend
--------
```console
$ protoc -I../ --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. doc.proto
```