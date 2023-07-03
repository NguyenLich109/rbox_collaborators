import "./globals.css";
import { Inter } from "next/font/google";
import Mainlayout from "@/component/mainlayout/Mainlayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cộng tác viên Rbox",
  image: "/image/image_rbox.png",
  description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Mainlayout>{children}</Mainlayout>
      </body>
    </html>
  );
}
