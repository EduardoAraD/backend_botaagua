import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const NewsRoutes: FastifyPluginCallbackZod = (app) => {
  app.post('/news', { schema: {} }, () => {})

  app.put('/news/:id', { schema: {} }, () => {})

  app.delete('/news/:id', { schema: {} }, () => {})
}
