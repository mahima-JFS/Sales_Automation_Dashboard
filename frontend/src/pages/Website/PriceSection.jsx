import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

/* =====================================================
   CHECK ICON
===================================================== */

const CheckIcon = () => (
  <Box
    component="svg"
    viewBox="0 0 20 20"
    sx={{ width: 14, height: 14, flexShrink: 0, mt: "3px" }}
  >
    <path
      d="M4 10.5L8 14.5L16 5.5"
      fill="none"
      stroke="#22c55e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Box>
);

/* =====================================================
   PLAN DATA
===================================================== */

const plans = [
  {
    tag: "Basic",
    price: "₹3,000",
    priceNote: "Includes 100 Shared Credits",
    cta: "Get Started",
    ctaVariant: "dark",
    features: [
      "Audience Segments",
      "Campaign Sequences",
      "2 AI Calling Languages and 4 Voices",
      "WhatsApp Webhooks",
      "AI WhatsApp Auto-Reply",
      "Email Accounts",
      "Unlimited Lead Uploads",
      "Call Recording & Storage",
      "Standard support",
    ],
  },
  {
    tag: "Advance",
    badge: "POPULAR",
    highlighted: true,
    price: "₹6,000",
    priceNote: "Includes 250 Shared Credits",
    cta: "Get Started",
    ctaVariant: "orange",
    features: [
      "Audience Segments",
      "Advanced Sequences",
      "4 AI Calling Languages and 8 Voices",
      "AI Smart Bookings",
      "AI WhatsApp Auto-Reply",
      "Automated Callbacks",
      "Instant Lead Sync",
      "WhatsApp Webhooks",
      "Email Outreach",
      "Call Recording & Storage",
      "Shopify Integration",
      "AI Content Creation",
    ],
  },
  {
    tag: "Pro",
    price: "₹12,000",
    priceNote: "Includes 500 Shared Credits",
    cta: "Get Started",
    ctaVariant: "dark",
    features: [
      "Audience Segments",
      "Advanced Sequences",
      "10 AI Calling Languages and 20 Voices",
      "AI Smart Bookings",
      "Automated Callbacks",
      "AI WhatsApp Auto-Reply",
      "Instant Lead Sync",
      "WhatsApp API Access",
      "Email Outreach",
      "3000 Call Recording Minutes",
      "Priority support",
      "Shopify Integration",
      "AI Content Creation",
    ],
  },
  {
    tag: "Enterprise",
    price: null,
    cta: "Let's Talk",
    ctaVariant: "dark",
    features: [
      "Unlimited Leads Upload",
      "10 Email Accounts",
      "Send UP TO 500 Emails/Day",
      "WhatsApp Conversation as per your Meta or CAPS tier",
      "Marketing, Utility & Auth Templates",
      "AI Calling",
      "10 Calling Languages",
      "20 AI Voices",
      "Campaign Sequences",
      "Single User",
      "Advanced Analytics",
      "3000 Mins of Call Recording",
      "Leads Automations",
    ],
  },
  {
    tag: "WhatsApp only Advance",
    price: "₹1,999",
    cta: "Get Started",
    ctaVariant: "dark",
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
    tag: "WhatsApp Only Pro",
    price: "₹2,999",
    cta: "Get Started",
    ctaVariant: "dark",
    features: [
      "Unlimited Segments",
      "Unlimited Advance Sequence",
      "Broadcast",
      "Abandoned Cart Notifications",
      "250/day (Meta Tier Based)",
      "Auto WhatsBot Reply",
    ],
  },
];

const billingOptions = ["Monthly", "Quarterly", "Annually"];

/* =====================================================
   PLAN CARD
===================================================== */

