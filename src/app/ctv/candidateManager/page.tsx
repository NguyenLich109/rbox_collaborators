import CandidateManagerClient from "./CandidateManagerClient";

export const metadata = {
  title: "Quản lý ứng viên",
  images: "/image/image_rbox.png",
  description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
  openGraph: {
    title: "Quản lý ứng viên",
    images: "/image/image_rbox.png",
    description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
  },
};

export default function Manager() {
  return (
    <div>
      <CandidateManagerClient />
    </div>
  );
}
