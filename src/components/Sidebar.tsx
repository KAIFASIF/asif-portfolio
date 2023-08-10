import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { menuOptions } from "../utils/data";
import { menuOptionsTypes } from "../utils/types";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("profile");

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };

  const handleProfile = () => {
    setActiveLink("profile");
    navigate("/");
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
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {" "}
      <Link
        to="profile"
        smooth={true}
        duration={500}
        className="flex justify-center items-center cursor-pointer h-14 w-full mt-2"
        onClick={handleProfile}
      >
        <div
          className={`rounded px-2  border-2  text-lg font-semibold        
            ${
              activeLink === "profile"
                ? "border-green-400 text-green-400"
                : "text-gray-200 border-gray-400"
            }`}
        >
          SA
        </div>
      </Link>
      <div className="flex flex-col gap-1">
        {menuOptions.length > 0 &&
          menuOptions.map((ele: menuOptionsTypes) => (
            <Link
              to={ele?.link}
              key={ele?.id}
              smooth={true}
              duration={500}
              className={`h-24 flex justify-center items-center cursor-pointer  rounded
               ${
                 activeLink === ele?.link
                   ? "border-gray-400  bg-zinc-900 border-r-2"
                   : ""
               }`}
              onClick={() => handleSetActive(ele?.link)}
            >
              <p
                className={`transform -rotate-90  whitespace-nowrap text-lg text-semibold  hover:text-green-400
                   ${
                     activeLink === ele?.link
                       ? "text-green-400"
                       : "text-gray-100"
                   }`}
              >
                {ele?.label}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
