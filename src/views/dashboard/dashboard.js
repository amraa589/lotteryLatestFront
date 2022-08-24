import { Box, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import React, { useEffect, useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Drawer from "../../components/drawer";

const DashBoard = (props) => {
  // process.env.REACT_APP_AMARAA
  const navigate = useNavigate();

  useEffect(() => {
    const tmp = localStorage.getItem("data");
    if(!tmp) navigate("/");
  }, [])
  return (
    <div>
      <Drawer />
      <Box sx={{ paddingLeft: 32 }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default DashBoard;
