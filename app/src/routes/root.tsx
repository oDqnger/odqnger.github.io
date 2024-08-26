import { Link } from "react-router-dom"
import NavBar from "../components/NavBar.tsx"
import { FaDiscord, FaGithub } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard.tsx"

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

          <h1 className="h-50 font-bold text-6xl mt-5">diman the idiot</h1>
          <Link className="transition ease-in-out hover:scale-110 text-6xl mr-6 mt-7 inline-block" to="https://discord.com/users/794023970474819585"><FaDiscord /></Link>
          <Link className="transition ease-in-out hover:scale-110 text-6xl mt-7 inline-block" to="https://github.com/oDqnger"><FaGithub /></Link>
        </div>
      </section>

      <section id="#projects" data-theme="emerald" className="font-main2 content-center text-center">
        <h1 className="h-50 font-bold text-6xl mt-14 mb-14">projects ive made</h1>
        <ProjectCard title="LumosUI" description="A react UI component library" link_names={["https://github.com/oDqnger/LumosUI", "/"]} links={["github", "pypi"]}/>
        <ProjectCard title="utilitilib" description="A python utility library" link_names={["https://github.com/oDqnger/utilitilib", "/"]} links={["github", "npm"]}/>
        <ProjectCard title="diman.dev" description="My personal website (literally what you're looking at right now.)" links={["github.com/oDqnger"]} link_names={["github"]}/>
      </section>

    </>
  )
}

export default Root

