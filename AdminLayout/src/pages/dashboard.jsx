import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import {
    FaBell, FaQuestionCircle, FaSearch,
    FaShoppingCart, FaDollarSign, FaUserPlus,
    FaArrowUp, FaArrowDown, FaPen, FaThLarge, FaFolder
} from "react-icons/fa";

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
        <div className="absolute top-4 right-4 p-2 border rounded-full">
            {icon}
        </div>
    </div>
);

export default function Dashboard() {
    const [search, setSearch] = useState("");
    const [overviewData, setOverviewData] = useState([]);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const fetchOverview = async () => {
            try {
                const response = await fetch("https://67ecb701aa794fb3222e8e9b.mockapi.io/card");
                const data = await response.json();
                const mappedData = data.map(item => ({
                    ...item,
                    icon: iconMap[item.icon] || <FaShoppingCart />
                }));
                setOverviewData(mappedData);
            } catch (error) {
                console.error("Error fetching overview:", error);
            }
        };

        const fetchTableData = async () => {
            try {
                const response = await fetch("https://67ecb701aa794fb3222e8e9b.mockapi.io/table");
                const data = await response.json();
                setTableData(data);
            } catch (error) {
                console.error("Error fetching table data:", error);
            }
        };

        fetchOverview();
        fetchTableData();
    }, []);

    const columns = [
        {
            name: "Customer Name",
            selector: row => (
                <div className="flex items-center gap-2">
                    <img src={row.avatar} alt={row.cusName} className="w-8 h-8 rounded-full object-cover" />
                    {row.cusName}
                </div>
            ),
            sortable: true,
        },
        {
            name: "Company",
            selector: row => row.company,
            sortable: true,
        },
        {
            name: "Order Value",
            selector: row => row.orderValue,
            sortable: true,
        },
        {
            name: "Order Date",
            selector: row => row.orderDate,
            sortable: true,
        },
        {
            name: "Status",
            selector: row => (
                <span className={`px-2 py-1 rounded-full text-xs ${row.status === "New" ? "bg-blue-100 text-blue-600" :
                        row.status === "In-progress" ? "bg-yellow-100 text-yellow-600" :
                            "bg-green-100 text-green-600"
                    }`}>
                    {row.status}
                </span>
            ),
            sortable: true,
        },
        {
            name: "Actions",
            cell: () => <FaPen className="text-gray-400 cursor-pointer" />,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-pink-500">Dashboard</h2>
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <FaBell className="text-gray-500 text-lg cursor-pointer" />
                    <FaQuestionCircle className="text-gray-500 text-lg cursor-pointer" />
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="avatar"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                </div>
            </div>

            {/* Overview Section */}
            <div className="flex items-center gap-2 mb-4">
                <div className="bg-pink-500 p-2 rounded-md">
                    <FaThLarge className="text-white" />
                </div>
                <h3 className="text-lg font-bold">Overview</h3>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {overviewData.map(item => (
                    <OverviewCard key={item.id} {...item} />
                ))}
            </div>

            {/* Detailed Report Section */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <div className="bg-pink-500 p-2 rounded-md">
                        <FaFolder className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold">Detailed Report</h3>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center gap-1 border border-pink-500 text-pink-500 rounded-lg px-3 py-1 text-sm">
                        <FaFolder className="text-pink-500" /> Import
                    </button>
                    <button className="flex items-center gap-1 border border-pink-500 text-pink-500 rounded-lg px-3 py-1 text-sm">
                        <FaFolder className="text-pink-500" /> Export
                    </button>
                </div>
            </div>

            {/* DataTable */}
            <div className="bg-white p-6 rounded-xl shadow">
                <DataTable
                    columns={columns}
                    data={tableData.filter(item =>
                        item.cusName?.toLowerCase().includes(search.toLowerCase()) ||
                        item.company?.toLowerCase().includes(search.toLowerCase())
                    )}
                    selectableRows
                    pagination
                    highlightOnHover
                    striped
                    customStyles={{
                        rows: { style: { minHeight: "60px" } },
                        headCells: { style: { backgroundColor: "#f9fafb", fontWeight: "bold" } },
                    }}
                />
            </div>
        </div>
    );
}
