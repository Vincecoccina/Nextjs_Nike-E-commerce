import Link from "next/link";
import React from "react";
import MenuModal from "./Menu";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:pax-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Vince</div>
        </Link>
        <MenuModal />
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center justify-between h-full">
        {/* LEFT */}
        <div className="w-1/3">
          <Link href="/">
            <div className="text-2xl tracking-wide">Vince</div>
          </Link>
        </div>
        {/* RIGHT */}
        <div className="w-2/3"></div>
      </div>
    </div>
  );
}
