"use server";

import { z } from "zod";

const emailValidation = (email: string) => {
  return email.endsWith("@zod.com");
};

const PASSWORD_REGEX = new RegExp(/\d/);

const passwordValidation = (password: string) => {
  const errors = [];
  console.log("password", password);
  if (password.length < 10) {
    return true;
  }
  if (!/\d/.test(password)) {
    return true;
  }
  return false;
};

const formSchema = z.object({
  username: z.string().min(5, "Username should be at least 5 characters long."),
  email: z.string().email().refine(emailValidation, {
    message: "Only @zod.com emails are allowed",
  }),
  password: z
    .string()
    .min(10, "Password should be at least 10 characters long.")
    .regex(
      PASSWORD_REGEX,
      "Password should contain at least one number (0123456789)."
    ),
});

export async function handleForm(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const result = formSchema.safeParse(data);
  if (!result.success) {
    return { success: false, error: result.error.flatten() };
  }
  return { success: true, data: result.data };
}
