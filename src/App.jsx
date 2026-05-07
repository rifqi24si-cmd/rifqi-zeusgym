import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const Trainers = lazy(() => import("./pages/Trainers"));
const Jadwal = lazy(() => import("./pages/Jadwal"));
const Profile = lazy(() => import("./pages/Profile"));
const Error400 = lazy(() => import("./pages/Error400"));
const Error401 = lazy(() => import("./pages/Error401"));
const Error403 = lazy(() => import("./pages/Error403"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot = lazy(() => import("./pages/auth/Forgot"));
const Statistik = lazy(() => import("./pages/Statistik"));
const Absensi = lazy(() => import("./pages/Absensi"));
const Membership = lazy(() => import("./pages/Membership"));
const Pengumuman = lazy(() => import("./pages/Pengumuman"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/error/400" element={<Error400 />} />
          <Route path="/error/401" element={<Error401 />} />
          <Route path="/error/403" element={<Error403 />} />
          <Route path="/statistik" element={<Statistik />} />
          <Route path="/absensi" element={<Absensi />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/pengumuman" element={<Pengumuman />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;