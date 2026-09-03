import React, { useState } from "react";

import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "",
    useCase: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const showMessage = (message, severity = "success") => {
    setSnackbar({
      open: true,
      severity,
      message,
    });
  };

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    // PHONE: only numbers + maximum 10 digits
    if (name === "phone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

      setFormData((previous) => ({
        ...previous,
        [name]: onlyNumbers,
      }));
    } else {
      setFormData((previous) => ({
        ...previous,
        [name]: value,
      }));
    }

    // Remove error while user is typing
    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Valid email required";
    }

    // Phone
    const digitsOnly = String(formData.phone || "").replace(/\D/g, "");

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (digitsOnly.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // Company
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    // Team Size
    if (!formData.teamSize) {
      newErrors.teamSize = "Select team size";
    }

    setErrors(newErrors);

    return newErrors;
  };

  // Submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitted(true);

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      showMessage("Please fill all required fields correctly.", "error");
      return;
    }

    setLoading(true);

    try {
      // Temporary success simulation.
      // Add your Laravel API request here later.
      await new Promise((resolve) => setTimeout(resolve, 800));

      showMessage("Your message has been sent successfully!", "success");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        teamSize: "",
        useCase: "",
      });

      setErrors({});
      setSubmitted(false);
    } catch (error) {
      console.error("Contact form error:", error);

      showMessage("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  // Close snackbar
  const handleCloseSnackbar = () => {
    setSnackbar((previous) => ({
      ...previous,
      open: false,
    }));
  };

  // Common field styles
  const fieldSx = (fieldName) => ({
    "& .MuiOutlinedInput-root": {
      minHeight: {
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
      borderColor: submitted && errors[fieldName] ? "#ff1f1f" : "#111111",

      borderWidth: submitted && errors[fieldName] ? "2px" : "1px",
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: submitted && errors[fieldName] ? "#ff1f1f" : "#111111",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: submitted && errors[fieldName] ? "#ff1f1f" : "#111111",

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

    "& .MuiFormHelperText-root": {
      marginLeft: 0,
      marginTop: "4px",
      fontSize: "14px",
      color: "#ff1f1f",
    },
  });

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
      {/* CONTACT SECTION */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#ffffff",

          // Reduced upper space
          pt: {
            xs: 1.5,
            sm: 2,
            md: 2.5,
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
          {/* FORM */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
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

              // Reduced padding at the top of form
              pt: {
                xs: 1.5,
                sm: 2,
                md: 2.25,
              },

              pb: {
                xs: 2,
                sm: 2.5,
                md: 3,
              },

              boxShadow: "0 5px 20px rgba(91, 65, 255, 0.05)",
            }}
          >
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
              {/* FULL NAME */}
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

                    // Reduced gap between label and input
                    mb: 0.7,
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
                  error={submitted && Boolean(errors.fullName)}
                  helperText={submitted ? errors.fullName : ""}
                  sx={fieldSx("fullName")}
                />
              </Box>

              {/* EMAIL */}
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
                    mb: 0.7,
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
                  error={submitted && Boolean(errors.email)}
                  helperText={submitted ? errors.email : ""}
                  sx={fieldSx("email")}
                />
              </Box>

              {/* PHONE */}
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
                    mb: 0.7,
                  }}
                >
                  Phone Number <span>*</span>
                </Typography>

                <TextField
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  variant="outlined"
                  type="tel"
                  error={submitted && Boolean(errors.phone)}
                  helperText={submitted ? errors.phone : ""}
                  inputProps={{
                    maxLength: 10,
                    inputMode: "numeric",
                  }}
                  sx={fieldSx("phone")}
                />
              </Box>

              {/* COMPANY */}
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },

                    fontWeight: 500,
                    mb: 0.7,
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
                  error={submitted && Boolean(errors.company)}
                  helperText={submitted ? errors.company : ""}
                  sx={fieldSx("company")}
                />
              </Box>

              {/* TEAM SIZE */}
              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },

                    fontWeight: 500,
                    mb: 0.7,
                  }}
                >
                  Sales Team Size <span>*</span>
                </Typography>

                <FormControl
                  fullWidth
                  error={submitted && Boolean(errors.teamSize)}
                >
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
                        borderColor:
                          submitted && errors.teamSize ? "#ff1f1f" : "#111111",

                        borderWidth:
                          submitted && errors.teamSize ? "2px" : "1px",
                      },

                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor:
                          submitted && errors.teamSize ? "#ff1f1f" : "#111111",
                      },

                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor:
                          submitted && errors.teamSize ? "#ff1f1f" : "#111111",

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

                  {submitted && errors.teamSize && (
                    <Typography
                      sx={{
                        color: "#ff1f1f",
                        fontSize: "14px",
                        marginTop: "4px",
                      }}
                    >
                      {errors.teamSize}
                    </Typography>
                  )}
                </FormControl>
              </Box>

              {/* USE CASE */}
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
                    mb: 0.7,
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

            {/* SEND BUTTON */}
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
                disabled={loading}
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

                  "&.Mui-disabled": {
                    backgroundColor: "#8c82df",
                    color: "#ffffff",
                  },
                }}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FORM STATUS MESSAGE */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
          sx={{
            width: "100%",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
