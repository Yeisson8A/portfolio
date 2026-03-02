import { Card, CardContent, Typography, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

export default function ExperienceCard({
  role,
  company,
  period,
  technologies = []
}) {
  return (
    <MotionCard
      whileHover={{ y: -8 }}
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
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
        }}
      >
        {/* Cargo */}
        <Typography variant="h6" fontWeight={600}>
          {role}
        </Typography>

        {/* Empresa */}
        <Typography
          variant="subtitle1"
          color="primary"
          fontWeight={500}
          sx={{ mt: 0.5 }}
        >
          {company}
        </Typography>

        {/* Periodo */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {period}
        </Typography>

        {/* Tecnologías */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          sx={{ gap: 1, mt: "auto", justifyContent: "flex-start" }}
        >
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>
      </CardContent>
    </MotionCard>
  );
}