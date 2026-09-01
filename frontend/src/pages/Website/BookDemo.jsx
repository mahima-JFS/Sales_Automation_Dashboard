import React, { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";

import FAQHome from "../../pages/Website/FAQHome";

const BookDemo = () => {
  const features = [
    "WhatsApp Automation",
    "AI Calling",
    "Lead Conversion Boost",
  ];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    company: "",
    website: "",
    useCase: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Data:", formData);
  };

  // COMMON INPUT STYLE
  const inputSx = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#3A303F",
      borderRadius: "8px",
      color: "#FFFFFF",

      "& fieldset": {
        borderColor: "#5A4C61",
        borderWidth: "1px",
      },

      "&:hover fieldset": {
        borderColor: "#7A687F",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#FF741C",
        borderWidth: "1px",
      },
    },

    "& .MuiInputBase-input": {
      color: "#FFFFFF",
      fontSize: "15px",
      padding: "13px 14px",

      "&::placeholder": {
        color: "#B8B0BB",
        opacity: 1,
      },
    },
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          width: "100%",
          backgroundColor: "#160019",

          py: {
            xs: 5,
            sm: 7,
            md: 9,
          },

          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },

              gap: {
                xs: 5,
                md: 8,
                lg: 10,
              },

              alignItems: "start",
            }}
          >
            {/* ================= LEFT CONTENT ================= */}

            <Box
              sx={{
                pt: {
                  md: 1,
                },
              }}
            >
              {/* HEADING */}

              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: "32px",
                    sm: "38px",
                    md: "36px",
                    lg: "38px",
                  },

                  lineHeight: 1.15,

                  fontWeight: 700,

                  color: "#F1F1F1",

                  letterSpacing: "-0.5px",
                }}
              >
                Close More Deals with{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#FF741C",
                  }}
                >
                  AI
                </Box>
                <br />
                <Box
                  component="span"
                  sx={{
                    color: "#FF741C",
                  }}
                >
                  Sales Automation
                </Box>
              </Typography>

              {/* DESCRIPTION */}

              <Typography
                sx={{
                  mt: 3,

                  maxWidth: 480,

                  fontSize: "16px",

                  lineHeight: 1.55,

                  color: "#A19AAA",
                }}
              >
                Book a personalized demo of Rapid Sales and see how you can
                automate WhatsApp, calls, and follow-ups.
              </Typography>

              {/* FEATURES */}

              <Stack
                spacing={2}
                sx={{
                  mt: 4.5,
                }}
              >
                {features.map((feature) => (
                  <Stack
                    key={feature}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        fontSize: "16px",
                        lineHeight: 1,
                      }}
                    >
                      ✅
                    </Box>

                    <Typography
                      sx={{
                        color: "#E7E7EB",

                        fontSize: {
                          xs: "15px",
                          md: "16px",
                        },

                        fontWeight: 500,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* ================= RIGHT FORM ================= */}

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: "100%",

                maxWidth: "520px",

                mx: {
                  xs: "auto",
                  md: 0,
                },

                backgroundColor: "#302636",

                border: "1px solid #4C3F54",

                borderRadius: "16px",

                px: {
                  xs: 2.5,
                  sm: 3.5,
                },

                py: {
                  xs: 3,
                  sm: 3.5,
                },

                boxSizing: "border-box",
              }}
            >
              {/* FORM TITLE */}

              <Typography
                component="h2"
                sx={{
                  mb: 3,

                  color: "#F5F5F5",

                  fontSize: {
                    xs: "25px",
                    md: "28px",
                  },

                  fontWeight: 700,
                }}
              >
                Book a Demo
              </Typography>

              <Stack spacing={1.6}>
                {/* FULL NAME */}

                <TextField
                  fullWidth
                  name="fullName"
                  placeholder="Enter Your Full Name*"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  sx={inputSx}
                />

                {/* EMAIL */}

                <TextField
                  fullWidth
                  name="email"
                  type="email"
                  placeholder="Enter Work Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  sx={inputSx}
                />

                {/* WHATSAPP */}

                <TextField
                  fullWidth
                  name="whatsapp"
                  placeholder="Enter Your WhatsApp Number*"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  sx={inputSx}
                />

                {/* COMPANY */}

                <TextField
                  fullWidth
                  name="company"
                  placeholder="Enter Company Name*"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  sx={inputSx}
                />

                {/* WEBSITE */}

                <TextField
                  fullWidth
                  name="website"
                  placeholder="Enter Website / Store URL"
                  value={formData.website}
                  onChange={handleChange}
                  sx={inputSx}
                />

                {/* USE CASE */}

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  name="useCase"
                  placeholder="Enter Your Use Case"
                  value={formData.useCase}
                  onChange={handleChange}
                  sx={{
                    ...inputSx,

                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#3A303F",

                      borderRadius: "8px",

                      color: "#FFFFFF",

                      alignItems: "flex-start",

                      "& fieldset": {
                        borderColor: "#5A4C61",
                        borderWidth: "1px",
                      },

                      "&:hover fieldset": {
                        borderColor: "#7A687F",
                      },

                      "&.Mui-focused fieldset": {
                        borderColor: "#FF741C",
                        borderWidth: "1px",
                      },
                    },

                    "& .MuiInputBase-inputMultiline": {
                      color: "#FFFFFF",

                      padding: "12px 14px",

                      "&::placeholder": {
                        color: "#B8B0BB",
                        opacity: 1,
                      },
                    },
                  }}
                />

                {/* SUBMIT BUTTON */}

                <Button
                  type="submit"
                  fullWidth
                  disableElevation
                  sx={{
                    mt: 2,

                    height: "44px",

                    borderRadius: "8px",

                    textTransform: "none",

                    fontSize: "16px",

                    fontWeight: 700,

                    color: "#FFFFFF",

                    background:
                      "linear-gradient(90deg, #FF741C 0%, #5344C7 100%)",

                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #F56612 0%, #4636B8 100%)",
                    },
                  }}
                >
                  Book My Demo 🚀
                </Button>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
      <FAQHome />
    </>
  );
};

export default BookDemo;
