import {
  DialogContent,
  TextField,
  Typography,
  Grid,
  Dialog,
} from "@mui/material";
import React from "react";
import * as yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";

function CreateLottery({ open, onClose, onSuccess, ...props }) {
  const onSubmit = async (values) => {
    try {
      await axios.post("/api/v1/lottery/create", values);
      onSuccess();
    //   toast.success("Амжилттай lottery нэмлээ");
      form.resetForm();
    } catch (error) {
    //   toast.error("Алдаа гарлаа");
    }
  };
  const form = useFormik({
    initialValues: {
      name: "",
      description: "",
      banner: "",
      enddate: "",
      numberofwinners: "",
      runningdate: "",
      startdate: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Нэрийг оруулна уу"),
      description: yup.string().required("Тайлбарыг оруулна уу"),
      banner: yup.string().required("Зураг заавал оруулна уу"),
      enddate: yup.string().required("Дуусах өдрийг оруулна уу"),
      numberofwinners: yup.string().required("Ялагчдын тоог оруулна уу"),
      runningdate: yup.string().required("Running Date оруулна уу"),
      startdate: yup.string().required("Эхлэх өдрийг оруулна уу"),
    }),
    onSubmit,
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <form onSubmit={form.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Сугалаа Нэмэх</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                name="name"
                onChange={form.handleChange()}
                helperText={form.errors.name}
                error={Boolean(form.errors.name && form.touched.name)}
                value={form.values.name}
                label="Name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                name="name"
                onChange={form.handleChange()}
                helperText={form.errors.name}
                error={Boolean(form.errors.name && form.touched.name)}
                value={form.values.name}
                label="Name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                name="name"
                onChange={form.handleChange()}
                helperText={form.errors.name}
                error={Boolean(form.errors.name && form.touched.name)}
                value={form.values.name}
                label="Name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                name="name"
                onChange={form.handleChange()}
                helperText={form.errors.name}
                error={Boolean(form.errors.name && form.touched.name)}
                value={form.values.name}
                label="Name"
              />
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CreateLottery;
