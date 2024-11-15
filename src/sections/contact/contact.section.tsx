import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  SnackbarCloseReason,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import LoadingButton from "@mui/lab/LoadingButton";
import { send } from "emailjs-com";

const phoneRegExp =
  /^\([0-9]{3}\)[ \\-]*([0-9]{2,4}[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  from_name: Yup.string().required("Full Name is required"),
  from_phone: Yup.string().matches(
    phoneRegExp,
    "Phone number is not valid, please format (000)000-0000"
  ),
  from_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export const ContactSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState(null);

  //TODO: update with .env
  let SERVICE_ID = "service_4fy0ly9";
  let TEMPLATE_ID = "template_d3h5g6b";
  let USER_ID = "user_gRy2qZIBMpabtOeWDIjQ5";

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    console.log(reason);
    if (reason === "clickaway") {
      setIsSubmitted(false);
      return;
    }
    setIsSubmitted(false);
    setError(null);
    console.log({ close: isSubmitted, isLoading, error });
  };

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_phone: "",
      from_email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value, actions) => {
      console.log({ submitted: isSubmitted, isLoading, error });
      setIsLoading(true);
      const template = {
        from_name: value.from_name,
        from_phone: value.from_phone,
        from_email: value.from_email,
        message: value.message,
      };
      send(SERVICE_ID, TEMPLATE_ID, template, USER_ID)
        .then((res) => {
          if (res.status === 200) {
            handleSubmit();
            actions.resetForm();
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.log("Error sending email", error);
          setError(error.message);
        });
      setIsLoading(false);
    },
  });

  return (
    <Container className="section">
      {isSubmitted && (
        <Snackbar
          open={isSubmitted}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Message Sent Succesfully!
          </Alert>
        </Snackbar>
      )}
      {!isSubmitted && !!error}
      <Snackbar
        open={!!error && !isSubmitted}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          Failed to send message!
        </Alert>
      </Snackbar>
      <Typography sx={{ mx: "auto" }} className="sectionTitle" variant="h1">
        Contact
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        noValidate
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className="formContainer"
          sx={{
            display: "flex",
            flexDirection: "column", // Ensures form fields are stacked
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            width: "50%",
            mt: "20px",
            mb: "40px",
          }}
        >
          <TextField
            variant="filled"
            required
            fullWidth
            id="from_name"
            label="Full Name"
            size="small"
            sx={{ mb: "30px" }}
            {...formik.getFieldProps("from_name")}
            error={formik.touched.from_name && Boolean(formik.errors.from_name)}
            helperText={formik.touched.from_name && formik.errors.from_name}
          />
          <TextField
            variant="filled"
            fullWidth
            id="from_phone"
            label="Phone Number "
            placeholder="(000)000-0000"
            size="small"
            sx={{ mb: "30px" }}
            {...formik.getFieldProps("from_phone")}
            error={
              formik.touched.from_phone && Boolean(formik.errors.from_phone)
            }
            helperText={formik.touched.from_phone && formik.errors.from_phone}
          />
          <TextField
            variant="filled"
            required
            fullWidth
            id="from_email"
            label="from_email"
            size="small"
            sx={{ mb: "30px" }}
            {...formik.getFieldProps("from_email")}
            error={
              formik.touched.from_email && Boolean(formik.errors.from_email)
            }
            helperText={formik.touched.from_email && formik.errors.from_email}
          />
          <TextField
            variant="filled"
            required
            fullWidth
            id="message"
            label="Message"
            multiline
            rows="5"
            size="small"
            sx={{ mb: "30px" }}
            {...formik.getFieldProps("message")}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          {isLoading ? (
            <LoadingButton
              loading
              color="secondary"
              variant="outlined"
              fullWidth
            >
              {" "}
              submit
            </LoadingButton>
          ) : (
            <Button
              fullWidth
              type="submit"
              color="secondary"
              variant="contained"
            >
              Send Message
            </Button>
          )}
        </Box>
      </form>
    </Container>
  );
};
