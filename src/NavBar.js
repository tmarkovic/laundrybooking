import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="w-full bg-blue h-12 flex justify-center">
      <div className="m-auto container ">
        <ul className="list-reset flex text-sm">
          <li className="">
            <Link
              to="/booking"
              className="text-blue-lighter hover:text-white no-underline mr-6"
            >
              Book
            </Link>
          </li>
          <li className="">
            <Link
              to="/my-account"
              className="text-blue-lighter hover:text-white no-underline"
            >
              My Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
