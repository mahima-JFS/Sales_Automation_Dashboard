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

import { useNavigate } from "react-router-dom";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import BoltIcon from "@mui/icons-material/Bolt";
import FeatureStackHero from "./FeatureStackHero";
import StactsSection from "./StactsSection";
import AppointmentBooking from "./AppointmentBooking";
import LeadCapture from "./LeadCapture";
import CommunicationChannels from "./CommunicationChannels";
import SequenceAutomation from "./SequenceAutomation";
import OutReactFeatures from "./OutReactFeatures";
import BuiltForTeams from "./BuiltForTeams";
import PriceSection from "./PriceSection";
import FAQHome from "./FAQHome";
import AutomateOutreach from "./AutomateOutreach";
import ContactForm from "./ContactForm";
import rapidIntro from "../../assets/images/video1.png";
import dashboardImage from "../../assets/images/dashboard.webp";
import aiCallingImage from "../../assets/images/aicallingdashboard.webp";
import emailImage from "../../assets/images/emailsequence.webp";
import whatsappImage from "../../assets/images/video2.png";
import NorthEastIcon from "@mui/icons-material/NorthEastOutlined";

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
    image: aiCallingImage,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Outreach",
    description: "Engage and follow up with leads through WhatsApp.",
    image: rapidIntro,
  },
  {
    id: "email",
    title: "Email Outreach",
    description: "Run email campaigns at scale with better visibility.",
    image: emailImage,
  },
  {
    id: "multi",
    title: "Multi-Channel Sequences",
    description: "Combine Email, WhatsApp and AI calls in one automation.",
    image: rapidIntro,
  },
  {
    id: "analytics",
    title: "Campaign Analytics",
    description: "Track campaign performance, lead activity, and outcomes.",
    image: dashboardImage,
  },
  {
    id: "leads",
    title: "Lead Management & History",
    description: "Manage every lead and interaction from one place.",
    image: whatsappImage,
  },
];

