"use server";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState);
  console.log(formData);

  const password = formData.get("password");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (password === "12345") {
    return {
      success: true,
    };
  } else {
    return {
      errors: ["wrong password"],
    };
  }
}
