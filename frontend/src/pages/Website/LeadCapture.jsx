import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  Chip,
  Avatar,
} from "@mui/material";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const leadRows = [
  {
    name: "leads",
    channel: "META",
    date: "2026-07-03T00:00:00",
    leads: "1",
    landed: "1",
    segment: "Google Sheet Leads | 2026-07-03",
  },
  {
    name: "leads",
    channel: "SHEET",
    date: "2026-07-03T00:00:00",
    leads: "2",
    landed: "2",
    segment: "Google Sheet Leads | 2026-07-03",
  },
  {
    name: "leads",
    channel: "SHEET",
    date: "2026-06-23T00:00:00",
    leads: "2",
    landed: "2",
    segment: "Google Sheet Leads | 2026-06-23",
  },
  {
    name: "AI Calling Static",
    channel: "FB",
    date: "2026-06-22T00:00:00",
    leads: "1",
    landed: "1",
    segment: "-",
  },
  {
    name: "AI Calling Static",
    channel: "G",
    date: "2026-06-22T00:00:00",
    leads: "3",
    landed: "3",
    segment: "-",
  },
  {
    name: "leads",
    channel: "FB",
    date: "2026-06-20T00:00:00",
    leads: "5",
    landed: "5",
    segment: "-",
  },
  {
    name: "AI Calling Static",
    channel: "G",
    date: "2026-06-18T00:00:00",
    leads: "8",
    landed: "8",
    segment: "-",
  },
  {
    name: "AI Calling Static",
    channel: "FB",
    date: "2026-06-17T00:00:00",
    leads: "4",
    landed: "4",
    segment: "-",
  },
];

