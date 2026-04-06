import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
// interface FormData {
//   firstName: string
//   lastName: string
// }

const userFormSchema = z
  .object({
    firstName: z.string().min(3, "First name must be at least 3 characters"),
    lastName: z.string().min(3, "Last name must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
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
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userFormSchema),
  })

  function onSubmit(data: FormData) {
    console.log("user Input:", data)
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label className="mb-2">FirstName: </Label>
          <Input
            className={`bg-white text-black ${errors.firstName ? "border-2 border-destructive" : ""}`}
            {...register("firstName")}
          />
          {errors.firstName && <p> {errors.firstName.message} </p>}
        </div>
        <br />
        <div>
          <Label className="mb-2">LastName: </Label>
          <Input className="bg-white text-black" {...register("lastName")} />
          {errors.lastName && <p> {errors.lastName.message} </p>}
        </div>
        <br />
        <div>
          <Label className="mb-2">Email: </Label>
          <Input className="bg-white text-black" {...register("email")} />
          {errors.email && <p> {errors.email.message} </p>}
        </div>
        <br />
        <div>
          <Label className="mb-2">Password: </Label>
          <Input className="bg-white text-black" {...register("password")} />
          {errors.password && <p> {errors.password.message} </p>}
        </div>
        <br />
        <div>
          <Label className="mb-2">Confirm Password: </Label>
          <Input className="bg-white text-black" {...register("confirmPassword")} />
          {errors.confirmPassword && <p> {errors.confirmPassword.message} </p>}
        </div>
        <Button type="submit" className="mx-auto mt-4 w-fit px-6 py-2">
          Submit
        </Button>
      </form>
    </Card>
  )
}

export default Form
