"use client";

import { Transition } from "@headlessui/react";
import { useState } from "react";

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
      <button className="uppercase text-xs sm:text-sm font-medium h-full tracking-wider">
        {label}
      </button>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="origin-top-left absolute left-0 w-auto flex flex-col pt-4 pb-2 px-4 -ml-4 bg-white border-x-[1px] border-b-[1px] "
          >
            {items.map((item, index) => (
              <button
                key={index}
                className="block w-full py-1 text-left uppercase text-xs sm:text-sm font-medium text-slate-900 hover:text-slate-600 whitespace-nowrap tracking-wider"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
};
export default MenuItem;
