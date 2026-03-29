import { Card, CardContent, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function SkillCategoryCard({ title, skills = [] }) {
  return (
    <MotionCard
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      sx={{
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mb: 2, wordBreak: "break-word", overflowWrap: "break-word" }}
        >
          {title}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
          sx={{ gap: 1 }}
        >
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              size="medium"
              color="primary"
              variant="contained"
            />
          ))}
        </Stack>
      </CardContent>
    </MotionCard>
  );
}
