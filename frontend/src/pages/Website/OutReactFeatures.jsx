import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import dashboardImage from "../../assets/images/dashboard.webp";

/* =========================================================
   FEATURE CARD
========================================================= */

const FeatureCard = ({ title, description }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: {
          xs: 92,
          md: 80,
        },
        p: {
          xs: 1.8,
          md: 2,
        },
        pr: 5.5,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",

        borderRadius: "16px",

        background: "linear-gradient(145deg, #FFFFFF 0%, #FAFAFC 100%)",

        border: "1px solid #E2E5EA",

        boxShadow:
          "0 12px 30px rgba(15, 23, 42, 0.06), " +
          "0 3px 8px rgba(15, 23, 42, 0.03), " +
          "inset 0 1px 0 rgba(255,255,255,0.9)",

        transition:
          "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",

        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "rgba(79, 70, 229, 0.20)",

          boxShadow:
            "0 18px 40px rgba(15, 23, 42, 0.09), " +
            "0 5px 12px rgba(15, 23, 42, 0.04)",
        },

        "&:hover .feature-arrow": {
          background: "#EEF0FF",
          transform: "translate(2px, -2px)",
        },
      }}
    >
      {/* =====================================================
          ALWAYS VISIBLE ARROW
      ===================================================== */}

      <Box
        className="feature-arrow"
        sx={{
          position: "absolute",

          top: 12,
          right: 12,

          width: 32,
          height: 32,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderRadius: "50%",

          background: "#F3F4F8",

          color: "#4F46E5",

          transition: "all 0.25s ease",

          "& svg": {
            fontSize: 18,
          },
        }}
      >
        <NorthEastIcon />
      </Box>

      {/* =====================================================
          TITLE
      ===================================================== */}

      <Typography
        sx={{
          fontSize: {
            xs: "14px",
            md: "14.5px",
          },

          fontWeight: 700,

          color: "#151B28",

          lineHeight: 1.3,

          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </Typography>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <Typography
        sx={{
          mt: 0.7,

          fontSize: {
            xs: "12px",
            md: "12.5px",
          },

          fontWeight: 400,

          color: "#64748B",

          lineHeight: 1.5,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

/* =========================================================
   OUTREACH BUILT IN
========================================================= */

const OutreachBuiltIn = () => {
  const desktopDashboardRef = useRef(null);
  const mobileDashboardRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  /* =======================================================
     DASHBOARD REVEAL ANIMATION
  ======================================================= */

  useEffect(() => {
    const elements = [
      desktopDashboardRef.current,
      mobileDashboardRef.current,
    ].filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some((entry) => entry.isIntersecting);

        if (isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    // <Box
    //   component="section"
    //   sx={{
    //     position: "relative",
    //     overflow: "hidden",

    //     py: {
    //       xs: 3,
    //       sm: 5,
    //       md: 8,
    //     },

    //     background: "#FAFAFB",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       position: "absolute",

    //       top: -180,
    //       left: -180,

    //       width: {
    //         xs: 300,
    //         md: 500,
    //       },

    //       height: {
    //         xs: 300,
    //         md: 500,
    //       },

    //       borderRadius: "50%",

    //       background:
    //         "radial-gradient(circle, rgba(79,70,229,0.08) 0%, rgba(79,70,229,0) 70%)",

    //       filter: "blur(20px)",

    //       pointerEvents: "none",
    //     }}
    //   />

    //   <Box
    //     sx={{
    //       position: "absolute",

    //       right: -180,
    //       bottom: -180,

    //       width: {
    //         xs: 300,
    //         md: 500,
    //       },

    //       height: {
    //         xs: 300,
    //         md: 500,
    //       },

    //       borderRadius: "50%",

    //       background:
    //         "radial-gradient(circle, rgba(245,91,11,0.06) 0%, rgba(245,91,11,0) 70%)",

    //       filter: "blur(25px)",

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
          MAIN CONTENT
      ===================================================== */}

      <Box
        sx={{
          position: "relative",

          zIndex: 2,

          width: "100%",

          maxWidth: 1250,

          mx: "auto",

          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        {/* ===================================================
            SECTION HEADING
        =================================================== */}

        <Box
          sx={{
            textAlign: "center",

            maxWidth: 850,

            mx: "auto",

            mb: {
              xs: 5,
              md: 7,
            },
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
              },

              fontWeight: 700,

              lineHeight: 1.08,

              letterSpacing: "-0.02em",

              color: "#151B28",
            }}
          >
            Everything around{" "}
            <Box
              component="span"
              sx={{
                color: "#4F46E5",
              }}
            >
              outreach,
            </Box>{" "}
            built in.
          </Typography>

          <Typography
            sx={{
              mt: 2,

              maxWidth: 650,

              mx: "auto",
              fontSize: {
                xs: 15,
                sm: 17,
                md: 18,
              },

              lineHeight: 1.7,

              color: "#64748B",
            }}
          >
            Manage your leads, automate conversations, and keep every follow-up
            moving from one powerful sales workspace.
          </Typography>
        </Box>

        {/* ===================================================
            DESKTOP LAYOUT
        =================================================== */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "grid",
            },

            gridTemplateColumns: "230px minmax(450px, 1fr) 230px",

            alignItems: "center",

            gap: {
              md: 3,
              lg: 4,
            },

            maxWidth: 1120,

            mx: "auto",
          }}
        >
          {/* =================================================
              LEFT FEATURES
          ================================================= */}

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",

              gap: 3,
            }}
          >
            <FeatureCard
              title="Email Automation"
              description="Automate your email outreach and follow-ups."
            />

            <FeatureCard
              title="AI Calling"
              description="Let AI qualify leads and handle calls automatically."
            />
          </Box>

          {/* =================================================
              CENTER DASHBOARD
          ================================================= */}

          <Box
            ref={desktopDashboardRef}
            sx={{
              position: "relative",

              zIndex: 3,

              opacity: isVisible ? 1 : 0,

              transform: isVisible
                ? "translateY(0) scale(1)"
                : "translateY(35px) scale(0.96)",

              transition:
                "opacity 0.8s ease, transform 0.9s cubic-bezier(.2,.7,.2,1)",
            }}
          >
            {/* Dashboard Glow */}

            <Box
              sx={{
                position: "absolute",

                inset: "-30px",

                borderRadius: "30px",

                background:
                  "radial-gradient(circle, rgba(79,70,229,0.10), transparent 65%)",

                filter: "blur(25px)",

                zIndex: -1,
              }}
            />

            {/* Dashboard Frame */}

            <Box
              sx={{
                position: "relative",

                overflow: "hidden",

                borderRadius: "20px",

                background: "#FFFFFF",

                border: "1px solid #E1E4EA",

                boxShadow:
                  "0 30px 70px rgba(15,23,42,0.12), " +
                  "0 10px 25px rgba(15,23,42,0.06), " +
                  "inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <Box
                component="img"
                src={dashboardImage}
                alt="Sales Automation Dashboard"
                sx={{
                  display: "block",

                  width: "100%",

                  height: "auto",

                  maxWidth: "100%",

                  verticalAlign: "middle",
                }}
              />
            </Box>
          </Box>

          {/* =================================================
              RIGHT FEATURES
          ================================================= */}

          <Box
            sx={{
              display: "flex",

              flexDirection: "column",

              gap: 3,
            }}
          >
            <FeatureCard
              title="WhatsApp Automation"
              description="Connect with prospects instantly on WhatsApp."
            />

            <FeatureCard
              title="Smart Follow-ups"
              description="Never miss a follow-up with intelligent reminders."
            />
          </Box>
        </Box>

        {/* ===================================================
            BOTTOM CENTER CARD
        =================================================== */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },

            justifyContent: "center",

            mt: 3,
          }}
        >
          <Box
            sx={{
              width: 300,
            }}
          >
            <FeatureCard
              title="Lead Management"
              description="Manage every lead from one simple dashboard."
            />
          </Box>
        </Box>

        {/* ===================================================
            MOBILE LAYOUT
        =================================================== */}

        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },

            flexDirection: "column",

            gap: 2,
          }}
        >
          {/* Email Automation */}

          <FeatureCard
            title="Email Automation"
            description="Automate your email outreach and follow-ups."
          />

          {/* AI Calling */}

          <FeatureCard
            title="AI Calling"
            description="Let AI qualify leads and handle calls automatically."
          />

          {/* =================================================
              MOBILE DASHBOARD
          ================================================= */}

          <Box
            ref={mobileDashboardRef}
            sx={{
              position: "relative",

              mt: 1,

              mb: 1,

              opacity: isVisible ? 1 : 0,

              transform: isVisible
                ? "translateY(0) scale(1)"
                : "translateY(25px) scale(0.97)",

              transition:
                "opacity 0.8s ease, transform 0.8s cubic-bezier(.2,.7,.2,1)",
            }}
          >
            {/* Mobile Dashboard Glow */}

            <Box
              sx={{
                position: "absolute",

                inset: "-15px",

                borderRadius: "25px",

                background:
                  "radial-gradient(circle, rgba(79,70,229,0.08), transparent 70%)",

                filter: "blur(20px)",

                pointerEvents: "none",
              }}
            />

            {/* Mobile Dashboard Frame */}

            <Box
              sx={{
                position: "relative",

                overflow: "hidden",

                width: "100%",

                borderRadius: "18px",

                background: "#FFFFFF",

                border: "1px solid #E2E5EA",

                boxShadow: "0 20px 45px rgba(15,23,42,0.10)",
              }}
            >
              <Box
                component="img"
                src={dashboardImage}
                alt="Sales Automation Dashboard"
                sx={{
                  display: "block",

                  width: "100%",

                  height: "auto",

                  maxWidth: "100%",

                  verticalAlign: "middle",
                }}
              />
            </Box>
          </Box>

          {/* WhatsApp Automation */}

          <FeatureCard
            title="WhatsApp Automation"
            description="Connect with prospects instantly on WhatsApp."
          />

          {/* Smart Follow-ups */}

          <FeatureCard
            title="Smart Follow-ups"
            description="Never miss a follow-up with intelligent reminders."
          />

          {/* Lead Management */}

          <FeatureCard
            title="Lead Management"
            description="Manage every lead from one simple dashboard."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OutreachBuiltIn;
