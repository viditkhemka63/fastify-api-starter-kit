import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

var indexRouter = async (fastify: FastifyInstance) => {
 
    // GET /
  fastify.get("/", async (_request: FastifyRequest, reply: FastifyReply) => {

    console.log(_request)
    reply.send({'message': 'Hello World'})
  });
}


export default indexRouter