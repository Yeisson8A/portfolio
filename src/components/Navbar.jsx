import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { motion } from "framer-motion";

const sections = ["about", "projects", "experience", "skills", "contact"];

const MotionAppBar = motion(AppBar);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <>
      <MotionAppBar
        position="fixed"
        elevation={0}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          backgroundColor: "rgba(248, 251, 255, 0.8)",
          backdropFilter: "blur(10px)",
          boxShadow: trigger ? "0 8px 30px rgba(0, 0, 0, 0.08)" : "none",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            width: "100%",
            mx: "auto",
            px: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ cursor: "pointer", color: "text.primary" }}
            onClick={() => handleScroll("main")}
          >
            Portfolio
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {sections.map((section) => (
              <Button
                key={section}
                onClick={() => handleScroll(section)}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: 600,
                  fontSize: "1rem",
                  letterSpacing: "0.5px",
                  px: 2,
                  color: "text.primary",
                  // Quitar borde negro de focus
                  "&:focus": {
                    outline: "none",
                    backgroundColor: "primary.main",
                    color: "#fff",
                  },
                }}
              >
                {section}
              </Button>
            ))}
          </Box>

          {/* Mobile menu icon */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon sx={{ color: "text.primary" }} />
          </IconButton>
        </Toolbar>
      </MotionAppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {sections.map((section) => (
              <ListItemButton
                key={section}
                onClick={() => handleScroll(section)}
              >
                <ListItemText
                  primary={section.charAt(0).toUpperCase() + section.slice(1)}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
