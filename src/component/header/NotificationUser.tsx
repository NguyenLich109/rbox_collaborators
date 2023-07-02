import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import {
  AiOutlineClose,
  AiOutlineSetting,
  AiOutlineBell,
} from "react-icons/ai";
import "./header.css";

export default function NotificationUser() {
  const [turnOn, setTurnOn] = useState<null | HTMLElement>(null);
  const open = Boolean(turnOn);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTurnOn(event.currentTarget);
  };
  const handleClose = () => {
    setTurnOn(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={open ? "bg-hover-nav" : "hover:bg-hover-nav"}
      >
        <Box sx={{ color: "action.active" }}>
          <Badge color="primary" variant="dot">
            <AiOutlineBell className="text-xl" />
          </Badge>
        </Box>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={turnOn}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="bell_noti_header"
      >
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <span className="flex items-center">Thông báo</span>
          <span className="text-xl cursor-pointer" onClick={handleClose}>
            <AiOutlineClose />
          </span>
        </div>
        <ul className="overflow-y-scroll h-80 srcoll_bell_noti">
          {["1", "2,", "3", "4", "5"].map((data, index) => {
            return (
              <li
                key={index}
                className="flex items-center justify-between pl-4 pr-3 py-3 text-lg hover:bg-hover-nav"
              >
                <div className="flex items-center">
                  <span className="p-2 bg-[#fff1f0] rounded-[50%]">
                    <AiOutlineSetting className="text-base text-[#ff4d4f]" />
                  </span>
                  <span className="pl-3">
                    <p className="text-lg">
                      Bình thủy tinh vỡ ra, toàn bộ căn phòng lập tức sáng rực
                      lên.
                    </p>
                    <p className="text-sm">02-16-2023</p>
                  </span>
                </div>
                <span className="text-sm">15:06</span>
              </li>
            );
          })}
        </ul>
      </Menu>
    </div>
  );
}
