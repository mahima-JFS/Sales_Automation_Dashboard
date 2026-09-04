import React from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import { Box, Button, Container, Stack, Typography, Link } from "@mui/material";

import { ArrowOutward, Check } from "@mui/icons-material";

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
        India's WhatsApp tools automate one channel. See what changes when email
        and AI voice calls join
        <br className="desktop-break" />
        the same sequence.
      </>
    ),

    background: "#FFFFFF",

    cards: [
      {
        category: "VS THE SUPPORT INBOX LEADER",
        title: "Automate Follow-Ups Over WhatsApp, the Compliant Way",
        description:
          "Send official WhatsApp Business API messages, automate replies, and keep every conversation in one shared inbox — without risking your number. Sections to include: Template approval process · Campaign builder · Auto-replies · Conversation view · Compliance notes (opt-in, template rules)",
      },

      {
        category: "VS THE BROADCAST FAVOURITE",
        title: "JFS vs AiSensy",
        description:
          "Marketing message pricing, chatbot flows, and response handling compared against a complete outbound workflow.",
        featured: true,
      },

      {
        category: "VS JIO'S WHATSAPP SUITE",
        title: "JFS vs Interakt",
        description:
          "Unlimited agents and Shopify flows versus AI calling and email automation in one platform.",
      },

      // {
      //   category: "VS THE MOBILE-FIRST INBOX",
      //   title: "JFS vs DoubleTick",
      //   description:
      //     "WhatsApp inbox productivity compared with AI-powered sales execution.",
      // },

      // {
      //   category: "VS THE CLOSEST AI COMPETITOR",
      //   title: "JFS vs Gallabox",
      //   description:
      //     "Compare AI voice, WhatsApp automation, and outbound sales capabilities side-by-side.",
      // },
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
        title: " Run Structured Email Campaigns That Scale ",
        description:
          "Set up multi-step email drips, monitor opens and clicks, and stay on a prospect’s radar through slow-moving deals. Sections to include: Sequence builder · Deliverability & domain authentication · Templates · Scheduling · Reporting",
      },

      {
        category: "VS THE AGENCY EMAIL INFRASTRUCTURE",
        title: "JFS vs Smartlead",
        description:
          "Email warmup and infrastructure versus AI calling + WhatsApp workflows.",
      },

      {
        category: "VS THE PER-USER MULTICHANNEL",
        title: "JFS vs Reply.io",
        description:
          "Email-first engagement versus WhatsApp-native sales automation.",
      },

      // {
      //   category: "VS THE LINKEDIN-FIRST OUTBOUND TOOL",
      //   title: "JFS vs Lemlist",
      //   description:
      //     "LinkedIn outreach and personalization compared against WhatsApp-led selling.",
      // },
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
        title: "Qualify and Book Meetings With AI Voice Calling ",
        description:
          " Intro: Place inbound and outbound calls at scale with a voice agent that sounds natural, asks the right qualifying questions, and hands off hot leads instantly. Sections to include: How it works (3–4 steps) · Supported languages/accents · Sample call script walkthrough · Call outcomes & tagging · Recordings & transcripts · Integration with calendars · Pricing per minute",
      },

      {
        category: "VS THE DEVELOPER VOICE API",
        title: "JFS vs Voice API",
        description:
          "Developer-first calling infrastructure versus ready-to-use WhatsApp, email and voice sales automation.",
      },

      {
        category: "VS THE CALLING OUTSOURCING MODEL",
        title: "JFS vs Calling Teams",
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
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",

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
          minHeight: "500px",

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

          backgroundSize: "20px 20px",

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
              sm: 2,
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
                xs: 3,
                sm: 5,
                md: 7,
              },

              pb: {
                xs: 2,
                md: 2,
              },
            }}
          >
            {/* ==================================================
                MAIN HEADING
            ================================================== */}

            <Typography
              component="h1"
              sx={{
                width: "100%",
                maxWidth: "1100px",

                mx: "auto",

                color: "#050505",

                fontSize: {
                  xs: "1.2rem",
                  sm: "2rem",
                  md: "2.5rem",
                },

                lineHeight: {
                  xs: 1.2,
                  sm: 1.2,
                  md: 1.25,
                },

                fontWeight: 600,

                letterSpacing: {
                  xs: "-0.02px",
                  md: "-0.02px",
                },

                textAlign: "center",
              }}
            >
              How{" "}
              <Box
                component="span"
                sx={{
                  color: "#4C3DDB",
                  fontWeight: 700,
                }}
              >
                It Compares to the
              </Box>
              <br />
              Competition
            </Typography>

            {/* ==================================================
                DESCRIPTION
            ================================================== */}

            <Typography
              component="p"
              sx={{
                width: "100%",
                maxWidth: "1100px",

                mx: "auto",

                mt: {
                  xs: 3,
                  sm: 3.5,
                  md: 4,
                },

                color: "#53678F",

                fontSize: {
                  xs: "20px",
                  sm: "20px",
                  md: "20px",
                  lg: "20px",
                },

                lineHeight: {
                  xs: 1.55,
                  md: 1.7,
                },

                fontWeight: 400,

                textAlign: "center",
              }}
            >
              Honest, side-by-side comparisons against other outreach and
              calling tools — so you can pick what actually fits how your buyers
              respond, whether that’s WhatsApp, email, or phone.
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
                xs: 1.5,
                md: 3,
                lg: 4,
              }}
              sx={{
                width: "auto",

                mt: {
                  xs: 3,
                  md: 3.5,
                },

                textAlign: "center",
              }}
            >
              <VerificationItem>
                All pricing verified September 3, 2026
              </VerificationItem>

              <VerificationItem>Sources linked on every page</VerificationItem>

              <VerificationItem>
                Updated as vendors change plans
              </VerificationItem>
            </Stack>

            {/* ==================================================
                BUTTONS
            ================================================== */}

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                mt: {
                  xs: 4,
                  sm: 5,
                  md: 5.5,
                },
              }}
            >
              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                justifyContent="center"
                alignItems="center"
                spacing={1.5}
              >
                {/* BOOK DEMO */}

                <Button
                  variant="contained"
                  endIcon={<ArrowOutward />}
                  onClick={() => navigate("/book-a-demo")}
                  sx={{
                    width: {
                      xs: "220px",
                      sm: "240px",
                      md: "260px",
                    },

                    height: {
                      xs: "48px",
                      sm: "50px",
                    },

                    borderRadius: "10px",

                    backgroundColor: "#F4510B",

                    color: "#FFFFFF",

                    fontSize: {
                      xs: "15px",
                      sm: "16px",
                      md: "17px",
                    },

                    fontWeight: 600,

                    textTransform: "none",

                    boxShadow: "none",

                    "&:hover": {
                      backgroundColor: "#E54805",
                      boxShadow: "none",
                    },

                    "& .MuiButton-endIcon": {
                      marginLeft: "6px",
                    },
                  }}
                >
                  Book a Demo
                </Button>

                {/* PRICING */}

                <Button
                  variant="outlined"
                  onClick={() => navigate("/Pricing")}
                  endIcon={<ArrowOutward />}
                  sx={{
                    width: {
                      xs: "280px",
                      sm: "300px",
                      md: "320px",
                    },

                    height: {
                      xs: "48px",
                      sm: "50px",
                    },

                    borderRadius: "10px",

                    border: "1px solid #F4510B",

                    color: "#F4510B",

                    backgroundColor: "rgba(255,255,255,0.35)",

                    fontSize: {
                      xs: "15px",
                      sm: "16px",
                      md: "17px",
                    },

                    fontWeight: 400,

                    textTransform: "none",

                    "&:hover": {
                      border: "1px solid #F4510B",
                      backgroundColor: "rgba(244,81,11,0.04)",
                    },

                    "& .MuiButton-endIcon": {
                      marginLeft: "6px",
                    },
                  }}
                >
                  See JFS Pricing
                </Button>
              </Stack>
            </Box>
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
      spacing={0.5}
    >
      <Check
        sx={{
          color: "#00A85A",

          fontSize: {
            xs: 18,
            md: 19,
          },
        }}
      />

      <Typography
        component="span"
        sx={{
          color: "#53678F",

          fontSize: {
            xs: "13px",
            sm: "14px",
            md: "15px",
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
          xs: 4,
          sm: 5,
          md: 6,
        },

        borderTop: index > 0 ? "1px solid rgba(220,224,230,0.35)" : "none",
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

            maxWidth: "1400px",

            mx: "auto",

            mb: {
              xs: 5,
              sm: 6,
              md: 7,
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
                xs: 2,
                sm: 2.5,
              },

              py: {
                xs: 0.8,
                sm: 1,
              },

              border: "1px solid #FFD0AE",

              borderRadius: "30px",

              backgroundColor: "#FFFDFC",

              mb: {
                xs: 2.5,
                md: 3,
              },
            }}
          >
            <Typography
              sx={{
                color: "#F4510B",

                fontSize: {
                  xs: "11px",
                  sm: "12px",
                  md: "13px",
                },

                fontWeight: 600,

                letterSpacing: "0.8px",

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
                xs: "24px",
                sm: "28px",
                md: "34px",
                lg: "36px",
              },

              lineHeight: {
                xs: 1.2,
                md: 1.25,
              },

              fontWeight: 400,

              letterSpacing: "-0.8px",

              maxWidth: "1000px",

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
                xs: "14px",
                sm: "16px",
                md: "18px",
              },

              lineHeight: 1.6,

              maxWidth: "1200px",

              mx: "auto",

              mt: {
                xs: 3,
                md: 3.5,
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
              md: 3,
            },

            alignItems: "stretch",
          }}
        >
          {section.cards.map((card, cardIndex) => (
            <ComparisonCard key={`${card.title}-${cardIndex}`} card={card} />
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
          xs: "280px",
          sm: "300px",
          md: "340px",
        },

        boxSizing: "border-box",

        display: "flex",

        flexDirection: "column",

        borderRadius: "20px",

        border: card.featured ? "1px solid #F4510B" : "1px solid #E0E3E8",

        backgroundColor: "#FFFFFF",

        boxShadow: "0 6px 14px rgba(0, 0, 0, 0.08)",

        px: {
          xs: 2,
          sm: 2.5,
          md: 2.5,
        },

        py: {
          xs: 2,
          sm: 2.5,
          md: 2.5,
        },

        transition: "transform 0.25s ease, box-shadow 0.25s ease",

        "&:hover": {
          transform: "translateY(-4px)",

          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.11)",
        },
      }}
    >
      {/* CATEGORY */}

      <Typography
        sx={{
          color: "#8A9AB5",

          fontSize: {
            xs: "11px",
            sm: "12px",
            md: "13px",
          },

          fontWeight: 600,

          letterSpacing: "1px",

          lineHeight: 1.4,

          mb: {
            xs: 1,
            md: 1.5,
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
            xs: "20px",
            sm: "22px",
            md: "25px",
          },

          lineHeight: 1.3,

          fontWeight: 700,

          letterSpacing: "-0.4px",

          mb: {
            xs: 2,
            md: 2.5,
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
            xs: "14px",
            sm: "15px",
            md: "16px",
          },

          lineHeight: {
            xs: 1.6,
            md: 1.7,
          },

          margin: 0,

          flexGrow: 1,
        }}
      >
        {card.description}
      </Typography>

      {/* READ COMPARISON */}

      <Button
        component={RouterLink}
        to="/comparisons/rapid-sales-vs-wati"
        disableRipple
        sx={{
          justifyContent: "flex-start",
          alignSelf: "flex-start",
          p: 0,
          mt: 1,
          color: "#F4510B",
          fontSize: {
            xs: "15px",
            md: "17px",
          },
          fontWeight: 600,
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
          xs: 7,
          sm: 8,
          md: 9,
          lg: 10,
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1250px",

          mx: "auto",

          px: {
            xs: 2.5,
            sm: 3,
            md: 4,
            lg: 5,
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
              xs: 3,
              sm: 3.5,
              md: 4,
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
                xs: 1,
                sm: 1.5,
              },

              py: {
                xs: 0.8,
                sm: 1,
              },
            }}
          >
            <Typography
              sx={{
                color: "#FF5B18",

                fontSize: {
                  xs: "11px",
                  sm: "12px",
                  md: "13px",
                },

                fontWeight: 600,

                letterSpacing: {
                  xs: "1.5px",
                  sm: "2px",
                  md: "2.2px",
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

            fontFamily: "Arial, Helvetica, sans-serif",

            fontSize: {
              xs: "35px",
              sm: "30px",
              md: "35px",
              lg: "35px",
            },

            lineHeight: {
              xs: 1.2,
              sm: 1.2,
              md: 1.15,
            },

            fontWeight: 400,

            letterSpacing: {
              xs: "-0.7px",
              md: "-1px",
            },

            color: "#050505",

            mb: {
              xs: 5,
              sm: 6,
              md: 7,
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
            CENTERED RULES
        ================================================== */}

        <Box
          sx={{
            width: "100%",

            display: "flex",

            justifyContent: {
              xs: "flex-start",
              md: "center",
            },

            alignItems: "flex-start",
          }}
        >
          <Box
            component="ul"
            sx={{
              width: {
                xs: "100%",
                md: "800px",
              },

              maxWidth: "1050px",

              m: 0,

              pl: {
                xs: 2.5,
                sm: 3,
                md: 3,
              },

              textAlign: "left",

              "& li": {
                pl: {
                  xs: 0.5,
                  sm: 0.8,
                },

                mb: {
                  xs: 2.5,
                  sm: 3,
                  md: 3,
                },

                fontSize: {
                  xs: "13px",
                  sm: "14px",
                  md: "15px",
                  lg: "16px",
                },

                lineHeight: {
                  xs: 1.6,
                  sm: 1.65,
                  md: 1.7,
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
            {/* ==================================================
                RULE 1
            ================================================== */}

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

            {/* ==================================================
                RULE 2
            ================================================== */}

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

            {/* ==================================================
                RULE 3
            ================================================== */}

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

            {/* ==================================================
                RULE 4
            ================================================== */}

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
                  href="mailto:contact@jfstechnologies.com"
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
                  contact@jfstechnologies.com
                </Link>{" "}
                and we&apos;ll fix it.
              </Typography>
            </Box>
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