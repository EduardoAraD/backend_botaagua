CREATE TYPE "public"."round" AS ENUM('FINAL', 'THIRD_PLACE', 'SEMIFINAL', 'QUARTERFINAL', 'ROUND_OF_16', 'ROUNDS_OF_32', 'ROUNDS_NUMBER');--> statement-breakpoint
CREATE TYPE "public"."stage" AS ENUM('QUALIFYING', 'GROUP_STAGE', 'PLAYOFFS', 'LEAGUE_STAGE');--> statement-breakpoint
CREATE TYPE "public"."type-content" AS ENUM('PARAGRAPH', 'IMAGE', 'TITLE');--> statement-breakpoint
CREATE TYPE "public"."type-event" AS ENUM('GOAL', 'ASSIST', 'YELLOW_CARD', 'RED_CARD', 'PENALTY');--> statement-breakpoint
CREATE TABLE "championship" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"season" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "clubs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"short_name" text NOT NULL,
	"logo" text NOT NULL,
	"stadium" text NOT NULL,
	"country" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"news_id" uuid NOT NULL,
	"type_content" "type-content" NOT NULL,
	"description" text NOT NULL,
	"order" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "event" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"game_id" uuid NOT NULL,
	"type-event" "type-event" NOT NULL,
	"player_id" uuid,
	"minute" integer NOT NULL,
	"additional_minute" integer DEFAULT 0,
	"name_player" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "game" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"championship_id" uuid NOT NULL,
	"stage" "stage" NOT NULL,
	"round" "round" NOT NULL,
	"number_round" integer DEFAULT 0,
	"date" timestamp NOT NULL,
	"video" text NOT NULL,
	"home_club_id" uuid NOT NULL,
	"away_club_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "news" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"subtitle" text NOT NULL,
	"image" text NOT NULL,
	"date" timestamp NOT NULL,
	"slug" text NOT NULL,
	"game_id" uuid,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "players" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"image" text,
	"position" text NOT NULL,
	"overrall" integer NOT NULL,
	"number" integer NOT NULL,
	"age" integer NOT NULL,
	"height" text NOT NULL,
	"weight" text NOT NULL,
	"foot" text NOT NULL,
	"country" text NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "stats" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"game_id" uuid NOT NULL,
	"possession_ball_home" integer DEFAULT 0 NOT NULL,
	"possession_ball_away" integer DEFAULT 0 NOT NULL,
	"shots_home" integer DEFAULT 0 NOT NULL,
	"shots_away" integer DEFAULT 0 NOT NULL,
	"shots_on_target_home" integer DEFAULT 0 NOT NULL,
	"shots_on_target_away" integer DEFAULT 0 NOT NULL,
	"expected_goals_home" integer DEFAULT 0 NOT NULL,
	"expected_goals_away" integer DEFAULT 0 NOT NULL,
	"fouls_home" integer DEFAULT 0 NOT NULL,
	"fouls_away" integer DEFAULT 0 NOT NULL,
	"corners_home" integer DEFAULT 0 NOT NULL,
	"corners_away" integer DEFAULT 0 NOT NULL,
	"passes_home" integer DEFAULT 0 NOT NULL,
	"passes_away" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"nickname" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_nickname_unique" UNIQUE("nickname")
);
--> statement-breakpoint
ALTER TABLE "content" ADD CONSTRAINT "content_news_id_news_id_fk" FOREIGN KEY ("news_id") REFERENCES "public"."news"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event" ADD CONSTRAINT "event_game_id_game_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."game"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "event" ADD CONSTRAINT "event_player_id_players_id_fk" FOREIGN KEY ("player_id") REFERENCES "public"."players"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "game" ADD CONSTRAINT "game_championship_id_championship_id_fk" FOREIGN KEY ("championship_id") REFERENCES "public"."championship"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "game" ADD CONSTRAINT "game_home_club_id_clubs_id_fk" FOREIGN KEY ("home_club_id") REFERENCES "public"."clubs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "game" ADD CONSTRAINT "game_away_club_id_clubs_id_fk" FOREIGN KEY ("away_club_id") REFERENCES "public"."clubs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "news" ADD CONSTRAINT "news_game_id_game_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."game"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stats" ADD CONSTRAINT "stats_game_id_game_id_fk" FOREIGN KEY ("game_id") REFERENCES "public"."game"("id") ON DELETE no action ON UPDATE no action;