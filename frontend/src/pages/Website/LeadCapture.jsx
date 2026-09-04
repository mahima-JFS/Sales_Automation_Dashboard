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
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";

import { useNavigate } from "react-router-dom";

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

const sourceCards = [
  {
    title: "Meta Lead Forms",
    icon: <FormatListBulletedOutlinedIcon fontSize="small" />,
  },
  {
    title: "Google Sheets",
    icon: <DescriptionOutlinedIcon fontSize="small" />,
  },
  {
    title: "Web Forms",
    icon: <LanguageOutlinedIcon fontSize="small" />,
  },
  {
    title: "CSV Upload",
    icon: <UploadFileOutlinedIcon fontSize="small" />,
  },
];

const supportingBullets = [
  "Auto-sorted into the correct list on arrival",
  "Kicks off workflows in real time",
  "Zero manual data entry",
  "Always in sync, no delays",
];

const LeadInboxPreview = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: {
          xs: 560,
          md: 575,
        },
        height: {
          xs: 300,
          sm: 325,
          md: 340,
        },
        overflow: "hidden",
        borderRadius: "20px",
        bgcolor: "rgba(255,255,255,0.78)",
        border: "1px solid #d4dbe3",
        boxShadow:
          "0 28px 55px rgba(65, 48, 28, 0.15), 0 8px 20px rgba(15,23,42,0.06)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Box
        sx={{
          px: {
            xs: 1.5,
            sm: 1.8,
          },
          pt: 1.2,
          pb: 1,
          borderBottom: "1px solid #e5e8ec",
        }}
      >
        <Stack direction="row" spacing={0.7} alignItems="center">
          <PersonAddAltOutlinedIcon
            sx={{
              fontSize: 14,
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
            mt: 0.25,
          }}
        >
          All your leads from Meta Lead Ad forms, ready to review and segment
        </Typography>
      </Box>

      {/* =====================================================
          FILTERS
      ===================================================== */}

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
            flex: 1,
            px: 0.8,
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            borderColor: "#dce1e7",
            boxShadow: "none",
            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: 6,
              color: "#a0a7b0",
              whiteSpace: "nowrap",
            }}
          >
            🔍 Search ads / leads...
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
            borderRadius: "5px",
            borderColor: "#dce1e7",
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: 6,
              color: "#596574",
            }}
          >
            All platforms⌄
          </Typography>
        </Paper>

        <Paper
          variant="outlined"
          sx={{
            width: 65,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            borderColor: "#dce1e7",
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: 6,
              color: "#596574",
            }}
          >
            dd-mm-yyyy
          </Typography>
        </Paper>

        <Paper
          variant="outlined"
          sx={{
            width: 65,
            height: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            borderColor: "#dce1e7",
            flexShrink: 0,
          }}
        >
          <Typography
            sx={{
              fontSize: 6,
              color: "#596574",
            }}
          >
            dd-mm-yyyy
          </Typography>
        </Paper>
      </Box>

      {/* =====================================================
          TABLE HEADER
      ===================================================== */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "18px 1.4fr 0.75fr 1.4fr 0.55fr 0.55fr 2fr 35px",
          alignItems: "center",
          px: 1.2,
          py: 0.65,
          bgcolor: "#f6f7f8",
          borderBottom: "1px solid #e7eaee",
        }}
      >
        {["", "AD", "CHANNEL", "DATE", "LEADS", "LANDED", "SEGMENT", ""].map(
          (item, index) => (
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
          ),
        )}
      </Box>

      {/* =====================================================
          TABLE ROWS
      ===================================================== */}

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
                whiteSpace: "nowrap",
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
                bgcolor: row.segment === "-" ? "transparent" : "#f0effd",
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
  );
};

const SourceCard = ({ title, icon }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        minHeight: {
          xs: 62,
          sm: 66,
        },

        display: "flex",
        alignItems: "center",

        gap: 1.2,

        px: {
          xs: 1.5,
          sm: 1.7,
        },

        borderRadius: "14px",

        bgcolor: "#FFFFFF",

        border: "1px solid #E0E4E9",

        boxShadow:
          "0 6px 16px rgba(20,30,50,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",

        transition: "all 0.25s ease",

        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: "#e7c1a8",
          boxShadow: "0 12px 24px rgba(20,30,50,0.08)",
        },
      }}
    >
      <Avatar
        sx={{
          width: 35,
          height: 35,
          bgcolor: "#f8eee8",
          color: "#e37131",
          flexShrink: 0,
        }}
      >
        {icon}
      </Avatar>

      <Typography
        sx={{
          fontSize: {
            xs: 14,
            sm: 14.5,
          },
          fontWeight: 600,
          color: "#18212c",
          lineHeight: 1.3,
        }}
      >
        {title}
      </Typography>
    </Paper>
  );
};

