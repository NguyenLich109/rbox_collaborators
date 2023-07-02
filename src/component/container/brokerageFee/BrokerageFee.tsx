"use client";
import { useSearchParams, redirect } from "next/navigation";

import GroupButton from "@/component/button/GroupButton";
import BrokerageFeeDataFormat from "./BrokerageFeeDataFormat";

const dataButton: { text: string; href: string }[] = [
  { text: "All", href: "/ctv/brokerageFee?key=all" },
  { text: "Chờ thanh toán", href: "/ctv/brokerageFee?key=unpaid" },
  { text: "Bị khóa", href: "/ctv/brokerageFee?key=paid" },
];

export default function BrokerageFee() {
  const search = useSearchParams().get("key");
  if (!search) {
    redirect("/ctv/brokerageFee?key=all");
  }

  return (
    <>
      <h1 className="font-[600] text-xl pb-4">Hoa hồng</h1>
      <div className="flex items-center justify-between sm:flex-wrap">
        <GroupButton
          dataButton={dataButton}
          classButton={
            "px-3 py-1.5 normal-case text-[0.85rem] text-[#262626] border sm:mb-2"
          }
        />
      </div>
      <div className="pt-4">
        <BrokerageFeeDataFormat />
      </div>
    </>
  );
}
