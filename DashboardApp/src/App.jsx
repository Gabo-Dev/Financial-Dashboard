import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SavingsPage from "./pages/SavingsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

import Sidebar from "./components/Sidebar";
const routes = [
  { path: "/", element: <Home /> },
  { path: "/savings", element: <SavingsPage /> },
  { path: "/users", element: <UsersPage /> },
  { path: "/sales", element: <SalesPage /> },
  { path: "/orders", element: <OrdersPage /> },
  { path: "/analytics", element: <AnalyticsPage /> },
  { path: "/settings", element: <SettingsPage /> },
];
function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900
           via-gray-800 to-gray-900 opacity-80"
        />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      <Sidebar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
