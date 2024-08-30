import { Link } from "react-router-dom"
import NavBar from "../components/NavBar.tsx"
import ProjectCard from "../components/ProjectCard.tsx"
import { 
  FaDiscord, 
  FaGithub,
  FaReact,
  FaPython, 
  FaLinux } 
from "react-icons/fa";
import pfp from "../assets/pfp.jpg"

function Root() {
 
  return (
    <>
      <section id="home" data-theme="dim" className="font-main2 h-screen bg-cover bg-center">
        <div className="text-center pt-5 h-full">
          <NavBar />

          <div className="transition ease-in-out hover:scale-125 avatar inline-block items-center justify-center mt-52">
            <div className="w-32 rounded-full">
              <img src={pfp} />
            </div>
          </div>

          <h1 className="h-50 font-bold text-6xl mt-5">odqnger the idiot</h1>
          <h2 className="h-50 font-medium text-2xl mt-2">i just like to code and game, thats all i do</h2>
          <Link className="transition ease-in-out hover:scale-110 text-6xl mr-6 mt-7 inline-block" to="https://discord.com/users/794023970474819585"><FaDiscord /></Link>

          <Link className="transition ease-in-out hover:scale-110 text-6xl mt-7 inline-block" to="https://github.com/oDqnger"><FaGithub /></Link>
        </div>
      </section>

      <section id="projects" data-theme="emerald" className="font-main2 content-center text-center">
        <h1 className="h-50 font-bold text-6xl mt-14 mb-14">projects ive made</h1>
        <div className="mb-14">
          <ProjectCard title="LumosUI" description="A react UI component library" link_names={["https://github.com/oDqnger/LumosUI", "https://www.npmjs.com/package/@odqnger/lumosui"]} links={["github", "npm"]} logo={<FaReact />} />

          <ProjectCard title="utilitilib" description="A python utility library" link_names={["https://github.com/oDqnger/utilitilib", "https://pypi.org/project/utilitilib/"]} links={["github", "pypi"]} logo={<FaPython />} />

          <ProjectCard title="odqnger.dev" description="My personal website" link_names={["https://github.com/oDqnger"]} links={["github"]} logo={pfp}/>
        </div>
        <div className="mb-14">
          <ProjectCard title="chat-spammer" description="An app that spams messages" link_names={["https://github.com/oDqnger/chat-spammer"]} links={["github"]} logo={<FaPython />} />

          <ProjectCard title="dotfiles" description="dotfiles for arch+hyprland" link_names={["https://github.com/oDqnger/dotfiles"]} links={["github"]} logo={<FaLinux />}/>
        </div>
      </section>

    </>
  )
}

export default Root

