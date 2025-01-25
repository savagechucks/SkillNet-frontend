"use client";
import Logo from "../public/img/logo.svg";
import Image from "next/image";
import { useState } from "react";
import { WalletSelectorUI } from "./WalletConnectModal";


export default function Navbar() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <nav className="w-full h-[124px] flex justify-between items-center px-[100px]">
      <div className="flex items-center cursor-pointer">
        <Image
          className="w-[100px] h-[44px] md:w-[124px] md:h-[54px]"
          src={Logo}
          alt="Logo"
        />
      </div>
      <ul className="w-[736px] h-[80px] bg-[#121312] flex justify-center items-center gap-5 rounded-md">
        <li className="cursor-pointer pr-5 border-r-2 border-[#222220]">
          Home
        </li>
        <li className="cursor-pointer pr-5 border-r-2 border-[#222220]">
          About
        </li>
        <li className="cursor-pointer pr-5">Help</li>
        {/* <li className="cursor-pointer pr-5">FAQs</li> */}
      </ul>
      <div className="flex items-center flex-col relative">
        <button onClick={showModal} className="border border-[#2F302F] rounded-md  text-[#FAFAFA] py-[14px] px-[32px]">
          CONNECT WALLET
        </button>
        {isModalVisible && (
          <div className="absolute top-full right-0">
            <WalletSelectorUI />
            lorem
          </div>
        )}
      </div>
    </nav>
  );
}
