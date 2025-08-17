import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const clubs = pgTable('clubs', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  shortName: text().notNull(),
  logo: text().notNull(),
  stadium: text().notNull(),
  country: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
})
