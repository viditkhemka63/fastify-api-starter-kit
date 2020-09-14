import fastify from "fastify";
import router from "./router";
import helmet from 'fastify-helmet';

const server = fastify({
  logger: !!(process.env.NODE_ENV !== "development"),
});

/**
 * Helmet helps to secure Fastify apps by setting various HTTP headers.
 */
server.register(helmet)

// Middleware: Router
server.register(router);

export default server;
