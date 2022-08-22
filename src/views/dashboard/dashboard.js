import { Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drawer from "../../components/drawer"


const DashBoard = (props) => {

  return (
    // <BrowserRouter>
    //     <Route path="/dashboard/user" element={<User/>}/>
    //         <Route path="/dashboard/lottery" element={<Lottery/>}/>
    //         <Route path="/dashboard/customer" element={<Customer/>}/>
    //         <Route path="/dashboard/winner" element={<Winner/>}/>
    // </BrowserRouter>
    <Drawer/>



  );
};

export default DashBoard;
