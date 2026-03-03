import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

const MotionBox = motion(Box);

export default function Projects() {
  return (
    <Box component="section" id="projects" sx={{ py: 12, backgroundColor: "#f8fbff" }}>
      <Container maxWidth="lg">
        <MotionBox
          textAlign="center"
          mb={8}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="h3" fontWeight={700}>
            Projects
          </Typography>
        </MotionBox>

        <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
