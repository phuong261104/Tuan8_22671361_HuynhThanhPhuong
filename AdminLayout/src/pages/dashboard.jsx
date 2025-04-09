import { useState, useEffect } from "react";
import {
    FaBell, FaQuestionCircle, FaSearch, FaThLarge, FaFolder, FaUsers,
    FaChartPie, FaEnvelope, FaCode, FaShoppingCart, FaDollarSign,
    FaUserPlus, FaArrowUp, FaArrowDown, FaPen
} from "react-icons/fa";

const customers = [
    { name: "Elizabeth Lee", company: "AvatarSystems", value: 359, date: "10/07/2023", status: "New", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Carlos Garcia", company: "SmoozeShift", value: 747, date: "24/07/2023", status: "New", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Elizabeth Bailey", company: "Prime Time Telecom", value: 564, date: "08/08/2023", status: "In-progress", avatar: "https://randomuser.me/api/portraits/women/3.jpg" },
    { name: "Ryan Brown", company: "OmniTech Corporation", value: 541, date: "31/08/2023", status: "In-progress", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { name: "Ryan Young", company: "DataStream Inc.", value: 769, date: "01/05/2023", status: "Completed", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
    { name: "Hailey Adams", company: "FlowRush", value: 922, date: "10/06/2023", status: "Completed", avatar: "https://randomuser.me/api/portraits/women/6.jpg" },
];

const colorClasses = {
    pink: "bg-pink-100",
    blue: "bg-blue-100",
    green: "bg-green-100",
};

const iconMap = {
    FaShoppingCart: <FaShoppingCart />,
    FaDollarSign: <FaDollarSign />,
    FaUserPlus: <FaUserPlus />,
};

const OverviewCard = ({ title, value, change, color, icon, isPositive }) => (
    <div className={`relative ${colorClasses[color] || "bg-gray-100"} p-6 rounded-xl shadow flex flex-col justify-between`}>
        <div>
            <h3 className="text-sm font-bold text-gray-700 mb-2">{title}</h3>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="flex items-center gap-1 mt-2">
            {isPositive ? <FaArrowUp className="text-green-500" /> : <FaArrowDown className="text-red-500" />}
            <p className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}>{change} period of change</p>
        </div>
        <div className="absolute top-4 right-4 p-2 border rounded-full">{icon}</div>
    </div>
);

export default function Dashboard() {
    const [search, setSearch] = useState("");
    const [overviewData, setOverviewData] = useState([]);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://67ecb701aa794fb3222e8e9b.mockapi.io/card");
                const data = await response.json();
                const mappedData = data.map(item => ({
                    ...item,
                    icon: iconMap[item.icon] || <FaShoppingCart />
                }));
                setOverviewData(mappedData);
            } catch (error) {
                console.error("Error fetching overview data:", error);
            }
        };
        fetchData();
    }, []);

    console.log(overviewData);


    const toggleSelectAll = () => {
        if (selected.length === customers.length) {
            setSelected([]);
        } else {
            setSelected(customers.map((_, idx) => idx));
        }
    };

    const toggleSelect = (idx) => {
        setSelected(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);
    };

    return (
        <div className="grid grid-cols-[16rem_1fr] min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="bg-white p-6 shadow flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-pink-400 rounded-full"></div>
                            <span className="text-xl font-bold">Logo</span>
                        </div>
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">10 22</span>
                    </div>
                    <nav className="flex flex-col gap-4">
                        <button className="flex items-center gap-3 bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg">
                            <FaThLarge /> Dashboard
                        </button>
                        <button className="flex items-center gap-3 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
                            <FaFolder /> Projects
                        </button>
                        <button className="flex items-center gap-3 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
                            <FaUsers /> Teams
                        </button>
                        <button className="flex items-center gap-3 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
                            <FaChartPie /> Analytics
                        </button>
                        <button className="flex items-center gap-3 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
                            <FaEnvelope /> Messages
                        </button>
                        <button className="flex items-center gap-3 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100">
                            <FaCode /> Integrations
                        </button>
                    </nav>
                </div>
                <div className="bg-gray-100 p-4 rounded-xl text-center mt-8">
                    <img src="https://via.placeholder.com/100" alt="Update" className="mx-auto mb-2" />
                    <p className="text-sm font-semibold">V2.0 is available</p>
                    <button className="mt-2 px-4 py-2 text-sm border rounded-full hover:bg-blue-50">Try now</button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="p-8 grid grid-rows-[auto_1fr] gap-8">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-2xl font-bold text-pink-500">Dashboard</h2>
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <input type="text" placeholder="Search..." className="bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none" value={search} onChange={(e) => setSearch(e.target.value)} />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <FaBell className="text-gray-500 text-lg cursor-pointer" />
                        <FaQuestionCircle className="text-gray-500 text-lg cursor-pointer" />
                        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="avatar" className="w-8 h-8 rounded-full object-cover" />
                    </div>
                </div>

                {/* Overview + Detailed Report */}
                <div className="grid gap-8">
                    {/* Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {overviewData.map((item) => (
                            <OverviewCard key={item.id} {...item} />
                        ))}
                    </div>

                    {/* Detailed Report */}
                    <div className="bg-white p-6 rounded-xl shadow">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold flex items-center gap-2 text-pink-500">
                                <FaFolder /> Detailed report
                            </h3>
                            <div className="flex gap-2">
                                <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded flex items-center gap-2">
                                    <FaFolder /> Import
                                </button>
                                <button className="border border-pink-500 text-pink-500 px-4 py-2 rounded flex items-center gap-2">
                                    <FaFolder /> Export
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="text-left border-b">
                                        <th><input type="checkbox" checked={selected.length === customers.length} onChange={toggleSelectAll} /></th>
                                        <th className="py-2">Customer Name</th>
                                        <th>Company</th>
                                        <th>Order Value</th>
                                        <th>Order Date</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map((customer, idx) => (
                                        <tr key={idx} className="border-b hover:bg-gray-100">
                                            <td><input type="checkbox" checked={selected.includes(idx)} onChange={() => toggleSelect(idx)} /></td>
                                            <td className="py-2 flex items-center gap-2">
                                                <img src={customer.avatar} alt={customer.name} className="w-8 h-8 rounded-full object-cover" />
                                                {customer.name}
                                            </td>
                                            <td>{customer.company}</td>
                                            <td>${customer.value}</td>
                                            <td>{customer.date}</td>
                                            <td>
                                                <span className={`px-2 py-1 rounded-full text-xs ${customer.status === "New" ? "bg-blue-100 text-blue-600" :
                                                    customer.status === "In-progress" ? "bg-yellow-100 text-yellow-600" :
                                                        "bg-green-100 text-green-600"
                                                    }`}>
                                                    {customer.status}
                                                </span>
                                            </td>
                                            <td><FaPen className="text-gray-400 cursor-pointer" /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                            <p>63 results</p>
                            <div className="flex items-center gap-2">
                                <button className="px-3 py-1 bg-pink-500 text-white rounded-full">1</button>
                                <button className="px-3 py-1 text-gray-500">2</button>
                                <button className="px-3 py-1 text-gray-500">3</button>
                                <span className="px-3">...</span>
                                <button className="px-3 py-1 text-gray-500">10</button>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
