import React, { useState } from "react";

import { Box, Typography, Button, Stack, Card } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import NorthEastIcon from "@mui/icons-material/NorthEast";

import AIAgentOne from "../../assets/images/aiagent1.webp";
import AIAgentTwo from "../../assets/images/aiagent2.webp";
import AIAgentThree from "../../assets/images/aiagent3.webp";
import AIAgentFour from "../../assets/images/aiagent4.webp";

import AICallingDashboard from "../../assets/images/aicallingdashboard.webp";
import AgentBuilder from "../../assets/images/agentbuilder.webp";
import QuickCall from "../../assets/images/quickcallbulkcall.webp";
import CallLogOutcome from "../../assets/images/calllogoutcome.webp";
import HumanHandoff from "../../assets/images/humanhandoff.webp";

import {
  CalendarCheck,
  PhoneIncoming,
  UserCheck,
  PhoneCall,
  PhoneOutgoing,
  CalendarClock,
  Bell,
  Briefcase,
} from "lucide-react";
import FAQHome from "./FAQHome";

const AI_AGENT_CARDS = [
  {
    title: (
      <>
        Create and manage AI
        <br />
        calling agents
      </>
    ),
    image: AIAgentOne,
  },
  {
    title: (
      <>
        Choose the right agent for
        <br />
        different use cases
      </>
    ),
    image: AIAgentTwo,
  },
  {
    title: <>Launch quick calls or bulk calls</>,
    image: AIAgentThree,
  },
  {
    title: (
      <>
        Track duration, status, and
        <br />
        sentiment
      </>
    ),
    image: AIAgentFour,
  },
];

const SALES_CALL_SLIDES = [
  {
    image: AICallingDashboard,
    title: "AI Calling Dashboard",
    description:
      "Get a clear view of total calls, average duration, pickup rate, active agents, call outcomes, and recent calling activity from one dashboard. Your team can quickly understand what is happening and where follow-up stands.",
  },
  {
    image: AgentBuilder,
    title: "Agent Builder",
    description:
      "Create and manage Al calling agents for different outreach styles and use cases. Use separate agents for intros, qualification, Follow-up, or industry-specific conversations.",
  },
  {
    image: QuickCall,
    title: "Quick & Bulk Calls",
    description:
      "Need one immediate call or a larger outbound push? Rapid Sales supports both. Start a quick call for one lead or run bulk calling for broader outreach.",
  },
  {
    image: CallLogOutcome,
    title: "Call Log & Outcome",
    description:
      "Review every call with better visibility. Track contact, assigned agent, date and time, duration, outcome, sentiment, and call status in one place.",
  },
  {
    image: HumanHandoff,
    title: "Human Handoff",
    description:
      "Al should move the conversation forward, not trap the lead in automation. When a lead is ready, your team can step in with context and continue the conversation.",
  },
];

const AI_AGENT_FEATURES = [
  {
    icon: CalendarCheck,
    title: "AI Appointment Booking",
    description:
      "Qualify prospects and automatically schedule meetings into your calendar.",
  },
  {
    icon: PhoneIncoming,
    title: "Inbound AI Calling",
    description:
      "Answer incoming customer calls 24/7, resolve FAQs, collect information, and transfer important conversations.",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification",
    description:
      "AI automatically identifies high-intent prospects so your sales team focuses on qualified leads.",
  },
  {
    icon: PhoneCall,
    title: "First-Touch Outreach",
    description:
      "Call new leads instantly while their interest is highest to maximize conversions.",
  },
  {
    icon: PhoneOutgoing,
    title: "AI Call Follow-Ups",
    description:
      "Automatically follow up on missed calls, callbacks, abandoned leads, and pending conversations.",
  },
  {
    icon: CalendarClock,
    title: "Meeting Confirmation",
    description:
      "Automatically confirm booked appointments through AI-generated confirmations.",
  },
  {
    icon: Bell,
    title: "WhatsApp & Email Notifications",
    description:
      "Send automatic meeting reminders, follow-up alerts, and booking notifications via WhatsApp and email.",
  },
  {
    icon: Briefcase,
    title: "Industry-Specific AI",
    description:
      "Deploy AI calling for real estate, education, healthcare, insurance, D2C, and other industries.",
  },
];

