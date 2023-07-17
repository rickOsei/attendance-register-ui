import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Attendance from "./pages/Attendance Page";
import Login from "./pages/LoginPage";
import RootLayout from "./pages/Admin Page";
import Employee from "./pages/Admin Page/Employees Tab";
import Dashboard from "./pages/Admin Page/Dashboard Tab";
import User from "./pages/Admin Page/User Tab";
import AttendanceTable from "./pages/Admin Page/Attendance Tab";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<RootLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employee" element={<Employee />} />
            <Route path="user" element={<User />} />
            <Route path="attendance" element={<AttendanceTable />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
