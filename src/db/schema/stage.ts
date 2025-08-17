import { pgEnum } from "drizzle-orm/pg-core";

export const stage = pgEnum('stage', [
  'QUALIFYING',
  'GROUP_STAGE',
  'PLAYOFFS',
  'LEAGUE_STAGE',
]);
