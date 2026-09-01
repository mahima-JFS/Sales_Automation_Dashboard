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
            width: "100%",
            px: {
              xs: 2,
              sm: 3,
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
                xs: 4,
                sm: 5,
                md: 7,
              },

              pb: {
                xs: 4,
                sm: 5,
                md: 7,
              },
            }}
          >
            {/* LOGO + BRAND NAME */}

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
                  xs: 0.5,
                  sm: 1.5,
                },

                mb: {
                  xs: 3,
                  md: 5,
                },
              }}
            >
              {/* LOGO */}

              <Box
                sx={{
                  width: {
                    xs: "70px",
                    sm: "90px",
                    md: "105px",
                  },

                  height: {
                    xs: "60px",
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

                    width: {
                      xs: "60px",
                      md: "72px",
                    },

                    height: {
                      xs: "60px",
                      md: "72px",
                    },
                  }}
                >
                  {/* ORANGE SHAPE */}

                  <Box
                    sx={{
                      position: "absolute",

                      width: {
                        xs: "46px",
                        md: "55px",
                      },

                      height: {
                        xs: "65px",
                        md: "78px",
                      },

                      left: {
                        xs: "7px",
                        md: "8px",
                      },

                      top: "-2px",

                      borderRadius: "55% 45% 45% 55%",

                      backgroundColor: "#e86b00",

                      transform: "rotate(-12deg)",
                    }}
                  />

                  {/* WHITE INNER SHAPE */}

                  <Box
                    sx={{
                      position: "absolute",

                      width: {
                        xs: "29px",
                        md: "35px",
                      },

                      height: {
                        xs: "45px",
                        md: "54px",
                      },

                      left: {
                        xs: "21px",
                        md: "25px",
                      },

                      top: {
                        xs: "6px",
                        md: "7px",
                      },

                      backgroundColor: "#ffffff",

                      borderRadius: "50%",

                      transform: "rotate(-12deg)",
                    }}
                  />
                </Box>
              </Box>

              {/* BRAND NAME */}

              <Typography
                sx={{
                  fontSize: {
                    xs: "24px",
                    sm: "27px",
                    md: "30px",
                  },

                  fontWeight: 400,

                  color: "#111111",

                  whiteSpace: "normal",

                  lineHeight: 1.2,

                  wordBreak: "break-word",
                }}
              >
                JFS Technologies
              </Typography>
            </Box>

            {/* MAIN TAGLINE */}

            <Typography
              component="h2"
              sx={{
                maxWidth: "850px",

                textAlign: {
                  xs: "center",
                  sm: "left",
                },

                fontSize: {
                  xs: "25px",
                  sm: "28px",
                  md: "32px",
                  lg: "35px",
                },

                lineHeight: {
                  xs: 1.25,
                  md: 1.2,
                },

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

          {/* DIVIDER */}

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
                xs: 4,
                sm: 5,
                md: 6,
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

                  <FooterLink to="/contact-us">Contact Us</FooterLink>
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
                    contact@jfshome.com
                  </Link>

                  <Link
                    href="tel:+919876543210"
                    underline="none"
                    sx={linkStyle}
                  >
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

          {/* =================================================
              BOTTOM FOOTER
          ================================================= */}

          <Box
            sx={{
              borderTop: "1px solid #e5e7eb",

              py: {
                xs: 2.5,
                md: 3,
              },

              display: "flex",

              flexDirection: {
                xs: "column",
                sm: "row",
              },

              alignItems: "center",

              justifyContent: {
                xs: "center",
                sm: "space-between",
              },

              textAlign: {
                xs: "center",
                sm: "left",
              },

              gap: {
                xs: 1.5,
                sm: 1,
              },
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
                justifyContent: "center",
                gap: 0.5,
              }}
            >
              <SocialButton icon={<FacebookIcon />} href="#" />

              <SocialButton icon={<InstagramIcon />} href="#" />

              <SocialButton
                icon={<AlternateEmailIcon />}
                href="mailto:contact@jfshome.com"
              />
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

      {/* =====================================================
          FLOATING CHAT BUTTON
      ===================================================== */}

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
