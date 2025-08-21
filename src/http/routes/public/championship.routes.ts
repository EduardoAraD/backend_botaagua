import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { ChampionshipController } from "../../../controllers/ChampionshipController";

const championshipController = new ChampionshipController();
export const ChampionshipRoutes: FastifyPluginCallbackZod = (app) => {
  app.get('/championhips', championshipController.getAll)
  
  app.get('/championhips/:id/league', { schema: {} }, championshipController.getLeague)

  app.get('/championhips/:id/matchs', { schema: {} }, championshipController.getMatchs)
}