const LeadCapture = () => {
  const navigate = useNavigate();

  return (
    // <Box
    //   component="section"
    //   sx={{
    //     position: "relative",
    //     width: "100%",
    //     overflow: "hidden",

    //     py: {
    //       xs: 7,
    //       sm: 9,
    //       md: 11,
    //     },

    //     background: `
    //       radial-gradient(
    //         circle at 42% 45%,
    //         rgba(235, 139, 53, 0.10),
    //         transparent 28%
    //       ),
    //       radial-gradient(
    //         circle at 82% 20%,
    //         rgba(79,70,229,0.045),
    //         transparent 30%
    //       ),
    //       #f8f8f8
    //     `,
    //   }}
    // >
    //   <Box
    //     sx={{
    //       position: "absolute",
    //       width: 420,
    //       height: 420,
    //       borderRadius: "50%",
    //       left: -250,
    //       bottom: -250,
    //       background:
    //         "radial-gradient(circle, rgba(245,91,11,0.06), transparent 70%)",
    //       filter: "blur(20px)",
    //       pointerEvents: "none",
    //     }}
    //   />

    //   <Box
    //     sx={{
    //       position: "absolute",
    //       width: 450,
    //       height: 450,
    //       borderRadius: "50%",
    //       right: -260,
    //       top: -260,
    //       background:
    //         "radial-gradient(circle, rgba(79,70,229,0.06), transparent 70%)",
    //       filter: "blur(20px)",
    //       pointerEvents: "none",
    //     }}
    //   />
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
      {/* Fine noise/texture overlay — keeps the mesh from looking too "smooth/plasticky" */}
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

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          maxWidth: 1280,

          mx: "auto",

          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
          },
        }}
      >
        {/* ===================================================
            MAIN TWO COLUMN LAYOUT
        =================================================== */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "0.95fr 1.05fr",
            },

            alignItems: "center",

            gap: {
              xs: 6,
              sm: 7,
              md: 7,
              lg: 9,
            },
          }}
        >
          {/* =================================================
              LEFT — LEAD INBOX
          ================================================= */}

          <Box
            sx={{
              order: {
                xs: 2,
                md: 1,
              },

              display: "flex",

              justifyContent: {
                xs: "center",
                md: "flex-start",
              },

              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",

                display: "flex",

                justifyContent: {
                  xs: "center",
                  md: "flex-start",
                },

                transform: {
                  md: "translateX(-10px)",
                },
              }}
            >
              <LeadInboxPreview />
            </Box>
          </Box>

          {/* =================================================
              RIGHT — CONTENT
          ================================================= */}

          <Box
            sx={{
              order: {
                xs: 1,
                md: 2,
              },

              width: "100%",

              maxWidth: {
                xs: 620,
                md: 600,
              },

              mx: {
                xs: "auto",
                md: 0,
              },
            }}
          >
            {/* =================================================
                BADGE
            ================================================= */}

            <Chip
              icon={
                <PersonAddAltOutlinedIcon
                  sx={{
                    fontSize: 18,
                    color: "#d66b2c !important",
                  }}
                />
              }
              label="Automatic Intake"
              sx={{
                height: 40,
                px: 1,

                mb: {
                  xs: 2,
                  md: 2.2,
                },

                borderRadius: "30px",

                bgcolor: "rgba(244, 226, 215, 0.85)",

                color: "#bd5e28",

                fontSize: 15,

                fontWeight: 500,

                "& .MuiChip-icon": {
                  ml: 1,
                },

                "& .MuiChip-label": {
                  px: 1,
                },
              }}
            />

            {/* =================================================
                HEADING
            ================================================= */}

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: 29,
                  sm: 35,
                  md: 39,
                  lg: 42,
                },

                lineHeight: 1.15,

                fontWeight: 600,

                color: "#171d27",

                letterSpacing: "-0.02em",

                mb: {
                  xs: 2,
                  md: 2.2,
                },
              }}
            >
              Pull Leads In From{" "}
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                  fontWeight: 600,
                }}
              >
                Every Channel,{" "}
              </Box>
              Automatically
            </Typography>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <Typography
              sx={{
                color: "#4c5969",

                fontSize: {
                  xs: 15,
                  sm: 16,
                  md: 16.5,
                },

                lineHeight: 1.65,

                letterSpacing: "0.05px",

                maxWidth: 590,

                mb: {
                  xs: 3,
                  md: 3.2,
                },
              }}
            >
              Connect your Meta ad forms, spreadsheets, website forms, and CSV
              uploads. New leads are sorted into the right list the moment they
              arrive and can kick off a call, WhatsApp message, email, or
              automation instantly — no manual work required.
            </Typography>

            {/* =================================================
                SOURCE CARDS
            ================================================= */}

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                },

                gap: {
                  xs: 1.4,
                  sm: 1.6,
                },

                mb: {
                  xs: 3,
                  md: 3.2,
                },
              }}
            >
              {sourceCards.map((source) => (
                <SourceCard
                  key={source.title}
                  title={source.title}
                  icon={source.icon}
                />
              ))}
            </Box>

            {/* =================================================
                SUPPORTING BULLETS
            ================================================= */}

            <Stack spacing={1.45}>
              {supportingBullets.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.2}
                  alignItems="center"
                >
                  <CheckCircleIcon
                    sx={{
                      fontSize: 20,
                      color: "#329967",
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: {
                        xs: 14.5,
                        md: 15.5,
                      },

                      color: "#1f2935",

                      fontWeight: 400,

                      lineHeight: 1.45,
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* =================================================
                CTA
            ================================================= */}

            <Button
              variant="contained"
              endIcon={<ArrowOutwardIcon />}
              onClick={() => navigate("/book-a-demo")}
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
