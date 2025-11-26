import { Link } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
export default function Header() {
  return (
    <div className="w-full m-auto justify-center items-center  bg-teal-500/2 fixed z-100 backdrop-blur-lg">
      <div className="bg-transparent max-w-[1080px] m-auto">
        <div className="container m-auto flex justify-between space-x-30 items-center ">
          <Logo />
          <nav className="space-x-10 text-md text-gray-300">
            <Link
              to="/"
              className="h-full text-center leading-15 text-teal-300"
            >
              Home
            </Link>
            <Link to="/decred">Decred</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/press">Press</Link>
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
