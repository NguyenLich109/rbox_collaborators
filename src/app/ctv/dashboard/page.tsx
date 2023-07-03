import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Dashboard",
  images: "/image/image_rbox.png",
  description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
  openGraph: {
    title: "Dashboard",
    images: "/image/image_rbox.png",
    description: "Tuyển dụng tìm kiếm việc làm nhanh chóng, hiệu quả",
  },
};

export default function Home() {
  return (
    <div>
      <DashboardClient />
    </div>
  );
}
