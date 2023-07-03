import CandidateClient from "./CandidateClient";

export const metadata = {
  title: "Ứng viên",
  images: "/image/image_rbox.png",
  description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
  openGraph: {
    title: "Ứng viên",
    images: "/image/image_rbox.png",
    description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
  },
};

export default function Candite() {
  return (
    <div>
      <CandidateClient />
    </div>
  );
}
