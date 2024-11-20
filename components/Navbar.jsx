import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  return (
    <>
      <nav className="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg bg-blueGray-800">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start ">
            <Link
              className="inline-block py-2 mr-4 text-lg font-extrabold leading-relaxed text-black uppercase whitespace-nowrap"
              href={"/"}
            >
              QuickLinks
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              //   onClick="toggleNavbar('example-collapse-navbar')"
            >
              <i className="text-black fas fa-bars"></i>
            </button>
          </div>
          <div
            className="items-center flex-grow hidden bg-black lg:flex lg:bg-opacity-0 lg:shadow-none bg-blueGray-800"
            id="example-collapse-navbar"
          >
            <ul className="flex flex-col mr-auto list-none lg:flex-row">
              <li className="flex items-center">
                <Link
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href={"/"}
                >
                  <i className="mr-2 text-lg lg:text-blueGray-200 text-blueGray-400 far fa-file-alt leading-lg"></i>
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase lg:text-black lg:hover:text-blueGray-200 text-blueGray-700 lg:py-2"
                  href={"/contact"}
                >
                  <i className="mr-2 text-lg lg:text-blueGray-200 text-blueGray-400 far fa-file-alt leading-lg"></i>
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col items-center space-x-2 list-none lg:flex-row lg:ml-auto">
              <li className="flex items-center">
                <SocialIcon
                  target="_blank"
                  url="https://www.linkedin.com/in/sumittripathi07/"
                />
              </li>
              <li className="flex items-center">
                <SocialIcon
                  url="https://github.com/Sumittripathi07"
                  target="_blank"
                />
              </li>
              <li className="flex items-center">
                <SocialIcon url="https://x.com/iamSumit076" target="_blank" />
              </li>

              <li className="flex items-center">
                <Link
                  className="px-4 py-2 mb-3 ml-3 text-xs font-bold uppercase transition-all duration-150 ease-linear bg-white rounded shadow outline-none text-blueGray-700 active:bg-blueGray-50 hover:shadow-md focus:outline-none lg:mr-1 lg:mb-0"
                  href={"/generate"}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Generate Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
