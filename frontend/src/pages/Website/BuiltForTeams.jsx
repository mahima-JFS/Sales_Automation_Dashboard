import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import LogoIcon from "../../assets/images/JFSpx.png";

// const LogoIcon = ({ size = 68 }) => (
//   <Box component="svg" viewBox="0 0 100 100" sx={{ width: size, height: size }}>
//     <path
//       d="M50 20 C30 20, 20 32, 20 45 C20 56, 29 63, 40 63 C48 63, 54 58, 54 51 C54 46, 50 43, 46 43 C43 43, 41 45, 41 47"
//       fill="none"
//       stroke="#f35b0b"
//       strokeWidth="9"
//       strokeLinecap="round"
//     />

//     <path
//       d="M50 80 C70 80, 80 68, 80 55 C80 44, 71 37, 60 37 C52 37, 46 42, 46 49 C46 54, 50 57, 54 57 C57 57, 59 55, 59 53"
//       fill="none"
//       stroke="#f35b0b"
//       strokeWidth="9"
//       strokeLinecap="round"
//     />
//   </Box>
// );

const categories = [
  {
    title: "Real Estate Teams",
    angle: 140,
    segments: [
      {
        text: "For teams that need immediate lead response and ",
      },
      {
        text: "stronger follow-up",
        accent: true,
      },
    ],
  },

  {
    title: "Education and Enrollment Teams",
    angle: 40,
    segments: [
      {
        text: "For businesses that need consistent outreach to inquiries and ",
      },
      {
        text: "applications",
        accent: true,
      },
    ],
  },

  {
    title: "Sales Teams",
    angle: 0,
    segments: [
      {
        text: "For teams that want better follow-up without depending only on ",
      },
      {
        text: "manual effort",
        accent: true,
      },
    ],
  },

  {
    title: "Agencies",
    angle: 320,
    segments: [
      {
        text: "For teams managing outreach across clients and looking for a ",
      },
      {
        text: "more structured system",
        accent: true,
      },
    ],
  },

  {
    title: "SaaS Companies",
    angle: 220,
    segments: [
      {
        text: "For teams running demos, trials, qualification, and ",
      },
      {
        text: "outbound growth",
        accent: true,
      },
    ],
  },

  {
    title: "D2C and Commerce Brands",
    angle: 180,
    segments: [
      {
        text: "For brands using WhatsApp and email to drive conversation and ",
      },
      {
        text: "conversion",
        accent: true,
      },
    ],
  },
];

const VERTEX_RADIUS = 30;

const toPercentPos = (angleDeg, radius) => {
  const rad = (angleDeg * Math.PI) / 180;

  const dx = Math.cos(rad);
  const dy = -Math.sin(rad);

  return {
    left: `${50 + radius * dx}%`,
    top: `${50 + radius * dy}%`,
  };
};

