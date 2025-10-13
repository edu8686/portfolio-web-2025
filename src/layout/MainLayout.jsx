import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar isVertical={true} />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
