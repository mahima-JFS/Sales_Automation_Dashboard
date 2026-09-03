import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FAQHome from "./FAQHome";

import {
  Box,
  Button,
  Container,
  Typography,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import NorthEastIcon from "@mui/icons-material/NorthEastOutlined";
import PricingSection from "./PriceSection";

/* =========================================================
   TOP SECTION FEATURES
========================================================= */

const features = [
  "AI Outreach Automation",
  "WhatsApp & Email Campaigns",
  "AI Voice Calling",
  "Real-Time Analytics",
];

/* =========================================================
   PRICING PLANS
========================================================= */

const plans = [
  {
    name: "Basic",
    price: "₹3,000",
    credits: "100",
    button: "Get Started",
    features: [
      "Audience Segments",
      "Campaign Sequences",
      "2 AI Calls Languages and 4 Voices",
      "WhatsApp Webhooks",
      "AI WhatsApp Auto-Reply",
      "Email Accounts",
      "Unlimited Lead Uploads",
      "Call Recording & Storage",
      "Standard support",
    ],
  },

  {
    name: "Advance",
    price: "₹6,000",
    credits: "250",
    button: "Get Started",
    popular: true,
    features: [
      "Audience Segments",
      "Advanced Sequences",
      "4 AI Calls Languages and 8 Voices",
      "AI Smart Bookings",
      "AI WhatsApp Auto-Reply",
      "Automated Callbacks",
      "Instant Lead Sync",
      "WhatsApp Webhooks",
      "Email Outreach",
      "Call Recording & Storage",
      "Shopify Integration",
      "AI Content Creators",
    ],
  },

  {
    name: "Pro",
    price: "₹12,000",
    credits: "500",
    button: "Get Started",
    features: [
      "Audience Segments",
      "Advanced Sequences",
      "10 AI Calls Languages and 20 AI Voices",
      "AI Smart Bookings",
      "Automated Callbacks",
      "AI WhatsApp Auto-Reply",
      "Instant Lead Sync",
      "WhatsApp API Access",
      "Email Outreach",
      "3000 Call Recording Minutes",
      "Priority support",
      "Shopify Integration",
      "AI Content Creators",
    ],
  },

  {
    name: "Enterprise",
    button: "Let's Talk",
    features: [
      "Unlimited Leads Upload",
      "10 Email Accounts",
      "Send UPTO 500 Emails / Day",
      "WhatsApp Conversation as per your Meta or CAPS tier",
      "Marketing, Utility & Auth Templates",
      "AI Calling",
      "10 Calling Languages",
      "20 AI Voices",
      "Campaign Sequences",
      "Single User",
    ],
  },

  {
    name: "WhatsApp only Advance",
    price: "₹1,999",
    button: "Get Started",
    features: [
      "Unlimited Sequences",
      "Unlimited Basic Sequence",
      "Broadcast",
      "Abandoned Cart Notifications",
      "250/day (Meta Tier Based)",
      "Marketing, Utility & Auth Templates",
    ],
  },

  {
    name: "WhatsApp Only Pro",
    price: "₹2,999",
    button: "Get Started",
    features: [
      "Unlimited Segments",
      "Unlimited Advance Sequence",
      "Broadcast",
      "Abandoned Cart Notifications",
      "250/day (Meta Tier Based)",
      "Auto WhatsAppBot Reply",
    ],
  },
];

/* =========================================================
   FEATURE ITEM
========================================================= */

const Feature = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: "9px",
        minHeight: "34px",
        py: "2px",
      }}
    >
      <CheckIcon
        sx={{
          color: "#00bd5b",
          fontSize: "24px",
          flexShrink: 0,
          mt: "1px",
        }}
      />

      <Typography
        sx={{
          fontFamily: "Arial, sans-serif",
          fontSize: {
            xs: "14px",
            md: "15px",
          },
          lineHeight: 1.45,
          color: "#29476d",
          textDecoration: "underline",
          textDecorationStyle: "dotted",
          textUnderlineOffset: "5px",
        }}
      >
        {children}
      </Typography>

      <KeyboardArrowRightIcon
        sx={{
          ml: "auto",
          color: "#9ba8b8",
          fontSize: "22px",
          flexShrink: 0,
        }}
      />
    </Box>
  );
};

/* =========================================================
   PRICING CARD
========================================================= */

