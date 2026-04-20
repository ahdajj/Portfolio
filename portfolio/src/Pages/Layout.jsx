import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import Menu from "../Components/Menu"

export default function Layout() {
  return (
    <div>
      <nav>
        <Menu/>
      </nav>
      <main> 
        <Outlet/>
      </main>
      <footer>
        
      </footer>
    </div>
  )
}
