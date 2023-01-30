import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-around h-20 items-center text-white text-3xl">
        <NavLink className={({isActive}) => isActive ? "font-bold" : "font-thin"} to="/">Home</NavLink>
        <NavLink className={({isActive}) => isActive ? "font-bold" : "font-thin"} to="/bookmark">Bookmarks</NavLink>
    </div>
  )
}

export default Navbar