const PricingCard = ({ plan }) => {
  const isPopular = plan.popular;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: isPopular ? "24px" : "22px",
        p: isPopular ? "0" : "8px",
        boxSizing: "border-box",

        background: isPopular
          ? "linear-gradient(135deg, #4e2bd9 0%, #f05a20 100%)"
          : "#f8f9fc",

        border: isPopular ? "none" : "1px solid #e5e8ee",
      }}
    >
      {/* POPULAR HEADER */}

      {isPopular && (
        <Box
          sx={{
            height: "58px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: {
              xs: "19px",
              md: "21px",
            },
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "23px",
            }}
          >
            🔥
          </span>
          POPULAR
        </Box>
      )}

      {/* CARD BODY */}

      <Box
        sx={{
          background: "#fff",
          borderRadius: isPopular ? "22px" : "20px",

          minHeight: "500px",
          height: "100%",

          px: {
            xs: "16px",
            md: "18px",
          },

          pt: {
            xs: "18px",
            md: "20px",
          },

          pb: "20px",

          boxSizing: "border-box",

          boxShadow: "0 1px 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* PLAN NAME */}

        <Typography
          sx={{
            textAlign: "center",
            color: "#f4510b",
            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "18px",
              md: "20px",
            },
            fontWeight: 500,

            mb: plan.price ? "17px" : "35px",
          }}
        >
          {plan.name}
        </Typography>

        {/* PRICE */}

        {plan.price && (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: "7px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Arial, sans-serif",

                  fontSize: {
                    xs: "36px",
                    md: "42px",
                  },

                  lineHeight: 1,

                  fontWeight: 700,

                  color: "#050505",

                  letterSpacing: "-1.5px",
                }}
              >
                {plan.price}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "19px",
                  color: "#52647a",
                }}
              >
                /mo
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "14px",
                  color: "#718096",
                }}
              >
                + GST
              </Typography>
            </Box>

            {/* CREDITS */}

            {plan.credits && (
              <Typography
                sx={{
                  textAlign: "center",
                  mt: "17px",
                  mb: "23px",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "17px",
                  color: "#52647a",
                }}
              >
                Includes{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#111",
                    fontWeight: 700,
                  }}
                >
                  {plan.credits} Shared Credits
                </Box>
              </Typography>
            )}
          </>
        )}

        {/* ENTERPRISE SPACING */}

        {!plan.price && (
          <Box
            sx={{
              height: "5px",
            }}
          />
        )}

        {/* BUTTON */}

        <Button
          fullWidth
          disableElevation
          sx={{
            height: "52px",

            borderRadius: "11px",

            background: isPopular ? "#f4510b" : "#000",

            color: "#fff",

            textTransform: "none",

            fontFamily: "Arial, sans-serif",

            fontSize: {
              xs: "20px",
              md: "23px",
            },

            fontWeight: 400,

            mb: "20px",

            "&:hover": {
              background: isPopular ? "#df4608" : "#151515",
            },
          }}
        >
          {plan.button}
        </Button>

        {/* FEATURES */}

        <Box>
          {plan.features.map((feature, index) => (
            <Feature key={index}>{feature}</Feature>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

/* =========================================================
   MAIN PRICING SECTION
========================================================= */

export default function Pricing() {
  const navigate = useNavigate();

  const [billing, setBilling] = useState("monthly");

  return (
    <>
      {/* SECTION 1
          PLANS THAT SCALE YOUR SALES  */}

      <Box
        component="section"
        sx={{
          width: "100%",

          position: "relative",

          overflow: "hidden",

          display: "flex",

          justifyContent: "center",

          pt: {
            xs: 3,
            sm: 5,
            md: 7,
          },

          px: {
            xs: 2,
            sm: 3,
          },
          // pb: {
          //   xs: 2,
          //   sm: 5,
          //   md: 7,
          // },

          backgroundColor: "#FFFFFF",

          backgroundImage: `
            linear-gradient(
              rgba(110, 110, 110, 0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(110, 110, 110, 0.07) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "20px 20px",
        }}
      >
        {/* BACKGROUND GLOW */}

        <Box
          sx={{
            position: "absolute",

            top: "10%",

            left: "50%",

            transform: "translateX(-50%)",

            width: {
              xs: "100%",
              md: "900px",
            },

            height: {
              xs: "500px",
              md: "600px",
            },

            background:
              "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.80) 45%, rgba(255,255,255,0) 75%)",

            pointerEvents: "none",

            zIndex: 0,
          }}
        />

        {/* HERO CONTENT */}

        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "1050px",
            mx: "auto",
            textAlign: "center",

            // Extra space at the bottom
            pb: {
              xs: 4,
              sm: 6,
              md: 8,
            },
          }}
        >
          {/* HERO TITLE */}
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
              },
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: "#0F172A",
            }}
          >
            Simple,{" "}
            <Box
              component="span"
              sx={{
                display: "inline-block",
                color: "#4F46E5",
                fontWeight: 700,
              }}
            >
              Usage-Based
            </Box>{" "}
            Pricing
          </Typography>

          {/* DESCRIPTION */}
          <Typography
            sx={{
              maxWidth: "760px",
              mx: "auto",
              mt: {
                xs: 3,
                md: 4,
              },
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
              },
              lineHeight: 1.55,
              color: "#526071",
            }}
          >
            Start free. Pay only for what you actually use — emails sent,
            WhatsApp conversations opened, and AI calling minutes consumed.
          </Typography>

          {/* BUTTON */}
          {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: {
                xs: 4,
                md: 6,
              },
            }}
          >
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              alignItems="center"
              sx={{
                width: {
                  xs: "100%",
                  sm: "auto",
                },
              }}
            >
              <Button
                endIcon={<NorthEastIcon />}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "340px",
                  },
                  maxWidth: {
                    xs: "400px",
                    sm: "400px",
                  },
                  height: "57px",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontSize: {
                    xs: "17px",
                    md: "19px",
                  },
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "#FF5A00",

                  "&:hover": {
                    backgroundColor: "#E94F00",
                  },
                }}
              >
                Get Started
              </Button>
            </Stack>
          </Box> */}

          {/* FEATURES */}
          <Stack
            direction={{
              xs: "column",
              md: "row",
            }}
            justifyContent="center"
            alignItems={{
              xs: "flex-start",
              md: "center",
            }}
            spacing={{
              xs: 3,
              md: 5,
            }}
            sx={{
              mt: {
                xs: 9,
                md: 12,
              },

              pb: {
                xs: 2,
                md: 4,
              },

              width: "100%",

              flexWrap: {
                md: "wrap",
              },

              rowGap: 3,
            }}
          >
            {features.map((feature) => (
              <Stack
                key={feature}
                direction="row"
                alignItems="center"
                spacing={1.4}
                sx={{
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    width: {
                      xs: "26px",
                      md: "31px",
                    },

                    height: {
                      xs: "26px",
                      md: "31px",
                    },

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "#5139dc",

                    flexShrink: 0,
                  }}
                >
                  <AutoAwesomeIcon
                    sx={{
                      fontSize: {
                        xs: "25px",
                        md: "30px",
                      },
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    color: "#111",

                    fontFamily: "Arial, sans-serif",

                    fontSize: {
                      xs: "13px",
                      sm: "15px",
                      md: "18px",
                    },

                    fontWeight: 400,

                    whiteSpace: "nowrap",

                    lineHeight: 1.2,
                  }}
                >
                  {feature}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* <Box
        component="section"
        sx={{
          background: "#fff",

          minHeight: "100vh",

          py: {
            xs: "35px",
            md: "24px",
          },
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            maxWidth: "1190px",
            mx: "auto",

            px: {
              xs: "18px",
              md: "24px",
            },

            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              display: "flex",

              justifyContent: "center",

              mb: "30px",
            }}
          >
            <Box
              sx={{
                height: "59px",

                minWidth: "177px",

                px: "20px",

                borderRadius: "40px",

                border: "1.5px solid #f4510b",

                background: "#fff0e9",

                display: "flex",

                alignItems: "center",

                justifyContent: "center",

                gap: "14px",
              }}
            >
              <Box
                sx={{
                  width: "20px",

                  height: "25px",

                  borderRadius: "50%",

                  background: "#f8bc35",

                  border: "2px solid #f2a71c",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",
                }}
              >
                <LocalOfferIcon
                  sx={{
                    color: "#e89b15",

                    fontSize: "3px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: "Arial, sans-serif",

                  fontSize: "13px",

                  fontWeight: 700,

                  color: "#111",
                }}
              >
                PRICING
              </Typography>
            </Box>
          </Box>

          <Typography
            component="h2"
            sx={{
              textAlign: "center",

              fontFamily: "Arial, sans-serif",

              fontSize: {
                xs: "2.2rem",
                sm: "3rem",
                md: "2.5rem",
              },

              fontWeight: 700,

              lineHeight: 1.1,

              letterSpacing: "-0.04em",

              color: "#0F172A",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#5038db",
              }}
            >
              Start for Free
            </Box>
            , Scale on Demand
          </Typography>

          <Typography
            sx={{
              maxWidth: "950px",

              mx: "auto",

              mt: "30px",

              textAlign: "center",

              color: "#38577c",

              fontFamily: "Arial, sans-serif",

              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
              },

              lineHeight: 1.55,
            }}
          >
            Replace separate subscriptions for Email, WhatsApp, and Callers.
            Consolidate your entire outreach stack into one system and track
            your exact calling costs in real-time.
          </Typography>

          <Box
            sx={{
              display: "flex",

              justifyContent: "flex-end",

              alignItems: "flex-end",

              mt: {
                xs: "40px",
                md: "55px",
              },

              mb: "44px",

              pr: {
                xs: 0,
                md: "5px",
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  textAlign: "right",

                  color: "#5138dc",

                  fontFamily: "Arial, sans-serif",

                  fontSize: "15px",

                  mb: "57px",

                  mr: "20px",

                  position: "relative",

                  "&::after": {
                    content: '""',

                    position: "absolute",

                    right: "52px",

                    top: "27px",

                    width: "2px",

                    height: "48px",

                    background: "#6047e1",

                    transform: "rotate(-12deg)",

                    borderRadius: "2px",
                  },
                }}
              >
                Save 29% or more
              </Typography>

              <ToggleButtonGroup
                exclusive
                value={billing}
                onChange={(event, value) => {
                  if (value) {
                    setBilling(value);
                  }
                }}
                sx={{
                  height: "50px",

                  background: "#29976c",

                  borderRadius: "16px",

                  padding: "5px",

                  "& .MuiToggleButtonGroup-grouped": {
                    border: "none !important",
                  },
                }}
              >
                {["monthly", "quarterly", "annually"].map((item) => (
                  <ToggleButton
                    key={item}
                    value={item}
                    sx={{
                      px: {
                        xs: "16px",
                        md: "26px",
                      },

                      minWidth: "100px",

                      borderRadius: "20px !important",

                      color: "#fff",

                      fontFamily: "Arial, sans-serif",

                      fontSize: "15px",

                      fontWeight: 600,

                      textTransform: "capitalize",

                      "&.Mui-selected": {
                        background: "#fff",
                        color: "#111",
                      },

                      "&.Mui-selected:hover": {
                        background: "#fff",
                      },
                    }}
                  >
                    {item}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                md: "repeat(3, minmax(0, 1fr))",
              },

              gap: {
                xs: "24px",
                md: "28px",
              },

              width: "100%",
              maxWidth: "1380px",
              mx: "auto",

              alignItems: "stretch",
            }}
          >
            {plans.map((plan) => (
              <Box
                key={plan.name}
                sx={{
                  display: "flex",

                  width: "100%",

                  minWidth: 0,
                }}
              >
                <PricingCard plan={plan} />
              </Box>
            ))}
          </Box>
        </Container>
      </Box> */}

      <PricingSection />

      {/* =====================================================
          CTA SECTION
      ===================================================== */}
      <Box
        sx={{
          width: "100%",

          minHeight: {
            xs: "300px",
            sm: "300px",
            md: "360px",
          },

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          textAlign: "center",

          background:
            "linear-gradient(180deg, #000000 0%, #080020 35%, #24165d 65%, #4935df 100%)",

          color: "#ffffff",

          px: 2,

          py: 8,
        }}
      >
        <Box
          sx={{
            width: "100%",

            maxWidth: "1000px",

            mx: "auto",
          }}
        >
          {/* LOGO */}

          <Box
            sx={{
              width: "75px",

              height: "30px",

              mx: "auto",

              mb: 5,

              display: "flex",

              alignItems: "center",

              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "80px",

                fontWeight: 700,

                color: "#ef7200",

                lineHeight: 1,
              }}
            >
              ◉
            </Typography>
          </Box>

          {/* CTA HEADING */}

          <Typography
            component="h2"
            sx={{
              fontSize: {
                xs: "20px",
                sm: "30px",
                md: "45px",
              },

              lineHeight: 1.15,

              fontWeight: 400,

              color: "#ffffff",

              mb: 2.5,
            }}
          >
            Automate Your Outreach
          </Typography>

          {/* CTA DESCRIPTION */}

          <Typography
            sx={{
              maxWidth: "850px",

              mx: "auto",

              fontSize: {
                xs: "17px",
                sm: "19px",
                md: "23px",
              },

              lineHeight: 1.5,

              color: "#d6d4e9",

              mb: 5,
            }}
          >
            Automate your entire outreach across Email, WhatsApp, and AI Calls,
            all from one dashboard.
          </Typography>

          {/* CTA BUTTON */}

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/book-a-demo")}
            sx={{
              minWidth: {
                xs: "170px",
                sm: "190px",
              },

              height: {
                xs: "46px",
                md: "52px",
              },

              borderRadius: "12px",

              backgroundColor: "#ffffff",

              color: "#000000",

              fontSize: {
                xs: "15px",
                md: "20px",
              },

              fontWeight: 500,

              textTransform: "none",

              boxShadow: "none",

              "&:hover": {
                backgroundColor: "#f5f5f5",

                boxShadow: "none",
              },
            }}
          >
            Book a Demo
          </Button>
        </Box>
      </Box>
      <FAQHome />
    </>
  );
}
