import React from "react";
import Collapse from "@mui/material/Collapse";
import { AiOutlineRight } from "react-icons/ai";

// user manual hướng dẫn sử dụng điều khoản
const data: { text: string; icon: any }[] = [
  { text: "Điều khoản CTV", icon: <AiOutlineRight /> },
  { text: "Hướng dẫn", icon: <AiOutlineRight /> },
  { text: "Quy tắc ứng xử", icon: <AiOutlineRight /> },
  { text: "Liên hệ", icon: <AiOutlineRight /> },
];

export default function UserManual({ turnOn }: { turnOn: boolean }) {
  return (
    <Collapse in={turnOn} timeout="auto" unmountOnExit>
      {data.map((value, index) => {
        return (
          <li
            key={index}
            className="pl-7 pr-3 py-3 hover:bg-hover-nav cursor-pointer list-none"
          >
            <div className="flex items-center text-base">
              <span className="text-[1rem] mr-3"> {value.icon}</span>
              <span className="text-[0.9rem]">{value.text}</span>
            </div>
          </li>
        );
      })}
    </Collapse>
  );
}
