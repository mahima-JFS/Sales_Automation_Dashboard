import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Grid,
  Link,
} from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BoltIcon from "@mui/icons-material/Bolt";
import FeatureStackHero from "./FeatureStackHero";
import StactsSection from "./StactsSection";
import AppointmentBooking from "./AppointmentBooking";
import LeadCapture from "./LeadCapture";
import CommunicationChannels from "./CommunicationChannels";
import SequenceAutomation from "./SequenceAutomation";
// import rapidIntro from "../assets/rapid-sales-intro.png";
// import dashboardImage from "../assets/rapid-sales-dashboard.png";
// import aiCallingImage from "../assets/rapid-sales-ai-calling.png";
// import emailImage from "../assets/rapid-sales-email.png";

const NAV_LINKS = [
  { label: "Home", href: "#home", active: true },
  { label: "Features", href: "#features" },
  { label: "Comparisons", href: "#comparisons" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
  { label: "Contact us", href: "#contact" },
];

const FEATURES = [
  {
    title: "Tri-Channel Outreach",
    description: "Sync Email, WhatsApp & AI calls in one flow.",
  },
  {
    title: "Human-Like AI Voice",
    description: "Calls that sound natural and human-like.",
  },
  {
    title: "Smart Handoff",
    description: "Transfers hot leads to your sales reps instantly.",
  },
  {
    title: "Unified Timeline",
    description: "Every interaction in one view.",
  },
];

const SHOWCASE_ITEMS = [
  {
    id: "ai",
    title: "AI Calling",
    description: "Launch AI-powered calls to large lead lists in one go.",
    // image: aiCallingImage,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Outreach",
    description: "Engage and follow up with leads through WhatsApp.",
    // image: rapidIntro,
  },
  {
    id: "email",
    title: "Email Outreach",
    description: "Run email campaigns at scale with better visibility.",
    // image: emailImage,
  },
  {
    id: "multi",
    title: "Multi-Channel Sequences",
    description: "Combine Email, WhatsApp and AI calls in one automation.",
    // image: rapidIntro,
  },
  {
    id: "analytics",
    title: "Campaign Analytics",
    description: "Track campaign performance, lead activity, and outcomes.",
    // image: dashboardImage,
  },
  {
    id: "leads",
    title: "Lead Management & History",
    description: "Manage every lead and interaction from one place.",
    // image: dashboardImage,
  },
];

const Home = () => {
  const [activeShowcase, setActiveShowcase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShowcase((previous) =>
        previous === SHOWCASE_ITEMS.length - 1 ? 0 : previous + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        bgcolor: "#FFFFFF",
        color: "#0F172A",
      }}
    >
      {/* <Box
        sx={{
          height: 4,
          width: "100%",
          background: "linear-gradient(to right, #F97316, #FB923C, #818CF8)",
        }}
      /> */}

      <AppBar
        position="static"
        elevation={0}
        sx={{
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

            <Stack direction="row" spacing={1} alignItems="center">
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
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    fontSize: 14,
                    fontWeight: link.active ? 600 : 400,
                    color: link.active ? "#F97316" : "#475569",
                    pb: 0.5,

                    borderBottom: link.active
                      ? "2px solid #F97316"
                      : "2px solid transparent",

                    "&:hover": {
                      color: "#F97316",
                    },
                  }}
                >
                  {link.label}
                </Link>
              ))}
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

      <Box
        component="main"
        sx={{
          position: "relative",
          overflow: "hidden",

          backgroundImage: `
            linear-gradient(to right, #F1F1F4 1px, transparent 1px),
            linear-gradient(to bottom, #F1F1F4 1px, transparent 1px)
          `,

          backgroundSize: "20px 20px",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            pt: {
              xs: 8,
              sm: 10,
              md: 12,
            },
            pb: 6,
          }}
        >
          {/* HEADING */}

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.2rem",
                sm: "3rem",
                md: "2.5rem",
              },

              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "#0F172A",
            }}
          >
            Automate{" "}
            <Box
              component="span"
              sx={{
                color: "#4F46E5",
              }}
            >
              Email, WhatsApp,
              <br />
              and AI Calls
            </Box>{" "}
            From One Sales Dashboard
          </Typography>

          {/* SUBTEXT */}

          <Typography
            sx={{
              maxWidth: 680,
              mx: "auto",
              mt: 3,

              fontSize: {
                xs: 16,
                sm: 18,
              },

              lineHeight: 1.7,
              color: "#64748B",
            }}
          >
            Built for Indian SMEs, D2C brands, exporters, and agencies that sell
            through WhatsApp, email, and AI calls.
          </Typography>

          {/* BUTTONS */}

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{
              mt: 4,
            }}
          >
            <Button
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                bgcolor: "#F97316",
                color: "#FFFFFF",

                borderRadius: 10,
                px: 3.5,
                py: 1.5,

                fontSize: 15,
                fontWeight: 600,
                textTransform: "none",

                boxShadow: "0px 8px 20px rgba(249,115,22,0.25)",

                "&:hover": {
                  bgcolor: "#EA580C",
                },
              }}
            >
              Book a Demo
            </Button>

            <Button
              variant="outlined"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                borderRadius: 10,
                px: 3.5,
                py: 1.5,

                fontSize: 15,
                fontWeight: 600,
                textTransform: "none",

                borderColor: "#FED7AA",
                color: "#F97316",
                bgcolor: "rgba(255,247,237,0.5)",

                "&:hover": {
                  borderColor: "#F97316",
                  bgcolor: "#FFF7ED",
                },
              }}
            >
              See It In Action
            </Button>
          </Stack>

          {/* PRICING PILL */}

          <Box
            sx={{
              mt: 4,
              display: "inline-block",
              bgcolor: "#FFF7ED",
              borderRadius: 10,
              px: 2.5,
              py: 1,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontSize: 14,
                color: "#475569",
              }}
            >
              Plan Starts at{" "}
            </Typography>

            <Typography
              component="span"
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: "#4F46E5",
              }}
            >
              ₹3,000/month
            </Typography>
          </Box>
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            pb: {
              xs: 6,
              md: 10,
            },
          }}
        >
          <Grid container spacing={4}>
            {FEATURES.map((feature) => (
              <Grid item xs={12} sm={6} md={3} key={feature.title}>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AutoAwesomeIcon
                      sx={{
                        color: "#FB923C",
                        fontSize: 18,
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "#0F172A",
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "#64748B",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
    SALES AUTOMATION SHOWCASE
===================================================== */}

      <Box
        sx={{
          position: "relative",
          py: {
            xs: 6,
            md: 10,
          },

          background:
            "radial-gradient(circle at left center, rgba(99,102,241,0.12), transparent 35%), radial-gradient(circle at right center, rgba(249,115,22,0.12), transparent 35%)",
        }}
      >
        <Container maxWidth="xl">
          {/* TOP HEADING */}

          <Typography
            align="center"
            sx={{
              maxWidth: 850,
              mx: "auto",
              mb: 5,
              fontSize: {
                xs: 22,
                sm: 27,
                md: 32,
              },
              fontWeight: 600,
              lineHeight: 1.35,
              color: "#1E293B",
            }}
          >
            <Box component="span" sx={{ color: "#4F46E5" }}>
              70% of sales time gets lost
            </Box>{" "}
            when teams manage the same lead across{" "}
            <Box component="span" sx={{ color: "#4F46E5" }}>
              separate platforms.
            </Box>
          </Typography>

          {/* SHOWCASE */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "260px 1fr",
              },

              border: "1px solid #CBD5E1",
              borderRadius: {
                xs: 3,
                md: 5,
              },

              overflow: "hidden",
              bgcolor: "#FFFFFF",

              boxShadow: "0px 30px 80px rgba(15,23,42,0.12)",
            }}
          >
            {/* =========================================
          LEFT MENU
      ========================================= */}

            <Box
              sx={{
                borderRight: {
                  xs: "none",
                  md: "1px solid #CBD5E1",
                },

                borderBottom: {
                  xs: "1px solid #CBD5E1",
                  md: "none",
                },

                bgcolor: "#FAFAFA",
              }}
            >
              {SHOWCASE_ITEMS.map((item, index) => {
                const isActive = activeShowcase === index;

                return (
                  <Box
                    key={item.id}
                    onClick={() => setActiveShowcase(index)}
                    sx={{
                      minHeight: 88,

                      px: 3,
                      py: 2,

                      cursor: "pointer",

                      borderBottom:
                        index !== SHOWCASE_ITEMS.length - 1
                          ? "1px solid #CBD5E1"
                          : "none",

                      bgcolor: isActive ? "#F5F3FF" : "transparent",

                      transition: "0.3s",

                      "&:hover": {
                        bgcolor: "#F8FAFC",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "#4F46E5" : "#1E293B",
                      }}
                    >
                      {item.title}
                    </Typography>

                    {item.description && (
                      <Typography
                        sx={{
                          mt: 0.5,
                          fontSize: 12,
                          lineHeight: 1.4,
                          color: "#64748B",
                        }}
                      >
                        {item.description}
                      </Typography>
                    )}
                  </Box>
                );
              })}
            </Box>

            {/* =========================================
          RIGHT IMAGE
      ========================================= */}

            <Box
              sx={{
                position: "relative",
                minHeight: {
                  xs: 280,
                  sm: 400,
                  md: 530,
                },

                overflow: "hidden",

                bgcolor: "#F8FAFC",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={SHOWCASE_ITEMS[activeShowcase].image}
                alt={SHOWCASE_ITEMS[activeShowcase].title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",

                  transition: "opacity 0.4s ease",
                }}
              />
              <Box
                component="video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              >
                <source src="/videos/Rapid_sales.mp4" type="video/mp4" />
              </Box>

              {/* TITLE OVERLAY */}

              <Box
                sx={{
                  position: "absolute",

                  top: {
                    xs: 15,
                    md: 30,
                  },

                  left: "50%",

                  transform: "translateX(-50%)",

                  width: "90%",

                  textAlign: "center",

                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 24,
                      md: 30,
                    },

                    fontWeight: 700,

                    color: "#FFFFFF",

                    textShadow: "0px 2px 10px rgba(0,0,0,0.35)",
                  }}
                >
                  {SHOWCASE_ITEMS[activeShowcase].title}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* BOTTOM TEXT */}

          <Typography
            align="center"
            sx={{
              maxWidth: 850,
              mx: "auto",
              mt: 5,

              fontSize: {
                xs: 20,
                sm: 24,
              },

              fontWeight: 600,

              lineHeight: 1.5,

              color: "#475569",
            }}
          >
            <Box component="span" sx={{ color: "#4F46E5" }}>
              Rapid Sales
            </Box>{" "}
            brings your outreach together.{" "}
            <Box component="span" sx={{ color: "#4F46E5" }}>
              Launch email campaigns, send WhatsApp messages, run AI-powered
              sales calls,
            </Box>{" "}
            and track every touchpoint from one place.
          </Typography>
        </Container>
      </Box>

      {/* Feature  */}
      <FeatureStackHero />
      <StactsSection />
      <AppointmentBooking />
      <LeadCapture />
      <CommunicationChannels />
      <SequenceAutomation />
    </Box>
  );
};

export default Home;
