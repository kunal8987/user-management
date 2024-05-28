import React, { useContext } from "react";
import { Menu, X } from "lucide-react";
import LocalButtons from "./authButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { authState } = useContext(AuthContext);
  let menuItems;
  if (authState.isAuth === true) {
    menuItems = [
     
      {
        name: "Create Profile",
        href: "/create-profile",
      },
      {
        name: "Profile",
        href: "/profile",
      },
    ];
  } else {
    menuItems = [
      {
        name: "Home",
        href: "/",
      },
    ];
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" sticky top-0 z-20 w-full bg-[#B4B4B8] border-b-2 border-black shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img
              class="inline-block h-14 w-14 rounded-full"
              src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"
              alt="logo"
            />
          </span>
          <span className="font-bold">User Management</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-lg p-2 rounded-md font-semibold text-gray-800 hover:bg-orange-600 hover:text-gray-200 "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <LocalButtons />
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#B4B4B8] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        class="inline-block h-14 w-14 rounded-full"
                        src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_640.png"
                        alt="logo"
                      />
                    </span>
                    <span className="font-bold">User Management</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-orange-600 hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-lg font-semibold hover:bg-orange-500"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <LocalButtons />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
