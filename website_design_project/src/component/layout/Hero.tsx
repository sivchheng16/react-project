import { Play } from "lucide-react";
import Button from "../Button";
import img1 from "../../../public/img/brand-blockchain.png";
export default function Hero() {
  return (
    <>
      <section className=" container m-auto grid grid-cols-2 items-center justify-center space-x-5 text-gray-300 pt-30 ">
        <div className="space-y-4">
          <div className="leading-7">
            <h1 className="text-5xl items-center leading-13">
              <span className=" text-5xl md;text-6xl lg:text-7xl font-bold ">
                {" "}
                Community{" "}
              </span>
              Directed Superior Store of{" "}
              <span className="text-teal-500">Value</span>
            </h1>
            <p className="leading-7 text-gray-300">
              Decred employs an innovative hybrid Proof-<br></br>
              of-Work/Proof-of-Stake system.
            </p>
          </div>
          <div className="flex space-x-7 cursor-pointer">
            <a href="#" target="_blank">
              <Button title="Download Wallte" />
            </a>
            <div className="group items-center flex space-x-2 ">
              <button className=" bg-linear-to-r from-teal-400 to-blue-500 text-md rounded-full p-2 cursor-pointer">
                <a href="#" target="_blank">
                  <Play />
                </a>
              </button>
              <span>Watch Video</span>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} alt="img1" className="w-[40em]" />
        </div>
      </section>
    </>
  );
}
