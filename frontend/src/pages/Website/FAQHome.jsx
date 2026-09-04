import React, { useState } from "react";

import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQHome = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "",
    useCase: "",
  });

  // Only one accordion can be open
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Message sent successfully!");
  };

  const faqData = [
    {
      question: " What exactly does JFS do? ",
      answer:
        "JFS is a smart AI sales assistant that automates multi-channel outbound outreach. It combines Email, WhatsApp, and AI Voice calls into a single workflow to engage prospects, qualify leads, and automatically hand over only high-intent, genuine buyers to your human sales team.",
    },
    {
      question: "What does it cost?",
      answer:
        "JFS automates repetitive sales activities such as lead engagement, follow-ups, appointment booking, and customer nurturing. This allows sales teams to focus on closing deals while the platform handles outreach and lead qualification.",
    },
    {
      question: "Do I need coding skills to set up a campaign?",
      answer:
        "Yes. JFS enables businesses to automate WhatsApp conversations, send personalized messages, schedule follow-ups, and engage leads at scale while maintaining a human-like communication experience.",
    },
    {
      question: "Can I send from my own company email domain? ",
      answer:
        "Absolutely. JFS helps businesses create automated email campaigns, nurture leads, schedule follow-ups, and track engagement metrics to improve conversion rates.",
    },
    {
      question: " Can my team see a lead’s full interaction history?",
      answer:
        "JFS can be used by agencies, real estate companies, SaaS businesses, e-commerce companies, service providers, and many other industries.",
    },
    {
      question: " Do you supply lead lists or contact data? ",
      answer:
        "Yes. JFS provides AI-powered voice calling capabilities to automate customer conversations and sales outreach.",
    },
    {
      question: " How does the system know when to stop messaging a lead? ",
      answer:
        "JFS can integrate with CRM systems to help synchronize customer information, leads, and sales activities.",
    },
    {
      question: " Can it handle high-volume B2B qualification?",
      answer:
        "Businesses should follow WhatsApp's policies and messaging guidelines when conducting outreach campaigns.",
    },
    {
      question: " Will using this get my WhatsApp number banned? ",
      answer:
        "Businesses should follow WhatsApp's policies and messaging guidelines when conducting outreach campaigns.",
    },
    {
      question: "  What languages does the AI voice agent support? ",
      answer:
        "Businesses should follow WhatsApp's policies and messaging guidelines when conducting outreach campaigns.",
    },
    {
      question: "Do the AI voice calls sound robotic?  ",
      answer:
        "Businesses should follow WhatsApp's policies and messaging guidelines when conducting outreach campaigns.",
    },
    {
      question: " Can it recover abandoned online carts?  ",
      answer:
        "Businesses should follow WhatsApp's policies and messaging guidelines when conducting outreach campaigns.",
    },
    {
      question: " How does this help reduce COD return-to-origin rates? ",
      answer:
        "Businesses should follow WhatsApp's policies and messaging guidelines when conducting outreach campaigns.",
    },
    {
      question: " How does this help exporters sell internationally? ",
      answer:
        "Businesses should follow WhatsApp's policies and messaging guidelines when conducting outreach campaigns.",
    },
  ];

  return (
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
      <Box
        sx={{
          width: "100%",
          // minHeight: "fit-content",
          // backgroundColor: "#ffffff",
          // color: "#000000",

          // // IMPORTANT FOR MOBILE
          // overflowX: "hidden",
          // // mb: 2,
          // p: 0,
          // boxSizing: "border-box",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            width: "100%",
            boxSizing: "border-box",

            px: {
              xs: 2,
              sm: 3,
              md: 3,
            },
          }}
        >
          {/* ==========================================
              FAQ BADGE
          ========================================== */}

          <Box
            sx={{
              width: "fit-content",

              height: {
                xs: 40,
                sm: 42,
                md: 46,
              },

              mx: "auto",

              mb: {
                xs: 2.5,
                sm: 3,
                md: 3.5,
              },

              px: {
                xs: 1.5,
                md: 2,
              },

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              gap: 1,

              border: "1px solid #ff5a13",
              borderRadius: "30px",

              backgroundColor: "#fff0e9",

              boxSizing: "border-box",
            }}
          >
            <SearchIcon
              sx={{
                width: {
                  xs: 18,
                  md: 22,
                },

                height: {
                  xs: 18,
                  md: 22,
                },

                color: "#111111",
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: "13px",
                  md: "16px",
                },

                fontWeight: 700,

                color: "#111111",
              }}
            >
              FAQ's
            </Typography>
          </Box>

          {/* ==========================================
              FAQ HEADING
          ========================================== */}

          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",

              mx: "auto",

              mb: {
                xs: 3,
                sm: 4,
                md: 5,
              },

              textAlign: "center",

              px: {
                xs: 0,
                sm: 1,
              },

              boxSizing: "border-box",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: 24,
                  sm: 28,
                  md: 32,
                },

                lineHeight: {
                  xs: 1.25,
                  md: 1.2,
                },

                fontWeight: 700,

                color: "#000000",

                mb: {
                  xs: 1,
                  md: 2,
                },
              }}
            >
              Frequently asked questions
            </Typography>

            <Typography
              sx={{
                width: "100%",
                maxWidth: "750px",

                mx: "auto",

                fontSize: {
                  xs: 15,
                  sm: 17,
                  md: 18,
                },

                lineHeight: {
                  xs: 1.55,
                  md: 1.5,
                },

                color: "#355777",
              }}
            >
              Everything you need to know about automating outreach, launching
              AI agents, and scaling your sales operations.
            </Typography>
          </Box>

          {/* ==========================================
              FAQ ACCORDIONS
          ========================================== */}

          <Box
            sx={{
              width: "100%",
              maxWidth: "1120px",
              mx: "auto",
            }}
          >
            {faqData.map((faq, index) => {
              const panelId = `panel-${index}`;

              return (
                <Accordion
                  key={index}
                  disableGutters
                  expanded={expanded === panelId}
                  onChange={handleChange(panelId)}
                  sx={{
                    width: {
                      xs: "100%",
                      sm: "90%",
                      md: "75%",
                    },

                    maxWidth: "1120px",

                    mx: "auto",

                    mb: {
                      xs: 1.25,
                      md: 1.5,
                    },

                    boxSizing: "border-box",

                    border: "1px solid rgba(99, 91, 200, 0.30)",

                    borderRadius: {
                      xs: "16px !important",
                      md: "18px !important",
                    },

                    background:
                      "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(245,245,255,0.95) 100%)",

                    boxShadow: `
                      0px 4px 10px rgba(79, 70, 229, 0.06),
                      0px 12px 30px rgba(79, 70, 229, 0.08)
                    `,

                    overflow: "hidden",

                    transition: "box-shadow 0.3s ease, border-color 0.3s ease",

                    "&::before": {
                      display: "none",
                    },

                    "&.Mui-expanded": {
                      margin: {
                        xs: "0 auto 10px auto",
                        md: "0 auto 12px auto",
                      },

                      borderColor: "rgba(79, 70, 229, 0.45)",

                      boxShadow: `
                        0px 6px 14px rgba(79, 70, 229, 0.08),
                        0px 18px 40px rgba(79, 70, 229, 0.10)
                      `,
                    },

                    "&:hover": {
                      borderColor: "rgba(79, 70, 229, 0.45)",
                    },
                  }}
                >
                  {/* ======================================
                      QUESTION
                  ====================================== */}

                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          width: {
                            xs: 20,
                            sm: 22,
                            md: 24,
                          },

                          height: {
                            xs: 20,
                            sm: 22,
                            md: 24,
                          },

                          color: "#526071",

                          flexShrink: 0,

                          transition: "transform 0.3s ease",
                        }}
                      />
                    }
                    sx={{
                      minHeight: {
                        xs: "56px !important",
                        sm: "64px !important",
                        md: "78px !important",
                      },

                      px: {
                        xs: 1.75,
                        sm: 2.5,
                        md: 3.5,
                      },

                      boxSizing: "border-box",

                      "& .MuiAccordionSummary-content": {
                        margin: "0 !important",
                        minWidth: 0,
                      },

                      "& .MuiAccordionSummary-content.Mui-expanded": {
                        margin: "0 !important",
                      },

                      "& .MuiAccordionSummary-expandIconWrapper": {
                        ml: 1,
                      },

                      "&.Mui-expanded": {
                        minHeight: {
                          xs: "56px !important",
                          sm: "64px !important",
                          md: "78px !important",
                        },
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "13px",
                          sm: "16px",
                          md: "18px",
                        },

                        lineHeight: {
                          xs: 1.45,
                          md: 1.4,
                        },

                        fontWeight: 500,

                        color: "#1B2B40",

                        wordBreak: "break-word",

                        pr: {
                          xs: 0.5,
                          md: 1,
                        },
                      }}
                    >
                      Q. {faq.question}
                    </Typography>
                  </AccordionSummary>

                  {/* ======================================
                      ANSWER
                  ====================================== */}

                  <AccordionDetails
                    sx={{
                      px: {
                        xs: 1.75,
                        sm: 2.5,
                        md: 3.5,
                      },

                      pt: {
                        xs: 1.5,
                        md: 2,
                      },

                      pb: {
                        xs: 2,
                        sm: 2.5,
                        md: 3,
                      },

                      borderTop: "1px solid rgba(79, 70, 229, 0.10)",

                      boxSizing: "border-box",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "13px",
                          sm: "15px",
                          md: "17px",
                        },

                        lineHeight: {
                          xs: 1.6,
                          md: 1.6,
                        },

                        color: "#4A5B70",

                        letterSpacing: {
                          xs: "0px",
                          md: "0.2px",
                        },

                        wordBreak: "break-word",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FAQHome;
