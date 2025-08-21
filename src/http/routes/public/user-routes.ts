import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";

import { UserController } from "../../../controllers/UserController";

// ? RECURERA SENHA
const userController = new UserController();
export const UserRoutes: FastifyPluginCallbackZod = (app) => {
  app.post('/login', { schema: {} }, userController.login)
  
  app.post('/register', { schema: {} }, userController.register)
}
