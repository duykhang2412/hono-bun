import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../proto/hello.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition) as any;

const server = new grpc.Server();

server.addService(proto.hello.HelloService.service, {
    SayHello: (call: any, callback: any) => {
        const name = call.request.name;
        callback(null, {
            ok: true,
            message: `Hello, ${name}!`,
        });
    },
    Ping: (_call: any, callback: any) => {
        callback(null, {
            message: "Hello, frontend! I'm gRPC from backend!",
        });
    },
});

export function startGrpcServer(port = 3050) {
    server.bindAsync(`0.0.0.0:${port}`, grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log(`🚀 gRPC server listening on port ${port}`);
    });
}
