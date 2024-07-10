
import { z } from 'zod';



export const SignInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(3 , { message: "Password must be at least 3 characters long" }),
});
