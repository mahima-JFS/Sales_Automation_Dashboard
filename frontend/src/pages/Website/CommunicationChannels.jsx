import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { useNavigate } from "react-router-dom";

const channels = [
  {
    title: (
      <>
        Qualify Leads Faster With
        <br />
        AI Calling Body
      </>
    ),
    description:
      " Reach large calling lists automatically, ask qualifying questions, and get clean, structured outcomes from every conversation.",
    color: "#4F46E5",
    icon: <CallOutlinedIcon />,
    features: [
      "Inbound & outbound calling",
      " Multi-language suppor",
      " Custom call scripts",
      "Bulk dialing",
      "Auto-scheduled callbacks",
      "Lead scoring questions",
      " Recordings & transcripts",
    ],
    learn: "/feature/ai-calling-agent",
  },

  {
    title: (
      <>
        Faster Follow-Ups Over
        <br />
        WhatsApp Body
      </>
    ),
    description:
      "Send approved WhatsApp Business messages for outreach, nudges, and campaign updates — all tracked in one inbox. ",
    color: "#0fcc7d",
    icon: <WhatsAppIcon />,
    features: [
      "Official WhatsApp Business API",
      "Pre-approved templates",
      "Business API support",
      "Broadcast campaigns ",
      "Shared conversation view",
      "AI-generated message drafts ",
      "Template approval tracking",
      "Automated follow-ups",
    ],
    learn: "/feature/whatsapp-automation",
  },

  {
    title: (
      <>
        Scalable Prospecting
        <br />
        by Email Body
      </>
    ),
    description:
      " Run structured email campaigns, nurture longer sales cycles, and stay top-of-mind with prospects who aren’t ready yet.",
    color: "#ed732d",
    icon: <EmailOutlinedIcon />,
    features: [
      "Multi-step campaigns",
      "Reusable templates",
      "Scheduled sends",
      "Open tracking",
      "Click tracking",
      "Automated follow-ups",
      "Email Automation",
    ],
    learn: "/feature/email-outreach",
  },
];

const CommunicationChannels = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        py: {
          xs: 5,
          md: 2,
        },
        background: `
          radial-gradient(
            circle at 50% 40%,
            rgba(235, 137, 47, 0.10),
            transparent 30%
          ),
          #f8f8f8
        `,
      }}
    >
      {/* MAIN CONTAINER */}
      <Box
        sx={{
          maxWidth: 1280,
          mx: "auto",
          px: {
            xs: 2,
            sm: 4,
            md: 5,
          },
        }}
      >
        {/* HEADING */}
        <Typography
          component="h1"
          align="center"
          sx={{
            fontSize: {
              xs: "28px",
              sm: "34px",
              md: "34px",
            },
            lineHeight: 1.08,
            fontWeight: 700,
            color: "#1d2632",
            letterSpacing: "0.4px",
            mb: {
              xs: 7,
              md: 6.5,
            },
          }}
        >
          <Box
            component="span"
            sx={{
              color: "#4F46E5",
            }}
          >
            Reach leads
          </Box>{" "}
          across the channels they
          <br />
          <Box
            component="span"
            sx={{
              color: "#4F46E5",
            }}
          >
            actually respond to
          </Box>
        </Typography>

        {/* CHANNEL CARDS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: {
              xs: 5,
              md: 2.7,
            },
            alignItems: "stretch",
          }}
        >
          {channels.map((channel) => (
            <Box
              key={channel.color}
              sx={{
                position: "relative",
                pt: 2,
              }}
            >
              {/* FLOATING ICON */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#ffffff",
                  color: channel.color,
                  border: "1px solid #e3e5e9",
                  boxShadow: "0 6px 14px rgba(25, 35, 50, 0.12)",
                  zIndex: 2,

                  "& svg": {
                    fontSize: 21,
                  },
                }}
              >
                {channel.icon}
              </Paper>

              {/* CARD */}
              <Paper
                elevation={0}
                sx={{
                  minHeight: 535,
                  height: "100%",
                  px: {
                    xs: 3,
                    md: 3.1,
                  },
                  pt: 4.7,
                  pb: 3,
                  borderRadius: "20px",
                  bgcolor: "rgba(245, 244, 252, 0.72)",
                  border: "1px solid #d9dbe2",
                  boxShadow: "0 3px 8px rgba(20, 30, 50, 0.08)",
                }}
              >
                {/* CARD TITLE */}
                <Typography
                  align="center"
                  sx={{
                    color: channel.color,
                    fontSize: {
                      xs: 19,
                      md: 20,
                    },
                    fontWeight: 600,
                    lineHeight: 1.4,
                    letterSpacing: "0.3px",
                    mb: 1.5,
                  }}
                >
                  {channel.title}
                </Typography>

                {/* DESCRIPTION */}
                <Typography
                  align="center"
                  sx={{
                    color: "#566273",
                    fontSize: {
                      xs: 14,
                      md: 15,
                    },
                    lineHeight: 1.55,
                    letterSpacing: "0.25px",
                    minHeight: 77,
                    px: 0.3,
                  }}
                >
                  {channel.description}
                </Typography>

                {/* DIVIDER */}
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    bgcolor: "#d5d7dd",
                    my: 2,
                  }}
                />

                {/* FEATURES */}
                <Stack spacing={1.15}>
                  {channel.features.map((feature) => (
                    <Stack
                      key={feature}
                      direction="row"
                      spacing={1}
                      alignItems="center"
                    >
                      {/* STAR BULLET */}
                      <Typography
                        component="span"
                        sx={{
                          color: channel.color,
                          fontSize: 17,
                          lineHeight: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        ✦
                      </Typography>

                      <Typography
                        sx={{
                          color: channel.color,
                          fontSize: {
                            xs: 14,
                            md: 16,
                          },
                          lineHeight: 1.25,
                          fontWeight: 500,
                        }}
                      >
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>

                {/* LEARN MORE */}
                <Typography
                  onClick={() => navigate(channel.learn)}
                  sx={{
                    mt: 2,
                    color: channel.color,
                    fontSize: 17,
                    fontWeight: 600,
                    cursor: "pointer",

                    "&:hover": {
                      opacity: 0.75,
                    },
                  }}
                >
                  Learn More...
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CommunicationChannels;
