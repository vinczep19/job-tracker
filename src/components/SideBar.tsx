import { NavLink } from 'react-router'
import {
  BuildingLibraryIcon,
  ChartBarIcon,
  BriefcaseIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid'

function Sidebar() {
  return (
    <div className="bg-neutral-300 w-40 h-screen flex flex-col justify-start items-center gap-10 pt-10 border-r-1 border-neutral-400">
      <div className="flex gap-2">
        <BuildingLibraryIcon className="size-6" />
        <NavLink to="/dashboard" className="cursor-pointer">
          Dashboard
        </NavLink>
      </div>
      <div className="flex gap-2">
        <UserCircleIcon className="size-6" />
        <NavLink to="/profile" className="cursor-pointer">
          Profile
        </NavLink>
      </div>
      <div className="flex gap-2">
        <BriefcaseIcon className="size-6" />
        <p className="cursor-pointer">Add Job</p>
      </div>
      <div className="flex gap-2">
        <ChartBarIcon className="size-6" />
        <NavLink to="/charts" className="cursor-pointer">
          Charts
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
