const { Request } = require('./doc_pb')
const { ServerClient } = require('./doc_grpc_web_pb')

const client = new ServerClient('http://localhost:80')
const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
enableDevTools([
  client,
]);

sendMessage = () => {
  client.businessLogic(new Request(1,2,"Roberto"), {}, (err, response) => {
    console.log(err)
    console.log(String(response))
  })
}