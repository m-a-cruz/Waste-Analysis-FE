import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPassword from "./ForgotPassword";
import VerifyCode from "./VerifyCode";
import SetNewPassword from "./SetNewPassword";
import Dashboard from "./Dashboard";
import AccountSettings from "./AccountSettings";
<<<<<<< HEAD
=======
import HelpPage from "./HelpPage";
import ReportAProblem from "./ReportAProblem";
>>>>>>> origin/master

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/forgotpassword/verifycode" element={<VerifyCode />} />
        <Route path="/forgotpassword/verifycode/setnewpassword" element={<SetNewPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/accountsettings" element={<AccountSettings />} />
<<<<<<< HEAD
=======
        <Route path="/dashboard/HelpPage" element={<HelpPage />} />
        <Route path="/dashboard/ReportAProblem" element={<ReportAProblem />} />


>>>>>>> origin/master
      </Routes>
    </Router>
  );
}

export default App;
