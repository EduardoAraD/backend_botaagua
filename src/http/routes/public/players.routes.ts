import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { PlayerController } from "../../../controllers/PlayerController";

const playerController = new PlayerController();
export const PlayersRoutes: FastifyPluginCallbackZod = (app) => {
  app.get('/players', playerController.getAllPlayers)
}