const PlanCard = ({ plan }) => {
  const cardInner = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#ffffff",
        borderRadius: "14px",
        border: plan.highlighted ? "none" : "1px solid #e6e7ec",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {plan.badge && (
        <Box
          sx={{
            width: "100%",
            py: 0.8,
            textAlign: "center",
            background: "linear-gradient(90deg, #7c3aed 0%, #e11d48 100%)",
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "1px",
              color: "#ffffff",
            }}
          >
            ★ {plan.badge}
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          px: 2.5,
          py: 2.5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 12.5,
            fontWeight: 700,
            color: "#f35b0b",
            mb: 0.8,
          }}
        >
          {plan.tag}
        </Typography>

        {plan.price ? (
          <>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 26,
                fontWeight: 700,
                color: "#151b28",
              }}
            >
              {plan.price}
              <Box
                component="span"
                sx={{ fontSize: 13, fontWeight: 500, color: "#8a8f9c" }}
              >
                {" "}
                /mo <sup style={{ fontSize: 9 }}>+GST</sup>
              </Box>
            </Typography>

            {plan.priceNote && (
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 11,
                  color: "#9aa0ab",
                  mt: 0.3,
                  mb: 1.5,
                }}
              >
                {plan.priceNote}
              </Typography>
            )}
          </>
        ) : (
          <Box sx={{ height: 26 + 16 + 12, mb: 1.5 }} />
        )}

        <Button
          fullWidth
          disableElevation
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: 13.5,
            borderRadius: "10px",
            py: 1,
            mb: 2.5,
            bgcolor: plan.ctaVariant === "orange" ? "#f35b0b" : "#12141c",
            color: "#ffffff",
            "&:hover": {
              bgcolor: plan.ctaVariant === "orange" ? "#d94f09" : "#000000",
            },
          }}
        >
          {plan.cta}
        </Button>

        <Box
          component="ul"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0.9,
          }}
        >
          {plan.features.map((feature) => (
            <Box
              key={feature}
              component="li"
              sx={{ display: "flex", alignItems: "flex-start", gap: 0.8 }}
            >
              <CheckIcon />
              <Typography
                sx={{ fontSize: 12, lineHeight: 1.5, color: "#4b5160" }}
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        borderRadius: "16px",
        p: plan.highlighted ? "2px" : 0,
        background: plan.highlighted
          ? "linear-gradient(160deg, #7c3aed 0%, #f35b0b 100%)"
          : "transparent",
        boxShadow: plan.highlighted
          ? "0 20px 45px rgba(124, 58, 237, 0.18)"
          : "0 10px 30px rgba(30, 20, 60, 0.05)",
      }}
    >
      {cardInner}
    </Box>
  );
};

/* =====================================================
   COMPONENT
===================================================== */

const PricingSection = () => {
  const [billing, setBilling] = useState("Monthly");

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#ffffff",
        py: { xs: 2, md: 3 },
        px: { xs: 2, sm: 2 },
      }}
    >
      {/* =====================================================
          BADGE
      ===================================================== */}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.6,
            px: 1.8,
            py: 0.5,
            borderRadius: "999px",
            bgcolor: "#fdece0",
          }}
        >
          <Typography sx={{ fontSize: 12 }}>🏷️</Typography>
          <Typography sx={{ fontSize: 12, fontWeight: 600, color: "#f35b0b" }}>
            PRICING
          </Typography>
        </Box>
      </Box>

      {/* =====================================================
          HEADING + DESCRIPTION
      ===================================================== */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 1.5,
        }}
      >
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: 24, sm: 28, md: 30 },
            m: 0,
          }}
        >
          <Box component="span" sx={{ color: "#4F46E5" }}>
            Start for Free,
          </Box>{" "}
          <Box component="span" sx={{ color: "#151b28" }}>
            Scale on Demand
          </Box>
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: 13, sm: 14 },
            lineHeight: 1.6,
            color: "#6b7280",
            maxWidth: 560,
            mt: 1,
          }}
        >
          Replace separate subscriptions for{" "}
          <Box component="span" sx={{ color: "#4F46E5" }}>
            Email, WhatsApp, and Callers
          </Box>
          . Consolidate your entire outreach stack into{" "}
          <Box component="span" sx={{ color: "#4F46E5" }}>
            one system
          </Box>{" "}
          and track your exact calling costs in{" "}
          <Box component="span" sx={{ color: "#4F46E5" }}>
            real-time
          </Box>
          .
        </Typography>
      </Box>

      {/* =====================================================
          BILLING TOGGLE
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Typography
          sx={{
            position: { md: "absolute" },
            top: { md: -22 },
            right: { md: "calc(50% - 260px)" },
            fontSize: 11,
            fontWeight: 600,
            color: "#151b28",
          }}
        >
          Save 20% or more ↘
        </Typography>

        <Box
          sx={{
            display: "inline-flex",
            border: "1px solid #16a34a",
            borderRadius: "999px",
            p: 0.4,
            gap: 0.4,
          }}
        >
          {billingOptions.map((option) => (
            <Box
              key={option}
              onClick={() => setBilling(option)}
              sx={{
                px: 2,
                py: 0.7,
                borderRadius: "999px",
                fontSize: 12.5,
                fontWeight: 600,
                cursor: "pointer",
                bgcolor: billing === option ? "#12141c" : "transparent",
                color: billing === option ? "#ffffff" : "#4b5160",
                transition: "background-color 0.2s ease, color 0.2s ease",
              }}
            >
              {option}
            </Box>
          ))}
        </Box>
      </Box>

      {/* =====================================================
          PLAN CARDS GRID
      ===================================================== */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(3, minmax(0, 1fr))",
          },
          gap: 3,
          maxWidth: 1200,
          mx: "auto",
          mt: 5,
        }}
      >
        {plans.map((plan) => (
          <PlanCard key={plan.tag} plan={plan} />
        ))}
      </Box>
    </Box>
  );
};

export default PricingSection;
