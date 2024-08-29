import { Link } from "react-router-dom"
import { FaReact } from "react-icons/fa";

interface ProjectCardProps {
  title: string,
  description: string,
  link_names: Array<string>,
  links: Array<string>,
  logo: any,
}

export default function ProjectCard(props: ProjectCardProps) {
  
  const {
    title,
    description,
    links,
    link_names,
    logo,
    ...other
  } = props;

  let project_buttons: any = []

  links.forEach((link, index) => {
    project_buttons.push(<button className="btn btn-primary mr-2"><Link to={link_names[index]}>{links[index]}</Link></button>)
  })

  return (
    <> 
      <div {...other} className="inline-block bg-zinc-200 mx-auto card shadow-xl w-80 mr-11">
        <div className="card-body">
          <h2 className="card-title text-2xl text-black">{title} {logo}</h2>
          <h5 className="card-title font-normal text-base text-slate-800">{description}</h5>
          <div className="card-actions justify-start mt-3">
            <ul>{project_buttons}</ul>
          </div>
        </div>
      </div>
    </>
  )
}
