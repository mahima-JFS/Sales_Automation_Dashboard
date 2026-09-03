// import { useEffect, useState } from "react";
// import {
//   Box,
//   Container,
//   Paper,
//   Typography,
//   useMediaQuery,
// } from "@mui/material";

// function IconUsers(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       width="20"
//       height="20"
//       {...props}
//     >
//       <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//       <circle cx="9" cy="7" r="4" />
//       <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//     </svg>
//   );
// }
// function IconMail(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       width="20"
//       height="20"
//       {...props}
//     >
//       <rect x="2" y="4" width="20" height="16" rx="2" />
//       <path d="m22 6-10 7L2 6" />
//     </svg>
//   );
// }
// function IconWorkflow(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       width="20"
//       height="20"
//       {...props}
//     >
//       <rect x="3" y="3" width="6" height="6" rx="1" />
//       <rect x="15" y="15" width="6" height="6" rx="1" />
//       <path d="M9 6h6a2 2 0 0 1 2 2v7" />
//       <path d="M6 9v7a2 2 0 0 0 2 2h1" />
//     </svg>
//   );
// }
// function IconMessageCircle(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       width="20"
//       height="20"
//       {...props}
//     >
//       <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
//     </svg>
//   );
// }
// function IconPhone(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       width="20"
//       height="20"
//       {...props}
//     >
//       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
//     </svg>
//   );
// }
// function IconBarChart(props) {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       width="20"
//       height="20"
//       {...props}
//     >
//       <line x1="12" y1="20" x2="12" y2="10" />
//       <line x1="18" y1="20" x2="18" y2="4" />
//       <line x1="6" y1="20" x2="6" y2="16" />
//     </svg>
//   );
// }

// const FEATURES = [
//   {
//     label: "Import and organize your contact lists",
//     icon: IconUsers,
//     color: "#4F46E5",
//   },
//   {
//     label: " Plan and schedule email campaigns",
//     icon: IconMail,
//     color: "#0EA5E9",
//   },
//   {
//     label: "Build multi-touch outreach sequences",
//     icon: IconWorkflow,
//     color: "#F97316",
//   },
//   {
//     label: "Send WhatsApp campaigns",
//     icon: IconMessageCircle,
//     color: "#10B981",
//   },
//   {
//     label: "Run AI-powered voice calling campaigns",
//     icon: IconPhone,
//     color: "#EC4899",
//   },
//   {
//     label: "Capture Leads From Every Source",
//     icon: IconBarChart,
//     color: "#8B5CF6",
//   },
// ];

// function hexToRgba(hex, alpha) {
//   const value = hex.replace("#", "");
//   const r = parseInt(value.substring(0, 2), 16);
//   const g = parseInt(value.substring(2, 4), 16);
//   const b = parseInt(value.substring(4, 6), 16);
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// }

// const STACK_STYLES = {
//   0: { width: 88, top: 36.5, left: 2, opacity: 1, scale: 1, zIndex: 10 },
//   "-1": {
//     width: 82,
//     top: 24,
//     left: 4,
//     opacity: 0.95,
//     scale: 0.96,
//     zIndex: 3,
//   },
//   1: { width: 82, top: 49, left: 4, opacity: 0.95, scale: 0.96, zIndex: 3 },
//   "-2": {
//     width: 76,
//     top: 11.5,
//     left: 7,
//     opacity: 0.85,
//     scale: 0.92,
//     zIndex: 2,
//   },
//   2: { width: 76, top: 60.5, left: 7, opacity: 0.85, scale: 0.92, zIndex: 2 },
//   "-3": { width: 69, top: 0, left: 9, opacity: 0.7, scale: 0.86, zIndex: 1 },
//   3: { width: 69, top: 72.5, left: 9, opacity: 0.7, scale: 0.86, zIndex: 1 },
// };

// const ROTATE_MS = 2200;

// function signedOffset(index, active, count) {
//   let diff = index - active;
//   if (diff > count / 2) diff -= count;
//   if (diff < -count / 2) diff += count;
//   return diff;
// }

// export default function FeatureStackHero() {
//   const [active, setActive] = useState(0);
//   const isMobile = useMediaQuery("(max-width:600px)");

//   useEffect(() => {
//     const id = setInterval(() => {
//       setActive((prev) => (prev + 1) % FEATURES.length);
//     }, ROTATE_MS);
//     return () => clearInterval(id);
//   }, []);

