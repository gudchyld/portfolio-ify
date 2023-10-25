import * as z from "zod";

export const contactFormSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;