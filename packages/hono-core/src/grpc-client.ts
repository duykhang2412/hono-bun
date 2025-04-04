import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.join(__dirname, '../proto/hello.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition) as any;

const client = new proto.hello.HelloService(
    'localhost:3000',
    grpc.credentials.createInsecure(),
);

export function sayHello(name: string): Promise<any> {
    return new Promise((resolve, reject) => {
        client.SayHello({ name }, (err: any, response: any) => {
            if (err) return reject(err);
            resolve(response);
        });
    });
}

export function ping(): Promise<any> {
    return new Promise((resolve, reject) => {
        client.Ping({}, (err: any, response: any) => {
            if (err) return reject(err);
            resolve(response);
        });
    });
}
