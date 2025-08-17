import { pgEnum } from "drizzle-orm/pg-core";

export const typeContent = pgEnum('type-content', [
  "PARAGRAPH",
  "IMAGE",
  "TITLE",
]);
