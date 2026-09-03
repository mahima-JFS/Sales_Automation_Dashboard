import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

import { Link as RouterLink } from "react-router-dom";
import LogoBlue from "../assets/images/JFSpx.png";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          pt: {
            xs: 4,
            sm: 5,
            md: 7,
          },

          pb: {
            xs: 2,
            sm: 2,
            md: 3,
          },
          px: {
            xs: 2,
            sm: 2,
            md: 3,
          },
        }}
      >
        {/* LOGO + BRAND */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            flexDirection: {
              xs: "column",
              sm: "row",
            },

            justifyContent: {
              xs: "center",
              sm: "flex-start",
            },

            textAlign: {
              xs: "center",
              sm: "left",
            },

            gap: {
              xs: 2,
              sm: 2.5,
            },
          }}
        >
          {/* ACTUAL LOGO */}

          <Box
            component={RouterLink}
            to="/"
            sx={{
              width: {
                xs: 58,
                sm: 66,
                md: 76,
              },

              height: {
                xs: 58,
                sm: 66,
                md: 76,
              },

              borderRadius: {
                xs: "16px",
                md: "20px",
              },

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              // background: "linear-gradient(135deg, #F8FAFF 0%, #EEF2FF 100%)",
              bgcolor: "#FFF7ED",

              border: "1px solid rgba(79, 70, 229, 0.12)",

              boxShadow: "0 10px 30px rgba(79, 70, 229, 0.12)",

              textDecoration: "none",

              overflow: "hidden",

              flexShrink: 0,

              transition: "all 0.25s ease",

              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 14px 35px rgba(79, 70, 229, 0.2)",
              },
            }}
          >
            <Box
              component="img"
              src={LogoBlue}
              alt="Sales Automation"
              sx={{
                width: "75%",
                height: "75%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>

          {/* BRAND CONTENT */}

          <Box>
            <Typography
              component="div"
              sx={{
                fontSize: {
                  xs: "25px",
                  sm: "29px",
                  md: "34px",
                },

                fontWeight: 700,

                letterSpacing: "-1px",

                lineHeight: 1.15,

                color: "#0F172A",
              }}
            >
              Sales{" "}
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                }}
              >
                Automation
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 0.8,

                fontSize: {
                  xs: "14px",
                  md: "16px",
                },

                lineHeight: 1.5,

                color: "#64748B",

                maxWidth: "550px",
              }}
            >
              AI-powered automation to help your business connect, engage, and
              convert more customers.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* =================================================
    FOOTER NAVIGATION
