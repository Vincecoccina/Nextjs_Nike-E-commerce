"use client";

import { LINKS } from "@/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function MenuModal() {
  const [menuIsOpen, setMenuIsOPen] = useState(false);
  return (
    <div className="">
      <div
        className="cursor-pointer"
        onClick={() => setMenuIsOPen((prev) => !prev)}
      >
        {!menuIsOpen ? <Menu /> : <X />}
      </div>
      {menuIsOpen && (
        <ul className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          {LINKS.map((link) => (
            <Link href={link.link}>{link.name}</Link>
          ))}
        </ul>
      )}
    </div>
  );
}
