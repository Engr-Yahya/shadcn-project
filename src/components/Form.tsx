import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const userFormSchema = z
  .object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    lastName: z.string().min(3, "Last name must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    newsLetter: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type FormData = z.infer<typeof userFormSchema>

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userFormSchema),
  })

  function onSubmit(data: FormData) {
    console.log("user Input:", data)
    reset()
  }

  return (
    <Card className="mx-auto w-full max-w-md rounded-2xl border p-8 shadow-xl">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Create Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* First Name */}
        <div className="space-y-2">
          <Label className={errors.firstName ? "text-destructive" : ""}>
            First Name
          </Label>
          <Input
            placeholder="Enter your first name"
            className={`rounded bg-background ${
              errors.firstName
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }`}
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-sm text-destructive">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label className={errors.lastName ? "text-destructive" : ""}>
            Last Name
          </Label>
          <Input
            placeholder="Enter your last name"
            className={`rounded bg-background ${
              errors.lastName
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }`}
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-sm text-destructive">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label className={errors.email ? "text-destructive" : ""}>
            Email
          </Label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            className={`rounded bg-background ${
              errors.email
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label className={errors.password ? "text-destructive" : ""}>
            Password
          </Label>
          <Input
            type="password"
            placeholder="••••••••"
            className={`rounded bg-background ${
              errors.password
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }`}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label className={errors.confirmPassword ? "text-destructive" : ""}>
            Confirm Password
          </Label>
          <Input
            type="password"
            placeholder="Re-enter password"
            className={`rounded bg-background ${
              errors.confirmPassword
                ? "border-destructive focus-visible:ring-destructive"
                : ""
            }`}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-sm text-destructive">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Newsletter */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 accent-primary"
            {...register("newsLetter")}
          />
          <Label className="text-sm">Subscribe to newsletter</Label>
        </div>

        {/* Submit */}
        <Button
          variant="secondary"
          type="submit"
          className="mt-2 w-full text-base font-medium"
        >
          Create Account
        </Button>
      </form>
    </Card>
  )
}

export default Form
