import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const PlayersRoutes: FastifyPluginCallbackZod = (app) => {
  app.get('/players', { schema: {} }, () => {})
}