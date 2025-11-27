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
        <div className="max-w-[1700px] justify-center items-center m-auto ">
          <Hero />
          <Feature />
          <Footer />
        </div>
      </div>
    </>
  );
}
