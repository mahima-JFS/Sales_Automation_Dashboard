import React, { useState } from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Blog = () => {
  // =====================================================
  // CONTACT FORM STATE
  // =====================================================

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

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      teamSize: "",
      useCase: "",
    });
  };

  // =====================================================
  // BLOG DATA
  // =====================================================

  const blogs = [
    {
      id: 1,
      date: "2026-07-06",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      title: "How to Convert COD Orders to Prepaid with AI Voice...",
      description:
        "To convert COD orders to prepaid automatically, D2C brands use AI voice...",
    },

    {
      id: 2,
      date: "2026-07-02",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
      title:
        "The Best Real Estate CRM Features for High-Volume Developers...",
      description:
        "The best real estate CRM features for high-volume developers include native Meta ad...",
    },

    {
      id: 3,
      date: "2026-07-01",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      title: "Education Sector Specialization",
      description:
        "Higher education lead management requires separating serious applicants from junk...",
    },

    {
      id: 4,
      date: "2026-06-30",
      image:
        "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=1200&q=80",
      title: "WhatsApp Automation vs. Email Marketing: Which is...",
      description:
        "When comparing WhatsApp automation vs email marketing for sales, the answer is not...",
    },

    {
      id: 5,
      date: "2026-06-27",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      title: "How to Track Sales Campaign ROI Across...",
      description:
        "To accurately track sales campaign ROI across WhatsApp and email, businesses...",
    },

    {
      id: 6,
      date: "2026-06-26",
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1200&q=80",
      title: "Combining WhatsApp, Email, and Voice for the...",
      description:
        "A multi-channel sales sequence is an automated outreach strategy that engages...",
    },

    {
      id: 7,
      date: "2026-06-26",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
      title: "WhatsApp Business Automation: A Blueprint fo...",
      description:
        "Leads from your favorite platforms. Conversations on autopilot.",
    },

    {
      id: 8,
      date: "2026-06-25",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
      title: "Follow-Up Automation for High-Ticket Sales:...",
      description:
        "High-ticket sales follow-up requires a multi-channel automated strategy...",
    },

    {
      id: 9,
      date: "2026-06-24",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      title: "Stop Tool Sprawl: How to Consolidate Your Sales Tec...",
      description:
        "To consolidate your sales tech stack, bring your communication and automation...",
    },

    {
      id: 10,
      date: "2026-06-24",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      title: "Why Fast-Growing Teams Are Replacing 3 Tools with...",
      description:
        "Fast-growing teams are replacing multiple sales tools with one unified platform to...",
    },

    {
      id: 11,
      date: "2026-06-23",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      title: "Sales Automation ROI Calculator: How Much Can...",
      description:
        "To calculate the ROI of sales automation, subtract the total cost of automation...",
    },

    {
      id: 12,
      date: "2026-06-23",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      title: "Traditional CRM vs. Automated Sales...",
      description:
        "The primary difference between a traditional CRM and an automated sales communication...",
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
          BLOG HERO SECTION
      ===================================================== */}

      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ffffff",
          pt: {
            xs: 6,
            sm: 8,
            md: 10,
          },
          pb: {
            xs: 6,
            sm: 8,
            md: 9,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "1100px",
              mx: "auto",
              textAlign: "center",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "24px",
                  sm: "30px",
                  md: "38px",
                },
                lineHeight: 1.15,
                fontWeight: 400,
                color: "#000000",
                mb: {
                  xs: 2,
                  md: 3,
                },
              }}
            >
              Our Latest{" "}
              <Box
                component="span"
                sx={{
                  color: "#4b36df",
                  fontWeight: 500,
                }}
              >
                Blogs
              </Box>
            </Typography>

            <Typography
              sx={{
                maxWidth: "1100px",
                mx: "auto",
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "21px",
                },
                lineHeight: 1.5,
                fontWeight: 400,
                color: "#526b8a",
              }}
            >
              Insights, guides, and growth strategies to help you scale your
              business faster using automation and AI.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          BLOG CARDS
      ===================================================== */}

      <Box
        sx={{
          width: "100%",
          pb: {
            xs: 7,
            sm: 9,
            md: 12,
          },
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          <Grid container spacing={3}>
            {blogs.map((blog) => (
              <Grid
                key={blog.id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
                sx={{
                  display: "flex",
                }}
              >
                {/* BLOG CARD */}

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#ffffff",
                    border: "1px solid #dedede",
                    borderRadius: "18px",
                    overflow: "hidden",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 16px 35px rgba(0, 0, 0, 0.12)",
                    },
                  }}
                >
                  {/* IMAGE */}

                  <Box
                    sx={{
                      width: "100%",
                      height: {
                        xs: "210px",
                        sm: "220px",
                        md: "245px",
                      },
                      overflow: "hidden",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    <Box
                      component="img"
                      src={blog.image}
                      alt={blog.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",

                        "&:hover": {
                          transform: "scale(1.03)",
                        },
                      }}
                    />
                  </Box>

                  {/* CONTENT */}

                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      px: {
                        xs: 3,
                        sm: 3.5,
                        md: 3.5,
                      },
                      py: {
                        xs: 3,
                        sm: 3.5,
                        md: 3.5,
                      },
                    }}
                  >
                    {/* DATE */}

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 2.2,
                      }}
                    >
                      <CalendarMonthOutlinedIcon
                        sx={{
                          fontSize: {
                            xs: 20,
                            md: 21,
                          },
                          color: "#111111",
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: {
                            xs: "15px",
                            md: "17px",
                          },
                          color: "#111111",
                          fontWeight: 400,
                        }}
                      >
                        {blog.date}
                      </Typography>
                    </Box>

                    {/* TITLE */}

                    <Typography
                      component="h2"
                      sx={{
                        fontSize: {
                          xs: "22px",
                          sm: "23px",
                          md: "25px",
                        },
                        lineHeight: 1.35,
                        fontWeight: 700,
                        color: "#050505",
                        mb: 2.2,

                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {blog.title}
                    </Typography>

                    {/* DESCRIPTION */}

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          md: "17px",
                        },
                        lineHeight: 1.55,
                        color: "#718096",
                        mb: 3,

                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {blog.description}
                    </Typography>

                    {/* READ MORE */}

                    <Box
                      sx={{
                        mt: "auto",
                      }}
                    >
                      <Button
                        variant="text"
                        endIcon={
                          <ArrowForwardIcon
                            sx={{
                              fontSize: "20px !important",
                            }}
                          />
                        }
                        sx={{
                          minWidth: "auto",
                          p: 0,
                          color: "#f45116",
                          fontSize: {
                            xs: "16px",
                            md: "18px",
                          },
                          fontWeight: 500,
                          textTransform: "none",

                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#d83e08",
                          },

                          "& .MuiButton-endIcon": {
                            marginLeft: "8px",
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <Box
        sx={{
          width: "100%",
          minHeight: {
            xs: "480px",
            sm: "500px",
            md: "560px",
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
            Automate your entire outreach across Email, WhatsApp, and AI
            Calls, all from one dashboard.
          </Typography>

          {/* CTA BUTTON */}

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
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

      {/* =====================================================
          CONTACT US SECTION
      ===================================================== */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ffffff",
          py: {
            xs: 7,
            sm: 9,
            md: 11,
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          {/* CONTACT HEADING */}

          <Box
            sx={{
              width: "100%",
              maxWidth: "900px",
              mx: "auto",
              textAlign: "center",
              mb: {
                xs: 4,
                md: 5,
              },
            }}
          >
            {/* CONTACT BADGE */}

            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2.5,
                py: 1.2,
                mb: 3,
                border: "1px solid #ff5a13",
                borderRadius: "30px",
                backgroundColor: "#fff0e9",
              }}
            >
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
                CONTACT US
              </Typography>
            </Box>

            <Typography
              component="h2"
              sx={{
                fontSize: {
                  xs: "34px",
                  sm: "44px",
                  md: "54px",
                },
                lineHeight: 1.15,
                fontWeight: 400,
                color: "#000000",
                mb: 2,
              }}
            >
              Let's Get in{" "}
              <Box
                component="span"
                sx={{
                  color: "#4b36df",
                  fontWeight: 500,
                }}
              >
                Touch
              </Box>
            </Typography>

            <Typography
              sx={{
                maxWidth: "850px",
                mx: "auto",
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "20px",
                },
                lineHeight: 1.5,
                color: "#526b8a",
              }}
            >
              We'd love to learn about your business needs and show you how
              Rapid Sales can streamline customer engagement through AI
              Calling, Email Outreach, and WhatsApp Automation.
            </Typography>
          </Box>

          {/* =====================================================
              CONTACT FORM CARD
          ===================================================== */}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              maxWidth: "850px",
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
            {/* FORM GRID */}

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
                  Full Name *
                </Typography>

                <TextField
                  fullWidth
                  required
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
                    },

                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#4b36df",
                        borderWidth: "2px",
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
                  Email *
                </Typography>

                <TextField
                  fullWidth
                  required
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

                      backgroundColor: "#ffffff",
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#4b36df",
                        borderWidth: "2px",
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
                    color: "#000000",
                    mb: 1,
                  }}
                >
                  Phone Number *
                </Typography>

                <TextField
                  fullWidth
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
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
                    },

                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#4b36df",
                        borderWidth: "2px",
                      },

                    "& input::placeholder": {
                      color: "#718096",
                      opacity: 1,
                    },
                  }}
                />
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
                    color: "#000000",
                    mb: 1,
                  }}
                >
                  Company Name *
                </Typography>

                <TextField
                  fullWidth
                  required
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

                      backgroundColor: "#ffffff",
                    },

                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#111111",
                    },

                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "#4b36df",
                        borderWidth: "2px",
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
                    color: "#000000",
                    mb: 1,
                  }}
                >
                  Sales Team Size *
                </Typography>

                <FormControl fullWidth required>
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
                        borderColor: "#4b36df",
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
                    color: "#000000",
                    mb: 1,
                  }}
                >
                  Your Use Case
                </Typography>

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  placeholder="Agency, brand, automation needs..."
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
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
                        borderColor: "#4b36df",
                        borderWidth: "2px",
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
                    sm: "220px",
                  },

                  height: {
                    xs: "46px",
                    md: "50px",
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

                  boxShadow:
                    "0 8px 18px rgba(75, 54, 223, 0.20)",

                  "&:hover": {
                    backgroundColor: "#3d2ac5",

                    boxShadow:
                      "0 10px 22px rgba(75, 54, 223, 0.26)",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Blog;