//   return (
//     <Box
//       component="section"
//       sx={{
//         width: "100%",
//         bgcolor: "#FAFAFA",
//         py: { xs: 3, sm: 5, md: 3 },
//         overflow: "hidden",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", lg: "row" },
//             alignItems: "center",
//             gap: { xs: 4, sm: 5, lg: 5 },
//           }}
//         >
//           {/* Left: copy */}
//           <Box sx={{ flex: "1 1 0", minWidth: 0, width: "100%" }}>
//             <Typography
//               component="h2"
//               sx={{
//                 fontWeight: 700,
//                 fontSize: { xs: "1..5rem", sm: "2rem", md: "2.5rem" },
//                 lineHeight: 1.2,
//                 letterSpacing: "-0.02em",
//                 color: "#0F172A",
//               }}
//             >
//               A{" "}
//               <Box component="span" sx={{ color: "#4F46E5" }}>
//                 Complete Toolkit
//               </Box>{" "}
//               for Modern Outbound Teams{" "}
//             </Typography>
//             <Typography
//               sx={{
//                 mt: { xs: 2, sm: 3 },
//                 fontSize: { xs: 15, sm: 18 },
//                 lineHeight: 1.7,
//                 fontWeight: 400,
//                 color: "#64748B",
//                 maxWidth: 420,
//               }}
//             >
//               Built for businesses that want faster follow-up, better
//               consistency, and more conversations.
//             </Typography>
//           </Box>

