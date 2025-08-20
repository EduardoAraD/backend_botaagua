import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const NewsRoutes: FastifyPluginCallbackZod = (app) => {
  app.get('/news', { schema: {} }, () => {})

  app.get('/news/:id', { schema:{} }, () => {})
}
