import { SendOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/login";
import Dashboard from "./views/dashboard/dashboard";
import User from "./views/dashboard/user/index";
import Lottery from "./views/dashboard/lottery/index";
import Customer from "./views/dashboard/customer/index";
import Winner from "./views/dashboard/winner/winner";

function App() {
  return (
    <ThemeProvider theme={createTheme({})}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/user" element={<User />} />
          <Route path="/dashboard/lottery" element={<Lottery />} />
          <Route path="/dashboard/customer" element={<Customer />} />
          <Route path="/dashboard/winner" element={<Winner />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
