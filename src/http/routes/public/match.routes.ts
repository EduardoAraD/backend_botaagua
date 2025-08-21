import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { MatchController } from "../../../controllers/MatchController";

const matchController = new MatchController();
export const MatchsRoutes: FastifyPluginCallbackZod = (app) => {
  app.get('/match/:id', { schema: {} }, matchController.getById)
}
