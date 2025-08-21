import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { createClubZodSchema } from "../../typeZod/clubs";
import { ClubsController } from "../../../controllers/ClubsController";

const clubController = new ClubsController();
export const ClubsRoutes: FastifyPluginCallbackZod = (app) => {
  app.post('/clubs', { schema: createClubZodSchema }, clubController.createClub);
};
