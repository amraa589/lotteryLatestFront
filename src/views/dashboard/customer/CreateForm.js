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
// import toast from "react-hot-toast";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateCustomer = ({ open, onClose, onSuccess, ...props }) => {
  const onSubmit = async (values) => {
    try {
      await axios.post("/api/v1/customer/create", values);
      onSuccess();
      
      // toast("Хэрэглэгчийг амжилттай нэмлээ",{
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   });

      // toast.success("Хэрэглэгчийг амжилттай нэмлээ", { autoClose: 10000 });
      form.resetForm();
    } catch (error) {
      toast.error("Алдаа гарлаа", { autoClose: 10000 });
    }
  };
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      registrationNumber: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required("Утга заавал оруулна уу"),
      lastName: yup.string().required("Утга заавал оруулна уу"),
      phoneNumber: yup.string().required("Утга заавал оруулна уу"),
      registrationNumber: yup.string().required("Утга заавал оруулна уу"),
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
                name="phoneNumber"
                size="small"
                onChange={form.handleChange}
                helperText={form.errors.phoneNumber}
                error={Boolean(
                  form.errors.phoneNumber && form.touched.phoneNumber
                )}
                value={form.values.phoneNumber}
                label="Утасны дугаар"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                name="registrationNumber"
                onChange={form.handleChange}
                helperText={form.errors.registrationNumber}
                error={Boolean(
                  form.errors.registrationNumber &&
                    form.touched.registrationNumber
                )}
                value={form.values.registrationNumber}
                label="Регистерийн дугаар"
              />
            </Grid>

            <Grid item xs={6}></Grid>
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

export default CreateCustomer;
