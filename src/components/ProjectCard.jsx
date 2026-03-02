import {
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Chip
} from "@mui/material";

import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import SlideshowIcon from '@mui/icons-material/Slideshow';

const MotionCard = motion(Card);

export default function ProjectCard({
  title,
  description,
  technologies = [],
  github,
  demo
}) {
  return (
    <MotionCard
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      sx={{
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
        height: "300px",
        width: "100%",
        flex: 1,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography variant="h6" fontWeight={600} gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ wordBreak: "break-word", overflowWrap: "break-word", mb: 2 }}
        >
          {description}
        </Typography>

        {/* Tecnologías */}
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          sx={{ gap: 1, maxWidth: "100%", mb: 2, justifyContent: "flex-start" }}
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

        {/* Botones */}
        <Stack direction="row" spacing={2} mt="auto">
          {github && (
            <Button
              variant="text"
              startIcon={<GitHubIcon />}
              href={github}
              target="_blank"
              sx={{
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              GitHub
            </Button>
          )}

          {demo && (
            <Button
              variant="text"
              startIcon={<SlideshowIcon />}
              href={demo}
              target="_blank"
              sx={{
                textTransform: "none",
                fontWeight: 500,
              }}
            >
              Live Demo
            </Button>
          )}
        </Stack>
      </CardContent>
    </MotionCard>
  );
}