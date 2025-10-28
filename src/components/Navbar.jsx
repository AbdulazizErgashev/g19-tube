import { ChevronRight, FilePlay, House, Tv, User, Youtube } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-red-500 h-screen p-5 flex flex-col justify-between">
      <div className="flex flex-col gap-10">
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

      <div>
        <h1 className="flex items-center text-2xl font-bold mb-10">
          Channels <ChevronRight size={30} />
        </h1>

        <span className="flex items-center gap-2 mb-5">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/10/18094154/paul-fidika-1.jpg"
            className="w-12 rounded-full"
          />
          <h1 className="font-semibold">Programming</h1>
        </span>
        <span className="flex items-center gap-2 mb-5">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/10/18094154/paul-fidika-1.jpg"
            className="w-12 rounded-full"
          />
          <h1 className="font-semibold">Muslim Vines</h1>
        </span>
        <span className="flex items-center gap-2 mb-5">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/10/18094154/paul-fidika-1.jpg"
            className="w-12 rounded-full"
          />
          <h1 className="font-semibold">Motivation time</h1>
        </span>
        <span className="flex items-center gap-2 mb-5">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/10/18094154/paul-fidika-1.jpg"
            className="w-12 rounded-full"
          />
          <h1 className="font-semibold">Ben Lionel Scott</h1>
        </span>
      </div>
    </div>
  );
}
