import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  Avatar,
  Stack
} from "@mui/material";

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function About() {
  return (
    <Box component="section" id="about" sx={{ py: 12, backgroundColor: "#f8fbff" }}>
      <Container maxWidth="lg">

        {/* Título */}
        <MotionBox
          textAlign="center"
          mb={8}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="overline" color="primary">
            Get to know more
          </Typography>

          <Typography variant="h3" fontWeight={700}>
            About Me
          </Typography>
        </MotionBox>

        <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>

          {/* Imagen */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Avatar
              src={aboutImg}
              sx={{
                width: "100%",
                height: 350,
                borderRadius: "25px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
              }}
            />
          </Grid>

          {/* Experience */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card
                sx={{
                  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  p: 4,
                  flex: 1,
                  height: "200px",
                }}
              >
                <WorkOutlineIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" fontWeight={600}>
                  Experience
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  8+ years
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Backend, FullStack Development and Data Engineer
                </Typography>
              </Card>
            </motion.div>
          </Grid>

          {/* Education */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card
                sx={{
                  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  p: 4,
                  flex: 1,
                  height: "200px",
                }}
              >
                <SchoolOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
                <Typography variant="h6" mt={2} fontWeight={600}>
                  Education
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Systems Technologist
                </Typography>
              </Card>
            </motion.div>
          </Grid>

        </Grid>
        
        <Grid container spacing={6} alignItems="center">
          {/* Contenido */}
          <Grid size={{ xs: 12, md: 12 }}>
            <Stack spacing={4}>
              {/* Texto */}
              <MotionBox
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  I am a Software Developer with over 8 years of experience, with 6 years of backend and fullstack knowledge, as well as 1 year of data engineering experience.
                  I am currently a backend-oriented software developer, but with knowledge of frontend, data engineering, and automation.
                  I am currently learning NestJS, Airflow, and Databricks.
                  I am passionate about games, movies, literature, and writing.
                </Typography>
              </MotionBox>

            </Stack>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}