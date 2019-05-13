import React from "react";
import {Link} from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="w-full bg-blue h-12 flex justify-center">
      <div className="m-auto container ">
        <ul className="list-reset flex text-sm">
          <li>
            <Link
              to="/booking"
              className="text-blue-lighter hover:text-white no-underline mr-6"
            >
              Book
            </Link>
          </li>
          <li>
            <Link
              to="/reservations"
              className="text-blue-lighter hover:text-white no-underline"
            >
              My Reservations
            </Link>
          </li>
          <li className="ml-auto">
            <Link
              to="/logout"
              className="text-blue-lighter hover:text-white no-underline"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