//           {/* Right: rotating card stack */}
//           <Box
//             sx={{
//               flex: "1 1 0",
//               minWidth: 0,
//               width: "100%",
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 maxWidth: {
//                   xs: 340,
//                   sm: 420,
//                   md: 500,
//                 },
//                 height: {
//                   xs: 340,
//                   sm: 400,
//                   md: 470,
//                 },
//               }}
//             >
//               {/* decorative dot grid */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   bottom: 20,
//                   right: -10,
//                   width: { xs: 110, sm: 140, md: 180 },
//                   height: { xs: 110, sm: 140, md: 180 },
//                   opacity: 0.6,
//                   pointerEvents: "none",
//                   backgroundImage:
//                     "radial-gradient(#CBD5E1 1.3px, transparent 1.3px)",
//                   backgroundSize: "10px 10px",
//                 }}
//               />

//               {FEATURES.map((feature, index) => {
//                 const offset = signedOffset(index, active, FEATURES.length);
//                 const style = STACK_STYLES[offset];
//                 const Icon = feature.icon;

//                 if (!style) {
//                   return null;
//                 }

//                 const isActive = offset === 0;

//                 return (
//                   <Box
//                     key={feature.label}
//                     sx={{
//                       position: "absolute",
//                       transition: "all 700ms ease-in-out",
//                       width: `${style.width}%`,
//                       top: `${style.top}%`,
//                       left: `${style.left}%`,
//                       zIndex: style.zIndex,
//                       opacity: style.opacity,
//                       transform: `scale(${style.scale})`,
//                     }}
//                   >
//                     <Paper
//                       elevation={0}
//                       sx={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: { xs: 1.25, sm: 1.75, md: 2 },
//                         px: { xs: 1.75, sm: 2.25, md: 3 },
//                         py: { xs: 1.25, sm: 1.5, md: 2 },
//                         borderRadius: { xs: 2, sm: 3 },
//                         bgcolor: "#FFFFFF",
//                         border: "1px solid",
//                         borderColor: isActive ? feature.color : "#E2E8F0",
//                         boxShadow: isActive
//                           ? `0px 12px 24px ${hexToRgba(feature.color, 0.18)}`
//                           : "0px 2px 6px rgba(15, 23, 42, 0.04)",
//                         transition:
//                           "border-color 700ms ease-in-out, box-shadow 700ms ease-in-out",
//                       }}
//                     >
//                       <Box
//                         sx={{
//                           position: "relative",
//                           width: { xs: 30, sm: 34, md: 40 },
//                           height: { xs: 30, sm: 34, md: 40 },
//                           flexShrink: 0,
//                           borderRadius: "50%",
//                           overflow: "hidden",
//                           bgcolor: hexToRgba(feature.color, 0.12),
//                           color: feature.color,
//                         }}
//                       >
//                         <Box
//                           sx={{
//                             position: "absolute",
//                             inset: 0,
//                             margin: "auto",
//                             width: { xs: 15, sm: 17, md: 20 },
//                             height: { xs: 15, sm: 17, md: 20 },
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             "& svg": {
//                               display: "block",
//                               width: "100%",
//                               height: "100%",
//                             },
//                           }}
//                         >
//                           <Icon />
//                         </Box>
//                       </Box>
//                       <Typography
//                         sx={{
//                           fontWeight: 600,
//                           color: "#0F172A",
//                           fontSize: { xs: 12.5, sm: 14, md: 16 },
//                           lineHeight: 1.3,
//                         }}
//                       >
//                         {feature.label}
//                       </Typography>
//                     </Paper>
//                   </Box>
//                 );
//               })}
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";

/* =========================================================
   ICONS
========================================================= */

function IconUsers(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
      {...props}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconMail(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconWorkflow(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
      {...props}
    >
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
      <path d="M9 6h6a2 2 0 0 1 2 2v7" />
      <path d="M6 9v7a2 2 0 0 0 2 2h1" />
    </svg>
  );
}

function IconMessageCircle(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function IconPhone(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconBarChart(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
      {...props}
    >
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

/* =========================================================
   FEATURES
========================================================= */

const FEATURES = [
  {
    label: "Import and organize your contact lists",
    icon: IconUsers,
    color: "#4F46E5",
  },
  {
    label: "Plan and schedule email campaigns",
    icon: IconMail,
    color: "#0EA5E9",
  },
  {
    label: "Build multi-touch outreach sequences",
    icon: IconWorkflow,
    color: "#F97316",
  },
  {
    label: "Send WhatsApp campaigns",
    icon: IconMessageCircle,
    color: "#10B981",
  },
  {
    label: "Run AI-powered voice calling campaigns",
    icon: IconPhone,
    color: "#EC4899",
  },
  {
    label: "Capture Leads From Every Source",
    icon: IconBarChart,
    color: "#8B5CF6",
  },
];

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");

  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ROTATE_MS = 2600;

/* =========================================================
   COMPONENT
========================================================= */

export default function FeatureStackHero() {
  const [active, setActive] = useState(0);

  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % FEATURES.length);
    }, ROTATE_MS);

    return () => clearInterval(id);
  }, []);

  const activeFeature = FEATURES[active];
  const ActiveIcon = activeFeature.icon;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        bgcolor: "#FAFAFA",
        py: {
          xs: 5,
          sm: 7,
          md: 8,
        },
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          bottom: "-20%",
          left: "-10%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.06), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            alignItems: "center",
            gap: {
              xs: 5,
              sm: 6,
              lg: 9,
            },
          }}
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <Box
            sx={{
              flex: "1 1 0",
              minWidth: 0,
              width: "100%",
            }}
          >
            {/* HEADING */}

            <Typography
              component="h2"
              sx={{
                fontWeight: 700,
                fontSize: {
                  xs: "1.75rem",
                  sm: "2.2rem",
                  md: "2.65rem",
                },
                lineHeight: 1.16,
                letterSpacing: "-0.035em",
                color: "#0F172A",
                maxWidth: 540,
              }}
            >
              A{" "}
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                }}
              >
                Complete Toolkit
              </Box>{" "}
              for Modern Outbound Teams
            </Typography>

            {/* DESCRIPTION */}

            <Typography
              sx={{
                mt: {
                  xs: 2,
                  sm: 2.5,
                },
                fontSize: {
                  xs: 15,
                  sm: 17,
                  md: 18,
                },
                lineHeight: 1.7,
                fontWeight: 400,
                color: "#64748B",
                maxWidth: 470,
              }}
            >
              Built for businesses that want faster follow-up, better
              consistency, and more conversations.
            </Typography>

            {/* MINI STATS */}

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                mt: 3.5,
              }}
            >
              {["Email", "WhatsApp", "AI Calling", "Automation"].map((item) => (
                <Box
                  key={item}
                  sx={{
                    px: 1.5,
                    py: 0.8,
                    borderRadius: "8px",
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    color: "#475569",
                    fontSize: 12.5,
                    fontWeight: 600,
                  }}
                >
                  {item}
                </Box>
              ))}
            </Box>
          </Box>

          {/* =================================================
              RIGHT FEATURE SHOWCASE
          ================================================= */}

          <Box
            sx={{
              flex: "1 1 0",
              minWidth: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: {
                  xs: 360,
                  sm: 470,
                  md: 540,
                },
                height: {
                  xs: 330,
                  sm: 360,
                  md: 390,
                },
              }}
            >
              {/* =================================================
                  DECORATIVE GRID
              ================================================= */}

              <Box
                sx={{
                  position: "absolute",
                  top: {
                    xs: 5,
                    md: -15,
                  },
                  right: {
                    xs: 0,
                    md: -20,
                  },
                  width: {
                    xs: 100,
                    sm: 130,
                    md: 150,
                  },
                  height: {
                    xs: 100,
                    sm: 130,
                    md: 150,
                  },
                  opacity: 0.5,
                  backgroundImage:
                    "radial-gradient(#CBD5E1 1.2px, transparent 1.2px)",
                  backgroundSize: "9px 9px",
                  pointerEvents: "none",
                }}
              />

              {/* =================================================
                  BACK CARDS
              ================================================= */}

              {[1, 2].map((depth) => {
                const index = (active + depth) % FEATURES.length;

                const feature = FEATURES[index];

                return (
                  <Paper
                    key={`${feature.label}-${depth}`}
                    elevation={0}
                    sx={{
                      position: "absolute",
                      left: {
                        xs: `${depth * 4}%`,
                        sm: `${depth * 5}%`,
                      },
                      right: {
                        xs: `${depth * 4}%`,
                        sm: `${depth * 5}%`,
                      },
                      top: `${depth * 34}px`,
                      height: {
                        xs: 125,
                        sm: 140,
                      },
                      borderRadius: {
                        xs: "16px",
                        sm: "20px",
                      },
                      bgcolor: "#FFFFFF",
                      border: "1px solid #E7EAF0",
                      opacity: depth === 1 ? 0.55 : 0.28,
                      transform: `scale(${1 - depth * 0.035})`,
                      transformOrigin: "center top",
                      boxShadow: "0 12px 30px rgba(15,23,42,0.05)",
                      transition: "all 900ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                );
              })}

              {/* =================================================
                  ACTIVE CARD
              ================================================= */}

              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  left: {
                    xs: "2%",
                    sm: "0%",
                  },
                  right: {
                    xs: "2%",
                    sm: "0%",
                  },
                  top: {
                    xs: 55,
                    sm: 50,
                    md: 45,
                  },
                  minHeight: {
                    xs: 205,
                    sm: 225,
                    md: 240,
                  },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  p: {
                    xs: 3,
                    sm: 4,
                    md: 4.5,
                  },
                  borderRadius: {
                    xs: "20px",
                    sm: "24px",
                  },
                  bgcolor: "#FFFFFF",
                  border: `1px solid ${hexToRgba(activeFeature.color, 0.28)}`,
                  boxShadow: `
                    0 24px 55px rgba(15,23,42,0.10),
                    0 8px 20px ${hexToRgba(activeFeature.color, 0.1)}
                  `,
                  transform: "translateY(0)",
                  animation: "featureFloat 4s ease-in-out infinite",
                  transition: "border-color 700ms ease, box-shadow 700ms ease",
                  zIndex: 5,

                  "@keyframes featureFloat": {
                    "0%, 100%": {
                      transform: "translateY(0px)",
                    },
                    "50%": {
                      transform: "translateY(-7px)",
                    },
                  },
                }}
              >
                {/* ICON */}

                <Box
                  sx={{
                    width: {
                      xs: 48,
                      sm: 54,
                    },
                    height: {
                      xs: 48,
                      sm: 54,
                    },
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: hexToRgba(activeFeature.color, 0.1),
                    color: activeFeature.color,
                    mb: 2.5,
                    boxShadow: `inset 0 0 0 1px ${hexToRgba(
                      activeFeature.color,
                      0.08,
                    )}`,
                    transition: "background 600ms ease, color 600ms ease",
                  }}
                >
                  <ActiveIcon width={24} height={24} />
                </Box>

                {/* LABEL */}

                <Typography
                  sx={{
                    fontSize: {
                      xs: 17,
                      sm: 19,
                      md: 21,
                    },
                    lineHeight: 1.35,
                    fontWeight: 700,
                    color: "#0F172A",
                    maxWidth: 410,
                  }}
                >
                  {activeFeature.label}
                </Typography>

                {/* SMALL DESCRIPTION */}

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: {
                      xs: 12.5,
                      sm: 13.5,
                    },
                    lineHeight: 1.55,
                    color: "#94A3B8",
                  }}
                >
                  Automate this step and keep your outreach moving.
                </Typography>

                {/* PROGRESS */}

                <Box
                  sx={{
                    mt: 2.5,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {FEATURES.map((item, index) => (
                    <Box
                      key={item.label}
                      sx={{
                        width: index === active ? 26 : 6,
                        height: 5,
                        borderRadius: "999px",
                        bgcolor:
                          index === active ? activeFeature.color : "#E2E8F0",
                        transition: "all 500ms cubic-bezier(0.22,1,0.36,1)",
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
