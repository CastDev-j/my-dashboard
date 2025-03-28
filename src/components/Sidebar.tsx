"use client";

import routes from "@/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export const Sidebar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        toggleSidebar();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, toggleSidebar]);

  return (
    <>
      <div className="flex items-center justify-between p-2 py-3 border-b-2 border-neutral-200 md:hidden w-full">
        <button
          onClick={toggleSidebar}
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 ms-3 text-sm text-neutral-700 rounded-lg md:hidden hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300"
        >
          <span className="sr-only">Open sidebar</span>
          <FiMenu className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-neutral-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-2 overflow-y-auto">
          <div className=" flex items-center justify-start p-2 border-b-2 border-neutral-200">
            <button
              onClick={toggleSidebar}
              aria-controls="default-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-neutral-700 rounded-lg hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-300 md:hidden"
            >
              <span className="sr-only">Close sidebar</span>
              <FiX className="w-6 h-6" aria-hidden="true" />
            </button>
            <strong className="text-neutral-700 text-sm ms-3">
              Hecho por <span className="text-blue-500">CastDev-j</span>
            </strong>
          </div>
          <ul className="space-y-2 font-medium mt-4">
            {routes.map(({ Icon, name, path, description }) => (
              <li key={path}>
                <Link
                  onClick={closeSidebar}
                  href={path}
                  className="flex flex-col p-2 text-neutral-900 rounded-lg hover:pl-3 group transition-all hover:bg-neutral-100"
                >
                  <div
                    className={`flex items-center ${
                      pathname === path ? "text-blue-600" : ""
                    }`}
                  >
                    <Icon
                      className="w-5 h-5 text-neutral-700 transition duration-75 group-hover:text-neutral-900"
                      aria-hidden="true"
                    />
                    <span className="ms-3">{name}</span>
                  </div>
                  <span className="ms-8 text-neutral-500 text-sm font-normal">
                    {description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};
