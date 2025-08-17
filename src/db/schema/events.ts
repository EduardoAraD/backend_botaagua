import { pgTable, integer, uuid, text } from "drizzle-orm/pg-core";
import { game } from "./game";
import { typeEvent } from "./typeEvent";
import { players } from "./players";

export const event = pgTable("event", {
  id: uuid().primaryKey().defaultRandom(),
  gameId: uuid().references(() => game.id).notNull(),
  type: typeEvent('type-event').notNull(),
  playerId: uuid().references(() => players.id),
  minute: integer().notNull(), // -1 para eventos que ocorrem fora do tempo normal
  additionalMinute: integer().default(0), // Minuto adicional, se aplicável
  name_player: text().notNull(),
});
