import { Button } from "../components/ui/button.tsx"

function Root() {
  return (
    <>
      <div className="bg-zinc-500">
        <h1 className="text-red-300">HEllo World!</h1>
        <Button onClick={() => {
          console.log("HEllo WOrld!")
        }} variant="destructive">Hello World</Button>
      </div>
    </>
  )
}

export default Root

