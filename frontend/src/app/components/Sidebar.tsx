import Image from "next/image";

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-primary text-black w-56">
      <div className="flex flex-row">
        <h1 className="m-5 text-3xl justify-center">Tracker</h1>
        <Image
          src="./angle-left.svg"
          alt="hide"
          width={24}
          height={24}
          className="ml-auto mr-5"
        />
      </div>

      <ul className=" flex-1">
        <li className="flex flex-row m-5">
          <Image
            src="./home.svg"
            alt="logo"
            width={32}
            height={32}
            className="mr-10"
          />
          <div className="content-end"> Home </div>
        </li>
        <li className="flex flex-row m-5">
          <Image
            src="./user.svg"
            alt="logo"
            width={32}
            height={32}
            className="mr-10"
          />
          <div className="content-end"> Profile </div>
        </li>
        <li className="flex flex-row m-5">
          <Image
            src="./running.svg"
            alt="logo"
            width={32}
            height={32}
            className="mr-10"
          />
          <div className="content-end"> Activity </div>
        </li>
        <li className="flex flex-row m-5">
          <Image
            src="./stats.svg"
            alt="logo"
            width={32}
            height={32}
            className="mr-10"
          />
          <div className="content-end"> Statistics </div>
        </li>
      </ul>
      <div>
        <li className=" mt-auto flex flex-row m-5 ">
          <Image
            src="./exit.svg"
            alt="logo"
            width={32}
            height={32}
            className="mr-10"
          />
          <div className="content-end"> Sign out </div>
        </li>
      </div>
    </div>
  );
};
