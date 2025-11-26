import lockCloud from "../../../public/lock-cloid.jpg";

import {
  ArrowRight,
  BadgeDollarSignIcon,
  Download,
  FileText,
  Users,
} from "lucide-react";
import Button from "../Button";
import { FaAndroid, FaGithub, FaWindows } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function Feature() {
  const feature = [
    {
      img: "../../public/card_img.png",
      title: "Secure",
      discription:
        "Decred employs an inovative hybird Proof-of-Work/Proof-of-Stake system that",
      more: "Read More About Security",
    },
    {
      img: "../../../public/card_img.png",
      title: "Adaptable",
      discription:
        "Decred continuously unds its treasury with 10% of each block reward and employs",
      more: "Read More About Adatable",
    },
    {
      img: "../../../public/card_img.png",
      title: "Sustainable",
      discription:
        "Decred employs an innovative hybrid Proof-of-Work/Proof-of-Stake system that layers",
      more: "Read More About Sustainable ",
    },
  ];

  //
  const icons = [
    {
      logo: <FaWindows />,
      title: "Windows",
      get: "Download Now",
    },
    {
      logo: <FaApple />,
      title: "Ios",
      get: "Download Now",
    },
    {
      logo: <FaAndroid />,
      title: "Android",
      get: "Download Now",
    },
    {
      logo: <FaGithub />,
      title: "Source",
      get: "Download Now",
    },
  ];
  return (
    <>
      <section className=" container m-auto text-center  items-center justify-center space-x-5 text-gray-300 my-30">
        {/* Main title */}
        <div className="space-y-3">
          <h2 className="text-4xl font-bold">
            <span className="text-teal-500">Decred's</span> build-in governance{" "}
            <br></br> systemsem power its{" "}
            <span className="text-teal-500">community</span>
          </h2>
          <p>
            Thes systems make Decred adaptable, allowing to evolve per the will
            of the stakeholders,<br></br> resist forks and incorporate new
            technology over the long run.
          </p>
        </div>
        {/* Card */}
        
        <div className="grid grid-cols-3 space-x-8 my-10">
          {feature.map((item, key) => (
            <div
              key={key}
              className="justify-center item-center border rounded-2xl border-teal-800/70 bg-teal-900/10 backdrop-blur-2xl pb-7 "
            >
              <div className="px-7">
                <img src={item.img} alt="image" className="" />

                <div>
                  <div>
                    <h3 className="text-2xl font-bold py-2">{item.title}</h3>
                    <p className="text-gray-400 py-2 text-sm">
                      {item.discription}
                    </p>
                  </div>
                  <div className="text-teal-500 items-center text-sm py-2">
                    <a
                      href="#"
                      target="_blank"
                      className="flex justify-center font-bold items-center"
                    >
                      {item.more} <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2 */}
      <section className="container m-auto text-center  items-center justify-center  my-30 grid grid-cols-2">
        <div className="text-teal-500 space-y-5 pr-20 border-r-5 border-teal-700">
          <div className="flex items-center border border-teal-900/80 p-4 rounded-2xl backdrop-blur-lg bg-transparent">
            <div className="flex items-center text-lg font-bold">
              Exchanges <ArrowRight className="size-4" />
            </div>
            <BadgeDollarSignIcon className="right-5 absolute size-9" />
          </div>
          <div className="flex items-center border border-teal-900/80 p-4 rounded-2xl backdrop-blur-lg  bg-transparent">
            <div className="flex items-center text-lg font-bold">
              Community <ArrowRight className="size-4" />
            </div>
            <Users className="right-5 absolute size-9" />
          </div>
          <div className="flex items-center border border-teal-900/80 p-4 rounded-2xl backdrop-blur-lg  bg-transparent">
            <div className="flex items-center text-lg font-bold">
              Docs <ArrowRight className="size-4" />
            </div>
            <FileText className="right-5 absolute size-9" />
          </div>
          <div className="flex items-center border border-teal-900/80 p-4 rounded-2xl backdrop-blur-lg  bg-transparent">
            <div className="flex items-center text-lg font-bold ">
              Download <ArrowRight className="size-4" />
            </div>
            <Download className="right-5 absolute size-9" />
          </div>
        </div>
        <div className="text-start  pl-20 space-y-4">
          <div className="text-gray-300 space-y-4">
            <h2 className="text-4xl font-bold">
              <span className="text-teal-500">New release </span>available
            </h2>
            <p className="text-sm text-gray-400">
              Use DCRDEX inside Decredition and vote on four new consensus
              changes. Upgrade t the 1.7 release now!
            </p>
          </div>
          <Button title="Download Now" />
        </div>
      </section>
      {/* Section 3 */}
      <section className="text-gray-300">
        <div className=" space-y-3 py-10">
          <h3 className="text-4xl font-bold">
            <span className="text-teal-500">Latest News</span> and Posts
          </h3>
          <p className="text-gray-400 text-sm">
            A newsletter is a printed or electronic reort containing <br /> news
            concerning the activities
          </p>
        </div>
        {/*  */}
        <div className="  grid grid-cols-1 md:grid-cols-3   space-x-5 items-center m-auto">
          <div className="flex items-baseline-last space-x-10">
            <div className=" space-y-2 ">
              <a
                href="# "
                target="_blank"
                className="text-teal-500 flex items-center "
              >
                Explore Our Blog <ArrowRight className="size-4" />
              </a>
              <div className="text-sm text-gray-400">
                <p className="">Nov,24,2025</p>
                <p className="">Decred jounal Team</p>
              </div>
            </div>
            <div className="">
              <div className="text-sm text-gray-400">
                <p className="">Nov,24,2025</p>
                <p className="">Decred jounal Team</p>
              </div>
            </div>
          </div>
          <div className="  border rounded-3xl bg-teal-950/50 backdrop-blur-2xl border-teal-900/90 p-10">
            <img src={lockCloud} alt="img2" className="w-40" />
            <p className=" text-gray-400">
              {" "}
              Need tEchnical Support? Please visit Out{" "}
              <a href="#" target="_blank" className="text-teal-400">
                Help Center
              </a>
            </p>
          </div>
          <div className=" space-y-2 ">
            <a
              href="# "
              target="_blank"
              className="text-teal-500 flex items-center "
            >
              View The Lastes Companny News <ArrowRight className="size-4" />
            </a>
            <div className="text-sm text-gray-400">
              <p className="">May 15,2025</p>
              <p className="">Decred jounal Team</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="justify-center items-center text-center m-auto text-gray-300 py-30 ">
        <div className="space-y-5 md:w-lg items-center text-center m-auto">
          <h2 className="text-4xl font-bold">
            <span className="text-teal-500">Ready To</span> Get Started
          </h2>
          <p className="text-sm text-gray-400">
            Download wallte Fro YOu Operating system all Of Out Software is Open
            Source And The Coad Can Be Viewed in Our Github
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-4 justify-center m-auto gap-10 py-10 items-center text-center">
          {icons.map((icon, idkey) => (
            <div
              key={idkey}
              className="items-center justify-center text-center m-auto grid grid-cols-1 p-10 space-y-3"
            >
              <div className="text-center p-3 border justify-center rounded-full w-fit text-lg bg-gray-500 ">
                {icon.logo}
              </div>
              <div className="text-sm">
                <h3 className="font-bold ">{icon.title}</h3>
                <a href="#" className=" text-teal-500">
                  {icon.get}
                </a>
              </div>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-4 p-5 ">
          {icons.map((icon, idkey) => (
            <div key={idkey} className="p-10 justify-center space-y-3">
              <div className="inline-block border border-teal-500 text-teal-300 rounded-full p-4 text-lg">
                {icon.logo}
              </div>
              <div className="">
                <h3 className="font-bold ">{icon.title}</h3>
                <a href="#" className=" text-sm text-teal-500">
                  {icon.get}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
