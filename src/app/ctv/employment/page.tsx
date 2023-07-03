import EmploymentClient from "./EmploymentClient";

export const metadata = {
  title: "Việc đang tuyển",
  images: "/image/image_rbox.png",
  description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
  openGraph: {
    title: "Việc đang tuyển",
    images: "/image/image_rbox.png",
    description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
  },
};

export default function Employ() {
  return (
    <div>
      <EmploymentClient />
    </div>
  );
}
