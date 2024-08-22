import { TabNav } from "@radix-ui/themes"
import { Link } from "react-router-dom"

function NavBar(props: any) {
  return (
    <>
      <div className="mr-72 ml-72">
      <TabNav.Root className={props.className + " border rounded-full m-5"} wrap="wrap" justify="center" size="2">
        <TabNav.Link><Link to="/" className="no-underline font-main font-medium text-lg">Home</Link></TabNav.Link>   
        <TabNav.Link><Link to="/test-page" className="no-underline font-main font-medium text-lg">Projects</Link></TabNav.Link>  
        <TabNav.Link><Link to="/" className="no-underline font-main font-medium text-lg">Skills</Link></TabNav.Link>  
        <TabNav.Link><Link to="/" className="no-underline font-main font-medium text-lg">Contact Me</Link></TabNav.Link>  
      </TabNav.Root> 
      </div>
    </>
  )
}

export default NavBar
