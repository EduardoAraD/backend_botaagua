import { pgTable, uuid, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const players = pgTable('players', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  image: text(),
  position: text().notNull(),
  overrall: integer().notNull(),
  number: integer().notNull(),
  age: integer().notNull(),
  height: text().notNull(),
  weight: text().notNull(),
  foot: text().notNull(),
  country: text().notNull(),
  active: boolean().notNull().default(true),
  createdAt: timestamp().notNull().defaultNow(),
});
