import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
  Grid,
  Chip,
  IconButton,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import RefreshIcon from "@mui/icons-material/Refresh";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import CloseIcon from "@mui/icons-material/Close";

const features = [
  "AI Qualifies Leads",
  "Books Calendar Slots",
  "Meeting Confirmation",
  "WhatsApp Reminder",
  "Email Reminder",
  "24×7 Availability",
];

const bookingGroups = [
  {
    date: "Wed, 22 Jul",
    count: "1 booking",
    bookings: [
      {
        time: "10:00 AM",
        name: "Sami",
        phone: "+91 9099433467",
        project: "Saur Developer, Guj",
        booked: "Booked 21 Jul, 11:43 am",
      },
    ],
  },
  {
    date: "Fri, 24 Jul",
    count: "3 bookings",
    bookings: [
      {
        time: "10:00 AM",
        name: "Harsh",
        phone: "+91 9537010060",
        project: "JFS 1.0",
        booked: "Booked 23 Jul, 4:40 pm",
      },
      {
        time: "1:00 AM",
        name: "Bhoomi",
        phone: "+91 9131270607",
        project: "JFS 1.0",
        booked: "Booked 23 Jul, 4:58 pm",
      },
      {
        time: "4:00 PM",
        name: "Harsh",
        phone: "+91 9537010060",
        project: "JFS 1.0",
        booked: "Booked 23 Jul, 3:18 pm",
      },
    ],
  },
  {
    date: "Sat, 25 Jul",
    count: "5 bookings",
    bookings: [
      {
        time: "11:00 AM",
        name: "Bhoomi",
        phone: "+91 9131270607",
        project: "JFS 1.0",
        booked: "Booked 23 Jul, 5:54 pm",
      },
      {
        time: "12:00 PM",
        name: "Harsh",
        phone: "+91 9537010060",
        project: "Saur Developer",
        booked: "Booked 23 Jul, 1:22 pm",
      },
    ],
  },
];

