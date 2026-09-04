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
    title: "Unified Outreach ",
    description: "Run Email, WhatsApp & Voice together",
  },
  {
    title: "Natural-Sounding AI Calls",
    description: "Conversations that feel human",
  },
  {
    title: "Instant Lead Routing",
    description: "Hot leads reach your reps in seconds",
  },
  {
    title: "Single Activity View",
    description: "Every touchpoint, one screen",
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
    image: emailImage,
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
    <Box>
      {/* <Box
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
        /> */}

      {/* <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          pt: { xs: 3, sm: 5, md: 7 },
          px: { xs: 2, sm: 3 },
          pb: { xs: 2, sm: 3, md: 3 },

          backgroundColor: "#FDFDFF",

          // Layered mesh gradient — indigo, orange, and a hint of pink
          backgroundImage: `
      radial-gradient(at 15% 20%, rgba(79, 70, 229, 0.16) 0px, transparent 50%),
      radial-gradient(at 85% 10%, rgba(255, 104, 17, 0.14) 0px, transparent 50%),
      radial-gradient(at 50% 60%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
      radial-gradient(at 90% 80%, rgba(79, 70, 229, 0.10) 0px, transparent 50%)
    `,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
            zIndex: 0,
          }}
        /> */}

      <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          pt: { xs: 3, sm: 5, md: 7 },
          px: { xs: 2, sm: 3 },
          pb: { xs: 2, sm: 3, md: 3 },

          backgroundColor: "#FDFDFF",

          // Layered mesh gradient — indigo, orange, and a hint of pink
          backgroundImage: `
      radial-gradient(at 15% 20%, rgba(79, 70, 229, 0.16) 0px, transparent 50%),
      radial-gradient(at 85% 10%, rgba(255, 104, 17, 0.14) 0px, transparent 50%),
      radial-gradient(at 50% 60%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
      radial-gradient(at 90% 80%, rgba(79, 70, 229, 0.10) 0px, transparent 50%)
    `,
        }}
      >
        {/* SQUARE GRID TEXTURE — replaces the noise overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
        linear-gradient(rgba(79, 70, 229, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(79, 70, 229, 0.06) 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Optional: fade the grid toward the edges so it doesn't look uniform/flat */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 30%, transparent 0%, transparent 40%, #FDFDFF 90%)",
            opacity: 0.5,
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
                  sm: "2rem",
                  md: "2.5rem",
                },

                fontWeight: 700,

                lineHeight: 1.3,

                letterSpacing: "-0.02em",

                color: "#0F172A",
              }}
            >
              Run{" "}
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                }}
              >
                WhatsApp, Email &
                <br />
                AI Voice Outreach
              </Box>{" "}
              From a Single Dashboard
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
              Made for growing Indian businesses - D2C brands, exporters,
              agencies, and sales teams who sell across WhatsApp, email, and
              phone calls.
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
                ₹ 2,499/month
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
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          pt: {
            xs: 3,
            sm: 5,
            md: 7,
          },

          px: {
            xs: 1.5,
            sm: 2,
            md: 4,
            lg: 6,
            xl: 8,
          },

          pb: {
            xs: 2,
            sm: 3,
            md: 3,
          },

          backgroundColor: "#FDFDFF",

          // Layered mesh gradient
          backgroundImage: `
      radial-gradient(
        at 15% 20%,
        rgba(79, 70, 229, 0.16) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 85% 10%,
        rgba(255, 104, 17, 0.14) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 50% 60%,
        rgba(236, 72, 153, 0.08) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 90% 80%,
        rgba(79, 70, 229, 0.10) 0px,
        transparent 50%
      )
    `,
        }}
      >
        {/* Fine noise / texture overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* MAIN CONTENT */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              width: "100%",
              mx: "auto",

              px: {
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 5,
              },

              boxSizing: "border-box",
            }}
          >
            {/* TOP HEADING */}

            <Typography
              align="center"
              sx={{
                maxWidth: 900,
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
              Everything You Need in One Place.
              <br />
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                }}
              >
                More Time to Sell
              </Box>
              , Less Time Switching.
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
              {/* LEFT MENU */}

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

              {/* RIGHT IMAGE / VIDEO */}

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
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                }}
              >
                Sales Automation
              </Box>{" "}
              brings your outreach together.{" "}
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                }}
              >
                Launch email campaigns, send WhatsApp messages, run AI-powered
                sales calls,
              </Box>{" "}
              and track every touchpoint from one place.
            </Typography>
          </Container>
        </Box>
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
