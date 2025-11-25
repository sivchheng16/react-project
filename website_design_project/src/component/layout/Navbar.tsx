import { Link } from "react-router-dom";
import logo from "../../../public/decred.png";
import Button from "../Button";
export default function Header() {
  return (
    <div className="w-full m-auto justify-center items-center  bg-teal-500/2 ">
      <div className="bg-transparent max-w-[1080px] m-auto">
        <div className="container m-auto flex justify-between space-x-30 items-center backdrop-blur-lg">
          <div className="flex space-x-2 text-gray-300 text-sm items-center ">
            <img src={logo} alt="logo " className="size-6 " />
            <p>deCREAD</p>
          </div>
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
