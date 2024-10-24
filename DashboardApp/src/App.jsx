import { Routes, Route, Navigate, useLocation } from "react-router-dom";
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
  // Get the current location
  const location = useLocation();
  //  Verify if the location contains the landing page
  const isLandingPage = location.pathname === "/";



  return (
    <>
      {/* Show Sidebar only if it's not the landing page */}
      {!isLandingPage && <Sidebar />}
      <Routes>
        {/* Ruta para la landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Rutas que requieren autenticación */}
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
