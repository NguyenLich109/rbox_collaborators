// "use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiFillHome,
  AiOutlineGlobal,
  AiOutlineSolution,
  AiOutlineFileDone,
  AiOutlineDollarCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

import UserManual from "./Usermanual";
import styles from "./style.module.css";

//data navbar
const data: { text: string; icon: any; href: string }[] = [
  { text: "Dashboard", icon: <AiFillHome />, href: "/ctv/dashboard" },
  {
    text: "Việc làm",
    icon: <AiOutlineGlobal />,
    href: "/ctv/employment",
  },
  {
    text: "Ứng viên của tôi",
    icon: <AiOutlineSolution />,
    href: "/ctv/candidate",
  },
  {
    text: "Quản lý ứng viên",
    icon: <AiOutlineFileDone />,
    href: "/ctv/candidateManager",
  },
  {
    text: "Hoa hồng",
    icon: <AiOutlineDollarCircle />,
    href: "/ctv/brokerageFee",
  },
];

export default function DataNavbar() {
  const pathname = usePathname();
  const [turnOn, setTurnOn] = useState(false);
  const handleTurnOn = () => {
    setTurnOn(!turnOn);
  };

  return (
    <>
      <div className="logo flex justify-center items-center px-2.5 py-2 border-b h-height-header">
        <img src="/image/logo.png" className="w-[120px] h-[40px]"></img>
      </div>
      <ul className={styles.create_scroll_navbar}>
        {data.map((value, index) => {
          return (
            <Link href={value.href} key={index}>
              <li
                className={`pl-5 pr-3 py-3 cursor-pointer ${
                  pathname === value.href
                    ? "bg-hover-nav"
                    : "hover:bg-hover-nav"
                }`}
              >
                <div className="flex items-center text-base">
                  <span className="text-xl mr-3"> {value.icon}</span>
                  <span className="text-lg1">{value.text}</span>
                </div>
              </li>
            </Link>
          );
        })}
        <li
          onClick={handleTurnOn}
          className="flex items-center justify-between pl-5 pr-3 py-3 hover:bg-hover-nav cursor-pointer"
        >
          <div className="flex items-center text-base">
            <span className="text-xl mr-3">
              <AiOutlineQuestionCircle />
            </span>
            <span className="text-lg1">Hướng dẫn</span>
          </div>
          <span> {turnOn ? <FaAngleDown /> : <FaAngleUp />}</span>
        </li>
        <UserManual turnOn={turnOn} />
        <button className="px-3 py-2.5 mx-7 my-3 bg-[#e66610] hover:opacity-80 rounded-lg">
          <Link href="0867597533" className="text-white text-lg font-[500]">
            HOTLINE: 0867.597.533
          </Link>
        </button>
      </ul>
    </>
  );
}
