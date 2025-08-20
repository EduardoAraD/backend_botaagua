import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

// ? RECURERA SENHA
export const UserRoutes: FastifyPluginCallbackZod = (app) => {
  app.post('/login', { schema: {} }, () => {})
  
  app.post('/register', { schema: {} }, () => {})
}
