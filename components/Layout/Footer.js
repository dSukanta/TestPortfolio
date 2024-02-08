import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image
            src={"/assets/sukanta_logo.png"}
            width={50}
            height={50}
            style={{ borderRadius: "50px" }}
          />

          <strong className="font-medium mt-3">Sukanta Dolai</strong>
          <p className="mb-2">a Fullstack Developer (App & Web)</p>
          <div className="flex w-full mt-2 mb-5 -mx-2"></div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Sukanta Dolai
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col items-end">
          <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <Facebook className="h-6 w-6" />
          </div>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col items-end">
          <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <Twitter className="h-6 w-6" />
          </div>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col items-end">
          <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <Instagram className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
