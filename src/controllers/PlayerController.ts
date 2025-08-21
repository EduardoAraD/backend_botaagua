import { FastifyReply, FastifyRequest } from "fastify";
import { eq } from "drizzle-orm";

import { CreatePlayerBody, PlayerIdParams, UpdatePlayerBody } from "../http/typeZod/player";
import { db } from "../db/connection";
import { schema } from "../db/schema";

export class PlayerController {
  async createPlayer(request: FastifyRequest, reply: FastifyReply) {
    const {
      name, number, age, country, foot, height, image, overrall, position, weight,
    } = request.body as CreatePlayerBody;

    const result = await db.insert(schema.players).values({
      age,
      country,
      foot,
      height,
      image,
      name,
      number,
      overrall,
      position,
      weight,
    }).returning();

    const insertedPlayer = result[0];

    if(!insertedPlayer) {
      throw new Error('Player could not be created');
    }

    return reply.send({ playerId: insertedPlayer.id });
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as PlayerIdParams;
    const data = request.body as UpdatePlayerBody;

    const result = await db.update(schema.players).set(data).where(eq(schema.players.id, id)).returning();

    const updatePlayer = result[0];

    if(!updatePlayer) {
      throw new Error('Player could not be updated');
    }

    return reply.send({ playerId: updatePlayer.id });
  }

  async getAllPlayers(request: FastifyRequest, reply: FastifyReply) {
    const result = await db.select({
      name: schema.players.name,
      image: schema.players.image,
      position: schema.players.position,
      overrall: schema.players.overrall,
      number: schema.players.number,
      age: schema.players.age,
      height: schema.players.height,
      weight: schema.players.weight,
      foot: schema.players.foot,
      country: schema.players.country,
    }).from(schema.players).where(eq(schema.players.active, true)).orderBy(schema.players.createdAt);

    return result;
  }
}
