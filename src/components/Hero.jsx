import { Box, Typography, Button, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <MotionBox
      component="section"
      id="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Imagen animada */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar
          src={profileImg}
          sx={{
            width: { xs: 220, md: 250 },
            height: { xs: 220, md: 250 },
            boxShadow: "0 25px 60px rgba(37, 99, 235, 0.3)",
            border: "6px solid white",
          }}
        />
      </motion.div>

      {/* Texto animado */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h6" color="primary" gutterBottom>
          Hello, I'm
        </Typography>

        <Typography variant="h4" gutterBottom fontWeight="fontWeightBold">
          Yeisson Alexander Ochoa Villa
        </Typography>

        <Typography variant="h5" color="text.secondary" mb={4}>
          Software Developer | Data Engineer
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="outlined"
            size="large"
            href="https://drive.google.com/drive/folders/1aSJ9iM8EC9zlndKHfb7NavSJrFozUaIn?usp=sharing"
            target="_blank"
          >
            Download CV
          </Button>

          <Button
            variant="contained"
            size="large"
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact
          </Button>
        </Stack>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 3 }}
        >
          <Button
            variant="text"
            startIcon={<GitHubIcon />}
            href="https://github.com/Yeisson8A"
            target="_blank"
            sx={{
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            GitHub
          </Button>

          <Button
            variant="text"
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/yeisson-alexander-ochoa-villa/"
            target="_blank"
            sx={{
              textTransform: "none",
              fontWeight: 500,
            }}
          >
            LinkedIn
          </Button>
        </Stack>
      </motion.div>
    </MotionBox>
  );
}
