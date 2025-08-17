import { pgTable, uuid, integer, text } from "drizzle-orm/pg-core";

import { typeContent } from "./typeContent";
import { news } from "./news";

export const content = pgTable("content", {
  id: uuid().primaryKey().defaultRandom(),
  newsId: uuid().references(() => news.id).notNull(),
  type: typeContent('type_content').notNull(),
  description: text().notNull(),
  order: integer().notNull(),
});
