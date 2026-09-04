import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

const STATS = [
  {
    value: 40,
    suffix: "%",
    label: "Less Manual Work",
    description: "Automate repetitive sales tasks",
  },
  {
    value: 50,
    suffix: "%",
    label: "Faster Lead Outreach",
    description: "Reach prospects across channels",
  },
  {
    value: 30,
    suffix: "%",
    label: "Lower Outreach Cost",
    description: "Reduce your sales technology costs",
  },
];

const AnimatedNumber = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const intervalTime = 20;
    const totalSteps = duration / intervalTime;
    const increment = value / totalSteps;

    let current = 0;

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

export default function StatsSection() {
  return (
    // <Box
    //   component="section"
    //   sx={{
    //     width: "100%",
    //     py: {
    //       xs: 6,
    //       md: 9,
    //     },
    //     bgcolor: "#F8FAFC",
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

      <Container maxWidth="lg">
        {/* HEADING */}

        <Box
          sx={{
            textAlign: "center",
            mb: {
              xs: 4,
              md: 6,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "1.7rem",
                sm: "2rem",
                md: "2.4rem",
              },
              fontWeight: 700,
              color: "#0F172A",
            }}
          >
            Built to Help Your Team
            <Box
              component="span"
              sx={{
                color: "#4F46E5",
                ml: 1,
              }}
            >
              Sell Smarter
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              fontSize: {
                xs: 14,
                sm: 16,
              },
              color: "#64748B",
            }}
          >
            Everything your sales team needs to work faster and focus on
            revenue.
          </Typography>
        </Box>

        {/* STATS */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
            },

            gap: {
              xs: 2,
              sm: 3,
            },
          }}
        >
          {STATS.map((stat) => (
            <Box
              key={stat.label}
              sx={{
                position: "relative",
                overflow: "hidden",

                bgcolor: "#FFFFFF",

                borderRadius: "20px",

                px: {
                  xs: 3,
                  md: 4,
                },

                py: {
                  xs: 3,
                  md: 4,
                },

                textAlign: "center",

                border: "1px solid rgba(255, 104, 17, 0.18)",

                transition: "all 0.3s ease",

                // SOFT ORANGE GLOW
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "180px",
                  height: "180px",
                  top: "-100px",
                  right: "-80px",

                  background:
                    "radial-gradient(circle, rgba(255, 104, 17, 0.16) 0%, rgba(255, 104, 17, 0) 70%)",

                  pointerEvents: "none",
                },

                // TOP ACCENT
                "&::after": {
                  content: '""',
                  position: "absolute",

                  top: 0,
                  left: "50%",

                  transform: "translateX(-50%)",

                  width: "70px",
                  height: "4px",

                  borderRadius: "0 0 10px 10px",

                  background: "linear-gradient(90deg, #FF6811, #FB923C)",
                },

                "&:hover": {
                  transform: "translateY(-8px)",

                  boxShadow: `
        0px 12px 25px rgba(255, 104, 17, 0.15),
        0px 25px 50px rgba(255, 104, 17, 0.18)
      `,
                },
              }}
            >
              {/* NUMBER */}

              <Typography
                sx={{
                  fontWeight: 800,

                  fontSize: {
                    xs: "3rem",
                    sm: "3.4rem",
                    md: "4rem",
                  },

                  lineHeight: 1,

                  background: "linear-gradient(90deg, #FF6811, #F97316)",

                  WebkitBackgroundClip: "text",

                  WebkitTextFillColor: "transparent",
                }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </Typography>

              {/* LABEL */}

              <Typography
                sx={{
                  mt: 2,

                  fontSize: {
                    xs: 17,
                    md: 18,
                  },

                  fontWeight: 700,

                  color: "#0F172A",
                }}
              >
                {stat.label}
              </Typography>

              {/* DESCRIPTION */}

              <Typography
                sx={{
                  mt: 1,

                  fontSize: 14,

                  lineHeight: 1.6,

                  color: "#64748B",
                }}
              >
                {stat.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
