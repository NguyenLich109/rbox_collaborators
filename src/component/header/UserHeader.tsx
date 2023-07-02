import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineLogout, AiOutlineEdit, AiOutlineLock } from "react-icons/ai";
import "./header.css";

export default function UserHeader() {
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
        <img
          src="https://s.net.vn/6NUR"
          className="w-8 h-8 rounded-[50%]"
        ></img>
        <span className="capitalize text-sm1 text-[#262626] pl-1 font-[600]">
          Nguyễn Lịch
        </span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={turnOn}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="user_modal_header"
      >
        <div className="flex items-center justify-between px-4 py-2.5 border-b">
          <div className="flex items-center">
            <img
              src="https://s.net.vn/6NUR"
              className="w-9 h-9 rounded-[50%]"
            ></img>
            <div className="pl-1">
              <p className="capitalize text-sm1 text-[#262626] pl-1">
                Nguyễn Lịch
              </p>
              <p className="capitalize text-sm text-rose-500 pl-1">
                Cộng tác viên
              </p>
            </div>
          </div>
          <span className="text-4xl cursor-pointer">
            <AiOutlineLogout />
          </span>
        </div>
        <MenuItem onClick={handleClose} className="pl-4 pr-3 py-3 text-lg">
          <AiOutlineEdit className="mr-2 text-xl" />
          Cập nhật thông tin
        </MenuItem>
        <MenuItem onClick={handleClose} className="pl-4 pr-3 py-3 text-lg">
          <AiOutlineLock className="mr-2 text-xl" />
          Đổi mật khẩu
        </MenuItem>
        <MenuItem onClick={handleClose} className="pl-4 pr-3 py-3 text-lg">
          <AiOutlineLogout className="mr-2 text-xl" />
          Đăng xuất
        </MenuItem>
      </Menu>
    </div>
  );
}
