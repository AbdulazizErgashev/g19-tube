import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Tube from "./pages/Tube.jsx";
import Channels from "./pages/Channels.jsx";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0">
        <Navbar />
      </div>
      <div className="ml-[11.7rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch" element={<Tube />} />
          <Route path="/channels" element={<Channels />} />
        </Routes>
      </div>
    </>
  );
}
