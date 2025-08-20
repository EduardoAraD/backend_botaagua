import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

export const ChampionshipRoutes: FastifyPluginCallbackZod = (app) => {
  app.get('/championhips', { schema: {} }, () => {})
  
  app.get('/championhips/:id/league', { schema: {} }, () => {})

  app.get('/championhips/:id/matchs', { schema: {} }, () => {})
}
