import { NavLink } from 'react-router'

function Header() {
  return (
    <div className="flex justify-between items-center px-4 h-20 bg-neutral-300 shadow-zinc-600 border-b-1 border-neutral-400">
      <h2>Job Tracker App</h2>
      <NavLink to="/" className="bg-blue-500 text-white px-2 w-auto rounded ">
        Logout
      </NavLink>
    </div>
  )
}

export default Header
