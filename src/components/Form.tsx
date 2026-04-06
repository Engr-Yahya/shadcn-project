import { useForm } from "react-hook-form"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

interface FormData {
  firstName: string
  lastName: string
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log("user Input", data)
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label className="mb-2">FirstName: </Label>
          <Input
            className="bg-white text-black"
            {...register("firstName", {
              required: true,
              minLength: {
                value: 3,
                message: "Name length must be at least 3",
              },
            })}
          />
          {errors.firstName && <p> {errors.firstName.message} </p>}
        </div>
        <br />
        <div>
          <Label className="mb-2">LastName: </Label>
          <Input
            className="bg-white text-black"
            {...register("lastName", {
              required: true,
              minLength: {
                value: 3,
                message: "Name length must be at least 3",
              },
            })}
          />
          {errors.lastName && <p> {errors.lastName.message} </p>}
        </div>
        <Button type="submit" className="mx-auto mt-4 w-fit px-6 py-2">
          Submit
        </Button>
      </form>
    </Card>
  )
}

export default Form
