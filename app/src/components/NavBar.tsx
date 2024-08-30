function NavBar(props: any) {
  return (
    <>
      <div data-theme="dim" className={props.className + " mr-52 ml-52 rounded-full navbar-center bg-base-100"}>
        <a href="#home" className="btn btn-ghost text-base pr-5 font-main2">home</a>
        <a href="#projects" className="btn btn-ghost text-base pr-5 font-main2">projects</a>
      </div>
    </>
  )
}

export default NavBar
