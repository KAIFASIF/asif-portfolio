import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { menuOptionsTypes } from "../utils/types";
import { menuOptions } from "../utils/data";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname === "/resume";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("profile");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          console.log(section?.id);
          setActiveLink(section?.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 top-0 shadow-2xl z-20 w-full bg-zinc-950 sticky">
      <div className="flex justify-center items-center">
        <div className="ml-2 gap-4 flex justify-start">
          <Link
            to="profile"
            smooth={true}
            duration={500}
            className="flex justify-center items-center cursor-pointer h-10 w-full -mt-2 lg:hidden"
          >
            <div
              className={`rounded px-1  border-2  text-md font-semibold        
            ${
              activeLink === "profile"
                ? "border-green-400 text-green-400"
                : "text-gray-200 border-gray-400"
            }`}
            >
              SA
            </div>
          </Link>
          <a
            href="https://www.linkedin.com/in/shaik-asif-2152b8190/"
            className="cursor-pointer "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-zinc-500 text-2xl" />
          </a>
          <a
            href="https://github.com/KAIFASIF"
            className="cursor-pointer "
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="text-zinc-500 text-2xl" />
          </a>
        </div>
      </div>
      <div className="flex">
        <div className="flex justify-start mr-5">
          {!location && (
            <a
              className="cursor-pointer bg-green-400  p-1 rounded px-5 hover:font-semibold text-black hidden lg:block"
              href="/resume"
              target="_blank"
            >
              Resume
            </a>
          )}
        </div>
        <button
          onClick={toggleDropdown}
          className="focus:outline-none lg:hidden"
        >
          <AiOutlineMenu className="w-6 h-6 text-white" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-16 right-0 z-20 bg-zinc-950 border border-gray-200 shadow-md rounded-md py-2">
            <ul>
              {menuOptions.length > 0 &&
                menuOptions.map((ele: menuOptionsTypes) => (
                  <li key={ele.id}>
                    <Link
                      to={ele.link}
                      className={`block px-4 py-2 text-zinc-500`}
                      role="menuitem"
                      tabIndex={-1}
                      id={`menu-item-${ele.id}`}
                      smooth={true}
                      duration={500}
                      key={ele.id}
                      onClick={toggleDropdown}
                    >
                      {ele.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
