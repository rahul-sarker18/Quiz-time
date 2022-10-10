import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to='/'>Item 1</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to='/'>Parent</NavLink>
            </li>
            <li>
              <NavLink to='/'>Item 3</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
