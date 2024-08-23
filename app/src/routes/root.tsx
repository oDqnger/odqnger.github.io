import NavBar from "../components/NavBar.tsx"
import pfp from "../assets/pfp.jpg"

function Root() {
 
  return (
    <>
      <section data-theme="dim" className="font-main2 h-screen bg-cover bg-center">
        <div className="pt-5 h-full">
          <NavBar />

          <div className="avatar flex items-center justify-center mt-52">
            <div className="w-32 rounded-full">
              <img src="https://cdn.discordapp.com/avatars/794023970474819585/09fbf814391e284a09fc476eb9e48b58.webp?size=80" />
            </div>
          </div>

          <h1 className="h-50 font-bold font-main2 text-white text-6xl text-center mt-5">odqnger the shitty web developer</h1>
        </div>
      </section>
      <section>

      </section>
    </>
  )
}

export default Root

