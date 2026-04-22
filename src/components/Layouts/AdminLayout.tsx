import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  LayoutGrid,
  Users,
  CheckCircle,
  CreditCard,
  HelpCircle,
  Bell,
  Menu,
  Camera,
} from "lucide-react";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminImg, setAdminImg] = useState(
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
  );

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAdminImg(URL.createObjectURL(file));
  };

  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutGrid },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Seller Approval", path: "/admin/sellers", icon: CheckCircle },
    { name: "Payments", path: "/admin/payments", icon: CreditCard },
    { name: "Support", path: "/admin/support", icon: HelpCircle },
  ];

  return (
    <div className="flex min-h-screen bg-[#fcfdfe] font-['Manrope'] text-[#0f2f1d]">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-8">
          <h1 className="text-[#FF6B35] text-2xl font-black">Karoo</h1>
          <p className="text-xs font-bold text-gray-400">Admin Panel</p>
        </div>
        <nav className="px-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${isActive ? "bg-[#FFEDE6] text-[#FF6B35]" : "text-gray-500 hover:bg-gray-50"}`
              }
            >
              <item.icon size={22} /> {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-40">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden"
          >
            <Menu />
          </button>
          <div className="flex-1" />
          <div className="flex items-center gap-6">
            <div className="p-3 bg-[#FF6B35] rounded-xl text-white relative cursor-pointer">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-black rounded-full border border-white" />
            </div>
            <div className="flex items-center gap-3">
              <div className="relative group">
                <img
                  src={adminImg}
                  alt="Admin"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white ring-1 ring-gray-100 shadow-sm"
                />
                <label className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                  <Camera size={16} className="text-white" />
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </label>
              </div>
              <div className="hidden sm:block text-right">
                <p className="font-bold text-sm text-[#FF6B35]">Admin</p>
                <p className="text-xs text-gray-500">admin@platform.com</p>
              </div>
            </div>
          </div>
        </header>
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
