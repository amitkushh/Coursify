import { Link } from "react-router-dom";
import heroImage from "../assets/hero.svg";

function Hero() {
  return (
    <div className="px-5 py-20 flex flex-col justify-center items-center gap-5 md:px-20 md:py-4 md:flex-row md:justify-center md:items-center">
      <div className="md:w-1/2 flex flex-col justify-start gap-5">
        <h1 className="text-4xl font-semibold leading-12">
          Unlock Your Potential with{" "}
          <span className="text-[#FE5D21] bg-[#f1c7b7] border-[#FE5D21] border-2">
            Expert-Led
          </span>{" "}
          Courses
        </h1>
        <p className="mb-9 font-medium">
          Discover a world of knowledge with our expertly designed courses that
          cater to every skill level. Whether you're looking to advance your
          career.
        </p>
        <div className="flex gap-3">
          <Link to="/signup">
            <button className="bg-[#FE5D21] rounded-sm py-3 px-5 text-white font-semibold">
              Get Started
            </button>
          </Link>
          <Link>
            <button className="bg-[#5DA759] rounded-sm py-3 px-5 text-white font-semibold">
              How it Works
            </button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={heroImage}
          alt="hero-image"
          className="size-96 md:size-full"
        />
      </div>
    </div>
  );
}

export default Hero;
