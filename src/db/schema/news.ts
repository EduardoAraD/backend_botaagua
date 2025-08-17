import { pgTable, uuid, timestamp, text } from "drizzle-orm/pg-core";

import { game } from "./game";

export const news = pgTable("news", {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  subtitle: text().notNull(),
  image: text().notNull(),
  date: timestamp().notNull(),
  slug: text().notNull(),
  gameId: uuid().references(() => game.id),
  createdAt: timestamp().notNull().defaultNow(),
});
