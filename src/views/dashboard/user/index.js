import React, { useEffect, useState } from "react";
import { Button, Typography,Box } from "@mui/material";
import Page from "../../../components/Page";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import CreateForm from "./CreateForm";

 function User() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const columns = [
    { field: "id", headerName: "Дугаар", width: 90 },
    {
      field: "firstName",
      headerName: "Нэр",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Овог",
      width: 150,
    },
    {
      field: "username",
      headerName: "Нэвтрэх нэр",
      width: 110,
    },
    {
      field: "email",
      headerName: "И-мэйл",
      width: 300,
    },
  ];

  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/v1/user/list");
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    // <Grid>
    <Page>
      <Box
        sx={{ marginY: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6" component="h6">
          Хэрэглэгчийн жагсаалт
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Хэрэглэгч нэмэх
        </Button>
      </Box>
      <CreateForm
        open={open}
        onSuccess={() => {
          setOpen(false);
          fetchUsers();
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
    // </Grid>
  );
}

export default User;