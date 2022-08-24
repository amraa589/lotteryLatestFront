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
import theme from "./util/theme";
import Page404 from "./views/404";
import { ToastContainer } from "react-toastify";
function App() {
  return (

      <ThemeProvider theme={createTheme(theme)}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />}>
              <Route path="winner" element={<Winner />} />
              <Route path="user" element={<User />} />
              <Route path="lottery" element={<Lottery />} />
              <Route path="customer" element={<Customer />} />
              <Route path="*" element={<Page404 />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