const BuiltForTeams = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",

        pt: {
          xs: 5,
          md: 7,
        },

        pb: 0,

        px: {
          xs: 2,
          sm: 3,
        },

        mb: 0,
      }}
    >
      {/* =========================
      HEADING
  ========================= */}

      <Typography
        component="h2"
        sx={{
          textAlign: "center",
          fontWeight: 700,

          fontSize: {
            xs: 24,
            sm: 28,
            md: 32,
          },

          lineHeight: 1.35,
          color: "#151b28",
          maxWidth: 720,

          mx: "auto",
          mb: 0,
        }}
      >
        Built for{" "}
        <Box component="span" sx={{ color: "#4F46E5" }}>
          teams
        </Box>{" "}
        that need faster{" "}
        <Box component="span" sx={{ color: "#4F46E5" }}>
          follow-up
        </Box>{" "}
        and more{" "}
        <Box component="span" sx={{ color: "#4F46E5" }}>
          outbound reach
        </Box>
      </Typography>

      {/* =========================
      DESCRIPTION
  ========================= */}

      <Typography
        sx={{
          textAlign: "center",

          fontSize: {
            xs: 15,
            sm: 17,
            md: 18,
          },

          lineHeight: 1.6,
          color: "#5b6478",
          maxWidth: 520,

          mx: "auto",
          mt: 1,
          mb: 0,
        }}
      >
        Designed for{" "}
        <Box component="span" sx={{ color: "#4F46E5" }}>
          teams
        </Box>{" "}
        that rely on consistent outreach and want better{" "}
        <Box component="span" sx={{ color: "#4F46E5" }}>
          results
        </Box>{" "}
        without increasing manual work.
      </Typography>

      {/* =========================
      CIRCLE / CONTENT SECTION
  ========================= */}

      <Box
        sx={{
          width: "100%",
          maxWidth: 920,
          mx: "auto",

          mt: {
            xs: 2,
            sm: 2,
            md: -15,
            lg: -15,
          },

          mb: {
            xs: 0,
            sm: 0,
            md: -15,
            lg: -15,
          },

          pb: 0,
        }}
      >
        {/* =====================================
        DESKTOP CIRCLE LAYOUT
    ===================================== */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },

            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",

            overflow: "visible",

            mb: 0,
            pb: 0,
          }}
        >
          {/* OUTER CIRCLE */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              width: `${VERTEX_RADIUS * 1.8}%`,
              height: `${VERTEX_RADIUS * 1.8}%`,

              borderRadius: "50%",
              border: "1px solid rgba(244, 178, 160, 0.4)",
            }}
          />
          {/* MIDDLE CIRCLE */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              width: `${VERTEX_RADIUS * 1.3}%`,
              height: `${VERTEX_RADIUS * 1.3}%`,

              borderRadius: "50%",
              border: "1px solid rgba(244, 178, 160, 0.4)",
            }}
          />
          {/* INNER CIRCLE */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              width: `${VERTEX_RADIUS * 0.8}%`,
              height: `${VERTEX_RADIUS * 0.8}%`,

              borderRadius: "50%",
              border: "1px solid rgba(244, 178, 160, 0.4)",
            }}
          />
          {/* CENTER LOGO */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <Box
              component="img"
              src={LogoIcon}
              alt="Logo"
              sx={{
                width: 150,
                height: 150,
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>
          {/* CATEGORY CONTENT */}
          {categories.map((item) => {
            const pos = toPercentPos(item.angle, VERTEX_RADIUS);

            return (
              <Box
                key={item.title}
                sx={{
                  position: "absolute",

                  top: pos.top,
                  left: pos.left,

                  transform: "translate(-50%, -50%)",

                  width: {
                    md: 210,
                    lg: 230,
                  },

                  textAlign: "center",
                  zIndex: 3,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,

                    fontSize: {
                      md: 18,
                      lg: 18,
                    },

                    color: "#f35b0b",

                    lineHeight: 1.3,
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      md: 15,
                      lg: 15,
                    },

                    lineHeight: 1.5,
                    color: "#5b6478",
                  }}
                >
                  {item.segments.map((seg, index) => (
                    <Box
                      key={index}
                      component="span"
                      sx={{
                        color: seg.accent ? "#4F46E5" : "inherit",
                      }}
                    >
                      {seg.text}
                    </Box>
                  ))}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* =====================================
        MOBILE LAYOUT
    ===================================== */}

        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },

            flexDirection: "column",
            alignItems: "center",

            gap: {
              xs: 1.5,
              sm: 2,
            },

            px: {
              xs: 0,
              sm: 2,
            },

            pt: 1,

            // NO BOTTOM PADDING
            pb: 0,

            mb: 0,
          }}
        >
          {categories.map((item) => (
            <Paper
              key={item.title}
              elevation={0}
              sx={{
                width: "100%",
                maxWidth: 400,

                p: {
                  xs: 2,
                  sm: 2.5,
                },

                borderRadius: "16px",

                bgcolor: "rgba(255,255,255,0.9)",

                border: "1px solid rgba(244, 178, 160, 0.3)",

                boxShadow: "0px 8px 25px rgba(70, 60, 100, 0.08)",

                textAlign: "center",

                // Last card has no bottom margin
                mb: 0,
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,

                  fontSize: {
                    xs: 16,
                    sm: 18,
                  },

                  color: "#f35b0b",

                  lineHeight: 1.3,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: 13,
                    sm: 14,
                  },

                  lineHeight: 1.6,
                  color: "#5b6478",
                }}
              >
                {item.segments.map((seg, index) => (
                  <Box
                    key={index}
                    component="span"
                    sx={{
                      color: seg.accent ? "#4F46E5" : "inherit",
                    }}
                  >
                    {seg.text}
                  </Box>
                ))}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BuiltForTeams;
