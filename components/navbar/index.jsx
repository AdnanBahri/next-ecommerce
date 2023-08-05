"use client";

import Link from "next/link";
import Sidebar from "../sidebar";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { styles } from "../../utils/styles";
import DesktopMenu from "./desktop-menu";
import classNames from "classnames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(styles.container);
  const mobile = classNames(styles.container, styles.xPaddings, "mx-auto");
  return (
    <header className="w-full fixed top-0 left-0 border-b-[1px] bg-white">
      <nav className={mobile}>
        {/* Mobile Header */}
        <div className="w-full h-16 flex items-center justify-between lg:hidden">
          {/* Menu Button */}
          <button
            type="button"
            className="relative rounded-md text-slate-900 hover:text-slate-700 focus:outline-none"
            onClick={() => setIsOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          {/* Logo */}
          <Link href={"/"}>
            <span className="text-2xl font-bold">Shoppy</span>
          </Link>
          {/* Icons */}
          <ul className="flex items-center gap-x-4">
            <li className="btn-icon flex items-center justify-center">
              <Link href="/search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Link>
            </li>
            <li className="btn-icon flex items-center justify-center">
              <Link href="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop Header */}
        <div className="hidden w-full h-16 lg:flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"}>
            <span className="text-xl font-bold">Shoppy</span>
          </Link>
          {/* Header Content */}
          <DesktopMenu />
          {/* Icons */}
          <ul className="flex items-center gap-x-4">
            <li className="btn-icon flex items-center justify-center">
              <Link href="/account">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </Link>
            </li>
            <li className="btn-icon flex items-center justify-center">
              <Link href="/search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </Link>
            </li>
            <li className="btn-icon flex items-center justify-center">
              <Link href="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar open={isOpen} setOpen={setIsOpen} />
    </header>
  );
};
export default Navbar;
