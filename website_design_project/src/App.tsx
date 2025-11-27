import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./component/layout/Navbar";
// import MadeAndSupport from "./component/layout/MadeAndSupport";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <MadeAndSupport /> */}
      </BrowserRouter>
    </div>
  );
}
