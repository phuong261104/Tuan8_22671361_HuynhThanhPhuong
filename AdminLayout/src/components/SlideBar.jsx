// components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { FaThLarge, FaFolder, FaUsers, FaChartPie, FaEnvelope, FaCode } from "react-icons/fa";

export default function Sidebar() {
    const menu = [
        { to: "/dashboard", icon: <FaThLarge />, label: "Dashboard" },
        { to: "/projects", icon: <FaFolder />, label: "Projects" },
        { to: "/teams", icon: <FaUsers />, label: "Teams" },
        { to: "/analytics", icon: <FaChartPie />, label: "Analytics" },
        { to: "/messages", icon: <FaEnvelope />, label: "Messages" },
        { to: "/integrations", icon: <FaCode />, label: "Integrations" },
    ];

    return (
        <aside className="bg-white p-6 shadow flex flex-col justify-between min-h-screen">
            <div>
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
                        <span className="text-xl font-bold">Logo</span>
                    </div>
                </div>

                <nav className="flex flex-col gap-4">
                    {menu.map((item, idx) => (
                        <NavLink
                            key={idx}
                            to={item.to}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive
                                    ? "bg-pink-500 text-white font-semibold"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                        >
                            {item.icon} {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl text-center mt-8">
                <img src="https://via.placeholder.com/100" alt="Update" className="mx-auto mb-2" />
                <p className="text-sm font-semibold">V2.0 is available</p>
                <button className="mt-2 px-4 py-2 text-sm border rounded-full hover:bg-blue-50">Try now</button>
            </div>
        </aside>
    );
}
