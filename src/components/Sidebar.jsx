import { useState } from 'react';
import { ChevronDown, ChevronRight, Power } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router';
import Logo from "../assets/logo.png";
import useAppContext from '../hooks/useAppContext';

const Sidebar = ({ items }) => {
  const navigate = useNavigate();
  const { authInfo } = useAppContext();
  const { logout } = authInfo;

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  const [open, setOpen] = useState({});

  const toggle = (label) =>
    setOpen((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4 overflow-y-auto">
      <a href="/dashboard" className="flex items-center gap-x-2 mb-3">
        <img src={Logo} className="h-8" alt="Logo" />
        <span className="text-xl font-semibold capitalize dark:text-white">snacks club</span>
      </a>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            {item.children ? (
              <>
                <button
                  className="w-full flex justify-between items-center px-2 py-2 hover:bg-gray-700 rounded"
                  onClick={() => toggle(item.label)}
                >
                  <span>{item.label}</span>
                  {open[item.label] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                {open[item.label] && (
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.link}
                          className="block px-2 py-1 hover:bg-gray-700 rounded"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (

              <NavLink
                to={item.to}
                end={item.end}
                className="block px-2 py-2 hover:bg-gray-700 rounded"
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
        <li>
          <button
            onClick={() => handleLogout()}
            className="w-full flex items-center justify-center gap-x-1.5 bg-red-500 text-white cursor-pointer px-2 py-2 hover:bg-gray-700 rounded"
          >
            <Power size={16} />
            Logout
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
