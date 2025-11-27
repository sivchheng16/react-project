import { Link } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
export default function Header() {
  return (
    <div className="w-full m-auto justify-center items-center  bg-teal-500/2 fixed z-100 backdrop-blur-lg">
      <div className="bg-transparent max-w-[1700px] m-auto">
        <div className="container m-auto flex justify-between space-x-30 items-center ">
          <Logo />
          <nav className="space-x-10 text-md text-gray-300 nav">
            <Link
              to="/"
              className="h-full text-center leading-15 text-teal-300 navLink"
            >
              Home
            </Link>
            <Link to="/about" className="navLink">
              About
            </Link>
            <Link to="/insights" className="navLink">
              Insights
            </Link>
            <Link to="/resources" className="navLink">
              Resources
            </Link>
            <Link to="/press" className="navLink">
              Press
            </Link>
          </nav>
          <div>
            <a href="#" target="_blank">
              <Button title="Get Start" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
