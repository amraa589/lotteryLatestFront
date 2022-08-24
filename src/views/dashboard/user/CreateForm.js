import {
  DoNotDisturbOnTotalSilenceTwoTone,
  SaveOutlined,
} from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import toast from "react-hot-toast";
const CreateUser = ({ open, onClose, onSuccess, ...props }) => {
  const onSubmit = async (values) => {
    try {
      await axios.post("/api/v1/user/create", values);
      onSuccess();
      toast.success("Амжилттай хэрэглэгч нэмлээ");
      form.resetForm();
    } catch (error) {
      toast.error("Алдаа гарлаа");
    }
  };
  const form = useFormik({
    initialValues: {
      username: "",
      lastName: "",
      firstName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      username: yup.string().required("Заавал оруулна уу"),
      lastName: yup.string().required("Заавал оруулна уу"),
      firstName: yup.string().required("Заавал оруулна уу"),
      email: yup
        .string()
        .required("Заавал оруулна уу")
        .email("Зөв и-мэйл оруулна уу"),
      password: yup.string().required("Заавал оруулна уу"),
    }),
    onSubmit,
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <form onSubmit={form.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Хэрэглэгч нэмэх</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                name="firstName"
                onChange={form.handleChange}
                helperText={form.errors.firstName}
                error={Boolean(form.errors.firstName && form.touched.firstName)}
                value={form.values.firstName}
                label="Нэр"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="lastName"
                size="small"
                onChange={form.handleChange}
                helperText={form.errors.lastName}
                error={Boolean(form.errors.lastName && form.touched.lastName)}
                value={form.values.lastName}
                label="Овог"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                name="username"
                size="small"
                onChange={form.handleChange}
                helperText={form.errors.username}
                error={Boolean(form.errors.username && form.touched.username)}
                value={form.values.username}
                label="Нэвтрэх нэр"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                name="email"
                onChange={form.handleChange}
                helperText={form.errors.email}
                error={Boolean(form.errors.email && form.touched.email)}
                value={form.values.email}
                label="И-мэйл"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                fullWidth
                type="password"
                name="password"
                onChange={form.handleChange}
                helperText={form.errors.password}
                error={Boolean(form.errors.password && form.touched.password)}
                value={form.values.password}
                label="Нууц үг"
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                disabled={form.isSubmitting}
                type="submit"
                color="secondary"
                variant="contained"
                startIcon={
                  form.isSubmitting ? <CircularProgress /> : <SaveOutlined />
                }
              >
                {form.isSubmitting ? "Түр хүлээнэ үү" : "Хадгалах"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateUser;
