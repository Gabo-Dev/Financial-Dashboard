import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SavingsPage from "./pages/SavingsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import LandingPage from "./pages/LandingPage";
import Sidebar from "./components/Sidebar";

function App() {
  const routes = [
    { path: "/home", element: <Home /> },
    { path: "/savings", element: <SavingsPage /> },
    { path: "/users", element: <UsersPage /> },
    { path: "/sales", element: <SalesPage /> },
    { path: "/orders", element: <OrdersPage /> },
    { path: "/analytics", element: <AnalyticsPage /> },
    { path: "/settings", element: <SettingsPage /> },
  ];
  // Verificar si estamos en la página de inicio
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="flex h-full bg-gray-900 text-gray-100 overflow-hidden">
      {/* Background overlay */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-900
           via-gray-800 to-gray-900 opacity-80"
        />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>

      {/* Render the sidebar if we're not on the landing page */}
      {!isLandingPage && <Sidebar />}

      {/* Main container */}
      <div className="flex-1  relative max-h-screen overflow-y-auto ">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
