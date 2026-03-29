import { Box, Typography, Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import SkillCategoryCard from "./SkillCategoryCard";
import skillsData from "../data/skills.json";

const MotionBox = motion(Box);

export default function SkillsSection() {
  return (
    <Box
      component="section"
      id="skills"
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
            variant="overline"
            color="primary"
            sx={{ wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            Explore my
          </Typography>

          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ wordBreak: "break-word", overflowWrap: "break-word" }}
          >
            Skills
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {skillsData.map((category, index) => (
            <Grid size={{ xs: 12, md: 12 }} key={index}>
              <SkillCategoryCard {...category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
