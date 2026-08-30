// import {useGSAP} from "@gsap/react";
// import Dashboard from "./pages/dashboard.tsx"

import CompanyProfile from "./pages/companyProfile/company_profile";
import Dashboard from "./pages/dashboard";
import ManagementSystem from "./pages/managementSystem/management_system";

const App = () => {
  const path = window.location.pathname;
  if(path == '/Pin.Portfolio/'){
    return <Dashboard/>
  } 
  else if (path == '/Pin.Portfolio/company_profile'){
    return <CompanyProfile/>
  }
  else if (path == '/Pin.Portfolio/management_system'){
    return <ManagementSystem/>
  }
  else {
    return path == '/Pin.Portfolio/'
  }
};

export default App;





