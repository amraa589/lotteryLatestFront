import React, { useEffect, useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import Page from "../../../components/Page";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import CreateForm from "./CreateForm";
import DeleteForm from "../customer/DeleteForm";
import { ToastContainer } from 'react-toastify';


function Customer() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDeleteForm, setOpenDeleteForm] = useState(false);
  const columns = [
    { field: "id", headerName: "Дугаар", width: 90 },
    {
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
      field: "phoneNumber",
      headerName: "Утасны дугаар",
      width: 200,
      // type: 'number'
    },
    {
      field: "registrationNumber",
      headerName: "Регистерийн  дугаар",
      width: 200,
    },
  ];

  const fetchCustomers = async () => {
    try {
      const response = await axios.get("/api/v1/customer/list");
      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
      <Page>
      <Box
        sx={{
          marginY: 2,
          display: "flex",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <Typography variant="h6" component="h6">
          Хэрэглэгчийн жагсаалт
        </Typography>
        <Box>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Хэрэглэгч нэмэх
          </Button>
          <Button
            variant="contained"
            onClick={() => setOpenDeleteForm(true)}
            sx={{ marginLeft: 5 }}
          >
            Хэрэглэгч устгах
          </Button>
        </Box>
      </Box>
      <CreateForm
        open={open}
        onSuccess={() => {
          setOpen(false);
          fetchCustomers();
        }}
        onClose={() => setOpen(false)}
      />
      <DeleteForm
        open={openDeleteForm}
        onSuccess={() => {
          setOpenDeleteForm(false);
          fetchCustomers();
        }}
        onClose={() => setOpenDeleteForm(false)}
      />
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          rowsPerPageOptions={[5]}
          pageSize={5}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Page>
  );
}

export default Customer;
