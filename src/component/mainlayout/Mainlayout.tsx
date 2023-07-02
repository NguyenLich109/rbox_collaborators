"use client";
import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

function Mainlayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="ml-[260px] duration-75 xl:ml-0">
        <Header />
        <div className="p-5 mt-[60px]">{children}</div>
      </main>
    </>
  );
}

export default Mainlayout;
