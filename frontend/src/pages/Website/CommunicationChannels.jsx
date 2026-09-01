import React from "react";
import { Box, Typography, Paper, Stack } from "@mui/material";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const channels = [
  {
    title: (
      <>
        AI Calling for faster lead
        <br />
        qualification
      </>
    ),
    description:
      "Use AI-powered voice calls to reach larger lead lists, ask qualification questions, and capture clear call outcomes.",
    color: "#4F46E5",
    icon: <CallOutlinedIcon />,
    features: [
      "AI appointment booking",
      "Inbound & outbound AI calling",
      "Bulk AI calling",
      "Lead qualification",
      "Call outcomes",
      "Call recordings & transcripts",
      "Custom AI scripts",
      "Multi-language calling",
    ],
  },
  {
    title: (
      <>
        WhatsApp Outreach for faster
        <br />
        follow-ups
      </>
    ),
    description:
      "Use WhatsApp to send sales messages, follow-ups, and campaign updates through approved business templates.",
    color: "#0fcc7d",
    icon: <WhatsAppIcon />,
    features: [
      "AI template generator",
      "Follow-up messages",
      "Business API support",
      "WhatsApp campaigns",
      "Template status tracking",
      "WhatsApp conversation view",
      "Approved message templates",
      "AI auto replies",
    ],
  },
  {
    title: (
      <>
        Email Automation for scalable
        <br />
        prospecting
      </>
    ),
    description:
      "Use email to run structured outreach campaigns, nurture prospects, and stay visible across longer sales cycles.",
    color: "#ed732d",
    icon: <EmailOutlinedIcon />,
    features: [
      "Click tracking",
      "Open tracking",
      "Follow-up emails",
      "Email templates",
      "Email campaigns",
      "Scheduled emails",
      "Email Automation",
    ],
  },
];

const CommunicationChannels = () => {
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
            fontWeight: 500,
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
