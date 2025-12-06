import { NavLink } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
import { Menu } from "lucide-react";
export default function Header() {
  return (
    <div className="w-full m-auto justify-center items-center  bg-teal-500/2 fixed z-100 backdrop-blur-lg">
      <div className="bg-transparent max-w-[1700px] m-auto">
        <div className="container m-auto flex justify-between gap-4 md:gap-8 lg:gap-16 items-center p-3">
          <Logo />
          <nav className="space-x-10 text-md text-gray-300 nav hidden md:block">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-300 navlink"
                  : "text-gray-200 navlink hover:text-teal-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-300 navlink"
                  : "text-gray-200 navlink hover:text-teal-200"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/insights"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-300 navlink"
                  : "text-gray-200 navlink hover:text-teal-200"
              }
            >
              Insights
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-300 navlink"
                  : "text-gray-200 navlink hover:text-teal-200"
              }
            >
              Resources
            </NavLink>
            <NavLink
              to="/press"
              className={({ isActive }) =>
                isActive
                  ? "text-teal-300 navlink"
                  : "text-gray-200 navlink hover:text-teal-200"
              }
            >
              Press
            </NavLink>
          </nav>
          <a href="#" target="_blank" className="hidden md:block">
            <Button title="Get Start" />
          </a>
          {/* Mobile Menu */}
          <Menu className="block md:hidden text-gray-100 " />
        </div>
      </div>
    </div>
  );
}
