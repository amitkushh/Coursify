import Logo from "../../public/favicon.ico";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="px-5 py-8 flex justify-between items-center  md:px-20 md:py-7 border-b-2">
        <Link to="/">
          <div className="flex justify-center items-center gap-3">
            <img src={Logo} alt="logo" className="h-8" />
            <p className="text-xl font-semibold">Coursify</p>
          </div>
        </Link>
        <div className="hidden">
          <ul className="font-semibold text-md flex justify-center items-center gap-6 cursor-pointer">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>Buy</li>
            </Link>
            <Link to="/">
              <li>Courses</li>
            </Link>
            <Link to="/">
              <li>Dashboard</li>
            </Link>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5">
          <Link to="/login">
            <button className="cursor-pointer text-black">Login</button>
          </Link>
          <Link to="/signup">
            <button className="bg-[#1162F4] rounded-full py-2 px-5 text-white cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
