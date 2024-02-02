import { NavLink } from "react-router-dom"
import { IoIosHome, IoIosInformationCircle } from "react-icons/io"
import { FaLaptopCode, FaPhone, FaList } from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";

const Navigation = () => {
  return (
    <div className="bg-teal-500 bg-opacity-60 shadow-2xl shadow-inner backdrop-blur-sm drop-shadow-2xl text-4xl gap-16 flex flex-col items-center justify-center rounded-l-lg h-full w-20">
      <Tooltip content="Home Page" color="default">
        <NavLink to="/home">
          <IoIosHome className="hover:text-white" />
        </NavLink>
      </Tooltip>
      <Tooltip content="About Me" color="default">
        <NavLink to="/about">
          <IoIosInformationCircle className="hover:text-white" />
        </NavLink>
      </Tooltip>
      <Tooltip content="My Skill" color="default">
        <NavLink to="/skills">
          <FaLaptopCode className="hover:text-white" />
        </NavLink>
      </Tooltip>
      <Tooltip content="Reach Me" color="default">
        <NavLink to="/contact">
          <FaPhone className="hover:text-white" />
        </NavLink>
      </Tooltip>
      <Tooltip content="My Project" color="default">
        <NavLink to="/porto">
          <FaList className="hover:text-white" />
        </NavLink>
      </Tooltip>
    </div>
  )
}

export default Navigation