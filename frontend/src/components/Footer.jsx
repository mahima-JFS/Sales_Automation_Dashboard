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

const Footer = () => {
  return (
    <>
      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Box
        component="footer"
        sx={{
          width: "100%",
          backgroundColor: "#ffffff",
          color: "#000000",
          borderTop: "1px solid #e5e7eb",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: {
              xs: 3,
              sm: 4,
              md: 5,
              lg: 6,
            },
          }}
        >
          {/* =================================================
              FOOTER TOP / BRAND
          ================================================= */}

          <Box
            sx={{
              pt: {
                xs: 5,
                sm: 6,
                md: 7,
              },

              pb: {
                xs: 5,
                sm: 6,
                md: 7,
              },
            }}
          >
            {/* LOGO + BRAND NAME */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: {
                  xs: 4,
                  md: 5,
                },
              }}
            >
              {/* RAPID SALES LOGO */}

              <Box
                sx={{
                  width: {
                    xs: "85px",
                    sm: "95px",
                    md: "105px",
                  },

                  height: {
                    xs: "65px",
                    sm: "70px",
                    md: "78px",
                  },

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "72px",
                    height: "72px",
                  }}
                >
                  {/* Orange outer shape */}

                  <Box
                    sx={{
                      position: "absolute",
                      width: "55px",
                      height: "78px",
                      left: "8px",
                      top: "-2px",
                      borderRadius: "55% 45% 45% 55%",
                      backgroundColor: "#e86b00",
                      transform: "rotate(-12deg)",
                    }}
                  />

                  {/* White inner shape */}

                  <Box
                    sx={{
                      position: "absolute",
                      width: "35px",
                      height: "54px",
                      left: "25px",
                      top: "7px",
                      backgroundColor: "#ffffff",
                      borderRadius: "50%",
                      transform: "rotate(-12deg)",
                    }}
                  />
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: {
                    xs: "26px",
                    sm: "28px",
                    md: "30px",
                  },

                  fontWeight: 400,
                  color: "#111111",
                  whiteSpace: "nowrap",
                }}
              >
                JFS Technologies
              </Typography>
            </Box>

            {/* =================================================
                MAIN TAGLINE
            ================================================= */}

            <Typography
              component="h2"
              sx={{
                maxWidth: "850px",

                fontSize: {
                  xs: "20px",
                  sm: "30px",
                  md: "38px",
                  lg: "42px",
                },

                lineHeight: 1.2,
                fontWeight: 400,
                color: "#050505",

                mb: 0,
              }}
            >
              The platform to build AI agents
              <br />
              that sell like humans
            </Typography>
          </Box>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#d9dce1",
            }}
          />

          {/* =================================================
              FOOTER LINKS
          ================================================= */}

          <Box
            sx={{
              py: {
                xs: 5,
                sm: 6,
                md: 6,
              },
            }}
          >
            <Grid
              container
              spacing={{
                xs: 4,
                sm: 5,
                md: 3,
              }}
            >
              {/* =================================================
                  RESOURCES
              ================================================= */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3,
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
                    mb: 2.5,
                  }}
                >
                  Resources
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.8,
                  }}
                >
                  <FooterLink to="/features">Features</FooterLink>

                  <FooterLink to="/comparisons">Comparisons</FooterLink>

                  <FooterLink to="/pricing">Pricing</FooterLink>

                  <FooterLink to="/blog">Blog</FooterLink>

                  <FooterLink to="/contact-us">Contact Us</FooterLink>
                </Box>
              </Grid>

              {/* =================================================
                  LEGAL
              ================================================= */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3,
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
                    mb: 2.5,
                  }}
                >
                  Legal
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.8,
                  }}
                >
                  <FooterLink to="/terms">Terms & Conditions</FooterLink>

                  <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
                </Box>
              </Grid>

              {/* =================================================
                  SITE
              ================================================= */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3,
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
                    mb: 2.5,
                  }}
                >
                  Site
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.8,
                  }}
                >
                  <Link
                    href="#top"
                    underline="none"
                    sx={{
                      color: "#050505",
                      fontSize: {
                        xs: "16px",
                        md: "17px",
                      },
                      cursor: "pointer",

                      "&:hover": {
                        color: "#4b36df",
                      },
                    }}
                  >
                    Back to Top
                  </Link>
                </Box>
              </Grid>

              {/* =================================================
                  CONTACT
              ================================================= */}

              <Grid
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3,
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
                    mb: 2.5,
                  }}
                >
                  Contact
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.8,
                  }}
                >
                  <Link
                    href="mailto:jsf@gmail.com"
                    underline="none"
                    sx={{
                      color: "#050505",
                      fontSize: {
                        xs: "16px",
                        md: "17px",
                      },

                      "&:hover": {
                        color: "#4b36df",
                      },
                    }}
                  >
                    contact@jfshome.com
                  </Link>

                  <Link
                    href="tel:+919213015559"
                    underline="none"
                    sx={{
                      color: "#050505",
                      fontSize: {
                        xs: "16px",
                        md: "17px",
                      },

                      "&:hover": {
                        color: "#4b36df",
                      },
                    }}
                  >
                    +91 98765 43210
                  </Link>

                  <Typography
                    sx={{
                      maxWidth: "370px",
                      color: "#050505",
                      fontSize: {
                        xs: "16px",
                        md: "17px",
                      },
                      lineHeight: 1.55,
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
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* =================================================
              BOTTOM FOOTER
          ================================================= */}

          <Box
            sx={{
              pb: {
                xs: 3,
                md: 4,
              },

              display: "flex",

              flexDirection: {
                xs: "column",
                md: "row",
              },

              alignItems: {
                xs: "flex-start",
                md: "center",
              },

              justifyContent: "space-between",

              gap: 3,
            }}
          >
            {/* COPYRIGHT */}

            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },

                color: "#111111",
              }}
            >
              © 2026 JFS Technologies
            </Typography>

            {/* SOCIAL ICONS */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <IconButton
                component="a"
                href="#"
                sx={{
                  color: "#050505",

                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                component="a"
                href="#"
                sx={{
                  color: "#050505",

                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                component="a"
                href="#"
                sx={{
                  color: "#050505",

                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                  },
                }}
              >
                <AlternateEmailIcon />
              </IconButton>
            </Box>

            {/* POWERED BY */}

            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },

                color: "#111111",
              }}
            >
              Powered by LIT AI Labs
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          FLOATING WHATSAPP BUTTON
      ===================================================== */}

      <Box
        component="a"
        href="https://wa.me/919213015559"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",

          left: {
            xs: "18px",
            md: "22px",
          },

          bottom: {
            xs: "18px",
            md: "20px",
          },

          width: {
            xs: "58px",
            md: "68px",
          },

          height: {
            xs: "58px",
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
              xs: "34px",
              md: "40px",
            },
          }}
        />
      </Box>

      {/* =====================================================
          FLOATING CHAT BUTTON
      ===================================================== */}

      <Box
        sx={{
          position: "fixed",

          right: {
            xs: "18px",
            md: "22px",
          },

          bottom: {
            xs: "18px",
            md: "20px",
          },

          width: {
            xs: "58px",
            md: "68px",
          },

          height: {
            xs: "58px",
            md: "68px",
          },

          borderRadius: "15px",

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
              xs: "30px",
              md: "36px",
            },
          }}
        />
      </Box>
    </>
  );
};

/* =========================================================
   REUSABLE FOOTER LINK
========================================================= */

const FooterLink = ({ children, to }) => {
  return (
    <Link
      component={RouterLink}
      to={to}
      underline="none"
      sx={{
        width: "fit-content",

        color: "#050505",

        fontSize: {
          xs: "16px",
          md: "17px",
        },

        fontWeight: 400,

        transition: "color 0.2s ease",

        "&:hover": {
          color: "#4b36df",
        },
      }}
    >
      {children}
    </Link>
  );
};

export default Footer;