================================================= */}

      <Box
        sx={{
          pt: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          pb: {
            xs: 4,
            sm: 5,
            md: 6,
          },
          px: {
            xs: 2,
            sm: 2,
            md: 3,
          },
        }}
      >
        <Grid
          container
          rowSpacing={{
            xs: 4,
            sm: 5,
            md: 3,
          }}
          columnSpacing={{
            xs: 2,
            sm: 4,
            md: 3,
          }}
        >
          {/* RESOURCES */}

          <Grid
            size={{
              xs: 6,
              sm: 6,
              md: 3,
            }}
          >
            <FooterColumn title="Resources">
              <FooterLink to="/features">Features</FooterLink>

              <FooterLink to="/comparisons">Comparisons</FooterLink>

              <FooterLink to="/pricing">Pricing</FooterLink>

              <FooterLink to="/blog">Blog</FooterLink>

              <FooterLink to="/contact">Contact Us</FooterLink>
            </FooterColumn>
          </Grid>

          {/* LEGAL */}

          <Grid
            size={{
              xs: 6,
              sm: 6,
              md: 3,
            }}
          >
            <FooterColumn title="Legal">
              <FooterLink to="/terms">Terms & Conditions</FooterLink>

              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            </FooterColumn>
          </Grid>

          {/* SITE */}

          <Grid
            size={{
              xs: 6,
              sm: 6,
              md: 3,
            }}
          >
            <FooterColumn title="Site">
              <Link href="#top" underline="none" sx={linkStyle}>
                Back to Top
              </Link>
            </FooterColumn>
          </Grid>

          {/* CONTACT */}

          <Grid
            size={{
              xs: 6,
              sm: 6,
              md: 3,
            }}
          >
            <FooterColumn title="Contact">
              <Link
                href="mailto:contact@jfshome.com"
                underline="none"
                sx={linkStyle}
              >
                contact@jfstechnologies.com
              </Link>

              <Link href="tel:+919876543210" underline="none" sx={linkStyle}>
                +91 98765 43210
              </Link>

              <Typography
                sx={{
                  color: "#050505",

                  fontSize: {
                    xs: "13px",
                    sm: "15px",
                    md: "17px",
                  },

                  lineHeight: 1.55,

                  wordBreak: "break-word",

                  maxWidth: "100%",
                }}
              >
                Office no: 423,
                <br />
                Sterling Center,
                <br />
                MG Road, Camp,
                <br />
                Pune, Maharashtra 411001
              </Typography>
            </FooterColumn>
          </Grid>
        </Grid>
      </Box>
      <Box
        component="a"
        href="https://wa.me/919213015559"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        sx={{
          position: "fixed",

          left: {
            xs: "12px",
            sm: "18px",
            md: "22px",
          },

          bottom: {
            xs: "12px",
            sm: "18px",
            md: "20px",
          },

          width: {
            xs: "50px",
            sm: "58px",
            md: "68px",
          },

          height: {
            xs: "50px",
            sm: "58px",
            md: "68px",
          },

          borderRadius: "50%",

          backgroundColor: "#00c853",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "#ffffff",

          textDecoration: "none",

          zIndex: 9999,

          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.18)",

          transition: "all 0.25s ease",

          "&:hover": {
            transform: "scale(1.08)",
            backgroundColor: "#00b84a",
          },
        }}
      >
        <WhatsAppIcon
          sx={{
            fontSize: {
              xs: "30px",
              sm: "34px",
              md: "40px",
            },
          }}
        />
      </Box>

      <Box
        role="button"
        tabIndex={0}
        aria-label="Open chat"
        sx={{
          position: "fixed",

          right: {
            xs: "12px",
            sm: "18px",
            md: "22px",
          },

          bottom: {
            xs: "12px",
            sm: "18px",
            md: "20px",
          },

          width: {
            xs: "50px",
            sm: "58px",
            md: "68px",
          },

          height: {
            xs: "50px",
            sm: "58px",
            md: "68px",
          },

          borderRadius: {
            xs: "12px",
            md: "15px",
          },

          backgroundColor: "#10b981",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "#001b20",

          zIndex: 9999,

          cursor: "pointer",

          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.18)",

          transition: "all 0.25s ease",

          "&:hover": {
            transform: "scale(1.08)",
            backgroundColor: "#059669",
          },
        }}
      >
        <ForumOutlinedIcon
          sx={{
            fontSize: {
              xs: "27px",
              sm: "30px",
              md: "36px",
            },
          }}
        />
      </Box>
    </>
  );
};

/* =========================================================
   COMMON FOOTER COLUMN
========================================================= */

const FooterColumn = ({ title, children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
      }}
    >
      <Typography
        sx={{
          color: "#718096",

          fontSize: {
            xs: "16px",
            md: "17px",
          },

          fontWeight: 600,

          mb: {
            xs: 2,
            md: 2.5,
          },
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          gap: {
            xs: 1.5,
            md: 1.8,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

/* =========================================================
   COMMON LINK STYLE
========================================================= */

const linkStyle = {
  width: "fit-content",
  maxWidth: "100%",

  color: "#050505",

  fontSize: {
    xs: "13px",
    sm: "15px",
    md: "17px",
  },

  fontWeight: 400,

  lineHeight: 1.4,

  wordBreak: "break-word",

  transition: "color 0.2s ease",

  "&:hover": {
    color: "#4b36df",
  },
};

/* =========================================================
   REUSABLE FOOTER LINK
========================================================= */

const FooterLink = ({ children, to }) => {
  return (
    <Link component={RouterLink} to={to} underline="none" sx={linkStyle}>
      {children}
    </Link>
  );
};

/* =========================================================
   SOCIAL BUTTON
========================================================= */

const SocialButton = ({ icon, href }) => {
  return (
    <IconButton
      component="a"
      href={href}
      sx={{
        color: "#050505",

        width: {
          xs: 40,
          md: 44,
        },

        height: {
          xs: 40,
          md: 44,
        },

        "&:hover": {
          backgroundColor: "#f2f2f2",
        },
      }}
    >
      {icon}
    </IconButton>
  );
};

export default Footer;
