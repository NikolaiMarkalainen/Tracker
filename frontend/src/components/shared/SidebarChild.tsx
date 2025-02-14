import { ISidebar } from "@/types/ISidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const SliderBarChild = (props: ISidebar) => {
  const router = useRouter();

  return (
    <li
      className="flex flex-row m-5 justify-around hover:bg-primary_hover cursor-pointer"
      onClick={() => router.push(props.path)}
    >
      <Image src={props.iconName} alt="logo" width={32} height={32} />
      {props.collapsed && <p className="content-end">{props.childText}</p>}
    </li>
  );
};
