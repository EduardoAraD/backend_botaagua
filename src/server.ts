import fastifyCors from '@fastify/cors';
import { fastify } from 'fastify';
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';
import { env } from './env'
import { ClubsRoutes } from './http/routes/clubs-routes';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, { origin: '*' });

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
  return 'OK'
})

app.register(ClubsRoutes);

app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP server running on http://localhost:${env.PORT}`);
});