const Home = () => {
  const navigate = useNavigate();

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
      <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          // DECREASED TOP SPACE
          pt: {
            xs: 3,
            sm: 5,
            md: 7,
          },

          px: {
            xs: 2,
            sm: 3,
          },

          pb: {
            xs: 2,
            sm: 3,
            md: 3,
          },

          backgroundColor: "#FFFFFF",

          backgroundImage: `
      linear-gradient(
        rgba(110, 110, 110, 0.07) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(110, 110, 110, 0.07) 1px,
        transparent 1px
      )
    `,

          backgroundSize: "20px 20px",
        }}
      >
        {/* BACKGROUND GLOW */}

        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",

            width: {
              xs: "100%",
              md: "900px",
            },

            height: {
              xs: "500px",
              md: "600px",
            },

            background:
              "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.80) 45%, rgba(255,255,255,0) 75%)",

            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* HERO CONTENT */}

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1050px",
            mx: "auto",
            textAlign: "center",
          }}
        >
          {/* HERO TEXT */}

          <Container
            maxWidth="md"
            sx={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",

              // REMOVED EXTRA TOP SPACE
              pt: 0,

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

                lineHeight: 1.3,

                letterSpacing: "-0.02em",

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
              Built for Indian SMEs, D2C brands, exporters, and agencies that
              sell through WhatsApp, email, and AI calls.
            </Typography>

            {/* BUTTONS */}

            <Box
              sx={{
                mt: "42px",

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                gap: {
                  xs: "16px",
                  sm: "18px",
                },

                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >
              {/* BOOK A DEMO */}

              <Button
                disableElevation
                disableRipple
                endIcon={<ArrowOutwardIcon />}
                onClick={() => navigate("/book-a-demo")}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "228px",
                  },

                  maxWidth: "228px",

                  height: "50px",

                  minHeight: "50px",

                  minWidth: 0,

                  padding: "0 12px",

                  borderRadius: "12px",

                  backgroundColor: "#FF6811",

                  color: "#FFFFFF",

                  fontSize: "18px",

                  fontWeight: 700,

                  lineHeight: 1,

                  textTransform: "none",

                  whiteSpace: "nowrap",

                  boxShadow: "0px 10px 24px rgba(255, 104, 17, 0.25)",

                  "& .MuiButton-endIcon": {
                    marginLeft: "10px",
                    marginRight: 0,
                  },

                  "& .MuiSvgIcon-root": {
                    fontSize: "21px",
                  },

                  "&:hover": {
                    backgroundColor: "#FF6811",
                    boxShadow: "0px 10px 24px rgba(255, 104, 17, 0.25)",
                  },
                }}
              >
                Book a Demo
              </Button>

              {/* SEE IT IN ACTION */}

              <Button
                variant="outlined"
                disableRipple
                endIcon={<ArrowOutwardIcon />}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "248px",
                  },

                  maxWidth: "248px",

                  height: "50px",

                  minHeight: "50px",

                  minWidth: 0,

                  padding: "0 12px",

                  borderRadius: "12px",

                  border: "1px solid #E9C7A8",

                  backgroundColor: "transparent",

                  color: "#C95D16",

                  fontSize: "18px",

                  fontWeight: 700,

                  lineHeight: 1,

                  textTransform: "none",

                  whiteSpace: "nowrap",

                  boxShadow: "none",

                  "& .MuiButton-endIcon": {
                    marginLeft: "10px",
                    marginRight: 0,
                  },

                  "& .MuiSvgIcon-root": {
                    fontSize: "21px",
                  },

                  "&:hover": {
                    border: "1px solid #E9C7A8",
                    backgroundColor: "transparent",
                  },
                }}
              >
                See It In Action
              </Button>
            </Box>

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

          {/* FEATURES */}

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
                <Grid
                  size={{
                    xs: 12,
                    sm: 6,
                    md: 3,
                  }}
                  key={feature.title}
                >
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
      </Box>

      {/* =====================================================
          SALES AUTOMATION SHOWCASE
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          py: {
            xs: 5,
            sm: 6,
            md: 10,
          },
          px: {
            xs: 2,
            sm: 4,
            md: 10,
            lg: 18,
          },

          background:
            "radial-gradient(circle at left center, rgba(99,102,241,0.12), transparent 35%), radial-gradient(circle at right center, rgba(249,115,22,0.12), transparent 35%)",
        }}
      >
        <Container maxWidth="xl" disableGutters>
          {/* TOP HEADING */}

          <Typography
            align="center"
            sx={{
              maxWidth: 850,
              mx: "auto",
              mb: {
                xs: 3,
                sm: 4,
                md: 5,
              },
              px: {
                xs: 1,
                sm: 0,
              },
              fontSize: {
                xs: 19,
                sm: 24,
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
                xs: "110px minmax(0, 1fr)",
                sm: "150px minmax(0, 1fr)",
                md: "260px minmax(0, 1fr)",
              },

              width: "100%",
              maxWidth: "100%",

              border: "1px solid #CBD5E1",
              borderRadius: {
                xs: 2,
                sm: 3,
                md: 5,
              },

              overflow: "hidden",
              bgcolor: "#FFFFFF",

              boxShadow: {
                xs: "0px 12px 30px rgba(15,23,42,0.10)",
                md: "0px 30px 80px rgba(15,23,42,0.12)",
              },
            }}
          >
            <Box
              sx={{
                minWidth: 0,

                borderRight: "1px solid #CBD5E1",

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
                      minHeight: {
                        xs: 40,
                        sm: 60,
                        md: 88,
                      },

                      px: {
                        xs: 1,
                        sm: 1.75,
                        md: 3,
                      },
                      py: {
                        xs: 0.75,
                        sm: 1.25,
                        md: 2,
                      },

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
                        fontSize: {
                          xs: 8.5,
                          sm: 12,
                          md: 15,
                        },
                        lineHeight: 1.25,
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
                          fontSize: {
                            xs: 7,
                            sm: 10,
                            md: 12,
                          },
                          lineHeight: 1.3,
                          color: "#64748B",

                          display: {
                            xs: "none",
                            sm: "-webkit-box",
                          },
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
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
        RIGHT IMAGE / VIDEO
    ========================================= */}

            <Box
              sx={{
                position: "relative",
                width: "100%",
                minWidth: 0,
                minHeight: {
                  xs: 220,
                  sm: 320,
                  md: 530,
                },

                overflow: "hidden",

                bgcolor: "#F8FAFC",
              }}
            >
              {SHOWCASE_ITEMS[activeShowcase].video ? (
                <Box
                  component="video"
                  key={SHOWCASE_ITEMS[activeShowcase].id}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                >
                  <source
                    src={SHOWCASE_ITEMS[activeShowcase].video}
                    type="video/mp4"
                  />
                </Box>
              ) : (
                <Box
                  component="img"
                  src={SHOWCASE_ITEMS[activeShowcase].image}
                  alt={SHOWCASE_ITEMS[activeShowcase].title}
                  sx={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    transition: "opacity 0.4s ease",
                  }}
                />
              )}

              {/* TITLE OVERLAY */}

              <Box
                sx={{
                  position: "absolute",

                  top: {
                    xs: 8,
                    sm: 16,
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
                      xs: 11,
                      sm: 16,
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
              mt: {
                xs: 3,
                sm: 4,
                md: 5,
              },
              px: {
                xs: 1,
                sm: 0,
              },

              fontSize: {
                xs: 15,
                sm: 18,
                md: 24,
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
      <OutReactFeatures />
      <BuiltForTeams />
      <PriceSection />
      <FAQHome />
      <AutomateOutreach />
      <ContactForm />
    </Box>
  );
};

export default Home;
