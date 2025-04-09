import { startGrpcServer } from '../../../packages/hono-core/src/grpc-server.js';
import { startHttpServer } from '../../../packages/hono-core/src/http-server.js';

// Khởi chạy gRPC server
startGrpcServer();

// Khởi chạy HTTP server
startHttpServer();
