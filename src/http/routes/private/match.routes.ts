import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const MatchsRoutes: FastifyPluginCallbackZod = (app) => {
  app.post('/match', { schema: {} }, () => {})
}
