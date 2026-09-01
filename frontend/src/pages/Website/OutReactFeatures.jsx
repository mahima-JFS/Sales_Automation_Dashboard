import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";

import dashboardImage from "../../assets/images/dashboard.webp";

// =====================================================
// FLOATING CARDS DATA
// =====================================================

const floatingItems = [
  {
    text: "Email Automation",
    top: 110,
    left: "7%",
    pointer: "left",
  },
  {
    text: "AI Calling",
    top: 190,
    left: "22%",
    pointer: "left",
  },
  {
    text: "Lead Management",
    top: 130,
    left: "50%",
    pointer: "center",
  },
  {
    text: "WhatsApp Automation",
    top: 190,
    right: "22%",
    pointer: "right",
  },
  {
    text: "Smart Follow-ups",
    top: 110,
    right: "7%",
    pointer: "right",
  },
];

// =====================================================
// COMPONENT
// =====================================================

const OutreachBuiltIn = () => {
  const imageRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);

  // =====================================================
  // SCROLL ZOOM ANIMATION
  // =====================================================

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
        }
      },
      {
        threshold: 0.15,
      },
    );

    const currentImage = imageRef.current;

    if (currentImage) {
      observer.observe(currentImage);
    }

    return () => {
      if (currentImage) {
        observer.unobserve(currentImage);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        bgcolor: "#f8f8f8",

        background:
          "radial-gradient(circle at 50% 60%, rgba(99, 78, 190, 0.14), transparent 35%), radial-gradient(circle at 25% 65%, rgba(255,255,255,0.9), transparent 35%), #f8f8f8",
      }}
    >
      {/* =====================================================
          TOP SECTION
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 1720,
          mx: "auto",

          /*
            FIX: this box previously had no real height because the
            heading and cards inside it are position:absolute on
            desktop, so they didn't push the box's height down.
            That's what created the big empty gap before the image.
            Giving it a height that just hugs the lowest card
            (top: 130 + card height + pointer) closes that gap.
          */
          minHeight: {
            xs: "auto",
            md: 220,
            lg: 230,
          },
        }}
      >
        {/* =====================================================
            HEADING
        ===================================================== */}

        <Typography
          component="h1"
          sx={{
            position: {
              xs: "relative",
              md: "absolute",
            },

            // top: {
            //   md: 20,
            // },

            left: {
              md: "50%",
            },

            transform: {
              md: "translateX(-50%)",
            },

            width: "100%",
            textAlign: "center",

            fontSize: {
              xs: 24,
              sm: 30,
              md: 36,
              lg: 38,
            },

            lineHeight: 1.2,

            fontWeight: 400,

            letterSpacing: {
              xs: "0.4px",
              md: "1px",
            },

            color: "#151b28",

            m: 0,

            px: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          Everything around{" "}
          <Box
            component="span"
            sx={{
              color: "#4F46E5",
              fontWeight: 700,
            }}
          >
            outreach, built in
          </Box>
        </Typography>

        {/* =====================================================
            FLOATING FEATURE CARDS
        ===================================================== */}

        <Box
          sx={{
            /*
              MOBILE
              Two cards in one row
            */
            display: {
              xs: "grid",
              md: "block",
            },

            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
            },

            gap: {
              xs: 1,
              sm: 1.5,
            },

            px: {
              xs: 1.5,
              sm: 3,
            },

            /*
              Space between heading and cards on mobile
            */
            mt: {
              xs: 1.5,
              sm: 2,
              md: 0,
            },
          }}
        >
          {floatingItems.map((item) => (
            <Box
              key={item.text}
              sx={{
                position: {
                  xs: "relative",
                  md: "absolute",
                },

                top: {
                  md: item.top,
                },

                left: {
                  md: item.left,
                },

                right: {
                  md: item.right,
                },

                transform: {
                  xs: "none",

                  md:
                    item.pointer === "center"
                      ? "translateX(-50%)"
                      : "translateX(0)",
                },

                width: {
                  xs: "100%",
                  md: "auto",
                },
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  position: "relative",

                  width: "100%",

                  minHeight: {
                    xs: 58,
                    sm: 64,
                    md: 60,
                  },

                  px: {
                    xs: 1,
                    sm: 1.5,
                    md: 2.2,
                  },

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  borderRadius: {
                    xs: "12px",
                    md: "14px",
                  },

                  bgcolor: "rgba(255,255,255,0.85)",

                  border: "1px solid rgba(225,225,232,0.9)",

                  boxShadow: `
                    0px 8px 20px rgba(65, 55, 100, 0.10),
                    0px 18px 45px rgba(80, 65, 130, 0.12),
                    inset 0px 1px 1px rgba(255,255,255,0.9)
                  `,

                  transition: "box-shadow 0.3s ease, transform 0.3s ease",

                  "&:hover": {
                    boxShadow: `
                      0px 12px 25px rgba(65, 55, 100, 0.14),
                      0px 22px 50px rgba(80, 65, 130, 0.16),
                      inset 0px 1px 1px rgba(255,255,255,0.9)
                    `,
                  },
                }}
              >
                {/* CARD TEXT */}

                <Typography
                  sx={{
                    fontSize: {
                      xs: 13,
                      sm: 16,
                      md: 22,
                    },

                    fontWeight: 600,

                    letterSpacing: {
                      xs: "0px",
                      md: "0.4px",
                    },

                    color: "#f35b0b",

                    textAlign: "center",

                    lineHeight: {
                      xs: 1.3,
                      md: 1.5,
                    },
                  }}
                >
                  {item.text}
                </Typography>

                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },

                    position: "absolute",

                    width: 0,
                    height: 0,

                    ...(item.pointer === "left" && {
                      left: -9,
                      bottom: -10,

                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderRight: "18px solid #f35b0b",

                      transform: "rotate(-35deg)",
                    }),

                    ...(item.pointer === "right" && {
                      right: -9,
                      bottom: -10,

                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: "18px solid #f35b0b",

                      transform: "rotate(35deg)",
                    }),

                    ...(item.pointer === "center" && {
                      left: "50%",
                      bottom: -12,

                      transform: "translateX(-50%)",

                      borderLeft: "10px solid transparent",
                      borderRight: "10px solid transparent",
                      borderTop: "18px solid #f35b0b",
                    }),
                  }}
                />
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        ref={imageRef}
        sx={{
          width: "100%",

          display: "flex",

          justifyContent: "center",

          mt: {
            xs: 3,
            sm: 3,
            md: 7,
            lg: 7,
          },

          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },

          pb: {
            xs: 3,
            sm: 4,
            md: 5,
          },

          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={dashboardImage}
          alt="Sales Automation Dashboard"
          sx={{
            width: {
              xs: "100%",
              sm: "92%",
              md: "85%",
              lg: "78%",
              xl: "72%",
            },

            maxWidth: 1200,

            height: "auto",

            display: "block",

            borderRadius: {
              xs: "12px",
              sm: "16px",
              md: "22px",
            },

            boxShadow: "0px 20px 50px rgba(45, 35, 80, 0.18)",

            opacity: imageVisible ? 1 : 0,

            transform: imageVisible ? "scale(1)" : "scale(0.78)",

            transition:
              "opacity 0.8s ease-out, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",

            willChange: "transform, opacity",
          }}
        />
      </Box>
    </Box>
  );
};

export default OutreachBuiltIn;
