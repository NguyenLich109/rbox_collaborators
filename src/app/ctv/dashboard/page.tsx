import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Dashboard",
  description: "Chào mừng đến với Rbox",
};

export default function Home() {
  return (
    <div>
      <DashboardClient />
    </div>
  );
}
