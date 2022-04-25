import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Member from "../pages/Member";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";
import NotFoundPage from "../pages/norfound";
import User from "../pages/User";
import Create from "../pages/Create";

function App() {
  return (
    <div>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Login />} />
            <Route path="/create" element={<Create />} />
            <Route path="Member" element={<Member />} />
            <Route path="Admin" element={<Admin />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="user" element={<User />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
