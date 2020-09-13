import { FastifyInstance } from "fastify";
import indexRouter from './routes/index';
  
var router = async (fastify: FastifyInstance) => {
  
  fastify.register(indexRouter, { prefix: "/" });
}

export default router;