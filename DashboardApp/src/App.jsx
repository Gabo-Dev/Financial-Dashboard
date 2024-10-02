import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

import Sidebar from "./components/Sidebar";
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
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/Users" element={<UsersPage />} />
        <Route path="/Sales" element={<SalesPage />} />
        <Route path="/Orders" element={<OrdersPage />} />
        <Route path="/Analytics" element={<AnalyticsPage />} />
        <Route path="/Settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
