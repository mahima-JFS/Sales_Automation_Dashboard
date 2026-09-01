import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Stack,
  Box,
  Typography,
  Link,
  Button,
} from "@mui/material";

import { Link as RouterLink, useLocation } from "react-router-dom";
import BoltIcon from "@mui/icons-material/Bolt";

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
            minHeight: "72px !important",
            display: "flex",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {/* LOGO */}

          <Stack
            component={RouterLink}
            to="/"
            direction="row"
            spacing={1}
            alignItems="center"
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
                fontSize: 19,
                fontWeight: 700,
                letterSpacing: "-0.4px",
              }}
            >
              Rapid Sales
            </Typography>
          </Stack>

          {/* NAVIGATION */}

          <Stack
            direction="row"
            spacing={3}
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
                    fontSize: 14,

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

          {/* SIGN IN */}

          <Button
            variant="outlined"
            sx={{
              borderRadius: 10,
              px: 2.5,
              py: 1,
              textTransform: "none",
              fontWeight: 600,
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
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
