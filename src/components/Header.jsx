import React from 'react';
import { NavLink, useNavigate } from "react-router";
import Logo from "../assets/logo.png";
import useAppContext from '../hooks/useAppContext';

const Header = () => {
  const navigate = useNavigate();
  const { authInfo } = useAppContext();
  const { logout } = authInfo;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getNavLinkClass = ({ isActive }) =>
    `block py-2 px-3 rounded-sm md:p-0 capitalize ${isActive
      ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500'
      : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:dark:text-gray-400 md:dark:hover:text-white'
    }`;

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold capitalize whitespace-nowrap dark:text-white">snacks club</span>
          </a>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 gap-x-2" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/dashboard"
                  end
                  className={getNavLinkClass}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/members"
                  className={getNavLinkClass}>members</NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/leaderboard"
                  className={getNavLinkClass}
                >
                  leaderboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/categories"
                  className={getNavLinkClass}
                >
                  categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/allocate"
                  className={getNavLinkClass}
                >
                  allocate
                </NavLink>
              </li>
            </ul>
            <button
              onClick={handleLogout}
              className="ml-auto bg-red-500 text-white cursor-pointer px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header