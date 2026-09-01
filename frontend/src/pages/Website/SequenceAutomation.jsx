import React from "react";
import { Box, Button, Typography, Paper, Stack } from "@mui/material";
import laptopImage from "../../assets/images/laptop.png";

const SequenceAutomation = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        bgcolor: "#f8f8f9",
        background: `
          radial-gradient(
            circle at 48% 48%,
            rgba(240, 156, 83, 0.13),
            transparent 32%
          ),
          radial-gradient(
            circle at 80% 45%,
            rgba(255,255,255,0.9),
            transparent 30%
          ),
          #f8f8f9
        `,
      }}
    >
      {/* MAIN CONTENT */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1160px",
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
                fontWeight: 400,
                color: "#192230",
                letterSpacing: "0.3px",
                maxWidth: 650,
                mb: 3,
              }}
            >
              Create follow-up{" "}
              <Box
                component="span"
                sx={{
                  color: "#4b4ca3",
                }}
              >
                sequences
              </Box>{" "}
              across
              <br />
              Email, WhatsApp, and AI Calling
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                maxWidth: 620,
                fontSize: {
                  xs: "16px",
                  md: "18px",
                },
                lineHeight: 1.65,
                color: "#5a6675",
                letterSpacing: "0.3px",
                mb: 4.5,
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
            >
              {/* PRIMARY BUTTON */}
              <Button
                variant="contained"
                sx={{
                  height: 48,
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
