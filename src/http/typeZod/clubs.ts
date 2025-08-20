import z from "zod";

export const createClubZodSchema = {
  body: z.object({
    name: z.string(),
    shortName: z.string().max(5, 'Short name must be 5 characters or less'),
    logo: z.string().url('Logo must be a valid URL'),
    country: z.string(),
    stadium: z.string(),
  })
}
export type CreateClubBody = z.infer<typeof createClubZodSchema.body>;

export const getClubByIdZodSchema = {
  params: z.object({
    id: z.string(),
  })
}
export type GetClubsByIdParams = z.infer<typeof getClubByIdZodSchema.params>;