const FeatureAIAgent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <>
      {/* =====================================================
          HERO SECTION
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
            xs: 8,
            sm: 10,
            md: 14,
          },

          px: {
            xs: 2,
            sm: 3,
          },

          pb: {
            xs: 5,
            sm: 6,
            md: 7,
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
          {/* HEADING */}

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.2rem",
                sm: "2.8rem",
                md: "3rem",
              },

              fontWeight: 700,

              lineHeight: 1.15,

              letterSpacing: "-0.04em",

              color: "#0F172A",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#4F46E5",
                fontWeight: 700,
              }}
            >
              AI Voice
            </Box>{" "}
            Calling That Helps Your
            <br />
            Team{" "}
            <Box
              component="span"
              sx={{
                color: "#4F46E5",
                fontWeight: 700,
              }}
            >
              Reach More Leads
            </Box>
          </Typography>

          {/* DESCRIPTION */}

          <Typography
            sx={{
              maxWidth: "760px",

              mx: "auto",

              mt: {
                xs: 3,
                md: 4,
              },

              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
              },

              lineHeight: 1.55,

              color: "#526071",
            }}
          >
            Rapid Sales helps businesses automate outbound and inbound sales
            conversations with AI-powered calling agents. Engage leads
            instantly, qualify prospects, schedule appointments, and follow up
            at scale using human-like voice AI that works 24/7.
          </Typography>

          {/* BUTTONS */}

          <Box
            sx={{
              display: "flex",

              justifyContent: "center",

              mt: {
                xs: 4,
                md: 6,
              },
            }}
          >
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              alignItems="center"
            >
              <Button
                endIcon={<NorthEastIcon />}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "340px",
                  },

                  maxWidth: "400px",

                  height: "57px",

                  borderRadius: "10px",

                  textTransform: "none",

                  fontSize: {
                    xs: "17px",
                    md: "19px",
                  },

                  fontWeight: 600,

                  color: "#FFFFFF",

                  backgroundColor: "#FF5A00",

                  "&:hover": {
                    backgroundColor: "#E94F00",
                  },
                }}
              >
                Get Early Access
              </Button>

              <Button
                variant="outlined"
                endIcon={<NorthEastIcon />}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "340px",
                  },

                  maxWidth: "400px",

                  height: "57px",

                  borderRadius: "10px",

                  textTransform: "none",

                  fontSize: {
                    xs: "17px",
                    md: "19px",
                  },

                  fontWeight: 500,

                  border: "1px solid #FF7A35",

                  color: "#C95318",

                  "&:hover": {
                    borderColor: "#FF5A00",

                    backgroundColor: "#FFF7F2",
                  },
                }}
              >
                See It in Action
              </Button>
            </Stack>
          </Box>

          {/* PRICING */}

          <Box
            sx={{
              display: "inline-flex",

              alignItems: "center",

              justifyContent: "center",

              mt: {
                xs: 3,
                md: 4,
              },

              px: 3,

              py: 1.3,

              borderRadius: "30px",

              background:
                "linear-gradient(90deg, rgba(255,235,222,0.85), rgba(249,241,234,0.85))",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  md: "18px",
                },

                color: "#202020",
              }}
            >
              Plan Starts at{" "}
              <Box
                component="span"
                sx={{
                  color: "#4841A9",

                  fontWeight: 700,
                }}
              >
                ₹3,000/month
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* =====================================================
            AI AGENT FEATURES SECTION
        ===================================================== */}

      <Box
        component="section"
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",

          py: {
            xs: 6,
            sm: 8,
            md: 10,
            lg: 12,
          },

          overflow: "hidden",
        }}
      >
        {/* =====================================================
      SECTION TITLE
  ===================================================== */}

        <Typography
          component="h2"
          sx={{
            textAlign: "center",

            fontSize: {
              xs: "21px",
              sm: "24px",
              md: "28px",
            },

            lineHeight: 1.2,

            fontWeight: 500,

            color: "#172033",

            mb: {
              xs: 4,
              sm: 5,
              md: 6,
            },

            px: 2,
          }}
        >
          Turn calling into a{" "}
          <Box
            component="span"
            sx={{
              color: "#4545A8",
            }}
          >
            structured
          </Box>
          <br />
          <Box
            component="span"
            sx={{
              color: "#4545A8",
            }}
          >
            sales channel
          </Box>
        </Typography>

        {/* =====================================================
      AI AGENT IMAGES GRID
  ===================================================== */}

        <Box
          sx={{
            width: "100%",

            maxWidth: {
              xs: "100%",
              md: "1500px",
              lg: "1700px",
              xl: "1900px",
            },

            mx: "auto",

            /* LEFT + RIGHT OUTSIDE PADDING */
            px: {
              xs: 3,
              sm: 5,
              md: 10,
              lg: 14,
              xl: 18,
            },

            boxSizing: "border-box",

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, minmax(0, 1fr))",
            },

            gap: {
              xs: "20px",
              sm: "24px",
              md: "30px",
              lg: "35px",
            },
          }}
        >
          {AI_AGENT_CARDS.map((card, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",

                minWidth: 0,

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={card.image}
                alt={`AI agent feature ${index + 1}`}
                sx={{
                  display: "block",

                  width: "100%",

                  height: "auto",

                  objectFit: "contain",

                  transition: "transform 0.3s ease",

                  "&:hover": {
                    transform: {
                      xs: "none",
                      md: "scale(1.015)",
                    },
                  },
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* =====================================================
    EVERYTHING YOUR TEAM NEEDS SECTION
===================================================== */}
      <Box
        component="section"
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",

          py: {
            xs: 6,
            sm: 8,
            md: 10,
          },

          px: {
            xs: 2,
            sm: 4,
            md: 8,
            lg: 12,
          },

          // IMPORTANT: IMAGE CAN COME OUTSIDE THE BACKGROUND
          overflow: "visible",
        }}
      >
        {/* ================= SECTION HEADING ================= */}

        <Typography
          component="h2"
          sx={{
            textAlign: "center",

            fontSize: {
              xs: "27px",
              sm: "34px",
              md: "40px",
            },

            fontWeight: 500,
            lineHeight: 1.2,
            color: "#172033",

            mb: {
              xs: 4,
              md: 6,
            },
          }}
        >
          Everything your{" "}
          <Box component="span" sx={{ color: "#4545A8" }}>
            team needs
          </Box>{" "}
          to
          <br />
          run{" "}
          <Box component="span" sx={{ color: "#4545A8" }}>
            AI sales calls
          </Box>
        </Typography>

        {/* ================= MAIN WRAPPER ================= */}

        <Box
          sx={{
            width: "100%",

            maxWidth: {
              xs: "100%",
              sm: "1000px",
              md: "1200px",
              lg: "1400px",
            },

            mx: "auto",

            position: "relative",

            // IMPORTANT
            // DO NOT HIDE THE IMAGE OUTSIDE LEFT SIDE
            overflow: "visible",

            pt: {
              xs: 0,
              md: 2,
            },

            pb: {
              xs: 0,
              md: 2,
            },
          }}
        >
          {/* =====================================================
        FIXED BACKGROUND
        IMAGE IS NOT INSIDE THIS BOX ON DESKTOP
    ===================================================== */}

          <Box
            sx={{
              width: {
                xs: "100%",
                md: "88%",
              },

              // PUSH BACKGROUND TO RIGHT
              ml: {
                xs: 0,
                md: "12%",
              },

              height: {
                xs: "650px",
                sm: "580px",
                md: "500px",
              },

              position: "relative",

              overflow: "hidden",

              borderRadius: {
                xs: "20px",
                md: "28px",
              },

              background:
                "linear-gradient(100deg, #F3EEEE 0%, #EFE9E9 50%, #EEE8E8 100%)",

              boxShadow: "0px 12px 30px rgba(40, 40, 60, 0.08)",
            }}
          >
            {/* ================= ORANGE DOTS TOP LEFT ================= */}

            <Box
              sx={{
                position: "absolute",

                left: 0,
                top: 0,

                width: {
                  xs: "150px",
                  md: "230px",
                },

                height: {
                  xs: "150px",
                  md: "220px",
                },

                backgroundImage:
                  "radial-gradient(circle, #FF6B1A 2px, transparent 2.5px)",

                backgroundSize: "12px 12px",

                opacity: 0.45,

                pointerEvents: "none",

                zIndex: 1,
              }}
            />

            {/* ================= ORANGE DOTS BOTTOM LEFT ================= */}

            <Box
              sx={{
                position: "absolute",

                left: 0,
                bottom: 0,

                width: {
                  xs: "150px",
                  md: "230px",
                },

                height: {
                  xs: "150px",
                  md: "220px",
                },

                backgroundImage:
                  "radial-gradient(circle, #FF6B1A 2px, transparent 2.5px)",

                backgroundSize: "12px 12px",

                opacity: 0.45,

                pointerEvents: "none",

                zIndex: 1,
              }}
            />

            {/* ================= RIGHT TEXT ================= */}

            <Box
              sx={{
                position: "absolute",

                zIndex: 3,

                // START TEXT AFTER LEFT IMAGE AREA
                left: {
                  xs: "5%",
                  md: "48%",
                },

                right: {
                  xs: "8%",
                  md: "12%",
                },

                top: "50%",

                transform: "translateY(-50%)",

                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "30px",
                    md: "34px",
                  },

                  fontWeight: 500,

                  color: "#292D37",

                  mb: {
                    xs: 2,
                    md: 2.5,
                  },
                }}
              >
                {SALES_CALL_SLIDES[activeSlide]?.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "17px",
                    sm: "18px",
                    md: "20px",
                  },

                  lineHeight: 1.55,

                  color: "#454FA3",

                  maxWidth: "520px",

                  mx: {
                    xs: "auto",
                    md: 0,
                  },
                }}
              >
                {SALES_CALL_SLIDES[activeSlide]?.description}
              </Typography>
            </Box>

            {/* ================= FIXED PAGINATION ================= */}

            <Box
              sx={{
                position: "absolute",

                right: {
                  xs: "12px",
                  md: "30px",
                },

                top: "50%",

                transform: "translateY(-50%)",

                display: "flex",

                flexDirection: "column",

                alignItems: "center",

                gap: "10px",

                zIndex: 5,
              }}
            >
              {SALES_CALL_SLIDES.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "10px",

                    height: activeSlide === index ? "60px" : "10px",

                    borderRadius: "10px",

                    backgroundColor:
                      activeSlide === index ? "#ED5B17" : "#C8CACD",

                    transition: "all 0.35s ease",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* ================= LEFT SWIPER IMAGE ================= */}
          <Box
            sx={{
              position: {
                xs: "relative",
                md: "absolute",
              },

              zIndex: 10,

              // IMAGE COMES OUTSIDE LEFT SIDE
              left: {
                xs: 0,
                md: "-18%",
                lg: "-20%",
              },

              top: {
                xs: 0,
                md: "50%",
              },

              transform: {
                xs: "none",
                md: "translateY(-50%)",
              },

              width: {
                xs: "100%",
                md: "78%",
                lg: "84%",
              },

              height: {
                xs: "280px",
                sm: "310px",
                md: "440px",
              },

              mb: {
                xs: "-80px",
                sm: "-70px",
                md: 0,
              },

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              overflow: "visible",
            }}
          >
            <Swiper
              direction="vertical"
              slidesPerView={1}
              speed={700}
              mousewheel
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Mousewheel]}
              onSlideChange={(swiper) => {
                setActiveSlide(swiper.realIndex);
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              {SALES_CALL_SLIDES.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",

                      display: "flex",

                      alignItems: "center",

                      justifyContent: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={slide.image}
                      alt={slide.title}
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "100%",
                          md: "240%",
                        },

                        maxWidth: "none",

                        height: "auto",

                        maxHeight: {
                          xs: "280px",
                          sm: "310px",
                          md: "440px",
                        },

                        objectFit: "contain",

                        display: "block",
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>

      {/* AI Feature section */}
      <Box
        component="section"
        sx={{
          width: "100%",
          backgroundColor: "#FFFFFF",

          py: {
            xs: 6,
            sm: 8,
            md: 10,
          },

          px: {
            xs: 2,
            sm: 4,
            md: 8,
            lg: 12,
          },
        }}
      >
        {/* ================= SECTION HEADING ================= */}

        <Typography
          component="h2"
          sx={{
            textAlign: "center",

            fontSize: {
              xs: "27px",
              sm: "34px",
              md: "40px",
            },

            fontWeight: 500,
            lineHeight: 1.2,
            color: "#172033",

            mb: {
              xs: 4,
              md: 6,
            },
          }}
        >
          Everything your{" "}
          <Box component="span" sx={{ color: "#4545A8" }}>
            AI Sales Agent
          </Box>
          <br />
          can do
        </Typography>

        {/* ================= FEATURE GRID ================= */}

        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },

            gap: {
              xs: 3,
              md: 4,
            },
          }}
        >
          {AI_AGENT_FEATURES.map((feature, index) => {
            const Icon = feature.icon;

            // Center the last row when it has fewer items than a full row (md+)
            const isLastRowPartial =
              AI_AGENT_FEATURES.length % 3 !== 0 &&
              index >=
                AI_AGENT_FEATURES.length - (AI_AGENT_FEATURES.length % 3);

            return (
              <Box
                key={feature.title}
                sx={{
                  backgroundColor: "#F1F0FB",
                  borderRadius: "16px",
                  p: { xs: 3, md: 4 },
                  textAlign: "center",

                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",

                  gridColumn: {
                    md: isLastRowPartial
                      ? `span ${Math.floor(3 / (AI_AGENT_FEATURES.length % 3))}`
                      : "span 1",
                  },

                  // simple centering trick for the last partial row on md+
                  ...(isLastRowPartial && {
                    md: {
                      justifySelf: "center",
                      width: "100%",
                    },
                  }),
                }}
              >
                {/* Icon badge */}
                <Box
                  sx={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 4px 10px rgba(40, 40, 60, 0.06)",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    mb: 2.5,
                  }}
                >
                  <Icon size={22} color="#FF6B1A" strokeWidth={2} />
                </Box>

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "17px", md: "18px" },
                    color: "#ED5B17",
                    mb: 1.5,
                  }}
                >
                  {feature.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "15px" },
                    lineHeight: 1.6,
                    color: "#454FA3",
                  }}
                >
                  {feature.description}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>

      <FAQHome />
    </>
  );
};

export default FeatureAIAgent;
