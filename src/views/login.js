import { Button, Card, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const Login = (props) => {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("/api/v1/auth/authenticate", values);
      navigate("/dashboard")
      console.log(response.data);
    } catch (error) {}

    // axios.post("/api/v1/auth/authenticate", values).then(function(response){
    //     console.log(response.data)
    // }).catch(err => {
    //     console.log(err)
    // })
  };

  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("Нэвтрэх нэрээ оруулна уу"),
      password: yup.string().required("Нууц үгээ оруулна уу"),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={10} md={8} lg={4}>
        <Card sx={{ borderRadius: 2, padding: 4 }}>
          <form onSubmit={form.handleSubmit}>
            <TextField
              size="small"
              helperText={form.errors.username}
              error={Boolean(form.errors.username)}
              fullWidth
              onChange={form.handleChange}
              name="username"
              label="Нэвтрэх нэр"
            />
            <TextField
              sx={{ marginTop: 2, marginBottom: 2 }}
              size="small"
              fullWidth
              helperText={form.errors.password}
              onChange={form.handleChange}
              name="password"
              type="password"
              error={Boolean(form.errors.password)}
              label="Нууц үг"
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Нэвтрэх
            </Button>
          </form>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
