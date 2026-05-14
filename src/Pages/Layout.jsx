import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div>
      {/* this component is for future developments */}

      <nav></nav>

      <main> 
        <Outlet/>
      </main>

      <footer></footer>
      
    </div>
  )
}
