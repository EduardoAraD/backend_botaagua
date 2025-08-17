import { pgTable, integer, uuid, timestamp, text } from "drizzle-orm/pg-core";

import { championship } from "./championship";
import { clubs } from "./clubs";
import { stage } from "./stage";
import { round } from "./round";

export const game = pgTable("game", {
  id: uuid().primaryKey().defaultRandom(),
  championshipId: uuid().references(() => championship.id).notNull(),
  stage: stage("stage").notNull(),
  round: round("round").notNull(),
  numberRound: integer().default(0),
  date: timestamp().notNull(),
  video: text().notNull(),
  homeClubId: uuid().references(() => clubs.id).notNull(),
  awayClubId: uuid().references(() => clubs.id).notNull(),
});
