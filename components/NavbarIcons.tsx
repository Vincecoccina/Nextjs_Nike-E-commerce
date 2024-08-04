"use client";

import React, { useState } from "react";
import { Heart, LogOut, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

export default function NavbarIcons() {
  const router = useRouter();
  const [isProfilOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = false;

  const handleProfil = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <ul className="flex items-center gap-3">
        <Link href="/" className="text-gray-600">
          <Heart />
        </Link>
        <div>
          <div className="relative">
            <button
              className="text-gray-600"
              onClick={() => setIsCartOpen((prev) => !prev)}
            >
              <ShoppingBag />
            </button>
            <div className="absolute top-[-7px] right-[-3px] bg-red-500 h-[15px] w-[15px] flex items-center justify-center text-white rounded-full">
              <span className="text-[12px] font-bold">2</span>
            </div>
          </div>
          {isCartOpen && <CartModal />}
        </div>
        <div>
          <button className="text-gray-600" onClick={handleProfil}>
            <User />
          </button>
          {isProfilOpen && (
            <div className="absolute w-[200px] p-4 rounded-md top-10 right-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
              <div>
                <Link
                  href="/"
                  className="mt-2 cursor-pointer flex items-center gap-3 text-lg"
                >
                  <User size={18} />
                  Votre profil
                </Link>
                <div className="mt-2 cursor-pointer flex items-center gap-3 text-lg">
                  <LogOut size={18} />
                  <p>Logout</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
}
