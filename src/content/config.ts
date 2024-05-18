import { defineCollection, z } from "astro:content";
const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    description: z.string().optional(),
    featured:z.boolean().optional(),
    technologies: z.array(z.string()).optional(),
    footnote: z.string().optional(),
    projectLink: z.string().optional(),
  }),
});
export const collections = {
  posts: posts,
};
