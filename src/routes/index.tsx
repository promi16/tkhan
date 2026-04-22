import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "../components/Layouts/AdminLayout";
import DashboardMain from "../pages/Dashboard/DashboardMain";
import UsersPage from "../pages/User/UsersPage"; // UsersPage import kora holo

export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true, // /admin e gele default Dashboard dekhabe
        element: <DashboardMain />,
      },
      {
        path: "users",
        element: <UsersPage />, // Ekhane ekhon amader dynamic UsersPage render hobe
      },
      {
        path: "sellers",
        element: (
          <div className="p-10 font-bold text-2xl text-[#0f2f1d]">
            Seller Approval Page
          </div>
        ),
      },
      {
        path: "payments",
        element: (
          <div className="p-10 font-bold text-2xl text-[#0f2f1d]">
            Payments Management
          </div>
        ),
      },
      {
        path: "support",
        element: (
          <div className="p-10 font-bold text-2xl text-[#0f2f1d]">
            Support Tickets
          </div>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/admin" />,
  },
]);
