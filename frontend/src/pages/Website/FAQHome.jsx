import React, { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

const FAQHome = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "",
    useCase: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Message sent successfully!");
  };

  const faqData = [
    {
      question: "What is Rapid Sales?",
      answer:
        "Rapid Sales is a smart AI sales assistant that automates multi-channel outbound outreach. It combines Email, WhatsApp, and AI Voice calls into a single workflow to engage prospects, qualify leads, and automatically hand over only high-intent, genuine buyers to your human sales team.",
    },

    {
      question: "How can RapidSales help my sales team?",
      answer:
        "RapidSales automates repetitive sales activities such as lead engagement, follow-ups, appointment booking, and customer nurturing. This allows sales teams to focus on closing deals while the platform handles outreach and lead qualification.",
    },

    {
      question: "Does RapidSales support WhatsApp automation?",
      answer:
        "Yes. RapidSales enables businesses to automate WhatsApp conversations, send personalized messages, schedule follow-ups, and engage leads at scale while maintaining a human-like communication experience.",
    },

    {
      question: "Can I automate email outreach with RapidSales?",
      answer:
        "Absolutely. RapidSales helps businesses create automated email campaigns, nurture leads, schedule follow-ups, and track engagement metrics to improve conversion rates.",
    },

    {
      question: "What industries can use RapidSales?",
      answer:
        "RapidSales can be used by agencies, real estate companies, SaaS businesses, e-commerce companies, service providers, and many other industries.",
    },

    {
      question: "Does RapidSales offer AI voice calling?",
      answer:
        "Yes. RapidSales provides AI-powered voice calling capabilities to automate customer conversations and sales outreach.",
    },

    {
      question: "Can RapidSales integrate with my CRM?",
      answer:
        "RapidSales can integrate with CRM systems to help synchronize customer information, leads, and sales activities.",
    },

    {
      question: "Will my WhatsApp number get banned for cold outreach?",
      answer:
        "Businesses should follow WhatsApp's policies and messaging guidelines when conducting outreach campaigns.",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        color: "#000000",
        overflowX: "hidden",
      }}
    >
      {/* =====================================================
          CONTACT SECTION
      ===================================================== */}

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ffffff",

          pt: {
            xs: 5,
            sm: 6,
            md: 7,
          },

          pb: {
            xs: 6,
            md: 7,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 3,
            },
          }}
        >
          {/* =================================================
              CONTACT HEADING
          ================================================= */}

          <Box
            sx={{
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",

              textAlign: "center",

              mb: {
                xs: 4,
                md: 5,
              },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "28px",
                  sm: "34px",
                  md: "40px",
                },

                lineHeight: 1.2,
                fontWeight: 400,
                color: "#000000",

                mb: {
                  xs: 2,
                  md: 2.5,
                },
              }}
            >
              Let's Get in Touch
            </Typography>

            <Typography
              sx={{
                width: "100%",
                maxWidth: "760px",
                margin: "0 auto",

                fontSize: {
                  xs: "15px",
                  sm: "16px",
                  md: "18px",
                },

                lineHeight: 1.55,
                fontWeight: 400,
                color: "#355777",
              }}
            >
              We'd love to learn about your business needs and show you how
              Rapid Sales can streamline customer engagement through AI Calling,
              Email Outreach, and WhatsApp Automation.
            </Typography>
          </Box>

          {/* =================================================
              CONTACT FORM CARD
          ================================================= */}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "90%",
              maxWidth: "800px",
              mx: "auto",

              backgroundColor: "#ffffff",

              border: "1px solid #dddddf",

              borderRadius: {
                xs: "14px",
                sm: "17px",
                md: "20px",
              },

              px: {
                xs: 1.5,
                sm: 2.5,
                md: 3,
              },

              py: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },

              boxShadow: "0 5px 20px rgba(91, 65, 255, 0.05)",
            }}
          >
            {/* =================================================
                FORM GRID
            ================================================= */}

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },

                columnGap: {
                  md: 3,
                },

                rowGap: {
                  xs: 2.5,
                  md: 3,
                },
              }}
            >
              {/* =================================================
                  FULL NAME
              ================================================= */}

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },

                    lineHeight: 1.3,
                    fontWeight: 500,
                    color: "#000000",

                    mb: 1,
                  }}
                >
                  Full Name <span>*</span>
                </Typography>

                <TextField
                  fullWidth
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: {
                        xs: "46px",
                        md: "50px",
                      },

                      borderRadius: "12px",

                      fontSize: {
                        xs: "14px",
                        md: "16px",
                      },

                      backgroundColor: "#ffffff",
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                      borderWidth: "1px",
                    },

                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#111111",
                        borderWidth: "2px",
                      },

                    "& input": {
                      paddingLeft: {
                        xs: "14px",
                        md: "16px",
                      },

                      paddingRight: {
                        xs: "14px",
                        md: "16px",
                      },
                    },

                    "& input::placeholder": {
                      color: "#718096",
                      opacity: 1,
                    },
                  }}
                />
              </Box>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },

                    lineHeight: 1.3,
                    fontWeight: 500,
                    color: "#000000",

                    mb: 1,
                  }}
                >
                  Email <span>*</span>
                </Typography>

                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: {
                        xs: "46px",
                        md: "50px",
                      },

                      borderRadius: "12px",

                      fontSize: {
                        xs: "14px",
                        md: "16px",
                      },
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#111111",
                        borderWidth: "2px",
                      },

                    "& input": {
                      paddingLeft: {
                        xs: "14px",
                        md: "16px",
                      },

                      paddingRight: {
                        xs: "14px",
                        md: "16px",
                      },
                    },

                    "& input::placeholder": {
                      color: "#718096",
                      opacity: 1,
                    },
                  }}
                />
              </Box>

              {/* =================================================
                  PHONE NUMBER
              ================================================= */}

              <Box
                sx={{
                  gridColumn: {
                    xs: "auto",
                    md: "1 / -1",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },

                    fontWeight: 500,

                    mb: 1,
                  }}
                >
                  Phone Number <span>*</span>
                </Typography>

                <Box
                  sx={{
                    width: "100%",

                    height: {
                      xs: "48px",
                      md: "50px",
                    },

                    display: "flex",
                    alignItems: "center",

                    border: "1px solid #111111",
                    borderRadius: "12px",

                    backgroundColor: "#ffffff",

                    overflow: "hidden",

                    "&:focus-within": {
                      border: "2px solid #111111",
                    },
                  }}
                >
                  {/* COUNTRY CODE */}

                  <Box
                    sx={{
                      height: "100%",

                      minWidth: {
                        xs: "85px",
                        md: "95px",
                      },

                      display: "flex",
                      alignItems: "center",

                      gap: 0.5,

                      px: {
                        xs: 1,
                        md: 1.3,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          md: "17px",
                        },
                      }}
                    >
                      🇮🇳
                    </Typography>

                    <Typography
                      sx={{
                        color: "#555555",
                        fontSize: "11px",
                      }}
                    >
                      ▼
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          md: "15px",
                        },

                        color: "#111111",
                      }}
                    >
                      +91
                    </Typography>
                  </Box>

                  {/* PHONE INPUT */}

                  <TextField
                    fullWidth
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="standard"
                    type="tel"
                    slotProps={{
                      input: {
                        disableUnderline: true,
                      },
                    }}
                    sx={{
                      "& input": {
                        height: {
                          xs: "46px",
                          md: "48px",
                        },

                        padding: "0 8px",

                        fontSize: {
                          xs: "14px",
                          md: "16px",
                        },
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* =================================================
                  COMPANY NAME
              ================================================= */}

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },

                    fontWeight: 500,

                    mb: 1,
                  }}
                >
                  Company Name <span>*</span>
                </Typography>

                <TextField
                  fullWidth
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: {
                        xs: "46px",
                        md: "50px",
                      },

                      borderRadius: "12px",

                      fontSize: {
                        xs: "14px",
                        md: "16px",
                      },
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#111111",
                        borderWidth: "2px",
                      },

                    "& input": {
                      paddingLeft: {
                        xs: "14px",
                        md: "16px",
                      },

                      paddingRight: {
                        xs: "14px",
                        md: "16px",
                      },
                    },

                    "& input::placeholder": {
                      color: "#718096",
                      opacity: 1,
                    },
                  }}
                />
              </Box>

              {/* =================================================
                  SALES TEAM SIZE
              ================================================= */}

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },

                    fontWeight: 500,

                    mb: 1,
                  }}
                >
                  Sales Team Size <span>*</span>
                </Typography>

                <FormControl fullWidth>
                  <Select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                      height: {
                        xs: "46px",
                        md: "50px",
                      },

                      borderRadius: "12px",

                      fontSize: {
                        xs: "14px",
                        md: "16px",
                      },

                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#111111",
                      },

                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#111111",
                      },

                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#111111",
                        borderWidth: "2px",
                      },

                      "& .MuiSelect-select": {
                        display: "flex",
                        alignItems: "center",

                        paddingLeft: {
                          xs: "14px",
                          md: "16px",
                        },
                      },
                    }}
                  >
                    <MenuItem value="" disabled>
                      Select team size
                    </MenuItem>

                    <MenuItem value="1-5">1 - 5</MenuItem>

                    <MenuItem value="6-10">6 - 10</MenuItem>

                    <MenuItem value="11-25">11 - 25</MenuItem>

                    <MenuItem value="26-50">26 - 50</MenuItem>

                    <MenuItem value="51-100">51 - 100</MenuItem>

                    <MenuItem value="100+">100+</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* =================================================
                  USE CASE
              ================================================= */}

              <Box
                sx={{
                  gridColumn: {
                    xs: "auto",
                    md: "1 / -1",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },

                    fontWeight: 500,

                    mb: 1,
                  }}
                >
                  Your Use Case
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  placeholder="Agency, brand, automation needs..."
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      minHeight: {
                        xs: "80px",
                        md: "85px",
                      },

                      borderRadius: "12px",

                      fontSize: {
                        xs: "14px",
                        md: "16px",
                      },

                      alignItems: "flex-start",
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#111111",
                        borderWidth: "2px",
                      },

                    "& textarea": {
                      paddingLeft: {
                        xs: "14px",
                        md: "16px",
                      },

                      paddingTop: {
                        xs: "12px",
                        md: "14px",
                      },
                    },

                    "& textarea::placeholder": {
                      color: "#718096",
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            </Box>

            {/* =================================================
                SEND MESSAGE BUTTON
            ================================================= */}

            <Box
              sx={{
                width: "100%",

                display: "flex",
                justifyContent: "center",

                mt: {
                  xs: 3,
                  md: 3.5,
                },
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "200px",
                  },

                  height: {
                    xs: "46px",
                    md: "48px",
                  },

                  borderRadius: "12px",

                  backgroundColor: "#4b36df",

                  color: "#ffffff",

                  fontSize: {
                    xs: "14px",
                    md: "16px",
                  },

                  fontWeight: 600,

                  textTransform: "none",

                  boxShadow: "0 8px 18px rgba(75, 54, 223, 0.20)",

                  "&:hover": {
                    backgroundColor: "#3d2ac5",

                    boxShadow: "0 10px 22px rgba(75, 54, 223, 0.26)",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          FAQ SECTION
      ===================================================== */}

      <Box
        sx={{
          width: "100%",

          backgroundColor: "#ffffff",

          pb: {
            xs: 6,
            sm: 7,
            md: 8,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 3,
            },
          }}
        >
          {/* =================================================
              FAQ BADGE
          ================================================= */}

          <Box
            sx={{
              width: "fit-content",

              height: {
                xs: "42px",
                md: "46px",
              },

              mx: "auto",

              mb: {
                xs: 3,
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
            }}
          >
            <SearchIcon
              sx={{
                width: {
                  xs: 20,
                  md: 22,
                },

                height: {
                  xs: 20,
                  md: 22,
                },

                color: "#111111",
              }}
            />

            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  md: "16px",
                },

                fontWeight: 600,

                color: "#111111",
              }}
            >
              FAQ's
            </Typography>
          </Box>

          {/* =================================================
              FAQ HEADING
          ================================================= */}

          <Box
            sx={{
              maxWidth: "800px",

              mx: "auto",

              mb: {
                xs: 4,
                md: 5,
              },

              textAlign: "center",
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "26px",
                  sm: "30px",
                  md: "36px",
                },

                lineHeight: 1.2,

                fontWeight: 400,

                color: "#000000",

                mb: {
                  xs: 1.5,
                  md: 2,
                },
              }}
            >
              Frequently asked questions
            </Typography>

            <Typography
              sx={{
                maxWidth: "750px",

                mx: "auto",

                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                },

                lineHeight: 1.5,

                color: "#355777",
              }}
            >
              Everything you need to know about automating outreach, launching
              AI agents, and scaling your sales operations.
            </Typography>
          </Box>

          {/* =================================================
              FAQ ACCORDIONS
          ================================================= */}

          <Box>
            {faqData.map((faq, index) => (
              <Accordion
                key={index}
                disableGutters
                sx={{
                  width: "75%",

                  maxWidth: "850px",

                  mx: "auto",

                  mb: 1.5,

                  border: "1px solid #e0e1e4",

                  borderRadius: "14px !important",

                  backgroundColor: "#ffffff",

                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",

                  overflow: "hidden",

                  "&::before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        width: {
                          xs: 22,
                          md: 24,
                        },

                        height: {
                          xs: 22,
                          md: 24,
                        },

                        color: "#526071",
                      }}
                    />
                  }
                  sx={{
                    minHeight: {
                      xs: "58px !important",
                      md: "64px !important",
                    },

                    px: {
                      xs: 2,
                      md: 2.5,
                    },

                    "& .MuiAccordionSummary-content": {
                      margin: "0 !important",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "14px",
                        sm: "15px",
                        md: "17px",
                      },

                      lineHeight: 1.4,

                      fontWeight: 500,

                      color: "#071c38",
                    }}
                  >
                    Q. {faq.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails
                  sx={{
                    px: {
                      xs: 2,
                      md: 2.5,
                    },

                    pb: 2.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "13px",
                        md: "15px",
                      },

                      lineHeight: 1.55,

                      color: "#526071",
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FAQHome;
