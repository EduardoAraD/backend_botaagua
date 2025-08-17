import { pgEnum } from "drizzle-orm/pg-core";

export const round = pgEnum('round', [
  "FINAL",
  "THIRD_PLACE",
  "SEMIFINAL",
  "QUARTERFINAL",
  "ROUND_OF_16",
  "ROUNDS_OF_32",
  "ROUNDS_NUMBER",
]);
