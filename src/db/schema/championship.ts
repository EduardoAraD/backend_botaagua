import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const championship = pgTable("championship", {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  season: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});
