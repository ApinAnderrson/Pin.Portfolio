import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import CompanyProfile from "./pages/companyProfile/company_profile";
import ManagementSystem from "./pages/managementSystem/management_system";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route
        path="/company_profile"
        element={<CompanyProfile />}
      />

      <Route
        path="/management_system"
        element={<ManagementSystem />}
      />

      <Route
        path="*"
        element={<div>404 - Page not found</div>}
      />
    </Routes>
  );
};

export default App;