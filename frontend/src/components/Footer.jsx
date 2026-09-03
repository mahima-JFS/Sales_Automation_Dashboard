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
      {/* =================================================
          FOOTER
      ================================================= */}
      <Box
        component="footer"
        sx={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #eeeeee",
          pt: {
            xs: 5,
            sm: 6,
            md: 8,
          },
          pb: {
            xs: 3,
            sm: 4,
            md: 5,
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: {
              xs: 2,
              sm: 4,
              md: 6,
              lg: 8,
            },
          }}
        >
          {/* =================================================
              DESKTOP:
              LOGO | RESOURCES | LEGAL | CONTACT
              
              MOBILE:
              STACKED
          ================================================= */}
          <Grid
            container
            columnSpacing={{
              xs: 2,
              sm: 4,
              md: 5,
              lg: 7,
            }}
            rowSpacing={{
              xs: 5,
              sm: 5,
              md: 4,
            }}
            alignItems="flex-start"
          >
            {/* =================================================
                LOGO + BRAND
            ================================================= */}
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                    md: "column",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "flex-start",
                    md: "flex-start",
                  },
                  justifyContent: "flex-start",
                  textAlign: {
                    xs: "center",
                    sm: "left",
                    md: "left",
                  },
                }}
              >
                {/* LOGO */}
                <Box
                  component={RouterLink}
                  to="/"
                  sx={{
                    width: {
                      xs: 90,
                      sm: 105,
                      md: 115,
                    },
                    height: {
                      xs: 75,
                      sm: 85,
                      md: 90,
                    },

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    textDecoration: "none",

                    overflow: "hidden",

                    flexShrink: 0,

                    borderRadius: {
                      xs: "14px",
                      md: "18px",
                    },

                    backgroundColor: "#ffffff",

                    border: "1px solid rgba(79, 70, 229, 0.10)",

                    boxShadow:
                      "0 8px 25px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(79, 70, 229, 0.06)",

                    transition: "all 0.25s ease",

                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow:
                        "0 14px 32px rgba(15, 23, 42, 0.12), 0 4px 10px rgba(79, 70, 229, 0.10)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={LogoBlue}
                    alt="JFS Technologies"
                    sx={{
                      width: "92%",
                      height: "92%",
                      objectFit: "contain",
                      display: "block",
                    }}
                  />
                </Box>

                {/* BRAND DESCRIPTION */}
                {/* <Box
                  sx={{
                    mt: {
                      xs: 2,
                      sm: 0,
                      md: 2,
                    },

                    ml: {
                      xs: 0,
                      sm: 2.5,
                      md: 0,
                    },

                    maxWidth: {
                      xs: 320,
                      sm: 280,
                      md: 260,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#0f172a",

                      fontSize: {
                        xs: "16px",
                        sm: "17px",
                        md: "18px",
                      },

                      fontWeight: 700,

                      lineHeight: 1.3,

                      mb: 1,
                    }}
                  >
                    Sales Automation
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748b",

                      fontSize: {
                        xs: "13px",
                        sm: "13px",
                        md: "14px",
                      },

                      lineHeight: 1.65,

                      maxWidth: 270,
                    }}
                  >
                    Automate your outreach, manage leads, and grow your sales
                    from one powerful platform.
                  </Typography>
                </Box> */}
              </Box>
            </Grid>

            {/* =================================================
                RESOURCES
            ================================================= */}
            <Grid
              size={{
                xs: 6,
                sm: 4,
                md: 2.5,
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

            {/* =================================================
                LEGAL
            ================================================= */}
            <Grid
              size={{
                xs: 6,
                sm: 4,
                md: 2.5,
              }}
            >
              <FooterColumn title="Legal">
                <FooterLink to="/terms">Terms & Conditions</FooterLink>

                <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              </FooterColumn>
            </Grid>

            {/* =================================================
                CONTACT
            ================================================= */}
            <Grid
              size={{
                xs: 12,
                sm: 4,
                md: 4,
              }}
            >
              <FooterColumn title="Contact">
                {/* EMAIL */}
                <Link
                  href="mailto:contact@jfstechnologies.com"
                  underline="none"
                  sx={linkStyle}
                >
                  contact@jfstechnologies.com
                </Link>

                {/* PHONE */}
                <Link href="tel:+919876543210" underline="none" sx={linkStyle}>
                  +91 98765 43210
                </Link>

                {/* ADDRESS */}
                <Typography
                  sx={{
                    color: "#050505",

                    fontSize: {
                      xs: "13px",
                      sm: "13px",
                      md: "14px",
                    },

                    lineHeight: 1.65,

                    wordBreak: "break-word",

                    maxWidth: {
                      xs: 300,
                      md: 330,
                    },
                  }}
                >
                  Office No: 423,
                  <br />
                  Sterling Center,
                  <br />
                  MG Road, Camp,
                  <br />
                  Pune, Maharashtra 411001
                </Typography>

                {/* SOCIAL ICONS */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",

                    gap: 0.5,

                    mt: 1,
                  }}
                >
                  <SocialButton icon={<FacebookIcon />} href="#" />

                  <SocialButton icon={<InstagramIcon />} href="#" />

                  <SocialButton
                    icon={<AlternateEmailIcon />}
                    href="mailto:contact@jfstechnologies.com"
                  />
                </Box>
              </FooterColumn>
            </Grid>
          </Grid>

          {/* =================================================
              BOTTOM LINE
          ================================================= */}
          <Box
            sx={{
              mt: {
                xs: 5,
                sm: 6,
                md: 7,
              },

              pt: {
                xs: 2.5,
                md: 3,
              },

              borderTop: "1px solid #eeeeee",

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              flexDirection: {
                xs: "column",
                sm: "row",
              },

              gap: 1.5,

              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            <Typography
              sx={{
                color: "#94a3b8",

                fontSize: {
                  xs: "12px",
                  sm: "13px",
                },
              }}
            >
              © {new Date().getFullYear()} JFS Technologies. All rights
              reserved.
            </Typography>

            <Typography
              sx={{
                color: "#94a3b8",

                fontSize: {
                  xs: "12px",
                  sm: "13px",
                },
              }}
            >
              Built for modern sales teams.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* =================================================
          WHATSAPP BUTTON
      ================================================= */}
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
            md: "62px",
          },

          height: {
            xs: "50px",
            sm: "58px",
            md: "62px",
          },

          borderRadius: "50%",

          backgroundColor: "#00c853",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "#ffffff",

          textDecoration: "none",

          zIndex: 9999,

          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",

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
              xs: "29px",
              sm: "33px",
              md: "37px",
            },
          }}
        />
      </Box>

      {/* =================================================
          CHAT BUTTON
      ================================================= */}
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
            md: "62px",
          },

          height: {
            xs: "50px",
            sm: "58px",
            md: "62px",
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

          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.18)",

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
              md: "35px",
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
            xs: "15px",
            sm: "16px",
            md: "16px",
          },

          fontWeight: 600,

          mb: {
            xs: 1.8,
            md: 2,
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
            xs: 1.25,
            md: 1.5,
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
    sm: "13px",
    md: "14px",
  },

  fontWeight: 400,

  lineHeight: 1.45,

  wordBreak: "break-word",

  transition: "all 0.2s ease",

  "&:hover": {
    color: "#4F46E5",
    transform: "translateX(2px)",
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
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      sx={{
        color: "#64748b",

        width: {
          xs: 36,
          md: 38,
        },

        height: {
          xs: 36,
          md: 38,
        },

        borderRadius: "10px",

        transition: "all 0.2s ease",

        "&:hover": {
          backgroundColor: "#f5f5ff",
          color: "#4F46E5",
          transform: "translateY(-2px)",
        },
      }}
    >
      {icon}
    </IconButton>
  );
};

export default Footer;
