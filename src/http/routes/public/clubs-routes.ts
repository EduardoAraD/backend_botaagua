import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { getClubByIdZodSchema } from "../../typeZod/clubs";
import { ClubsController } from "../../../controllers/ClubsController";

const clubController = new ClubsController();

export const ClubsRoutes: FastifyPluginCallbackZod = (app) => {
  app.get('/clubs', clubController.getAllClubs);

  app.get('/clubs/:id', { schema: getClubByIdZodSchema }, clubController.getClubById);
};
