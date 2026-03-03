import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Stack,
  Card,
  CardContent,
  Dialog,
} from "@mui/material";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionCheck = motion(CheckCircleIcon);

// Validación
const schema = yup.object({
  from_name: yup.string().required("Name is required"),
  from_email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

// Seguridad
const RATE_LIMIT_MINUTES = 2;

const canSendMessage = () => {
  const lastSent = localStorage.getItem("last_message_time");
  if (!lastSent) return true;

  const diff = Date.now() - parseInt(lastSent, 10);
  const minutesPassed = diff / 1000 / 60;

  return minutesPassed > RATE_LIMIT_MINUTES;
};

export default function ContactSection() {
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // 🛡️ Honeypot check
    if (data.website) {
      console.warn("Spam detected (honeypot)");
      return;
    }

    // 🛡️ Rate limit check
    if (!canSendMessage()) {
      alert("Please wait a couple of minutes before sending another message.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      localStorage.setItem("last_message_time", Date.now().toString());

      setSuccessOpen(true);
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="section" id="contact" sx={{ py: 12 }}>
      <Container maxWidth="sm">
        <MotionBox
          textAlign="center"
          mb={6}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" fontWeight={700}>
            Contact me
          </Typography>
        </MotionBox>

        <MotionCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
          }}
        >
          <CardContent>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <TextField
                  label="Full Name"
                  {...register("from_name")}
                  error={!!errors.from_name}
                  helperText={errors.from_name?.message}
                  fullWidth
                />

                <TextField
                  label="Email"
                  type="email"
                  {...register("from_email")}
                  error={!!errors.from_email}
                  helperText={errors.from_email?.message}
                  fullWidth
                />

                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  {...register("message")}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  fullWidth
                />

                <TextField
                  label="Website"
                  {...register("website")}
                  sx={{ display: "none" }}
                  autoComplete="off"
                />

                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  disabled={loading}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: "12px",
                    py: 1.5,
                  }}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </Stack>
            </Box>
          </CardContent>
        </MotionCard>

        {/* Dialog de éxito con animación */}
        <Dialog open={successOpen} onClose={() => setSuccessOpen(false)}>
          <Box
            sx={{
              p: 5,
              textAlign: "center",
            }}
          >
            <MotionCheck
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              sx={{ fontSize: 80, color: "#4caf50" }}
            />
            <Typography variant="h6" mt={2}>
              Message Sent Successfully!
            </Typography>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
}
