import { pgEnum } from "drizzle-orm/pg-core";

export const typeEvent = pgEnum('type-event', [
  "GOAL",
  "ASSIST",
  "YELLOW_CARD",
  "RED_CARD",
  "PENALTY"
]);
