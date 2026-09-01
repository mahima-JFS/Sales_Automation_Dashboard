import React from "react";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  Link,
} from "@mui/material";

import {
  ArrowOutward,
  Check,
} from "@mui/icons-material";

import FAQHome from "./FAQHome";

/* ============================================================
   COMPARISON DATA
============================================================ */

const comparisonSections = [
  {
    label: "WHATSAPP PLATFORMS",

    title: (
      <>
        vs WhatsApp Business API
        <br />
        <Box
          component="span"
          sx={{
            color: "#4C3DDB",
          }}
        >
          Platforms
        </Box>
      </>
    ),

    description: (
      <>
        India's WhatsApp tools automate one channel. See what changes when
        email and AI voice calls join
        <br className="desktop-break" />
        the same sequence.
      </>
    ),

    background: "#FFFFFF",

    cards: [
      {
        category: "VS THE SUPPORT INBOX LEADER",
        title: "Rapid Sales vs Wati",
        description:
          "Wati's omnichannel support inbox competes against a tri-channel sales engine. Per-user fees and trigger add-ons vs flat plans.",
      },

      {
        category: "VS THE BROADCAST FAVOURITE",
        title: "Rapid Sales vs AiSensy",
        description:
          "Marketing message pricing, chatbot flows, and response handling compared against a complete outbound workflow.",
        featured: true,
      },

      {
        category: "VS JIO'S WHATSAPP SUITE",
        title: "Rapid Sales vs Interakt",
        description:
          "Unlimited agents and Shopify flows versus AI calling and email automation in one platform.",
      },

      {
        category: "VS THE MOBILE-FIRST INBOX",
        title: "Rapid Sales vs DoubleTick",
        description:
          "WhatsApp inbox productivity compared with AI-powered sales execution.",
      },

      {
        category: "VS THE CLOSEST AI COMPETITOR",
        title: "Rapid Sales vs Gallabox",
        description:
          "Compare AI voice, WhatsApp automation, and outbound sales capabilities side-by-side.",
      },
    ],
  },

  {
    label: "EMAIL & SALES ENGAGEMENT",

    title: (
      <>
        vs Cold Email &{" "}
        <Box
          component="span"
          sx={{
            color: "#4C3DDB",
          }}
        >
          Sales
        </Box>
        <br />

        <Box
          component="span"
          sx={{
            color: "#4C3DDB",
          }}
        >
          Engagement Tools
        </Box>
      </>
    ),

    description:
      "Great tools for Western inboxes — but Indian buyers reply on WhatsApp and answer phone calls.",

    background: "#F8F9FB",

    cards: [
      {
        category: "VS THE COLD EMAIL VOLUME MACHINE",
        title: "Rapid Sales vs Instantly",
        description:
          "Unlimited mailboxes and sending volume compared against multi-channel outbound.",
      },

      {
        category: "VS THE AGENCY EMAIL INFRASTRUCTURE",
        title: "Rapid Sales vs Smartlead",
        description:
          "Email warmup and infrastructure versus AI calling + WhatsApp workflows.",
      },

      {
        category: "VS THE PER-USER MULTICHANNEL",
        title: "Rapid Sales vs Reply.io",
        description:
          "Email-first engagement versus WhatsApp-native sales automation.",
      },

      {
        category: "VS THE LINKEDIN-FIRST OUTBOUND TOOL",
        title: "Rapid Sales vs Lemlist",
        description:
          "LinkedIn outreach and personalization compared against WhatsApp-led selling.",
      },
    ],
  },

  {
    label: "AI VOICE & CALLING PLATFORMS",

    title: (
      <>
        vs AI Voice &{" "}
        <Box
          component="span"
          sx={{
            color: "#4C3DDB",
          }}
        >
          Calling Platforms
        </Box>
      </>
    ),

    description:
      "Voice-first platforms, developer APIs, and outsourced calling pods — compared against a sales sequence where the call is only the first step.",

    background: "#FFFFFF",

    cards: [
      {
        category: "VS THE AI VOICE PLATFORM",
        title: "Rapid Sales vs AI Voice",
        description:
          "AI-powered voice conversations compared against a complete multi-channel sales workflow.",
      },

      {
        category: "VS THE DEVELOPER VOICE API",
        title: "Rapid Sales vs Voice API",
        description:
          "Developer-first calling infrastructure versus ready-to-use WhatsApp, email and voice sales automation.",
      },

      {
        category: "VS THE CALLING OUTSOURCING MODEL",
        title: "Rapid Sales vs Calling Teams",
        description:
          "Outsourced calling operations compared against automated sales engagement.",
      },
    ],
  },
];

