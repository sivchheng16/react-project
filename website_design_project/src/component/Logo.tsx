import logo from "../../public/img/decred.png";

export default function Logo() {
  return (
    <div className="flex space-x-2 text-gray-300 text-sm items-center ">
      <img src={logo} alt="logo " className="size-6 " />
      <p>deCREAD</p>
    </div>
  );
}
