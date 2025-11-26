// import { Play } from "lucide-react";
// import img1 from "../../public/brand-blockchain.png";
// import Button from "../component/Button";
import Feature from "../component/layout/Feature";
import Footer from "../component/layout/Footer";
import Hero from "../component/layout/Hero";

export default function Home() {
  return (
    <>
      <div className="w-full justify-center">
        <div className="max-w-[1080px] justify-center items-center m-auto ">
          {/* Hero section */}
          <Hero />
          {/* <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top_left,#1AE6CE,#02302e,#02302e)]"></div> */}

          {/* End Hero section */}
          {/* Feature Section */}
          <Feature />
          {/* End Feature Section */}
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}
