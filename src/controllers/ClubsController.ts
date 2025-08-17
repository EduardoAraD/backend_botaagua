import { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../db/connection";
import { schema } from "../db/schema";
import { eq } from "drizzle-orm";

interface CreateClubBody {
  name: string;
  shortName: string;
  logo: string;
  country: string;
  stadium: string;
}

export class ClubsController {
  async createClub (request: FastifyRequest, reply: FastifyReply) {
    const { name, shortName, logo, country, stadium } = request.body as CreateClubBody;

    const result = await db.insert(schema.clubs).values({
      name,
      short_name: shortName,
      logo,
      country,
      stadium,
    }).returning();

    const insertedClub = result[0];

    if(!insertedClub) {
      throw new Error('Club could not be created');
    }

    return reply.status(201).send({ clubId: insertedClub.id });
  }

  async getAllClubs () {
    const results = await db.select({
      id: schema.clubs.id,
      name: schema.clubs.name,
      shortName: schema.clubs.short_name,
      logo: schema.clubs.logo,
      country: schema.clubs.country,
      stadium: schema.clubs.stadium,
    }).from(schema.clubs).orderBy(schema.clubs.createdAt);

    return results;
  }

  async getClubById (request: FastifyRequest) {
    const { id } = request.params as { id: string };

    const result = await db.select().from(schema.clubs).where(eq(schema.clubs.id, id))
    
    if (!result) {
      throw new Error('Club not found');
    }

    return result;
  }
}
