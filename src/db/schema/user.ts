import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  nickname: text().notNull().unique(),
  password: text().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
});
