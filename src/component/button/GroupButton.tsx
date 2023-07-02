import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

interface typeGroupButton {
  dataButton: { text: string; href: string }[];
  classButton: string;
}

export default function GroupButton({
  dataButton,
  classButton,
}: typeGroupButton) {
  const pathname = usePathname();
  const searchParams = useSearchParams().get("key");
  const router = useRouter();

  return (
    <ButtonGroup className="normal-case">
      {dataButton.map((value, index) => {
        return (
          <button
            key={index}
            onClick={() => router.push(value.href)}
            className={`${classButton} ${
              value.href === `${pathname}?key=${searchParams}` &&
              "bg-rbox-button text-white"
            } first:rounded-l-[10px] last:rounded-r-[10px]`}
          >
            {value.text}
          </button>
        );
      })}
    </ButtonGroup>
  );
}
