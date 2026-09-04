import React from "react";
import { Box, Button, Typography, Paper, Stack } from "@mui/material";
import laptopImage from "../../assets/images/laptop.png";

import { useNavigate } from "react-router-dom";

const SequenceAutomation = () => {
  const navigate = useNavigate();

  return (
    // <Box
    //   sx={{
    //     // minHeight: "100vh",
    //     width: "100%",
    //     overflow: "hidden",
    //     position: "relative",
    //     display: "flex",
    //     alignItems: "center",
    //     bgcolor: "#f8f8f9",
    //     background: `
    //       radial-gradient(
    //         circle at 48% 48%,
    //         rgba(240, 156, 83, 0.13),
    //         transparent 32%
    //       ),
    //       radial-gradient(
    //         circle at 80% 45%,
    //         rgba(255,255,255,0.9),
    //         transparent 30%
    //       ),
    //       #f8f8f9
    //     `,
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
      {/* MAIN CONTENT */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1300px",
          mx: "auto",
          px: {
            xs: 2.5,
            sm: 4,
            md: 3,
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            alignItems: "center",
            columnGap: {
              md: 5,
              lg: 7,
            },
            rowGap: {
              xs: 7,
              md: 2,
            },
            minHeight: {
              md: "500px",
            },
          }}
        >
          {/* ================= LEFT SECTION ================= */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              width: "100%",
            }}
          >
            {/* HEADING */}
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "30px",
                  sm: "36px",
                  md: "35px",
                },
                lineHeight: {
                  xs: 1.28,
                  md: 1.22,
                },
                fontWeight: 600,
                color: "#192230",
                letterSpacing: "0.3px",
                maxWidth: 850,
                mb: {
                  xs: 2.5,
                  md: 3,
                },
              }}
            >
              Create follow-up{" "}
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                }}
              >
                sequences
              </Box>{" "}
              across{" "}
              <Box
                component="span"
                sx={{
                  display: {
                    xs: "inline",
                    sm: "inline",
                    md: "block",
                  },
                }}
              >
                Email, WhatsApp, and AI Calling
              </Box>
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                width: "100%",
                maxWidth: 620,
                fontSize: {
                  xs: "15px",
                  sm: "16px",
                  md: "18px",
                },
                lineHeight: {
                  xs: 1.6,
                  md: 1.65,
                },
                color: "#5a6675",
                letterSpacing: "0.2px",
                mb: {
                  xs: 3,
                  md: 4.5,
                },
              }}
            >
              Turn every lead journey into a structured flow, from first touch
              to qualification, with each step planned, timed, and connected in
              one place.
            </Typography>

            {/* BUTTONS */}
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={1.5}
              sx={{
                width: "100%",
              }}
            >
              {/* PRIMARY BUTTON */}
              <Button
                variant="contained"
                onClick={() => navigate("/features")}
                sx={{
                  height: 48,
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },
                  minWidth: {
                    xs: "100%",
                    sm: 320,
                  },
                  px: 3,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                  bgcolor: "#f65308",
                  boxShadow: "none",
                  whiteSpace: "nowrap",

                  "&:hover": {
                    bgcolor: "#df4903",
                    boxShadow: "none",
                  },
                }}
              >
                Start Building Your Sequence
                <Box
                  component="span"
                  sx={{
                    fontSize: 20,
                    ml: 1.5,
                    lineHeight: 1,
                  }}
                >
                  ↗
                </Box>
              </Button>

              {/* SECONDARY BUTTON */}
              <Button
                variant="outlined"
                sx={{
                  height: 48,
                  width: {
                    xs: "100%",
                    sm: "auto",
                  },
                  minWidth: {
                    xs: "100%",
                    sm: 230,
                  },
                  px: 3,
                  borderRadius: "8px",
                  textTransform: "none",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#c65b20",
                  borderColor: "#e7793e",
                  bgcolor: "rgba(255,255,255,0.18)",
                  whiteSpace: "nowrap",

                  "&:hover": {
                    borderColor: "#d96326",
                    bgcolor: "rgba(255,255,255,0.5)",
                  },
                }}
              >
                Get Free Demo
                <Box
                  component="span"
                  sx={{
                    fontSize: 20,
                    ml: 1.5,
                    lineHeight: 1,
                  }}
                >
                  ↗
                </Box>
              </Button>
            </Stack>
          </Box>
          {/* ================= RIGHT SECTION ================= */}
          <Box
            sx={{
              position: "relative",
              height: {
                xs: 330,
                sm: 390,
                md: 420,
              },
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* PURPLE DOTS */}
            <Box
              sx={{
                position: "absolute",
                width: {
                  xs: 110,
                  md: 130,
                },
                height: {
                  xs: 130,
                  md: 150,
                },
                right: {
                  xs: 0,
                  md: 5,
                },
                top: {
                  xs: 0,
                  md: 15,
                },
                opacity: 0.65,
                backgroundImage:
                  "radial-gradient(circle, #b8a9e8 1.5px, transparent 1.7px)",
                backgroundSize: "12px 12px",
              }}
            />

            {/* LAPTOP WRAPPER */}
            {/* ================= RIGHT SECTION ================= */}
            <Box
              sx={{
                position: "relative",
                height: {
                  xs: 330,
                  sm: 390,
                  md: 420,
                },
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={laptopImage}
                alt="AI Sales Automation"
                sx={{
                  width: {
                    xs: "100%",
                    sm: 440,
                    md: 540,
                    lg: 600,
                  },
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SequenceAutomation;
