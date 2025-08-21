import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { CreatePlayerZodSchema, UpdatePlayerZodSchema } from "../../typeZod/player";
import { PlayerController } from "../../../controllers/PlayerController";

const playerController = new PlayerController();
export const PlayersRoutes: FastifyPluginCallbackZod = (app) => {
  app.post('/player', { schema: CreatePlayerZodSchema }, playerController.createPlayer)

  app.put('/players/:id', { schema: UpdatePlayerZodSchema }, playerController.update)
}
