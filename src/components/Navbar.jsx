import { FilePlay, House, Tv, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-red-500 h-screen p-5 flex flex-col gap-10">
      <Link to="/">
        <div className="flex items-center gap-2 font-bold text-xl bg-black text-red-500 py-3 px-6 rounded-lg">
          <Youtube />
          <h1>Vidoo</h1>
        </div>
      </Link>

      <ul className="flex flex-col gap-5">
        <li className="flex items-center gap-2 bg-black text-red-500 py-3 px-6 font-bold rounded-lg">
          <House />
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="flex items-center gap-2 bg-black text-red-500 py-3 px-6 font-bold rounded-lg">
          <Tv />
          <NavLink to={"/watch"}>Video</NavLink>
        </li>
        <li className="flex items-center gap-2 bg-black text-red-500 py-3 px-6 font-bold rounded-lg">
          <FilePlay />
          <NavLink to={"/channels"}>Channels</NavLink>
        </li>
      </ul>
    </div>
  );
}
