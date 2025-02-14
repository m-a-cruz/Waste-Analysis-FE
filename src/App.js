import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPassword from "./ForgotPassword";
import VerifyCode from "./VerifyCode";
import SetNewPassword from "./SetNewPassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/forgotpassword/verifycode" element={<VerifyCode />} />
        <Route path="/forgotpassword/verifycode/setnewpassword" element={<SetNewPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
