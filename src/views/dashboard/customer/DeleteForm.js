import React from "react";
import * as yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

function DeleteForm({open, onClose, onSuccess, ...props}) {
  const onSubmit = async (values) => {
    try {
      await axios.post("/api/v1/customer/delete", values);
      onSuccess();
      toast.success("Хэрэглэгчийг амжилттай устгалаа");
      form.resetForm();
    } catch (error) {
      toast.error("Алдаа гарлаа");
    }
  };

  const form = useFormik({
    initialValues: {
      id: "",
    },
    validationSchema: yup.object({
      id: yup.string().required("Дугаарыг оруулж өгнө үү"),
    }),
    onSubmit,
  });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <form onSubmit={form.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>Хэрэглэгч устгах</Typography>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                size="small"
                name="id"
                onChange={form.handleChange}
                helperText={form.errors.id}
                error={Boolean(form.errors.id && form.touched.id)}
                value={form.values.id}
                label="Дугаар"
              />
            </Grid>

            <Grid item xs={6}>
              <Button
                disabled={form.isSubmitting}
                type="submit"
                color="secondary"
                variant="contained"
                startIcon={
                  form.isSubmitting ? <CircularProgress /> : <DeleteOutline />
                }
              >
                {form.isSubmitting ? "Түр хүлээнэ үү" : "Устгах"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteForm;
