import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import {
    FaBell, FaQuestionCircle, FaSearch, FaThLarge, FaFolder, FaUsers,
    FaChartPie, FaEnvelope, FaCode, FaShoppingCart, FaDollarSign,
    FaUserPlus, FaArrowUp, FaArrowDown, FaPen
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
    console.log(tableData);


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
            <main className="p-8">
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

                {/* Overview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {overviewData.map(item => (
                        <OverviewCard key={item.id} {...item} />
                    ))}
                </div>

                {/* Table */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <DataTable
                        title="Detailed Report"
                        columns={columns}
                        data={tableData.filter(item =>
                            item.cusName.toLowerCase().includes(search.toLowerCase()) ||
                            item.company.toLowerCase().includes(search.toLowerCase())
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
            </main>
        </div>
    );
}