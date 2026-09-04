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

      <Box
        sx={{
          maxWidth: 1380,
          mx: "auto",
          px: {
            xs: 2.5,
            sm: 4,
            md: 6,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,

            "@media (min-width: 1024px)": {
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            },
          }}
        >
          {/* =====================================================
          LEFT SECTION
      ===================================================== */}

          <Box
            sx={{
              width: "100%",

              "@media (min-width: 1024px)": {
                width: "50%",
                minWidth: 0,
              },
            }}
          >
            <Box
              sx={{
                maxWidth: 670,

                "@media (min-width: 1024px)": {
                  maxWidth: "100%",
                },
              }}
            >
              {/* EYEBROW TAG */}

              <Chip
                icon={
                  <CalendarMonthOutlinedIcon
                    sx={{
                      fontSize: 19,
                      color: "#ef5a16 !important",
                    }}
                  />
                }
                label="Smart Scheduling"
                sx={{
                  height: 42,
                  px: 1,
                  mb: 3,
                  borderRadius: "30px",
                  bgcolor: "rgba(245, 225, 211, 0.8)",
                  color: "#c75c20",
                  fontSize: 16,
                  fontWeight: 500,
                  letterSpacing: "0.2px",
                }}
              />

              {/* HEADING */}

              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "32px",
                    lg: "42px",
                  },

                  lineHeight: 1.18,
                  fontWeight: 600,
                  color: "#151b28",
                  letterSpacing: "-0.5px",
                  maxWidth: 700,
                  mb: 2.5,
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

              {/* DESCRIPTION */}

              <Typography
                sx={{
                  maxWidth: 710,
                  color: "#485568",

                  fontSize: {
                    xs: "15px",
                    md: "18px",
                  },

                  lineHeight: 1.65,
                  letterSpacing: "0.2px",
                  mb: 2,
                }}
              >
                An always-on voice assistant greets prospects, answers routine
                questions, checks calendar availability, and locks in the
                meeting — then follows up automatically so no booking gets
                missed.
              </Typography>

              {/* CHECKLIST */}

              <Box
                sx={{
                  display: "grid",

                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                  },

                  gap: {
                    xs: 1.2,
                    md: "12px 16px",
                  },

                  width: "100%",
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
                      minHeight: {
                        xs: 44,
                        md: 50,
                      },

                      width: "100%",

                      display: "flex",
                      alignItems: "center",

                      gap: {
                        xs: 1,
                        md: 1.4,
                      },

                      px: {
                        xs: 1.2,
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
                          xs: 24,
                          md: 28,
                        },

                        height: {
                          xs: 24,
                          md: 28,
                        },

                        minWidth: {
                          xs: 24,
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
                            xs: 14,
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
                        fontSize: {
                          xs: 12,
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

              {/* BUTTON */}

              <Button
                variant="contained"
                endIcon={<ArrowOutwardIcon />}
                onClick={() => navigate("/book-a-demo")}
                sx={{
                  mt: 3.5,

                  width: {
                    xs: "100%",
                    sm: 218,
                  },

                  maxWidth: 218,

                  height: 56,

                  borderRadius: "10px",

                  textTransform: "none",

                  bgcolor: "#f85b08",

                  fontSize: 18,

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

              display: "flex",

              justifyContent: "center",

              alignItems: "center",

              "@media (min-width: 1024px)": {
                width: "50%",
                minWidth: 0,
                justifyContent: "flex-end",
              },
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "100%",

                maxWidth: {
                  xs: 680,
                  md: 680,
                },

                height: {
                  xs: 470,
                  sm: 470,
                  lg: 400,
                },

                overflow: "hidden",

                borderRadius: "20px",

                bgcolor: "rgba(255,255,255,0.68)",

                border: "1px solid #d6dce5",

                boxShadow: "0 24px 35px rgba(50, 38, 20, 0.2)",
              }}
            >
              {/* Calendar Header */}

              <Box
                sx={{
                  px: 2.2,
                  pt: 1.5,
                  pb: 1.3,
                  borderBottom: "1px solid #e4e7eb",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Stack direction="row" spacing={0.7} alignItems="center">
                      <CalendarMonthOutlinedIcon
                        sx={{
                          color: "#e87838",
                          fontSize: 19,
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: "#27313d",
                        }}
                      >
                        Booking Calendar
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        fontSize: 9,
                        color: "#5e6977",
                        mt: 0.3,
                      }}
                    >
                      Bookings your agent makes on calls, day by day
                    </Typography>
                  </Box>

                  <Button
                    size="small"
                    startIcon={
                      <RefreshIcon
                        sx={{
                          fontSize: 14,
                        }}
                      />
                    }
                    sx={{
                      minWidth: 65,
                      height: 28,
                      borderRadius: "6px",
                      textTransform: "none",
                      fontSize: 9,
                      color: "#45505d",
                      bgcolor: "#fff",
                      border: "1px solid #e2e5e8",
                    }}
                  >
                    Refresh
                  </Button>
                </Stack>
              </Box>

              {/* Filters */}

              <Box
                sx={{
                  px: 1.7,
                  py: 1,

                  display: "flex",

                  alignItems: "center",

                  gap: 1,

                  borderBottom: "1px solid #e8eaed",

                  overflow: "hidden",
                }}
              >
                <Paper
                  variant="outlined"
                  sx={{
                    height: 34,
                    width: 102,
                    minWidth: 102,

                    px: 1,

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "space-between",

                    borderRadius: "7px",

                    borderColor: "#d8dde3",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 9,
                      color: "#596574",
                    }}
                  >
                    01-07-2026
                  </Typography>

                  <CalendarMonthOutlinedIcon
                    sx={{
                      fontSize: 12,
                      color: "#52606d",
                    }}
                  />
                </Paper>

                <Typography
                  sx={{
                    color: "#a0a7b0",
                  }}
                >
                  →
                </Typography>

                <Paper
                  variant="outlined"
                  sx={{
                    height: 34,
                    width: 102,
                    minWidth: 102,

                    px: 1,

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "space-between",

                    borderRadius: "7px",

                    borderColor: "#d8dde3",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 9,
                      color: "#596574",
                    }}
                  >
                    07-08-2026
                  </Typography>

                  <CalendarMonthOutlinedIcon
                    sx={{
                      fontSize: 12,
                      color: "#52606d",
                    }}
                  />
                </Paper>

                <FormControl
                  size="small"
                  sx={{
                    minWidth: 82,
                  }}
                >
                  <Select
                    defaultValue="Confirmed"
                    sx={{
                      height: 34,

                      fontSize: 9,

                      borderRadius: "7px",

                      "& .MuiSelect-select": {
                        py: 0.8,
                      },
                    }}
                  >
                    <MenuItem value="Confirmed">Confirmed</MenuItem>

                    <MenuItem value="Pending">Pending</MenuItem>
                  </Select>
                </FormControl>

                <Box
                  sx={{
                    flexGrow: 1,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 8,
                    color: "#64707d",
                    whiteSpace: "nowrap",
                  }}
                >
                  13 bookings
                </Typography>

                <Button
                  startIcon={
                    <FileDownloadOutlinedIcon
                      sx={{
                        fontSize: 12,
                      }}
                    />
                  }
                  sx={{
                    minWidth: 76,
                    height: 28,
                    fontSize: 8,
                    textTransform: "none",
                    color: "#5c6875",
                    border: "1px solid #e1e4e8",
                    borderRadius: "6px",
                  }}
                >
                  Export Excel
                </Button>
              </Box>

              {/* Calendar Bookings */}

              <Box
                sx={{
                  height: 300,
                  overflow: "hidden",
                }}
              >
                {bookingGroups.map((group) => (
                  <Box key={group.date}>
                    {/* Date Header */}

                    <Box
                      sx={{
                        height: 31,

                        px: 2,

                        display: "flex",

                        alignItems: "center",

                        bgcolor: "#f4f5f6",

                        borderBottom: "1px solid #e6e8eb",
                      }}
                    >
                      <CalendarMonthOutlinedIcon
                        sx={{
                          fontSize: 10,
                          color: "#8a94a0",
                          mr: 0.8,
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: 8,
                          fontWeight: 700,
                          color: "#52606d",
                        }}
                      >
                        {group.date}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: 7,
                          color: "#8a949f",
                          ml: 0.6,
                        }}
                      >
                        - {group.count}
                      </Typography>
                    </Box>

                    {/* Booking Rows */}

                    {group.bookings.map((booking, index) => (
                      <Box
                        key={`${group.date}-${index}`}
                        sx={{
                          minHeight: 43,

                          px: 2,

                          display: "flex",

                          alignItems: "center",

                          borderBottom: "1px solid #eceef0",
                        }}
                      >
                        {/* Time */}

                        <Box
                          sx={{
                            width: "16%",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 10,
                              fontWeight: 700,
                              color: "#384552",
                            }}
                          >
                            {booking.time}
                          </Typography>
                        </Box>

                        {/* Details */}

                        <Box
                          sx={{
                            flexGrow: 1,

                            minWidth: 0,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 10,
                              fontWeight: 700,
                              color: "#46515e",
                            }}
                          >
                            {booking.name}
                          </Typography>

                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                              mt: 0.2,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: 7,
                                color: "#88919c",
                                whiteSpace: "nowrap",
                              }}
                            >
                              ☎ {booking.phone}
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: 7,
                                color: "#88919c",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {booking.project}
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: 7,
                                color: "#88919c",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {booking.booked}
                            </Typography>
                          </Stack>
                        </Box>

                        {/* Status */}

                        <Chip
                          label="Confirmed"
                          size="small"
                          sx={{
                            height: 20,

                            fontSize: 7,

                            bgcolor: "#eef8f1",

                            color: "#27815b",

                            fontWeight: 600,

                            mr: 1.5,
                          }}
                        />

                        {/* Close */}

                        <IconButton
                          size="small"
                          sx={{
                            width: 22,
                            height: 22,
                            color: "#8c98a4",
                          }}
                        >
                          <CloseIcon
                            sx={{
                              fontSize: 12,
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
