import Form from "./components/Form"
import "./index.css"
export function App() {
  return (
    <div className="mt-20 flex justify-center items-center h-full">
      <Form />
    </div>

    // <div className="flex min-h-svh p-6">
    //   <div className="flex w-full max-w-full min-w-0 flex-col items-center justify-center gap-4 text-sm leading-loose">
    //     <Card className="px-8 py-8 rounded-xl">
    //       <h1 className="font-medium">Project ready!</h1>
    //       <p>You may now add components and start building.</p>
    //       <p>We&apos;ve already added the button component for you.</p>
    //       <div className="flex gap-2">
    //         <Button className="">Button</Button>
    //         <Button variant="destructive" className="">Delete</Button>
    //       </div>
    //     </Card>
    //     <div className="font-mono text-xs text-muted-foreground">
    //       (Press <kbd>d</kbd> to toggle dark mode)
    //     </div>
    //   </div>
    // </div>
  )
}

export default App
