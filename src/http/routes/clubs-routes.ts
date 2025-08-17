import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import z from "zod";
import { db } from "../../db/connection";
import { schema } from "../../db/schema";
import { ClubsController } from "../../controllers/ClubsController";

const clubController = new ClubsController();

export const ClubsRoutes: FastifyPluginCallbackZod = (app) => {
  app.post('/clubs', {
    schema: {
      body: z.object({
        name: z.string(),
        shortName: z.string().max(5, 'Short name must be 5 characters or less'),
        logo: z.string().url('Logo must be a valid URL'),
        country: z.string(),
        stadium: z.string(),
      })
    }
  },
  clubController.createClub);

  app.get('/clubs', clubController.getAllClubs);

  app.get('/clubs/:id', {
    schema: {
      params: z.object({
        id: z.string(),
      })
    }
  },
  clubController.getClubById);
};
