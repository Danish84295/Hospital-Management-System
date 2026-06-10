import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Doctors from "../pages/Doctors";
import BookAppointment from "../pages/BookAppointment";
import Dashboard from "../pages/Dashboard";
import Navbar from "../components/Navbar";

function AppRoutes() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route 
            path="/" 
            element={
                <Home />
            } />
      <Route 
            path="/login" 
            element={
                <Login />
            } />
      <Route
            path="/register" 
            element={
                <Register />
            } />
      <Route 
            path="/doctors" 
            element={
                <Doctors />
            } />
      <Route 
            path="/book" 
            element={
                <BookAppointment />
            } />
      <Route 
            path="/dashboard" 
            element={
                <Dashboard />
            } />

        <Route
            path='/book/:id'
            element={
                <BookAppointment/>
            }
        /> 
    </Routes>
    </>
  );
}

export default AppRoutes;