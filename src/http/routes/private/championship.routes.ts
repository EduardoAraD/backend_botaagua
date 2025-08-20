import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const ChampionshipRoutes: FastifyPluginCallbackZod = (app) => {
  app.post('/championship', { schema: {} }, () => {})
}
