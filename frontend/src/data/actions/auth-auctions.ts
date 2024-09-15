"use server";
import { z } from "zod";

const registerSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Username must be atleast 3 characters",
    })
    .max(20, {
      message: "Username must be between 3 and 20 characters",
    }),
  password: z
    .string()
    .min(6, { message: "Password must contain at least 6 characters" })
    .max(100, {
      message: "Password must be between 6 and 100 characters",
    }),
  email: z.string().email({
    message: "Please enter valid email address",
  }),
});

export async function registerUserActions(prevState: any, formData: FormData) {
  console.log("Hello From Register User Action");

  const validatedFields = registerSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErros: null,
      message: "Missing Fields. Failed to Register.",
    };
  }
  return {
    ...prevState,
    data: "ok",
  };
}
