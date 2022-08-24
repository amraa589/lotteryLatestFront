import React from "react";
import {Box,Button,Grid,Typography,Drawer} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Page from "../../../components/Page";
import WinnerDrawFormat from "./WinnerDrawFormat"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Winner() {

  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const columns = [{
    field: "firstName",
    headerName: "Нэр",
    width: 100,
  },
  {
    field: "lastName",
    headerName: "Овог",
    width: 100,
  },
  {
    field: "winnerId",
    headerName: "Ялагчын дугаар",
    width: 150,
  },
  {
    field: "phoneNumber",
    headerName: "Утасны дугаар",
    width: 150,
  },
  {
    field: "registrationNumber",
    headerName: "Регистерийн дугаар ",
    width: 180,
  },
  {
    field: "lotteryId",
    headerName: "Суглааны дугаар ",
    width: 150,
  },
  ];


  const fetchWinners = async () => {
    try {
      const response = await axios.get("/api/v1/winner/list");
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchWinners();
  }, []);

  return (
    <Page>
      <Box
        sx={{ marginY: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6" component="h6">
          Азтан жагсаалт
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Азтан тодруулах
        </Button>
      </Box>
      <WinnerDrawFormat
        open={open}
        onSuccess={() => {
          setOpen(false);
          fetchWinners();
        }}
        onClose={() => setOpen(false)}
      />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          rowsPerPageOptions={[5]}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Page>
   
  );
}
