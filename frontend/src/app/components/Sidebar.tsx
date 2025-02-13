"use client";
import Image from "next/image";
import { useState } from "react";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col h-screen bg-primary text-black ${
        collapsed ? "w-56" : "w-24"
      }`}
    >
      <div className="flex flex-row justify-around m-5 mb-10">
        {collapsed && <h1 className="text-3xl">Tracker</h1>}

        <Image
          src={`${collapsed ? "./angle-left.svg" : "./angle-right.svg"}`}
          onClick={() => setCollapsed(!collapsed)}
          alt="hide"
          width={24}
          height={24}
          className="ml-auto mr-5"
        />
      </div>

      <ul className=" flex-1">
        <li className="flex flex-row m-5 justify-around">
          <Image src="./home.svg" alt="logo" width={32} height={32} />
          {collapsed && <div className="content-end"> Home </div>}
        </li>
        <li className="flex flex-row m-5 justify-around">
          <Image src="./user.svg" alt="logo" width={32} height={32} />
          {collapsed && <div className="content-end"> Profile </div>}
        </li>
        <li className="flex flex-row m-5 justify-around">
          <Image src="./running.svg" alt="logo" width={32} height={32} />
          {collapsed && <div className="content-end"> Activity </div>}
        </li>
        <li className="flex flex-row m-5 justify-around">
          <Image src="./stats.svg" alt="logo" width={32} height={32} />
          {collapsed && <div className="content-end"> Statistics </div>}
        </li>
      </ul>
      <div>
        <li className=" mt-auto flex flex-row m-5 justify-around">
          <Image src="./exit.svg" alt="logo" width={32} height={32} />
          {collapsed && <div className="content-end"> Sign out </div>}
        </li>
      </div>
    </div>
  );
};
