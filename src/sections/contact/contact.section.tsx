import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    subject: Yup.string().required('Subject is required'),
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
})

export const ContactSection: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      subject: "",
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (value) => {
      alert(value.subject);
    },
  });

  return (
    <Container>
      <Typography>Contact Me</Typography>
      <form onSubmit={formik.handleSubmit} noValidate>
        <Box sx={{ mt: "20px", mb: '40px' }}>
          <TextField
            fullWidth
            id="subject"
            label="Subject"
            size="small"
            sx={{ mb: "30px" }}
            {...formik.getFieldProps("subject")}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
          />
          <TextField
            fullWidth
            id="fullName"
            label="Full Name"
            size="small"
            sx={{ mb: "30px" }}
            {...formik.getFieldProps("fullName")}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <TextField
            fullWidth
            id="email"
            label="Email"
            size="small"
            sx={{ mb: "30px" }}
            {...formik.getFieldProps("email")}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="message"
            label="Message"
            multiline
            rows="5"
            variant="outlined"
            size="small"
            sx={{ mb: "30px" }}
            {...formik.getFieldProps("message")}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
          <Button fullWidth type="submit" color="secondary" variant="contained">
            Send Message
          </Button>
        </Box>
      </form>
    </Container>
  );
};
