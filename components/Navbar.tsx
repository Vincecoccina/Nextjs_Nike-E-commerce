import Link from "next/link";
import React from "react";
import MenuModal from "./Menu";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:pax-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <Image
            src="/img/header-logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <MenuModal />
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center justify-between h-full">
        {/* LEFT */}
        <div className="w-1/3">
          <Link href="/">
            <Image
              src="/img/header-logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
}
