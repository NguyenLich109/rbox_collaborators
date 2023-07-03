import BrokerageFeeClient from "./BrokerageFeeClient";

export const metadata = {
  title: "Hoa hồng",
  images: "/image/image_rbox.png",
  description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
  openGraph: {
    title: "Hoa hồng",
    images: "/image/image_rbox.png",
    description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
  },
};

export default function Rose() {
  return (
    <div>
      <BrokerageFeeClient />
    </div>
  );
}
