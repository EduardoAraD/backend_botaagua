import { pgTable, integer, uuid } from "drizzle-orm/pg-core";
import { game } from "./game";

export const stats = pgTable("stats", {
  id: uuid().primaryKey().defaultRandom(),
  gameId: uuid().references(() => game.id).notNull(),
  possessionBallHome: integer().notNull().default(0),
  possessionBallAway: integer().notNull().default(0),
  shotsHome: integer().notNull().default(0),
  shotsAway: integer().notNull().default(0),
  shotsOnTargetHome: integer().notNull().default(0),
  shotsOnTargetAway: integer().notNull().default(0),
  expectedGoalsHome: integer().notNull().default(0),
  expectedGoalsAway: integer().notNull().default(0),
  foulsHome: integer().notNull().default(0),
  foulsAway: integer().notNull().default(0),
  cornersHome: integer().notNull().default(0),
  cornersAway: integer().notNull().default(0),
  passesHome: integer().notNull().default(0),
  passesAway: integer().notNull().default(0),
});
