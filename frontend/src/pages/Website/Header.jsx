import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Stack,
  Box,
  Typography,
  Link,
  Button,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";

import { Link as RouterLink, useLocation } from "react-router-dom";
import BoltIcon from "@mui/icons-material/Bolt";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Comparisons", path: "/comparisons" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "Contact us", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const Logo = (
    <Stack
      component={RouterLink}
      to="/"
      direction="row"
      spacing={1}
      alignItems="center"
      onClick={() => setMobileOpen(false)}
      sx={{
        textDecoration: "none",
        color: "#0F172A",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: "12px",
          bgcolor: "#FFF7ED",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <BoltIcon
          sx={{
            color: "#E8590C",
            fontSize: 24,
          }}
        />
      </Box>

      <Typography
        sx={{
          fontSize: { xs: 17, sm: 19 },
          fontWeight: 700,
          letterSpacing: "-0.4px",
          whiteSpace: "nowrap",
        }}
      >
        Rapid Sales
      </Typography>
    </Stack>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
        bgcolor: "#FFFFFF",
        color: "#0F172A",
        borderBottom: "1px solid #F1F5F9",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: "64px", md: "72px" },
            display: "flex",
            justifyContent: "space-between",
            gap: { xs: 1, md: 3 },
          }}
        >
          {/* LOGO */}
          {Logo}

          {/* NAVIGATION - desktop */}

          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.path}
                  underline="none"
                  sx={{
                    fontSize: 16,

                    fontWeight: isActive ? 600 : 400,

                    color: isActive ? "#F97316" : "#475569",

                    pb: 0.5,

                    cursor: "pointer",

                    borderBottom: isActive
                      ? "2px solid #F97316"
                      : "2px solid transparent",

                    transition: "all 0.2s ease",

                    "&:hover": {
                      color: "#F97316",
                    },
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </Stack>

          {/* SIGN IN - desktop */}

          <Button
            variant="outlined"
            sx={{
              display: { xs: "none", md: "inline-flex" },
              borderRadius: 10,
              px: 2.5,
              py: 1,
              textTransform: "none",
              fontWeight: 600,
              fontSize: 15,
              borderColor: "#FDBA8C",
              color: "#F97316",

              "&:hover": {
                borderColor: "#F97316",
                bgcolor: "#FFF7ED",
              },
            }}
          >
            Sign in
          </Button>

          {/* HAMBURGER - mobile */}

          <IconButton
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "#0F172A",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* MOBILE DRAWER */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "min(80vw, 320px)",
            bgcolor: "#FFFFFF",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2.5, py: 2 }}
          >
            {Logo}
            <IconButton
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              sx={{ color: "#0F172A" }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ borderColor: "#F1F5F9" }} />

          <Stack sx={{ px: 2.5, py: 2 }} spacing={0.5}>
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.path}
                  underline="none"
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    fontSize: 18,
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "#F97316" : "#475569",
                    py: 1.5,
                    borderBottom: "1px solid #F8FAFC",

                    "&:hover": {
                      color: "#F97316",
                    },
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </Stack>

          <Box sx={{ mt: "auto", px: 2.5, py: 2.5 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => setMobileOpen(false)}
              sx={{
                borderRadius: 10,
                px: 2.5,
                py: 1.2,
                textTransform: "none",
                fontWeight: 600,
                fontSize: 16,
                borderColor: "#FDBA8C",
                color: "#F97316",

                "&:hover": {
                  borderColor: "#F97316",
                  bgcolor: "#FFF7ED",
                },
              }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
