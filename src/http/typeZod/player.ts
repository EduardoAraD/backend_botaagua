import z from "zod";

export const CreatePlayerZodSchema = {
  body: z.object({
    name: z.string(),
    image: z.string().url(),
    position: z.string(),
    overrall: z.number(),
    number: z.number().max(2, 'Number must be 2 characters or less'),
    age: z.number(),
    height: z.string(),
    weight: z.string(),
    foot: z.string().max(1, 'Options L ou R'),
    country: z.string(),
  })
}
export type CreatePlayerBody = z.infer<typeof CreatePlayerZodSchema.body>;

export const UpdatePlayerZodSchema = {
  params: z.object({
    id: z.string(),
  }),
  body: CreatePlayerZodSchema.body.partial(),
};
export type UpdatePlayerBody = z.infer<typeof UpdatePlayerZodSchema.body>;

export type PlayerIdParams = z.infer<typeof UpdatePlayerZodSchema.params>;
