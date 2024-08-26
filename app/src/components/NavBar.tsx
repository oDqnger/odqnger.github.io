import { Link } from "react-router-dom"

function NavBar(props: any) {
  return (
    <>
      <div data-theme="dim" className={props.className + " mr-52 ml-52 rounded-full navbar-center bg-base-100"}>
        <Link to="/" className="btn btn-ghost text-base pr-5 font-main2">Home</Link>
        <Link to="/" className="btn btn-ghost text-base pr-5 font-main2">Projects</Link>
        <Link to="/" className="btn btn-ghost text-base pr-5 font-main2">Skills</Link>
        <Link to="/" className="btn btn-ghost text-base pr-5 font-main2">Contact Me</Link>
      </div>
    </>
  )
}

export default NavBar
