import React, { useEffect, useState } from "react";
import { Button, Typography,Box } from "@mui/material";
import Page from "../../../components/Page";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import CreateForm from "./CreateForm";

function Lottery() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  
  const columns = [
    { field: "id", headerName: "Дугаар", width: 80 },
    {
      field: "name",
      headerName: "Нэр",
      width: 100,
    },
    {
      field: "banner",
      headerName: "Зураг",
      width: 100,
    },
    {
      field: "description",
      headerName: "Тайлбар",
      width: 150,
    },
    {
      field: "endDate",
      headerName: "Дуусах хугацаа",
      width: 150,
    },
    {
      field: "runningDate",
      headerName: "Явж буй өдөр",
      width: 150,
    },
    {
      field: "startDate",
      headerName: "Эхлэсэн хугацаа",
      width: 150,
    },
    {
      field: "numberOfWinners",
      headerName: "Ялагчдын тоо",
      width: 150,
    },
  ];

  const fetchLotteries = async () => {
    try {
      const response = await axios.get("/api/v1/lottery/list");
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchLotteries();
  }, []);

  return (
    <Page>
      <Box
        sx={{ marginY: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6" component="h6">
          Сугалааны жагсаалт
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Сугалаа нэмэх
        </Button>
      </Box>
      {/* <CreateForm
        open={open}
        onSuccess={() => {
          setOpen(false);
          fetchLotteries();
        }}
        onClose={() => setOpen(false)}
      /> */}
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

export default Lottery;
