import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-3 ">
        <Link to={"/"} className="text-2xl">
          Job Portal IO
        </Link>
        <ul className="flex gap-3">
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/`}>About</Link>
          </li>
          <li>
            <Link to={`/Sign-up`}>Sign-up</Link>
          </li>
          <li>
            <Link to={`/`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
