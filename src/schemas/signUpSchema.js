import {
  email,
  forward,
  minLength,
  nonEmpty,
  object,
  pipe,
  string,
  trim,
  partialCheck,
} from "valibot";

const signUpSchema = pipe(
  object({
    email: pipe(
      string(),
      trim(),
      nonEmpty("Please enter your email"),
      email("The email address is badly formatted."),
    ),
    password: pipe(
      string(),
      minLength(8, "Your password must have 8 characters or more"),
    ),
    confirmPassword: pipe(string(), minLength(1, "Please enter your password")),
  }),
  forward(
    partialCheck(
      [["password"], ["confirmPassword"]],
      (input) => input.password === input.confirmPassword,
      "Passwords must match",
    ),
    ["confirmPassword"],
  ),
);

export default signUpSchema;
