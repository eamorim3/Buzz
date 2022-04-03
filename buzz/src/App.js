import { useState } from "react";
import Dashboard from "./Dashboard";


import RegisterPage from "./RegisterPage";
function App() {
  
  
  let isRegisterPage = false;
  let isDashboardPage = true;
  
  if (isRegisterPage) {
    return <RegisterPage/>
  }
  if (isDashboardPage) {
    return  <Dashboard/>
  } 
}

export default App;
