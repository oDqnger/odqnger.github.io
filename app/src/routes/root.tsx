import { Link } from "react-router-dom"
import NavBar from "../components/NavBar.tsx"
import { FaDiscord, FaGithub } from "react-icons/fa";

function Root() {
 
  return (
    <>
      <section data-theme="dim" className="font-main2 h-screen bg-cover bg-center">
        <div className="text-center pt-5 h-full">
          <NavBar />

          <div className="avatar flex items-center justify-center mt-52">
            <div className="w-32 rounded-full">
              <img src="https://cdn.discordapp.com/avatars/794023970474819585/09fbf814391e284a09fc476eb9e48b58.webp?size=80" />
            </div>
          </div>

          <h1 className="h-50 font-bold font-main2 text-white text-6xl text-center mt-5">diman the idiot</h1>
          <Link className="transition ease-in-out hover:scale-110 text-6xl mr-6 mt-7 inline-block" to="https://discord.com/users/794023970474819585"><FaDiscord /></Link>
          <Link className="transition ease-in-out hover:scale-110 text-6xl mt-7 inline-block" to="https://github.com/oDqnger"><FaGithub /></Link>
        </div>
      </section>
      <section data-theme="dim" className="font-main2">
        <h1>Projects</h1>
      </section>
    </>
  )
}

export default Root

