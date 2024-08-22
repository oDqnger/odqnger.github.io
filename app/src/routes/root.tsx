import NavBar from "../components/NavBar.tsx"

function Root() {
 
  return (
    <>
      <section className="font-main h-screen bg-cover bg-center">
        <div className="pt-5 bg-gradient-to-r from-zinc-500 to-zinc-700 h-full">
          <NavBar className="bg-zinc-500 border-zinc-500"/>
          <h1 className="h-50 font-bold text-main2 text-white text-2xl text-center mt-5">Diman</h1>
        </div>
      </section>
      <section>
      </section>
    </>
  )
}

export default Root

