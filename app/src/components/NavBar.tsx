import { TabNav } from "@radix-ui/themes"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <>
      <div className="mt-5 mr-52 ml-52 mb-5">
        <TabNav.Root className="border rounded-full m-5" wrap="nowrap" justify="center" size="2">
          <TabNav.Link><Link to="/" className="no-underline font-main font-medium text-base">Home</Link></TabNav.Link>   
          <TabNav.Link><Link to="/test-page" className="no-underline font-main font-medium text-base">Projects</Link></TabNav.Link>  
          <TabNav.Link><Link to="/" className="no-underline font-main font-medium text-base">Skills</Link></TabNav.Link>  
          <TabNav.Link><Link to="/" className="no-underline font-main font-medium text-base">Contact Me</Link></TabNav.Link>  
        </TabNav.Root>
      </div>
    </>
  )
}

export default NavBar
