"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_server_1 = require("@hono/node-server");
var common_1 = require("@packages/common");
var server_1 = require("@packages/hono-core/server");
(0, node_server_1.serve)({
    fetch: server_1.app.fetch,
    port: 3030,
}, function (info) {
    (0, common_1.getLogger)().info("Server is running on http://localhost:".concat(info.port));
});
