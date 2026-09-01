import React, { useState } from "react";
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
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

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
      "Marketing,Utility & Auth Templates",
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
      "Marketing ,Utility & Auth Templates",
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
        minHeight: "43px",
        py: "4px",
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
            xs: "16px",
            md: "18px",
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
        p: isPopular ? "0" : "10px",
        boxSizing: "border-box",

        background: isPopular
          ? "linear-gradient(135deg, #4e2bd9 0%, #f05a20 100%)"
          : "#f8f9fc",

        border: isPopular
          ? "none"
          : "1px solid #e5e8ee",
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

          minHeight: "570px",
          height: "100%",

          px: {
            xs: "20px",
            md: "24px",
          },

          pt: {
            xs: "24px",
            md: "25px",
          },

          pb: "28px",

          boxSizing: "border-box",

          boxShadow:
            "0 1px 8px rgba(0,0,0,0.05)",
        }}
      >
        {/* PLAN NAME */}

        <Typography
          sx={{
            textAlign: "center",
            color: "#f4510b",
            fontFamily: "Arial, sans-serif",
            fontSize: {
              xs: "21px",
              md: "24px",
            },
            fontWeight: 500,

            mb: plan.price
              ? "17px"
              : "35px",
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
                  fontFamily:
                    "Arial, sans-serif",

                  fontSize: {
                    xs: "44px",
                    md: "52px",
                  },

                  lineHeight: 1,

                  fontWeight: 700,

                  color: "#050505",

                  letterSpacing:
                    "-1.5px",
                }}
              >
                {plan.price}
              </Typography>

              <Typography
                sx={{
                  fontFamily:
                    "Arial, sans-serif",

                  fontSize: "19px",

                  color: "#52647a",
                }}
              >
                /mo
              </Typography>

              <Typography
                sx={{
                  fontFamily:
                    "Arial, sans-serif",

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

                  fontFamily:
                    "Arial, sans-serif",

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
            height: "64px",

            borderRadius: "11px",

            background: isPopular
              ? "#f4510b"
              : "#000",

            color: "#fff",

            textTransform: "none",

            fontFamily:
              "Arial, sans-serif",

            fontSize: {
              xs: "20px",
              md: "23px",
            },

            fontWeight: 400,

            mb: "28px",

            "&:hover": {
              background:
                isPopular
                  ? "#df4608"
                  : "#151515",
            },
          }}
        >
          {plan.button}
        </Button>

        {/* FEATURES */}

        <Box>
          {plan.features.map(
            (feature, index) => (
              <Feature
                key={index}
              >
                {feature}
              </Feature>
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

/* =========================================================
   MAIN PRICING SECTION
========================================================= */

export default function PricingSection() {
  const [billing, setBilling] =
    useState("monthly");

  return (
    <>
      {/* =====================================================
          SECTION 1
          PLANS THAT SCALE YOUR SALES
      ===================================================== */}

      <Box
        sx={{
          minHeight: "590px",

          position: "relative",

          overflow: "hidden",

          backgroundColor: "#fff",

          backgroundImage: `
            linear-gradient(
              #eeeeee 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              #eeeeee 1px,
              transparent 1px
            )
          `,

          backgroundSize: "23px 23px",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            px: {
              xs: 3,
              sm: 5,
              md: 8,
            },

            height: "100%",
          }}
        >
          {/* MAIN CONTENT */}

          <Box
            sx={{
              textAlign: "center",

              pt: {
                xs: 10,
                md: 11,
              },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontFamily:
                  "Arial, sans-serif",

                fontSize: {
                  xs: "42px",
                  sm: "54px",
                  md: "62px",
                },

                fontWeight: 400,

                lineHeight: 1.15,

                letterSpacing:
                  "-2.5px",

                color: "#050505",
              }}
            >
              Plans that{" "}

              <Box
                component="span"
                sx={{
                  color: "#4f39d9",
                  fontWeight: 700,
                }}
              >
                scale
              </Box>{" "}

              your sales
            </Typography>

            <Typography
              sx={{
                mt: 4,

                color: "#58709b",

                fontFamily:
                  "Arial, sans-serif",

                fontSize: {
                  xs: "17px",
                  md: "24px",
                },

                fontWeight: 400,

                lineHeight: 1.5,
              }}
            >
              Automate outreach across
              WhatsApp, Email, and AI
              Voice calls — all from one
              powerful AI sales platform.
            </Typography>

            {/* GET STARTED */}

            <Button
              variant="contained"
              disableElevation
              endIcon={
                <ArrowOutwardIcon />
              }
              sx={{
                mt: 8,

                width: "273px",

                height: "69px",

                borderRadius: "12px",

                backgroundColor:
                  "#f4510b",

                color: "#fff",

                textTransform: "none",

                fontFamily:
                  "Arial, sans-serif",

                fontSize: "24px",

                fontWeight: 600,

                "&:hover": {
                  backgroundColor:
                    "#df4607",
                },

                "& .MuiButton-endIcon":
                  {
                    marginLeft:
                      "12px",
                  },

                "& svg": {
                  fontSize: "27px",
                },
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* FEATURE ROW */}

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            justifyContent="space-between"
            alignItems={{
              xs: "flex-start",
              sm: "center",
            }}
            spacing={{
              xs: 3,
              sm: 2,
            }}
            sx={{
              mt: {
                xs: 9,
                md: 12,
              },

              px: {
                xs: 0,
                md: 1,
              },
            }}
          >
            {features.map(
              (feature) => (
                <Stack
                  key={feature}
                  direction="row"
                  alignItems="center"
                  spacing={1.4}
                >
                  <Box
                    sx={{
                      width: "31px",

                      height: "31px",

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      color: "#5139dc",

                      flexShrink: 0,
                    }}
                  >
                    <AutoAwesomeIcon
                      sx={{
                        fontSize:
                          "30px",

                        strokeWidth:
                          1.5,
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      color: "#111",

                      fontFamily:
                        "Arial, sans-serif",

                      fontSize: {
                        xs: "18px",
                        md: "23px",
                      },

                      fontWeight: 400,

                      whiteSpace: {
                        sm: "nowrap",
                      },
                    }}
                  >
                    {feature}
                  </Typography>
                </Stack>
              )
            )}
          </Stack>
        </Container>
      </Box>

      {/* =====================================================
          SECTION 2
          PRICING
      ===================================================== */}

      <Box
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

            maxWidth: "1720px",

            mx: "auto",

            px: {
              xs: "18px",
              md: "24px",
            },

            boxSizing: "border-box",
          }}
        >
          {/* PRICING BADGE */}

          <Box
            sx={{
              display: "flex",

              justifyContent:
                "center",

              mb: "30px",
            }}
          >
            <Box
              sx={{
                height: "59px",

                minWidth: "177px",

                px: "20px",

                borderRadius: "40px",

                border:
                  "1.5px solid #f4510b",

                background:
                  "#fff0e9",

                display: "flex",

                alignItems:
                  "center",

                justifyContent:
                  "center",

                gap: "14px",
              }}
            >
              <Box
                sx={{
                  width: "31px",

                  height: "31px",

                  borderRadius: "50%",

                  background:
                    "#f8bc35",

                  border:
                    "2px solid #f2a71c",

                  display: "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "center",
                }}
              >
                <LocalOfferIcon
                  sx={{
                    color:
                      "#e89b15",

                    fontSize:
                      "18px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily:
                    "Arial, sans-serif",

                  fontSize: "20px",

                  fontWeight: 700,

                  color: "#111",
                }}
              >
                PRICING
              </Typography>
            </Box>
          </Box>

          {/* HEADING */}

          <Typography
            component="h2"
            sx={{
              textAlign: "center",

              fontFamily:
                "Arial, sans-serif",

              fontSize: {
                xs: "42px",
                sm: "50px",
                md: "56px",
              },

              lineHeight: 1.15,

              fontWeight: 400,

              color: "#050505",

              letterSpacing:
                "-2px",
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

          {/* DESCRIPTION */}

          <Typography
            sx={{
              maxWidth: "950px",

              mx: "auto",

              mt: "30px",

              textAlign: "center",

              color: "#38577c",

              fontFamily:
                "Arial, sans-serif",

              fontSize: {
                xs: "17px",
                md: "23px",
              },

              lineHeight: 1.5,
            }}
          >
            Replace separate subscriptions
            for Email, WhatsApp, and Callers.
            Consolidate your entire outreach
            stack into one system and track
            your exact calling costs in
            real-time.
          </Typography>

          {/* =================================================
              BILLING TOGGLE
          ================================================= */}

          <Box
            sx={{
              display: "flex",

              justifyContent:
                "flex-end",

              alignItems:
                "flex-end",

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
                  textAlign:
                    "right",

                  color: "#5138dc",

                  fontFamily:
                    "Arial, sans-serif",

                  fontSize: "20px",

                  mb: "57px",

                  mr: "20px",

                  position:
                    "relative",

                  "&::after": {
                    content: '""',

                    position:
                      "absolute",

                    right: "52px",

                    top: "27px",

                    width: "2px",

                    height: "48px",

                    background:
                      "#6047e1",

                    transform:
                      "rotate(-12deg)",

                    borderRadius:
                      "2px",
                  },
                }}
              >
                Save 29% or more
              </Typography>

              <ToggleButtonGroup
                exclusive
                value={billing}
                onChange={(
                  event,
                  value
                ) => {
                  if (value) {
                    setBilling(value);
                  }
                }}
                sx={{
                  height: "69px",

                  background:
                    "#29976c",

                  borderRadius:
                    "16px",

                  padding: "6px",

                  "& .MuiToggleButtonGroup-grouped":
                    {
                      border:
                        "none !important",
                    },
                }}
              >
                {[
                  "monthly",
                  "quarterly",
                  "annually",
                ].map(
                  (item) => (
                    <ToggleButton
                      key={item}
                      value={item}
                      sx={{
                        px: {
                          xs: "16px",
                          md: "26px",
                        },

                        minWidth:
                          "110px",

                        borderRadius:
                          "13px !important",

                        color: "#fff",

                        fontFamily:
                          "Arial, sans-serif",

                        fontSize:
                          "19px",

                        fontWeight: 600,

                        textTransform:
                          "capitalize",

                        "&.Mui-selected":
                          {
                            background:
                              "#fff",

                            color:
                              "#111",
                          },

                        "&.Mui-selected:hover":
                          {
                            background:
                              "#fff",
                          },
                      }}
                    >
                      {item}
                    </ToggleButton>
                  )
                )}
              </ToggleButtonGroup>
            </Box>
          </Box>

          {/* =================================================
              PRICING CARDS

              IMPORTANT:
              CSS GRID = 3 CARDS PER ROW
          ================================================= */}

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
                <PricingCard
                  plan={plan}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>





      
    </>
  );
}