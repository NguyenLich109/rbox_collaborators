"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaLocationArrow,
  FaDollarSign,
  FaBriefcase,
} from "react-icons/fa";
import DetailCandidate from "../modal/modalCandidate/DetailCandidate";

export default function ListJobVacancy() {
  return (
    <>
      <ul>
        {["1", "2", "3", "4", "5"].map((value, index) => {
          return (
            <li
              key={index}
              className="grid grid-cols-5 p-3 mb-2 border rounded-md shadow-sm"
            >
              <div className="col-span-4 md:col-span-3 ">
                <div className="flex items-center">
                  <span className="text-sm text-white p-1 bg-green-dashboard rounded-xl font-[500] text-center">
                    Đang tuyển
                  </span>
                  <h1 className="pl-2 text-lg font-[600]">
                    Quản Lý Kho - Kinh Nghiệm Từ 1 Năm
                  </h1>
                </div>
                <p className="text-lg pt-1.5 pb-1">Công ty: Tym Kids</p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center text-lg pr-1">
                    <FaMapMarkerAlt className="pr-2 text-xl" />
                    Dịch Vọng Hậu, quận Cầu Giấy, Hà Nội
                  </span>
                  <span className="flex items-center text-lg pr-1">
                    <FaLocationArrow className="pr-2 text-xl" /> Trưởng
                    Phòng/Phó Phòng
                  </span>
                  <span className="flex items-center text-lg md:hidden pr-1">
                    <FaBriefcase className="pr-2 text-xl" />
                    Chưa có kinh nghiệm
                  </span>
                  <span className="flex items-center text-lg md:hidden">
                    <FaDollarSign className="pr-2 text-xl" /> 12.000.000 vnđ
                  </span>
                </div>
              </div>
              <div className="flex justify-start pl-5 md:col-span-2">
                <div>
                  <span className="text-lg">Hoa hồng</span>
                  <h1 className="text-base font-[600]">1.000.000 vnđ</h1>
                  <DetailCandidate
                    nameButton="Giới thiệu ứng viên"
                    classButton="py-1.5 px-3 text-lg text-white border rounded-lg bg-rbox-button hover:opacity-90"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
