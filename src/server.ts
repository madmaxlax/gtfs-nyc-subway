import { fastify as Fastify } from 'fastify';
// import fjwt, { TokenOrHeader } from 'fastify-jwt';
import bearerAuthPlugin from 'fastify-bearer-auth';
import { authCheckerFunction } from './auth';
// import { createRemoteJWKSet } from 'jose/jwks/remote';
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const keys = new Set(['key will be ignored because we are using JWKS urls'])

const fastify = Fastify();
fastify.register(bearerAuthPlugin, {keys: keys, auth: authCheckerFunction})

fastify.get('/foo', (req, reply) => {
  reply.send({authenticated: true})
})

fastify.listen({port: PORT}, (err) => {
  if (err) {
    fastify.log.error(err.message)
    process.exit(1)
  }
  fastify.log.info('listening on port '+PORT)
  console.log('listening on port '+PORT)
})
