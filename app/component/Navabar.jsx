"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";
import Sidebar from "./Sidebar";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-900 w-full">
      <div className="flex justify-between text-white container mx-auto items-center py-4 px-4">
        <button onClick={() => setOpen((prev) => !prev)} className="z-50">
          {
            open ?  <RxCross2 className="text-2xl" />:<GiHamburgerMenu className="text-2xl" />
          }
        </button>
        {open && <Sidebar></Sidebar>}
        <div>
          <Link href="" className="lg:text-3xl text-nowrap">
            Artizans' Mart
          </Link>
        </div>
        <div className="flex justify-between items-center lg:space-x-4">
          <div className="flex items-center space-x-5">
            <CgProfile className="text-2xl" />
            <Link href="" className="text-nowrap hidden lg:block">
              <FaCartShopping className="text-2xl"/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
