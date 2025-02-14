"use client";
import Image from "next/image";
import { useState } from "react";
import { SliderBarChild } from "./shared/SidebarChild";
import { ISidebar } from "@/types/ISidebar";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const sideBarChildren: ISidebar[] = [
    {
      iconName: "home.svg",
      childText: "Home",
      path: "/",
    },
    {
      iconName: "user.svg",
      childText: "Profile",
      path: "/profile",
    },
    {
      iconName: "running.svg",
      childText: "Activity",
      path: "/activity",
    },
    {
      iconName: "stats.svg",
      childText: "Statistics",
      path: "/statistics",
    },
  ];

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
          className="ml-auto mr-5 cursor-pointer hover:bg-primary_hover"
        />
      </div>

      <ul className=" flex-1">
        {sideBarChildren.map((item, index) => (
          <SliderBarChild
            key={index}
            iconName={item.iconName}
            childText={item.childText}
            path={item.path}
            collapsed={collapsed}
          />
        ))}
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
