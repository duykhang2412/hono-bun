import { app } from '@packages/hono-core/server';
import { getLogger } from '@packages/common';

const port = 3050;

const server = Bun.serve({
  fetch: app.fetch,
  port,
});

getLogger().info(`Server is running on http://localhost:${port}`);
