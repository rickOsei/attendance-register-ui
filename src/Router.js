import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Attendance from "./pages/Attendance Page";
import Login from "./pages/LoginPage";
import RootLayout from "./pages/Admin Page";
import Employee from "./pages/Admin Page/Employee Tab/Employee";
import Dashboard from "./pages/Admin Page/Dashboard Tab/Dashboard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employee" element={<Employee />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
