"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const MenuItem = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block h-full"
    >
      <Link
        href={`/collections/${label.replace(/\s+/g, "-").toLowerCase()}`}
        className="h-full inline-flex items-center"
      >
        <button
          className="uppercase text-xs font-medium tracking-widest "
          onClick={() => setIsOpen(false)}
        >
          {label}
        </button>
      </Link>
      <Transition
        show={isOpen}
        as="div"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="origin-top-left absolute left-0 w-auto flex flex-col pt-4 pb-2 px-8 -ml-8 bg-white border-x-[1px] border-b-[1px] ">
          {items.map((item, index) => (
            <Link
              href={`/collections/${item.label
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              key={index}
              className="block w-full py-1 group"
            >
              <button
                className="text-left uppercase text-xs font-medium text-slate-900 group-hover:text-slate-600 whitespace-nowrap tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </button>
            </Link>
          ))}
        </div>
      </Transition>
    </div>
  );
};
export default MenuItem;