/* ============================================================
   MAIN COMPONENT
============================================================ */

const Comparisons = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <Box
        component="section"
        sx={{
          width: "100%",
          minHeight: "100vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",

          textAlign: "center",

          backgroundColor: "#FFFFFF",

          backgroundImage: `
            linear-gradient(
              rgba(226, 229, 234, 0.55) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(226, 229, 234, 0.55) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "24px 24px",

          boxSizing: "border-box",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            maxWidth: "1500px",

            mx: "auto",

            px: {
              xs: 2,
              sm: 3,
              md: 5,
              lg: 7,
            },

            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              textAlign: "center",

              pt: {
                xs: 5,
                sm: 6,
                md: 7,
                lg: 8,
              },

              pb: {
                xs: 8,
                md: 10,
              },
            }}
          >
            {/* ==================================================
                BREADCRUMB
            ================================================== */}

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
              sx={{
                width: "100%",
                mb: {
                  xs: 4,
                  md: 4.5,
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: "#536B9B",

                  fontSize: {
                    xs: "16px",
                    sm: "17px",
                    md: "19px",
                  },

                  fontWeight: 400,

                  textAlign: "center",
                }}
              >
                Home
              </Typography>

              <Typography
                component="span"
                sx={{
                  color: "#536B9B",

                  fontSize: {
                    xs: "20px",
                    md: "22px",
                  },

                  lineHeight: 1,

                  fontWeight: 400,
                }}
              >
                ›
              </Typography>

              <Typography
                component="span"
                sx={{
                  color: "#536B9B",

                  fontSize: {
                    xs: "16px",
                    sm: "17px",
                    md: "19px",
                  },

                  fontWeight: 400,

                  textAlign: "center",
                }}
              >
                Comparisons
              </Typography>
            </Stack>

            {/* ==================================================
                MAIN HEADING
            ================================================== */}

            <Typography
              component="h1"
              sx={{
                width: "100%",
                maxWidth: "1200px",

                mx: "auto",

                color: "#050505",

                fontSize: {
                  xs: "38px",
                  sm: "48px",
                  md: "58px",
                  lg: "60px",
                },

                lineHeight: {
                  xs: 1.2,
                  sm: 1.25,
                  md: 1.3,
                },

                fontWeight: 600,

                letterSpacing: {
                  xs: "-1px",
                  md: "-2px",
                },

                textAlign: "center",
              }}
            >
              Rapid Sales vs{" "}
              <Box
                component="span"
                sx={{
                  color: "#4C3DDB",
                  fontWeight: 700,
                }}
              >
                Everyone
              </Box>
              : Pick Your
              <br />
              Comparison
            </Typography>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <Typography
              component="p"
              sx={{
                width: "100%",
                maxWidth: "1280px",

                mx: "auto",

                mt: {
                  xs: 4,
                  sm: 4.5,
                  md: 5,
                },

                color: "#53678F",

                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "22px",
                  lg: "24px",
                },

                lineHeight: {
                  xs: 1.65,
                  md: 1.9,
                },

                fontWeight: 400,

                textAlign: "center",
              }}
            >
              Honest, fact-checked comparisons against every major WhatsApp
              and email outreach platform —
              <br />
              every price verified on the vendor's own pricing page, every
              strength they have acknowledged.
            </Typography>

            {/* ==================================================
                VERIFICATION POINTS
            ================================================== */}

            <Stack
              direction={{
                xs: "column",
                md: "row",
              }}
              justifyContent="center"
              alignItems="center"
              spacing={{
                xs: 2,
                md: 4,
                lg: 5,
              }}
              sx={{
                width: "100%",

                mt: {
                  xs: 4,
                  md: 4.5,
                },

                textAlign: "center",
              }}
            >
              <VerificationItem>
                All pricing verified June 10, 2026
              </VerificationItem>

              <VerificationItem>
                Sources linked on every page
              </VerificationItem>

              <VerificationItem>
                Updated as vendors change plans
              </VerificationItem>
            </Stack>

            {/* ==================================================
                BUTTONS
            ================================================== */}

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{
                width: "100%",

                mt: {
                  xs: 5,
                  sm: 6,
                  md: 6.5,
                },

                mx: "auto",

                textAlign: "center",
              }}
            >
              {/* BOOK DEMO */}

              <Button
                variant="contained"
                endIcon={<ArrowOutward />}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "410px",
                    md: "410px",
                  },

                  maxWidth: "410px",

                  height: {
                    xs: "58px",
                    sm: "64px",
                  },

                  borderRadius: "11px",

                  backgroundColor: "#F4510B",

                  color: "#FFFFFF",

                  fontSize: {
                    xs: "18px",
                    md: "21px",
                  },

                  fontWeight: 600,

                  textTransform: "none",

                  boxShadow: "none",

                  "&:hover": {
                    backgroundColor: "#E54805",
                    boxShadow: "none",
                  },

                  "& .MuiButton-endIcon": {
                    marginLeft: "8px",
                  },
                }}
              >
                Book a Demo
              </Button>

              {/* PRICING */}

              <Button
                variant="outlined"
                endIcon={<ArrowOutward />}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "410px",
                    md: "415px",
                  },

                  maxWidth: "415px",

                  height: {
                    xs: "58px",
                    sm: "64px",
                  },

                  borderRadius: "11px",

                  border: "1px solid #F4510B",

                  color: "#F4510B",

                  backgroundColor: "rgba(255,255,255,0.35)",

                  fontSize: {
                    xs: "18px",
                    md: "21px",
                  },

                  fontWeight: 400,

                  textTransform: "none",

                  "&:hover": {
                    border: "1px solid #F4510B",
                    backgroundColor: "rgba(244,81,11,0.04)",
                  },

                  "& .MuiButton-endIcon": {
                    marginLeft: "8px",
                  },
                }}
              >
                See Rapid Sales Pricing
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ======================================================
          COMPARISON SECTIONS
      ====================================================== */}

      {comparisonSections.map((section, index) => (
        <ComparisonSection
          key={section.label}
          section={section}
          index={index}
        />
      ))}

      {/* ======================================================
          GROUND RULES
      ====================================================== */}

      <ComparisonGroundRules />
    </Box>
  );
};

/* ============================================================
   VERIFICATION ITEM
============================================================ */

const VerificationItem = ({ children }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={0.6}
    >
      <Check
        sx={{
          color: "#00A85A",

          fontSize: {
            xs: 20,
            md: 21,
          },
        }}
      />

      <Typography
        component="span"
        sx={{
          color: "#53678F",

          fontSize: {
            xs: "14px",
            sm: "15px",
            md: "17px",
          },

          fontWeight: 400,

          whiteSpace: {
            md: "nowrap",
          },

          textAlign: "center",
        }}
      >
        {children}
      </Typography>
    </Stack>
  );
};

/* ============================================================
   COMPARISON SECTION
============================================================ */

const ComparisonSection = ({ section, index }) => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",

        backgroundColor: section.background,

        py: {
          xs: 9,
          sm: 11,
          md: 14,
        },

        borderTop:
          index > 0
            ? "1px solid rgba(220,224,230,0.35)"
            : "none",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1840px",

          mx: "auto",

          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 4,
          },
        }}
      >
        {/* ====================================================
            SECTION HEADER
        ==================================================== */}

        <Box
          sx={{
            width: "100%",

            textAlign: "center",

            maxWidth: "1500px",

            mx: "auto",

            mb: {
              xs: 6,
              sm: 7,
              md: 9,
            },
          }}
        >
          {/* LABEL */}

          <Box
            sx={{
              display: "inline-flex",

              alignItems: "center",

              justifyContent: "center",

              px: {
                xs: 2.5,
                sm: 3,
              },

              py: {
                xs: 1,
                sm: 1.2,
              },

              border: "1px solid #FFD0AE",

              borderRadius: "30px",

              backgroundColor: "#FFFDFC",

              mb: {
                xs: 3.5,
                md: 4,
              },
            }}
          >
            <Typography
              sx={{
                color: "#F4510B",

                fontSize: {
                  xs: "13px",
                  sm: "14px",
                  md: "15px",
                },

                fontWeight: 600,

                letterSpacing: "1px",

                whiteSpace: "nowrap",
              }}
            >
              {section.label}
            </Typography>
          </Box>

          {/* TITLE */}

          <Typography
            component="h2"
            sx={{
              color: "#050505",

              fontSize: {
                xs: "35px",
                sm: "43px",
                md: "50px",
                lg: "52px",
              },

              lineHeight: {
                xs: 1.25,
                md: 1.3,
              },

              fontWeight: 400,

              letterSpacing: "-1px",

              maxWidth: "1050px",

              mx: "auto",

              textAlign: "center",
            }}
          >
            {section.title}
          </Typography>

          {/* DESCRIPTION */}

          <Typography
            component="p"
            sx={{
              color: "#53678F",

              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "21px",
              },

              lineHeight: 1.7,

              maxWidth: "1350px",

              mx: "auto",

              mt: {
                xs: 4,
                md: 5,
              },

              textAlign: "center",
            }}
          >
            {section.description}
          </Typography>
        </Box>

        {/* ====================================================
            CARDS
        ==================================================== */}

        <Box
          sx={{
            width: "100%",

            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },

            gap: {
              xs: 2,
              sm: 2.5,
              md: 3.5,
            },

            alignItems: "stretch",
          }}
        >
          {section.cards.map((card, cardIndex) => (
            <ComparisonCard
              key={`${card.title}-${cardIndex}`}
              card={card}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

/* ============================================================
   COMPARISON CARD
============================================================ */

const ComparisonCard = ({ card }) => {
  return (
    <Box
      sx={{
        width: "100%",

        minHeight: {
          xs: "300px",
          sm: "320px",
          md: "370px",
        },

        boxSizing: "border-box",

        display: "flex",

        flexDirection: "column",

        borderRadius: "24px",

        border: card.featured
          ? "1px solid #F4510B"
          : "1px solid #E0E3E8",

        backgroundColor: "#FFFFFF",

        boxShadow:
          "0 8px 15px rgba(0, 0, 0, 0.10)",

        px: {
          xs: 3,
          sm: 3.5,
          md: 4.5,
        },

        py: {
          xs: 3,
          sm: 3.5,
          md: 4,
        },

        transition:
          "transform 0.25s ease, box-shadow 0.25s ease",

        "&:hover": {
          transform: "translateY(-4px)",

          boxShadow:
            "0 14px 28px rgba(0, 0, 0, 0.13)",
        },
      }}
    >
      {/* CATEGORY */}

      <Typography
        sx={{
          color: "#8A9AB5",

          fontSize: {
            xs: "13px",
            sm: "14px",
            md: "16px",
          },

          fontWeight: 600,

          letterSpacing: "1.2px",

          lineHeight: 1.4,

          mb: {
            xs: 2.5,
            md: 3,
          },
        }}
      >
        {card.category}
      </Typography>

      {/* TITLE */}

      <Typography
        component="h3"
        sx={{
          color: "#071D3A",

          fontSize: {
            xs: "23px",
            sm: "25px",
            md: "29px",
          },

          lineHeight: 1.3,

          fontWeight: 700,

          letterSpacing: "-0.5px",

          mb: {
            xs: 2.5,
            md: 3,
          },
        }}
      >
        {card.title}
      </Typography>

      {/* DESCRIPTION */}

      <Typography
        component="p"
        sx={{
          color: "#355477",

          fontSize: {
            xs: "16px",
            sm: "17px",
            md: "19px",
          },

          lineHeight: {
            xs: 1.7,
            md: 1.8,
          },

          margin: 0,

          flexGrow: 1,
        }}
      >
        {card.description}
      </Typography>

      {/* READ COMPARISON */}

      <Button
        disableRipple
        sx={{
          justifyContent: "flex-start",

          alignSelf: "flex-start",

          p: 0,

          mt: 3,

          color: "#F4510B",

          fontSize: {
            xs: "18px",
            md: "20px",
          },

          fontWeight: 600,

          lineHeight: 1.4,

          textTransform: "none",

          minWidth: 0,

          "&:hover": {
            backgroundColor: "transparent",
            color: "#D94105",
          },
        }}
      >
        Read the comparison →
      </Button>
    </Box>
  );
};

/* ============================================================
   GROUND RULES SECTION
============================================================ */

const ComparisonGroundRules = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",

        backgroundColor: "#FFFFFF",

        position: "relative",

        overflow: "hidden",

        py: {
          xs: 8,
          sm: 9,
          md: 10,
          lg: 11,
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1350px",

          mx: "auto",

          px: {
            xs: 3,
            sm: 4,
            md: 5,
            lg: 6,
          },
        }}
      >
        {/* ==================================================
            TOP LABEL
        ================================================== */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",

            mb: {
              xs: 4,
              sm: 4.5,
              md: 5,
            },
          }}
        >
          <Box
            sx={{
              display: "inline-flex",

              alignItems: "center",

              justifyContent: "center",

              border: "1px solid #F6D4C1",

              backgroundColor: "#FFFAF7",

              borderRadius: "999px",

              px: {
                xs: 2.5,
                sm: 3,
              },

              py: {
                xs: 1,
                sm: 1.15,
              },
            }}
          >
            <Typography
              sx={{
                color: "#FF5B18",

                fontSize: {
                  xs: "13px",
                  sm: "15px",
                  md: "16px",
                },

                fontWeight: 600,

                letterSpacing: {
                  xs: "2px",
                  sm: "2.5px",
                  md: "3px",
                },

                lineHeight: 1,

                whiteSpace: "nowrap",
              }}
            >
              HOW WE COMPARE
            </Typography>
          </Box>
        </Box>

        {/* ==================================================
            MAIN TITLE
        ================================================== */}

        <Typography
          component="h2"
          sx={{
            textAlign: "center",

            fontFamily:
              "Arial, Helvetica, sans-serif",

            fontSize: {
              xs: "38px",
              sm: "46px",
              md: "52px",
              lg: "56px",
            },

            lineHeight: {
              xs: 1.2,
              sm: 1.2,
              md: 1.15,
            },

            fontWeight: 400,

            letterSpacing: {
              xs: "-1px",
              md: "-1.5px",
            },

            color: "#050505",

            mb: {
              xs: 6,
              sm: 7,
              md: 8,
            },
          }}
        >
          Our Comparison{" "}
          <Box
            component="span"
            sx={{
              background:
                "linear-gradient(90deg, #5034D8 0%, #5735D8 45%, #7136E5 100%)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",

              backgroundClip: "text",
            }}
          >
            Ground Rules
          </Box>
        </Typography>

        {/* ==================================================
            RULES
        ================================================== */}

        <Box
          component="ul"
          sx={{
            maxWidth: "1100px",

            mx: "auto",

            pl: {
              xs: 3,
              sm: 4,
            },

            m: 0,

            "& li": {
              pl: {
                xs: 0.5,
                sm: 1,
              },

              mb: {
                xs: 3.5,
                sm: 3.8,
                md: 4,
              },

              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
                lg: "21px",
              },

              lineHeight: {
                xs: 1.75,
                sm: 1.8,
                md: 1.85,
              },

              color: "#345477",
            },

            "& li::marker": {
              color: "#000000",
            },

            "& li:last-child": {
              mb: 0,
            },
          }}
        >
          <Box component="li">
            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                lineHeight: "inherit",
                fontWeight: 700,
                color: "#29466A",
              }}
            >
              Every price is verified on the vendor&apos;s official pricing
              page
            </Typography>

            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                lineHeight: "inherit",
                color: "#345477",
              }}
            >
              {" "}
              — checked June 10, 2026, linked as a source on each page, and
              updated when vendors change plans.
            </Typography>
          </Box>

          <Box component="li">
            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                lineHeight: "inherit",
                fontWeight: 700,
                color: "#29466A",
              }}
            >
              Competitor strengths are stated plainly.
            </Typography>

            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                lineHeight: "inherit",
                color: "#345477",
              }}
            >
              {" "}
              Wati&apos;s inbox is genuinely deeper. Interakt&apos;s unlimited
              agents are genuinely rare. Instantly genuinely wins on email
              volume. Pretending otherwise would waste your time.
            </Typography>
          </Box>

          <Box component="li">
            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                lineHeight: "inherit",
                fontWeight: 700,
                color: "#29466A",
              }}
            >
              The recommendation is conditional, not absolute.
            </Typography>

            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                lineHeight: "inherit",
                color: "#345477",
              }}
            >
              {" "}
              Each page ends with &quot;choose them if / choose us if&quot;
              because the right tool depends on whether your buyers live in
              Gmail, on LinkedIn, or on WhatsApp.
            </Typography>
          </Box>

          <Box component="li">
            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                lineHeight: "inherit",
                fontWeight: 700,
                color: "#29466A",
              }}
            >
              Found an error?
            </Typography>

            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                lineHeight: "inherit",
                color: "#345477",
              }}
            >
              {" "}
              Email{" "}
              <Link
                href="mailto:help@rapidsales.ai"
                underline="always"
                sx={{
                  color: "#345477",

                  fontSize: "inherit",

                  fontWeight: 400,

                  textUnderlineOffset: "2px",

                  "&:hover": {
                    color: "#4C3DDB",
                  },
                }}
              >
                help@rapidsales.ai
              </Link>{" "}
              and we&apos;ll fix it.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* ==================================================
          FAQ
      ================================================== */}

      <FAQHome />
    </Box>
  );
};

export default Comparisons;