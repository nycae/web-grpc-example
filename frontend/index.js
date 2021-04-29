const { Request } = require('./doc_pb')
const { ServerClient } = require('./doc_grpc_web_pb.js')

const client = new ServerClient("http://localhost:50051")
const request = new Request()
request.setNumberOne(1)
request.setNumberTwo(2)
request.setMessage("Roberto")

sendMessage = () => {
  client.businessLogic(request, null, (err, response) => {
    console.log(err)
    console.log(response)
  })
}