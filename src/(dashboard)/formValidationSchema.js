import { z } from "zod";

export const subjectSchema = z.object({
  name: z.string().min(3, { message: "Subject name is required" }),
  // level: z.string().min(3, { message: "Level is required" }),
});
