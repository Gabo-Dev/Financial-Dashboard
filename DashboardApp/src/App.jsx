import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SavingsPage from "./pages/SavingsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";
import LandingPage from "./pages/LandingPage";

import Sidebar from "./components/Sidebar";
import { useState } from "react";

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/savings", element: <SavingsPage /> },
  { path: "/users", element: <UsersPage /> },
  { path: "/sales", element: <SalesPage /> },
  { path: "/orders", element: <OrdersPage /> },
  { path: "/analytics", element: <AnalyticsPage /> },
  { path: "/settings", element: <SettingsPage /> },
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  const handleLogin = () => {
    setIsAuthenticated(true); // Simula el inicio de sesión
  };

  return (
    <>
      <Routes>
        {/* Ruta para la landing page */}
        <Route path="/" element={<LandingPage onLogin={handleLogin} />} />

        {/* Rutas que requieren autenticación */}
        {routes.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            element={isAuthenticated ? (
              <>
                <Sidebar />  {/* Sidebar solo se renderiza si el usuario está autenticado */}
                {route.element}
              </>
            ) : (
              <Navigate to="/" /> // Redirige a la landing page si no está autenticado
            )} 
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
