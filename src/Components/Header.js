import React from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
 
  return (
    <div>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100 shadow-lg shadow-cyan-500/50">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
           to='/home'
            aria-label="Back to homepage"
            className="flex items-center p-2">
            <h1 className="xl:text-3xl font-bold">Quiz Time</h1>
          </Link>
          <ul className="items-stretch  space-x-3 flex">
            <li className="flex">
              <p className="flex items-center px-3 -mb-1 border-b-2 dark:border-transparent">
              <NavLink
               to='/home'
                className={({isActive})=> isActive ? 'bg-slate-600 p-4' : undefined}
              >
                Home
              </NavLink>
              </p>
            </li>


            <li className="flex">
            <p className="flex items-center px-3 -mb-1 border-b-2 dark:border-transparent">
              <NavLink
               to='/cart'
                className={({isActive})=> isActive ? 'bg-slate-600 p-4 ' : undefined}
              >
                Quize
              </NavLink>
              </p>
            </li>

            <li className="flex">
            <p className="flex items-center px-3 -mb-1 border-b-2 dark:border-transparent">
              <NavLink
               to='/addedproduct'
                className={({isActive})=> isActive ? 'bg-slate-600 p-4' : undefined}
              >
                Chart
              </NavLink>
              </p>
            </li>

            <li className="flex">
            <p className="flex items-center px-3 -mb-1 border-b-2 dark:border-transparent">
              <NavLink
               to='/about'
                className={({isActive})=> isActive ? 'bg-slate-600 p-4' : undefined}
              >
                Blog
              </NavLink>
              </p>
            </li>
               
          </ul>
         
        </div>
      </header>
    </div>
  );
};

export default Header;