const LeadCapture = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        py: { xs: 5, md: 6 },
        background: `
          radial-gradient(
            circle at 47% 47%,
            rgba(235, 139, 53, 0.16),
            transparent 26%
          ),
          radial-gradient(
            circle at 72% 25%,
            rgba(255,255,255,0.9),
            transparent 35%
          ),
          #f8f8f8
        `,
      }}
    >
      <Box
        sx={{
          maxWidth: 1280,
          mx: "auto",
          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
          },
        }}
      >
        {/* MAIN SECTION */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1.08fr",
            },
            alignItems: "center",
            gap: {
              xs: 6,
              md: 4,
              lg: 4,
            },
          }}
        >
          {/* ================= LEFT LEAD INBOX ================= */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                maxWidth: 570,
                height: 325,
                overflow: "hidden",
                borderRadius: "18px",
                bgcolor: "rgba(255,255,255,0.68)",
                border: "1px solid #cfd7e0",
                boxShadow: "0 25px 38px rgba(65, 48, 28, 0.22)",
              }}
            >
              {/* Dashboard Header */}
              <Box
                sx={{
                  px: 1.4,
                  pt: 1,
                  pb: 0.8,
                  borderBottom: "1px solid #e5e8ec",
                }}
              >
                <Stack direction="row" spacing={0.6} alignItems="center">
                  <PersonAddAltOutlinedIcon
                    sx={{
                      fontSize: 13,
                      color: "#e87331",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#354250",
                    }}
                  >
                    Lead Inbox
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    fontSize: 6.5,
                    color: "#7c8793",
                    mt: 0.2,
                  }}
                >
                  All your leads from Meta Lead Ad forms, ready to review and
                  segment
                </Typography>
              </Box>

              {/* Filters */}
              <Box
                sx={{
                  px: 1.2,
                  py: 0.9,
                  display: "flex",
                  gap: 0.7,
                  borderBottom: "1px solid #e8ebef",
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    height: 24,
                    flex: 1.4,
                    px: 0.8,
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "4px",
                    borderColor: "#dce1e7",
                    boxShadow: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 6,
                      color: "#a0a7b0",
                    }}
                  >
                    🔍 Search ads / leads...
                  </Typography>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    width: 52,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    borderColor: "#dce1e7",
                  }}
                >
                  <Typography sx={{ fontSize: 6, color: "#596574" }}>
                    All platforms⌄
                  </Typography>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    width: 62,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    borderColor: "#dce1e7",
                  }}
                >
                  <Typography sx={{ fontSize: 6, color: "#596574" }}>
                    dd-mm-yyyy
                  </Typography>
                </Paper>

                <Paper
                  variant="outlined"
                  sx={{
                    width: 62,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    borderColor: "#dce1e7",
                  }}
                >
                  <Typography sx={{ fontSize: 6, color: "#596574" }}>
                    dd-mm-yyyy
                  </Typography>
                </Paper>
              </Box>

              {/* Table Header */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns:
                    "18px 1.4fr 0.75fr 1.4fr 0.55fr 0.55fr 2fr 35px",
                  alignItems: "center",
                  px: 1.2,
                  py: 0.65,
                  bgcolor: "#f6f7f8",
                  borderBottom: "1px solid #e7eaee",
                }}
              >
                {[
                  "",
                  "AD",
                  "CHANNEL",
                  "DATE",
                  "LEADS",
                  "LANDED",
                  "SEGMENT",
                  "",
                ].map((item, index) => (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: 5.5,
                      fontWeight: 700,
                      color: "#7c8793",
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>

              {/* Table Rows */}
              <Box>
                {leadRows.map((row, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: 22,
                      display: "grid",
                      gridTemplateColumns:
                        "18px 1.4fr 0.75fr 1.4fr 0.55fr 0.55fr 2fr 35px",
                      alignItems: "center",
                      px: 1.2,
                      borderBottom: "1px solid #edf0f2",
                    }}
                  >
                    {/* Checkbox */}
                    <Box
                      sx={{
                        width: 7,
                        height: 7,
                        border: "1px solid #cfd6dd",
                        borderRadius: "2px",
                      }}
                    />

                    {/* Name */}
                    <Typography
                      sx={{
                        fontSize: 6,
                        color: "#475462",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {row.name}
                    </Typography>

                    {/* Channel */}
                    <Chip
                      label={row.channel}
                      size="small"
                      sx={{
                        justifySelf: "start",
                        height: 11,
                        minWidth: 20,
                        fontSize: 4.5,
                        bgcolor:
                          row.channel === "G"
                            ? "#fff0f0"
                            : row.channel === "FB"
                              ? "#eef4ff"
                              : "#eef7ff",
                        color:
                          row.channel === "G"
                            ? "#d55b62"
                            : row.channel === "FB"
                              ? "#4776c7"
                              : "#4e87b7",
                        "& .MuiChip-label": {
                          px: 0.5,
                        },
                      }}
                    />

                    {/* Date */}
                    <Typography
                      sx={{
                        fontSize: 5.5,
                        color: "#697583",
                      }}
                    >
                      {row.date}
                    </Typography>

                    {/* Leads */}
                    <Typography
                      sx={{
                        fontSize: 6,
                        color: "#56626f",
                      }}
                    >
                      {row.leads}
                    </Typography>

                    {/* Landed */}
                    <Typography
                      sx={{
                        fontSize: 6,
                        color: "#40a27a",
                      }}
                    >
                      {row.landed}
                    </Typography>

                    {/* Segment */}
                    <Box
                      sx={{
                        maxWidth: "95%",
                        px: 0.7,
                        py: 0.2,
                        borderRadius: "10px",
                        bgcolor:
                          row.segment === "-" ? "transparent" : "#f0effd",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 5,
                          color: "#756ac4",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {row.segment}
                      </Typography>
                    </Box>

                    {/* View */}
                    <Typography
                      sx={{
                        fontSize: 5.5,
                        color: "#4f78b4",
                        fontWeight: 600,
                      }}
                    >
                      View ›
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>

          {/* ================= RIGHT CONTENT ================= */}
          <Box
            sx={{
              maxWidth: 620,
              width: "100%",
            }}
          >
            {/* Badge */}
            <Chip
              icon={
                <PersonAddAltOutlinedIcon
                  sx={{
                    fontSize: 18,
                    color: "#d66b2c !important",
                  }}
                />
              }
              label="Platform Lead Capture"
              sx={{
                height: 40,
                px: 1,
                mb: 2.3,
                borderRadius: "30px",
                bgcolor: "rgba(244, 226, 215, 0.85)",
                color: "#bd5e28",
                fontSize: 15,
                fontWeight: 500,
              }}
            />

            {/* Heading */}
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: 28,
                  sm: 34,
                  lg: 35,
                },
                lineHeight: 1.22,
                fontWeight: 500,
                color: "#171d27",
                letterSpacing: "0.3px",
                mb: 2.3,
              }}
            >
              Capture Leads From{" "}
              <Box
                component="span"
                sx={{
                  color: "#4b46a7",
                }}
              >
                Every Source
              </Box>
              <br />
              Automatically
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "#4c5969",
                fontSize: {
                  xs: 15,
                  md: 17,
                },
                lineHeight: 1.55,
                letterSpacing: "0.35px",
                mb: 3.5,
              }}
            >
              Connect Meta Lead Ads, Google Sheets, forms, and CSV imports.
              Every new lead is automatically organized into the right segment
              and can instantly trigger AI Calling, WhatsApp, Email, or
              Automation workflows.
            </Typography>

            {/* Source Cards */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                },
                gap: 2,
                mb: 3.6,
              }}
            >
              {/* Meta Lead Ads */}
              <Paper
                elevation={0}
                sx={{
                  height: 66,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.4,
                  px: 1.8,
                  borderRadius: "15px",
                  bgcolor: "rgba(255,255,255,0.58)",
                  border: "1px solid #d3d9e0",
                  boxShadow: "0 3px 7px rgba(20, 30, 50, 0.08)",
                }}
              >
                <Avatar
                  sx={{
                    width: 34,
                    height: 34,
                    bgcolor: "#f8eee8",
                    color: "#e37131",
                  }}
                >
                  <FormatListBulletedOutlinedIcon fontSize="small" />
                </Avatar>

                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#18212c",
                  }}
                >
                  Meta Lead Ads
                </Typography>
              </Paper>

              {/* Google Sheets */}
              <Paper
                elevation={0}
                sx={{
                  height: 66,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.4,
                  px: 1.8,
                  borderRadius: "15px",
                  bgcolor: "rgba(255,255,255,0.58)",
                  border: "1px solid #d3d9e0",
                  boxShadow: "0 3px 7px rgba(20, 30, 50, 0.08)",
                }}
              >
                <Avatar
                  sx={{
                    width: 34,
                    height: 34,
                    bgcolor: "#f8eee8",
                    color: "#e37131",
                  }}
                >
                  <DescriptionOutlinedIcon fontSize="small" />
                </Avatar>

                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#18212c",
                  }}
                >
                  Google Sheets
                </Typography>
              </Paper>
            </Box>

            {/* Checklist */}
            <Stack spacing={1.9}>
              {[
                "Automatically segment new leads",
                "Trigger AI workflows instantly",
                "No manual imports required",
                "Real-time lead synchronization",
              ].map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.4}
                  alignItems="center"
                >
                  <CheckCircleIcon
                    sx={{
                      fontSize: 20,
                      color: "#329967",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 15,
                        md: 16,
                      },
                      color: "#1f2935",
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* Button */}
            <Button
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              sx={{
                mt: 3,
                width: 186,
                height: 48,
                borderRadius: "9px",
                textTransform: "none",
                bgcolor: "#f85b08",
                fontSize: 16,
                fontWeight: 700,
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "#df4f03",
                  boxShadow: "none",
                },
              }}
            >
              Book Demo
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LeadCapture;
