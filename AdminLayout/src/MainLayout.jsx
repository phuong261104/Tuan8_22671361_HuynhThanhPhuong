import { Outlet } from "react-router-dom";
import Sidebar from "./components/SlideBar";

export default function MainLayout() {
    return (
        <div className="grid grid-cols-[16rem_1fr] min-h-screen">
            {/* Sidebar cố định */}
            <Sidebar />

            {/* Nội dung (scroll riêng) */}
            <div className="overflow-y-auto max-h-screen p-8 bg-gray-50">
                <Outlet />
            </div>
        </div>
    );
}