const AppointmentBooking = () => {
  const navigate = useNavigate();

  return (
    // <Box
    //   sx={{
    //     minHeight: "100vh",
    //     width: "100%",
    //     overflow: "hidden",
    //     position: "relative",
    //     bgcolor: "#f8f8f8",
    //     background:
    //       "radial-gradient(circle at 65% 38%, rgba(234, 137, 42, 0.13), transparent 27%), radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9), transparent 35%), #f8f8f8",
    //     py: {
    //       xs: 5,
    //       md: 6,
    //     },
    //   }}
    // >
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
          xs: 0,
          sm: 1.5,
          md: 2,
          lg: 3,
        },

        pb: {
          xs: 3,
          sm: 4,
          md: 4,
        },

        backgroundColor: "#FDFDFF",

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
      {/* =========================================================
      NOISE OVERLAY
  ========================================================= */}
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

      {/* =========================================================
      MAIN CONTENT
  ========================================================= */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1380px",
          mx: "auto",
          position: "relative",
          zIndex: 1,

          px: {
            xs: 1.5,
            sm: 2.5,
            md: 4,
            lg: 5,
            xl: 6,
          },

          boxSizing: "border-box",
        }}
      >
        {/* =======================================================
        MAIN ROW
    ======================================================= */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",

            gap: {
              xs: 4,
              sm: 5,
              md: 6,
            },

            "@media (min-width: 1024px)": {
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            },
          }}
        >
          {/* =====================================================
          LEFT SECTION
      ===================================================== */}
          <Box
            sx={{
              width: "100%",
              minWidth: 0,

              "@media (min-width: 1024px)": {
                width: "50%",
                flex: "0 0 50%",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "100%",
                  sm: 670,
                  md: 670,
                  lg: "100%",
                },

                mx: {
                  xs: "auto",
                  lg: 0,
                },
              }}
            >
              {/* =================================================
              EYEBROW
          ================================================= */}
              <Chip
                icon={
                  <CalendarMonthOutlinedIcon
                    sx={{
                      fontSize: {
                        xs: 16,
                        sm: 18,
                        md: 19,
                      },
                      color: "#ef5a16 !important",
                    }}
                  />
                }
                label="Smart Scheduling"
                sx={{
                  height: {
                    xs: 36,
                    sm: 40,
                    md: 42,
                  },

                  px: {
                    xs: 0.7,
                    sm: 0.9,
                    md: 1,
                  },

                  mb: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                  },

                  borderRadius: "30px",
                  bgcolor: "rgba(245, 225, 211, 0.8)",
                  color: "#c75c20",

                  fontSize: {
                    xs: 13,
                    sm: 15,
                    md: 16,
                  },

                  fontWeight: 500,
                  letterSpacing: "0.2px",
                }}
              />

              {/* =================================================
              HEADING
          ================================================= */}
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "31px",
                    md: "36px",
                    lg: "42px",
                  },

                  lineHeight: 1.18,
                  fontWeight: 600,
                  color: "#151b28",
                  letterSpacing: {
                    xs: "-0.3px",
                    md: "-0.5px",
                  },

                  maxWidth: 700,

                  mb: {
                    xs: 2,
                    sm: 2.2,
                    md: 2.5,
                  },
                }}
              >
                Your AI Agent Books Meetings{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#4F46E5",
                  }}
                >
                  While You Sleep
                </Box>
              </Typography>

              {/* =================================================
              DESCRIPTION
          ================================================= */}
              <Typography
                sx={{
                  width: "100%",
                  maxWidth: 710,

                  color: "#485568",

                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "18px",
                  },

                  lineHeight: {
                    xs: 1.55,
                    md: 1.65,
                  },

                  letterSpacing: {
                    xs: 0,
                    md: "0.2px",
                  },

                  mb: {
                    xs: 2,
                    sm: 2.5,
                    md: 2,
                  },
                }}
              >
                An always-on voice assistant greets prospects, answers routine
                questions, checks calendar availability, and locks in the
                meeting — then follows up automatically so no booking gets
                missed.
              </Typography>

              {/* =================================================
              CHECKLIST
          ================================================= */}
              <Box
                sx={{
                  width: "100%",
                  display: "grid",

                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, minmax(0, 1fr))",
                  },

                  gap: {
                    xs: 1,
                    sm: 1.2,
                    md: "12px 16px",
                  },
                }}
              >
                {[
                  "Qualifies prospects on the call",
                  "Finds and books open calendar slots",
                  "Sends instant confirmation",
                  "Reminds via WhatsApp",
                  "Reminds via email",
                  "Answers calls day or night",
                ].map((feature) => (
                  <Paper
                    key={feature}
                    elevation={0}
                    sx={{
                      width: "100%",
                      minWidth: 0,

                      minHeight: {
                        xs: 42,
                        sm: 46,
                        md: 50,
                      },

                      display: "flex",
                      alignItems: "center",

                      gap: {
                        xs: 0.8,
                        md: 1.4,
                      },

                      px: {
                        xs: 1,
                        sm: 1.3,
                        md: 1.8,
                      },

                      borderRadius: "12px",

                      bgcolor: "rgba(255,255,255,0.72)",

                      border: "1px solid #e0e3e7",

                      boxShadow: `
                    0 3px 8px rgba(20, 30, 50, 0.04),
                    0 6px 15px rgba(255, 104, 17, 0.035)
                  `,

                      boxSizing: "border-box",

                      transition: "all 0.25s ease",

                      "&:hover": {
                        transform: "translateY(-2px)",
                        borderColor: "rgba(248, 91, 8, 0.28)",
                        boxShadow: "0 8px 18px rgba(255, 104, 17, 0.10)",
                      },
                    }}
                  >
                    {/* CHECK ICON */}
                    <Box
                      sx={{
                        width: {
                          xs: 22,
                          sm: 24,
                          md: 28,
                        },

                        height: {
                          xs: 22,
                          sm: 24,
                          md: 28,
                        },

                        minWidth: {
                          xs: 22,
                          sm: 24,
                          md: 28,
                        },

                        borderRadius: "50%",

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        bgcolor: "#fff3ec",
                      }}
                    >
                      <Typography
                        component="span"
                        sx={{
                          color: "#e87532",

                          fontSize: {
                            xs: 13,
                            sm: 14,
                            md: 16,
                          },

                          fontWeight: 700,
                          lineHeight: 1,
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        ✓
                      </Typography>
                    </Box>

                    {/* FEATURE TEXT */}
                    <Typography
                      sx={{
                        minWidth: 0,

                        fontSize: {
                          xs: 11.5,
                          sm: 12,
                          md: 13.5,
                        },

                        color: "#17202d",
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Paper>
                ))}
              </Box>

              {/* =================================================
              BUTTON
          ================================================= */}
              <Button
                variant="contained"
                endIcon={<ArrowOutwardIcon />}
                onClick={() => navigate("/book-a-demo")}
                sx={{
                  mt: {
                    xs: 2.5,
                    sm: 3,
                    md: 3.5,
                  },

                  width: {
                    xs: "100%",
                    sm: 218,
                  },

                  maxWidth: {
                    xs: "100%",
                    sm: 218,
                  },

                  height: {
                    xs: 50,
                    sm: 54,
                    md: 56,
                  },

                  borderRadius: "10px",

                  textTransform: "none",

                  bgcolor: "#f85b08",

                  fontSize: {
                    xs: 15,
                    sm: 17,
                    md: 18,
                  },

                  fontWeight: 700,

                  boxShadow: "0 10px 24px rgba(248, 91, 8, 0.2)",

                  "&:hover": {
                    bgcolor: "#df4f03",
                    boxShadow: "0 12px 28px rgba(248, 91, 8, 0.28)",
                  },
                }}
              >
                Book Demo
              </Button>
            </Box>
          </Box>

          {/* =====================================================
          RIGHT SECTION
      ===================================================== */}
          <Box
            sx={{
              width: "100%",
              minWidth: 0,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              "@media (min-width: 1024px)": {
                width: "50%",
                flex: "0 0 50%",
                justifyContent: "flex-end",
              },
            }}
          >
            {/* ===================================================
            CALENDAR CARD
        =================================================== */}
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                minWidth: 0,

                maxWidth: {
                  xs: "100%",
                  sm: 680,
                  md: 680,
                },

                height: {
                  xs: 455,
                  sm: 470,
                  md: 450,
                  lg: 400,
                },

                overflow: "hidden",

                borderRadius: {
                  xs: "14px",
                  sm: "18px",
                  md: "20px",
                },

                bgcolor: "rgba(255,255,255,0.68)",

                border: "1px solid #d6dce5",

                boxShadow: "0 24px 35px rgba(50, 38, 20, 0.2)",

                boxSizing: "border-box",
              }}
            >
              {/* =================================================
              CALENDAR HEADER
          ================================================= */}
              <Box
                sx={{
                  px: {
                    xs: 1.2,
                    sm: 1.8,
                    md: 2.2,
                  },

                  pt: {
                    xs: 1.2,
                    md: 1.5,
                  },

                  pb: {
                    xs: 1,
                    md: 1.3,
                  },

                  borderBottom: "1px solid #e4e7eb",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1}
                >
                  <Box
                    sx={{
                      minWidth: 0,
                    }}
                  >
                    <Stack direction="row" spacing={0.6} alignItems="center">
                      <CalendarMonthOutlinedIcon
                        sx={{
                          color: "#e87838",
                          fontSize: {
                            xs: 16,
                            sm: 18,
                            md: 19,
                          },
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: {
                            xs: 13,
                            sm: 15,
                            md: 16,
                          },

                          fontWeight: 700,
                          color: "#27313d",

                          whiteSpace: "nowrap",
                        }}
                      >
                        Booking Calendar
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: 7,
                          sm: 8,
                          md: 9,
                        },

                        color: "#5e6977",
                        mt: 0.3,

                        whiteSpace: {
                          xs: "normal",
                          sm: "nowrap",
                        },
                      }}
                    >
                      Bookings your agent makes on calls, day by day
                    </Typography>
                  </Box>

                  {/* REFRESH */}
                  <Button
                    size="small"
                    startIcon={
                      <RefreshIcon
                        sx={{
                          fontSize: {
                            xs: 12,
                            md: 14,
                          },
                        }}
                      />
                    }
                    sx={{
                      minWidth: {
                        xs: 58,
                        sm: 65,
                      },

                      height: {
                        xs: 26,
                        md: 28,
                      },

                      flexShrink: 0,

                      borderRadius: "6px",

                      textTransform: "none",

                      fontSize: {
                        xs: 8,
                        md: 9,
                      },

                      color: "#45505d",
                      bgcolor: "#fff",
                      border: "1px solid #e2e5e8",

                      "& .MuiButton-startIcon": {
                        marginRight: {
                          xs: 0.3,
                          md: 0.5,
                        },
                      },
                    }}
                  >
                    Refresh
                  </Button>
                </Stack>
              </Box>

              {/* =================================================
              FILTERS
          ================================================= */}
              <Box
                sx={{
                  px: {
                    xs: 1,
                    sm: 1.5,
                    md: 1.7,
                  },

                  py: {
                    xs: 0.8,
                    md: 1,
                  },

                  display: "flex",

                  alignItems: "center",

                  flexWrap: {
                    xs: "wrap",
                    sm: "nowrap",
                  },

                  gap: {
                    xs: 0.7,
                    sm: 0.8,
                    md: 1,
                  },

                  borderBottom: "1px solid #e8eaed",

                  overflow: "hidden",
                }}
              >
                {/* FROM DATE */}
                <Paper
                  variant="outlined"
                  sx={{
                    height: {
                      xs: 30,
                      md: 34,
                    },

                    width: {
                      xs: "calc(50% - 12px)",
                      sm: 102,
                    },

                    minWidth: {
                      xs: 0,
                      sm: 102,
                    },

                    px: {
                      xs: 0.7,
                      md: 1,
                    },

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    borderRadius: "7px",
                    borderColor: "#d8dde3",

                    boxSizing: "border-box",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 7,
                        sm: 8,
                        md: 9,
                      },

                      color: "#596574",
                      whiteSpace: "nowrap",
                    }}
                  >
                    01-07-2026
                  </Typography>

                  <CalendarMonthOutlinedIcon
                    sx={{
                      fontSize: {
                        xs: 10,
                        md: 12,
                      },

                      color: "#52606d",
                      flexShrink: 0,
                    }}
                  />
                </Paper>

                <Typography
                  sx={{
                    color: "#a0a7b0",
                    fontSize: {
                      xs: 12,
                      md: 14,
                    },

                    flexShrink: 0,
                  }}
                >
                  →
                </Typography>

                {/* TO DATE */}
                <Paper
                  variant="outlined"
                  sx={{
                    height: {
                      xs: 30,
                      md: 34,
                    },

                    width: {
                      xs: "calc(50% - 12px)",
                      sm: 102,
                    },

                    minWidth: {
                      xs: 0,
                      sm: 102,
                    },

                    px: {
                      xs: 0.7,
                      md: 1,
                    },

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    borderRadius: "7px",
                    borderColor: "#d8dde3",

                    boxSizing: "border-box",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: 7,
                        sm: 8,
                        md: 9,
                      },

                      color: "#596574",
                      whiteSpace: "nowrap",
                    }}
                  >
                    07-08-2026
                  </Typography>

                  <CalendarMonthOutlinedIcon
                    sx={{
                      fontSize: {
                        xs: 10,
                        md: 12,
                      },

                      color: "#52606d",
                      flexShrink: 0,
                    }}
                  />
                </Paper>

                {/* STATUS */}
                <FormControl
                  size="small"
                  sx={{
                    minWidth: {
                      xs: "100%",
                      sm: 82,
                    },

                    width: {
                      xs: "100%",
                      sm: 82,
                    },

                    mt: {
                      xs: 0.3,
                      sm: 0,
                    },
                  }}
                >
                  <Select
                    defaultValue="Confirmed"
                    sx={{
                      height: {
                        xs: 30,
                        md: 34,
                      },

                      width: "100%",

                      fontSize: {
                        xs: 8,
                        md: 9,
                      },

                      borderRadius: "7px",

                      "& .MuiSelect-select": {
                        py: 0.6,
                        px: {
                          xs: 1,
                          md: 1.2,
                        },
                      },
                    }}
                  >
                    <MenuItem value="Confirmed">Confirmed</MenuItem>

                    <MenuItem value="Pending">Pending</MenuItem>
                  </Select>
                </FormControl>

                {/* DESKTOP SPACER */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                />

                {/* BOOKING COUNT */}
                <Typography
                  sx={{
                    fontSize: {
                      xs: 7,
                      sm: 8,
                    },

                    color: "#64707d",
                    whiteSpace: "nowrap",

                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  13 bookings
                </Typography>

                {/* EXPORT */}
                <Button
                  startIcon={
                    <FileDownloadOutlinedIcon
                      sx={{
                        fontSize: {
                          xs: 10,
                          md: 12,
                        },
                      }}
                    />
                  }
                  sx={{
                    minWidth: {
                      xs: "100%",
                      sm: 76,
                    },

                    height: {
                      xs: 28,
                      md: 28,
                    },

                    mt: {
                      xs: 0.3,
                      sm: 0,
                    },

                    fontSize: {
                      xs: 8,
                      md: 8,
                    },

                    textTransform: "none",

                    color: "#5c6875",

                    border: "1px solid #e1e4e8",

                    borderRadius: "6px",

                    "& .MuiButton-startIcon": {
                      marginRight: 0.4,
                    },
                  }}
                >
                  Export Excel
                </Button>
              </Box>

              {/* =================================================
              CALENDAR BOOKINGS
          ================================================= */}
              <Box
                sx={{
                  height: {
                    xs: 315,
                    sm: 330,
                    md: 300,
                  },

                  overflow: "hidden",
                }}
              >
                {bookingGroups.map((group) => (
                  <Box key={group.date}>
                    {/* DATE HEADER */}
                    <Box
                      sx={{
                        height: {
                          xs: 30,
                          md: 31,
                        },

                        px: {
                          xs: 1.2,
                          md: 2,
                        },

                        display: "flex",
                        alignItems: "center",

                        bgcolor: "#f4f5f6",

                        borderBottom: "1px solid #e6e8eb",
                      }}
                    >
                      <CalendarMonthOutlinedIcon
                        sx={{
                          fontSize: {
                            xs: 9,
                            md: 10,
                          },

                          color: "#8a94a0",
                          mr: 0.7,
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: {
                            xs: 7,
                            md: 8,
                          },

                          fontWeight: 700,
                          color: "#52606d",
                        }}
                      >
                        {group.date}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: {
                            xs: 6.5,
                            md: 7,
                          },

                          color: "#8a949f",
                          ml: 0.6,
                        }}
                      >
                        - {group.count}
                      </Typography>
                    </Box>

                    {/* BOOKINGS */}
                    {group.bookings.map((booking, index) => (
                      <Box
                        key={`${group.date}-${index}`}
                        sx={{
                          minHeight: {
                            xs: 48,
                            md: 43,
                          },

                          px: {
                            xs: 1.2,
                            sm: 1.5,
                            md: 2,
                          },

                          display: "flex",
                          alignItems: "center",

                          borderBottom: "1px solid #eceef0",

                          gap: {
                            xs: 0.5,
                            md: 0,
                          },

                          boxSizing: "border-box",
                        }}
                      >
                        {/* TIME */}
                        <Box
                          sx={{
                            width: {
                              xs: "18%",
                              sm: "16%",
                              md: "16%",
                            },

                            flexShrink: 0,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: 8,
                                md: 10,
                              },

                              fontWeight: 700,
                              color: "#384552",
                            }}
                          >
                            {booking.time}
                          </Typography>
                        </Box>

                        {/* DETAILS */}
                        <Box
                          sx={{
                            flexGrow: 1,
                            minWidth: 0,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: 8.5,
                                sm: 9,
                                md: 10,
                              },

                              fontWeight: 700,
                              color: "#46515e",

                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {booking.name}
                          </Typography>

                          <Stack
                            direction="row"
                            spacing={{
                              xs: 0.6,
                              md: 1,
                            }}
                            sx={{
                              mt: 0.2,
                              minWidth: 0,
                              overflow: "hidden",
                            }}
                          >
                            {/* PHONE */}
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: 6,
                                  sm: 6.5,
                                  md: 7,
                                },

                                color: "#88919c",

                                whiteSpace: "nowrap",

                                overflow: "hidden",
                                textOverflow: "ellipsis",

                                display: {
                                  xs: "none",
                                  sm: "block",
                                },
                              }}
                            >
                              ☎ {booking.phone}
                            </Typography>

                            {/* PROJECT */}
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: 6,
                                  sm: 6.5,
                                  md: 7,
                                },

                                color: "#88919c",

                                whiteSpace: "nowrap",

                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {booking.project}
                            </Typography>

                            {/* BOOKED */}
                            <Typography
                              sx={{
                                fontSize: {
                                  xs: 6,
                                  sm: 6.5,
                                  md: 7,
                                },

                                color: "#88919c",

                                whiteSpace: "nowrap",

                                display: {
                                  xs: "none",
                                  sm: "block",
                                },
                              }}
                            >
                              {booking.booked}
                            </Typography>
                          </Stack>
                        </Box>

                        {/* STATUS */}
                        <Chip
                          label="Confirmed"
                          size="small"
                          sx={{
                            height: {
                              xs: 17,
                              md: 20,
                            },

                            fontSize: {
                              xs: 6,
                              md: 7,
                            },

                            bgcolor: "#eef8f1",
                            color: "#27815b",
                            fontWeight: 600,

                            mr: {
                              xs: 0,
                              md: 1.2,
                            },

                            flexShrink: 0,

                            "& .MuiChip-label": {
                              px: {
                                xs: 0.7,
                                md: 1,
                              },
                            },
                          }}
                        />

                        {/* CLOSE */}
                        <IconButton
                          size="small"
                          sx={{
                            width: {
                              xs: 19,
                              md: 22,
                            },

                            height: {
                              xs: 19,
                              md: 22,
                            },

                            color: "#8c98a4",

                            flexShrink: 0,

                            p: 0.3,
                          }}
                        >
                          <CloseIcon
                            sx={{
                              fontSize: {
                                xs: 10,
                                md: 12,
                              },
                            }}
                          />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppointmentBooking;
