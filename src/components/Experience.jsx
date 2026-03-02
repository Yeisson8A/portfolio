import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../data/experience.json";

const MotionBox = motion(Box);

export default function Experience() {
  return (
    <Box component="section" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <MotionBox
          textAlign="center"
          mb={8}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography variant="overline" color="primary">
            Explore my
          </Typography>

          <Typography variant="h3" fontWeight={700}>
            Experience
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {experienceData.map((job, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <ExperienceCard {...job} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}