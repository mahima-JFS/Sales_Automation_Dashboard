import React from "react";
import { Box, Button, Typography, Paper, Stack } from "@mui/material";

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
        py: {
          xs: 6,
          md: 8,
        },
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
            <Box
              sx={{
                position: "relative",
                width: {
                  xs: 330,
                  sm: 440,
                  md: 500,
                },
                height: {
                  xs: 260,
                  sm: 330,
                  md: 370,
                },
                zIndex: 2,
              }}
            >
              {/* LAPTOP SCREEN */}
              <Box
                sx={{
                  position: "absolute",
                  width: "72%",
                  height: "60%",
                  left: "15%",
                  top: "5%",
                  border: "4px solid #222",
                  borderRadius: "9px",
                  bgcolor: "#ffffff",
                  overflow: "hidden",
                  transform: "perspective(900px) rotateZ(-14deg) rotateX(4deg)",
                  transformOrigin: "center",
                  boxShadow: "0 20px 35px rgba(30, 30, 40, 0.22)",
                }}
              >
                {/* SCREEN TOP BAR */}
                <Box
                  sx={{
                    height: "13%",
                    borderBottom: "1px solid #e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    px: 1.2,
                    gap: 0.6,
                  }}
                >
                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      bgcolor: "#d9dce0",
                    }}
                  />

                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      bgcolor: "#d9dce0",
                    }}
                  />

                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      bgcolor: "#d9dce0",
                    }}
                  />

                  <Box
                    sx={{
                      width: "30%",
                      height: 6,
                      borderRadius: 2,
                      bgcolor: "#f2f3f5",
                      ml: 1,
                    }}
                  />
                </Box>

                {/* SCREEN CONTENT */}
                <Box
                  sx={{
                    display: "flex",
                    height: "87%",
                  }}
                >
                  {/* SIDEBAR */}
                  <Box
                    sx={{
                      width: "19%",
                      borderRight: "1px solid #eef0f2",
                      p: 0.8,
                    }}
                  >
                    {[1, 2, 3, 4].map((item) => (
                      <Box
                        key={item}
                        sx={{
                          width: "100%",
                          height: 7,
                          borderRadius: 2,
                          bgcolor: item === 1 ? "#f6e8df" : "#f0f2f4",
                          mb: 1,
                        }}
                      />
                    ))}
                  </Box>

                  {/* WORKFLOW */}
                  <Box
                    sx={{
                      flex: 1,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      pt: 1.5,
                    }}
                  >
                    {/* WORKFLOW HEADER */}
                    <Box
                      sx={{
                        width: "30%",
                        height: 15,
                        borderRadius: 1,
                        background: "linear-gradient(90deg, #ef5a12, #5b46b8)",
                        mb: 1,
                      }}
                    />

                    {/* FLOW STEPS */}
                    {[1, 2, 3, 4].map((item) => (
                      <React.Fragment key={item}>
                        <Paper
                          elevation={0}
                          sx={{
                            width: "38%",
                            height: 18,
                            borderRadius: "3px",
                            border: "1px solid #e4e6eb",
                            bgcolor: "#fff",
                            display: "flex",
                            alignItems: "center",
                            px: 0.6,
                          }}
                        >
                          <Box
                            sx={{
                              width: 5,
                              height: 5,
                              borderRadius: "50%",
                              bgcolor:
                                item === 1
                                  ? "#25a7a0"
                                  : item === 2
                                    ? "#ed8b35"
                                    : item === 3
                                      ? "#c971d4"
                                      : "#aab1bb",
                              mr: 0.6,
                            }}
                          />

                          <Box
                            sx={{
                              height: 4,
                              width: "60%",
                              borderRadius: 1,
                              bgcolor: "#eceef1",
                            }}
                          />
                        </Paper>

                        {item < 4 && (
                          <Box
                            sx={{
                              width: 1,
                              height: 8,
                              bgcolor: "#cfd4da",
                            }}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </Box>
                </Box>
              </Box>

              {/* LAPTOP KEYBOARD */}
              <Box
                sx={{
                  position: "absolute",
                  width: "70%",
                  height: "32%",
                  left: "10%",
                  top: "48%",
                  transform:
                    "perspective(800px) rotateX(62deg) rotateZ(-14deg)",
                  transformOrigin: "center top",
                  bgcolor: "#777a80",
                  borderRadius: "4px 4px 12px 12px",
                  overflow: "hidden",
                  boxShadow: "0 12px 22px rgba(20,20,30,0.25)",
                }}
              >
                {/* KEYBOARD */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "14%",
                    left: "12%",
                    width: "62%",
                    height: "55%",
                    backgroundImage:
                      "repeating-linear-gradient(90deg, #24262b 0px, #24262b 10px, transparent 10px, transparent 12px), repeating-linear-gradient(0deg, #24262b 0px, #24262b 7px, transparent 7px, transparent 9px)",
                    opacity: 0.9,
                  }}
                />

                {/* TRACKPAD */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "24%",
                    height: "35%",
                    bottom: "8%",
                    left: "42%",
                    border: "1px solid #555960",
                    borderRadius: "2px",
                  }}
                />
              </Box>

              {/* LAPTOP PURPLE BASE */}
              <Box
                sx={{
                  position: "absolute",
                  width: "82%",
                  height: "23%",
                  bottom: "0%",
                  left: "11%",
                  transform: "skewY(5deg)",
                  borderRadius: "0 0 12px 12px",
                  background:
                    "linear-gradient(110deg, #2a245d 0%, #49328e 40%, #30165c 70%, #8c54d5 100%)",
                  boxShadow: "0 20px 35px rgba(55, 30, 100, 0.25)",
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
