import React from "react";
import {
  AiOutlineUser,
  AiOutlineSolution,
  AiOutlineDollarCircle,
} from "react-icons/ai";

import ListJobVacancy from "@/component/tables/ListJobVacancy";

export default function Dashboard() {
  return (
    <>
      <h1 className="font-[600] text-xl pb-4">Dashboard</h1>
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-2 md:grid-cols-1">
        <div className="border rounded-md shadow-sm">
          <div className="p-4">
            <p className="flex items-center">
              <span className="p-2 rounded-[50%] bg-[#cce5ff]">
                <AiOutlineUser className="text-4xl text-blue-one-dashboard" />
              </span>
              <span className="text-blue-one-dashboard text-base pl-2 font-[600]">
                Ứng Viên
              </span>
            </p>
            <p className="text-2xl pl-3 font-[600] ">2</p>
          </div>
        </div>
        <div className="border rounded-md shadow-sm">
          <div className="p-4">
            <p className="flex items-center">
              <span className="p-2 rounded-[50%] bg-[#d3e7ea]">
                <AiOutlineSolution className="text-4xl text-blue-two-dashboard" />
              </span>
              <span className=" text-base pl-2 font-[600] text-blue-one-dashboard">
                Việc đã giới thiệu
              </span>
            </p>
            <p className="text-2xl pl-3 font-[600]">2</p>
          </div>
        </div>
        <div className="border rounded-md shadow-sm">
          <div className="p-4">
            <p className="flex items-center">
              <span className="p-2 rounded-[50%] bg-[#d4edda]">
                <AiOutlineDollarCircle className="text-4xl text-green-dashboard" />
              </span>
              <span className="text-blue-one-dashboard text-base pl-2 font-[600]">
                Bonus trong tháng
              </span>
            </p>
            <p className="text-2xl pl-3 font-[600] ">2.000.000 vnđ</p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <h1 className="font-[600] text-base pb-4">Vị trí đang tuyển</h1>
        <ListJobVacancy />
      </div>
    </>
  );
}
