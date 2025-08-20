import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { ClubsController } from "../../controllers/ClubsController";
import { getClubByIdZodSchema } from "../typeZod/clubs";

const clubController = new ClubsController();

export const ClubsRoutes: FastifyPluginCallbackZod = (app) => {
  app.get('/clubs', clubController.getAllClubs);

  app.get('/clubs/:id', { schema: getClubByIdZodSchema }, clubController.getClubById);
};
