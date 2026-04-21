import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

const MotionBox = motion(Box);

export default function Projects() {
  const [page, setPage] = useState(1);
  const projectsPerPage = 4;

  const startIndex = (page - 1) * projectsPerPage;
  const selectedProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <Box
      component="section"
      id="projects"
      sx={{ py: 12, backgroundColor: "#f8fbff" }}
    >
      <Container maxWidth="lg">
        <MotionBox
          textAlign="center"
          mb={8}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            Projects
          </Typography>
        </MotionBox>

        <Grid container spacing={4} alignItems="center" sx={{ mb: 6 }}>
          {selectedProjects.map((project, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
        <Stack alignItems="center" mt={6}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(e, value) => setPage(value)}
            color="primary"
            shape="circular"
            size="large"
          />
        </Stack>
      </Container>
    </Box>
  );
}
