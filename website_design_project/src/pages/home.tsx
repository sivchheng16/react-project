// import { Play } from "lucide-react";
// import img1 from "../../public/brand-blockchain.png";
// import Button from "../component/Button";
import Feature from "../component/layout/Feature";
import Hero from "../component/layout/Hero";

export default function Home() {
  return (
    <>
      <div className="w-full justify-center">
        <div className="max-w-[1080px] justify-center items-center m-auto ">
          {/* Hero section */}
          <Hero />
          {/* End Hero section */}
          {/* Feature Section */}
          <Feature />
          {/* End Feature Section */}
        </div>
      </div>
    </>
  );
}
