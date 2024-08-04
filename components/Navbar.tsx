import Link from "next/link";
import React from "react";
import MenuModal from "./Menu";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";
import Image from "next/image";
import { LINKS } from "@/utils";

export default function Navbar() {
  return (
    <div className="h-20 px-10 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between lg:hidden">
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
      <div className="hidden lg:flex items-center justify-between h-full">
        {/* LEFT */}
        <div className="flex items-center gap-7">
          <Link href="/">
            <Image
              src="/img/header-logo.svg"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="hidden lg:flex items-center gap-4 font-[700] w-1/4 text-gray-600 text-sm">
            {LINKS.map((link, i) => (
              <Link href={link.link} key={i}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* MIDDLE */}
        <div className="w-1/4 flex items-center justify-between gap-8">
          <SearchBar />
        </div>
        {/* RIGHT */}
        <div className="w-[50px] lg:w-1/4 flex justify-end">
          <NavbarIcons />
        </div>
      </div>
    </div>
  );
}
