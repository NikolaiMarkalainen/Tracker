import { ISidebar } from "@/types/ISidebar";
import Image from "next/image";
export const SliderBarChild = (props: ISidebar) => {
  return (
    <li className="flex flex-row m-5 justify-around">
      <Image src={props.iconName} alt="logo" width={32} height={32} />
      {props.collapsed && <p>{props.childText}</p>}
    </li>
  );
};
