import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { ChampionshipController } from "../../../controllers/ChampionshipController";

const championshipController = new ChampionshipController();
export const ChampionshipRoutes: FastifyPluginCallbackZod = (app) => {
  app.post('/championship', { schema: {} }, championshipController.create)
}
