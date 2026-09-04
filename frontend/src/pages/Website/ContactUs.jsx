import React, { useState } from "react";
import FAQHome from "./FAQHome";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

import PhoneInputModule from "react-phone-input-2";

const PhoneInput = PhoneInputModule?.default ?? PhoneInputModule;

import "react-phone-input-2/lib/style.css";
import ContactForm from "./ContactForm";

const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "/api/contact-us";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "",
    useCase: "",
  });

  const [phoneCountry, setPhoneCountry] = useState({
    name: "India",
    dialCode: "91",
    countryCode: "in",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  const faqData = [
    {
      question: "What is JFS?",
      answer:
        "JFS is a smart AI sales assistant that automates multi-channel outbound outreach. It combines Email, WhatsApp, and AI Voice calls into a single workflow to engage prospects, qualify leads, and automatically hand over only high-intent, genuine buyers to your human sales team.",
    },
    {
      question: "How can JFS help my sales team?",
      answer:
        "JFS automates repetitive sales activities such as lead engagement, follow-ups, appointment booking, and customer nurturing. This allows sales teams to focus on closing deals while the platform handles outreach and lead qualification.",
    },
    {
      question: "Does JFS support WhatsApp automation?",
      answer:
        "Yes. JFS enables businesses to automate WhatsApp conversations, send personalized messages, schedule follow-ups, and engage leads at scale while maintaining a human-like communication experience.",
    },
    {
      question: "Can I automate email outreach with JFS?",
      answer:
        "Absolutely. JFS helps businesses create automated email campaigns, nurture leads, schedule follow-ups, and track engagement metrics to improve conversion rates.",
    },
    {
      question: "What industries can use JFS?",
      answer:
        "JFS can be used by agencies, real estate companies, SaaS businesses, e-commerce companies, service providers, and many other industries.",
    },
    {
      question: "Does JFS offer AI voice calling?",
      answer:
        "Yes. JFS provides AI-powered voice calling capabilities to automate customer conversations and sales outreach.",
    },
    {
      question: "Can JFS integrate with my CRM?",
      answer:
        "JFS can integrate with CRM systems to help synchronize customer information, leads, and sales activities.",
    },
    {
      question: "Will my WhatsApp number get banned for cold outreach?",
      answer:
        "Businesses should follow WhatsApp's policies and messaging guidelines when conducting outreach campaigns.",
    },
  ];

  const showMessage = (message, severity = "success") => {
    setSnackbar({
      open: true,
      severity,
      message,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  const handlePhoneChange = (value, country) => {
    setFormData((previous) => ({
      ...previous,
      phone: value,
    }));

    if (country) {
      setPhoneCountry(country);
    }

    if (errors.phone) {
      setErrors((previous) => ({
        ...previous,
        phone: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Valid email required";
    }

    const digitsOnly = String(formData.phone || "").replace(/\D/g, "");
    const countryCodeLength = String(phoneCountry?.dialCode || "").length;
    const localDigits = Math.max(0, digitsOnly.length - countryCodeLength);

    if (!formData.phone || localDigits < 6) {
      newErrors.phone = "Valid phone required";
    } else if (localDigits > 15) {
      newErrors.phone = "Valid phone required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.teamSize) {
      newErrors.teamSize = "Select team size";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitted(true);

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      showMessage("Please fill all required fields correctly.", "error");
      return;
    }

    setLoading(true);

    /*
      The phone field contains the complete international number.

      Example:
      India 9876543210 -> +919876543210
      USA 5551234567    -> +15551234567

      The backend can use this `phone` value to send an SMS/WhatsApp
      message to the number entered by the visitor.
    */
    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: `+${String(formData.phone).replace(/\D/g, "")}`,
      company: formData.company.trim(),
      teamSize: formData.teamSize,
      useCase: formData.useCase.trim(),

      // Message that the backend/SMS provider can send to this phone.
      message:
        formData.useCase.trim() ||
        `Hello ${formData.fullName.trim()}, thank you for contacting JFS.`,
    };

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result = null;

      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok) {
        throw new Error(result?.message || "Unable to send your message.");
      }

      showMessage(result?.message || "Message sent successfully!", "success");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        teamSize: "",
        useCase: "",
      });

      setPhoneCountry({
        name: "India",
        dialCode: "91",
        countryCode: "in",
      });

      setErrors({});
      setSubmitted(false);
    } catch (error) {
      console.error("Contact form error:", error);

      showMessage(
        error?.message || "Message could not be sent. Please try again.",
        "error",
      );
    } finally {
      setLoading(false);
    }
  };

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
    // <Box
    //   sx={{
    //     width: "100%",
    //     minHeight: "100vh",
    //     backgroundColor: "#ffffff",
    //     color: "#000000",
    //     overflowX: "hidden",
    //   }}
    // >
    //   {/* CONTACT SECTION */}
    //   <Box
    //     sx={{
    //       width: "100%",
    //       backgroundColor: "#ffffff",
    //       pt: {
    //         xs: 5,
    //         sm: 6,
    //         md: 7,
    //       },
    //       pb: {
    //         xs: 6,
    //         md: 7,
    //       },
    //     }}
    //   >
    //     <Container
    //       maxWidth="lg"
    //       sx={{
    //         px: {
    //           xs: 2,
    //           sm: 3,
    //           md: 3,
    //         },
    //       }}
    //     >
    //       {/* HEADING */}
    //       <Box
    //         sx={{
    //           width: "100%",
    //           maxWidth: "800px",
    //           margin: "0 auto",
    //           textAlign: "center",
    //           mb: {
    //             xs: 4,
    //             md: 5,
    //           },
    //         }}
    //       >
    //         <Typography
    //           component="h1"
    //           sx={{
    //             fontSize: {
    //               xs: "28px",
    //               sm: "34px",
    //               md: "40px",
    //             },
    //             lineHeight: 1.2,
    //             fontWeight: 400,
    //             color: "#000000",
    //             mb: {
    //               xs: 2,
    //               md: 2.5,
    //             },
    //           }}
    //         >
    //           Get in Touch
    //         </Typography>

    //         <Typography
    //           sx={{
    //             width: "100%",
    //             maxWidth: "760px",
    //             margin: "0 auto",
    //             fontSize: {
    //               xs: "15px",
    //               sm: "16px",
    //               md: "18px",
    //             },
    //             lineHeight: 1.55,
    //             fontWeight: 400,
    //             color: "#355777",
    //           }}
    //         >
    //           Have a question about pricing, a specific use case, or want a
    //           walkthrough? Reach out and our team will get back to you within
    //           one business day.
    //         </Typography>
    //       </Box>

    //       {/* FORM */}
    //       <Box
    //         component="form"
    //         onSubmit={handleSubmit}
    //         noValidate
    //         sx={{
    //           width: "90%",
    //           maxWidth: "800px",
    //           mx: "auto",
    //           backgroundColor: "#ffffff",
    //           border: "1px solid #dddddf",
    //           borderRadius: {
    //             xs: "14px",
    //             sm: "17px",
    //             md: "20px",
    //           },
    //           px: {
    //             xs: 1.5,
    //             sm: 2.5,
    //             md: 3,
    //           },
    //           py: {
    //             xs: 2,
    //             sm: 2.5,
    //             md: 3,
    //           },
    //           boxShadow: "0 5px 20px rgba(91, 65, 255, 0.05)",
    //         }}
    //       >
    //         <Box
    //           sx={{
    //             display: "grid",
    //             gridTemplateColumns: {
    //               xs: "1fr",
    //               md: "1fr 1fr",
    //             },
    //             columnGap: {
    //               md: 3,
    //             },
    //             rowGap: {
    //               xs: 2.5,
    //               md: 3,
    //             },
    //           }}
    //         >
    //           {/* FULL NAME */}
    //           <Box>
    //             <Typography
    //               sx={{
    //                 fontSize: {
    //                   xs: "14px",
    //                   md: "15px",
    //                 },
    //                 lineHeight: 1.3,
    //                 fontWeight: 500,
    //                 color: "#000000",
    //                 mb: 1,
    //               }}
    //             >
    //               Full Name <span>*</span>
    //             </Typography>

    //             <TextField
    //               fullWidth
    //               name="fullName"
    //               value={formData.fullName}
    //               onChange={handleChange}
    //               placeholder="John Doe"
    //               variant="outlined"
    //               error={submitted && Boolean(errors.fullName)}
    //               helperText={submitted ? errors.fullName : ""}
    //               sx={fieldSx("fullName")}
    //             />
    //           </Box>

    //           {/* EMAIL */}
    //           <Box>
    //             <Typography
    //               sx={{
    //                 fontSize: {
    //                   xs: "14px",
    //                   md: "15px",
    //                 },
    //                 lineHeight: 1.3,
    //                 fontWeight: 500,
    //                 color: "#000000",
    //                 mb: 1,
    //               }}
    //             >
    //               Email <span>*</span>
    //             </Typography>

    //             <TextField
    //               fullWidth
    //               type="email"
    //               name="email"
    //               value={formData.email}
    //               onChange={handleChange}
    //               placeholder="john@email.com"
    //               variant="outlined"
    //               error={submitted && Boolean(errors.email)}
    //               helperText={submitted ? errors.email : ""}
    //               sx={fieldSx("email")}
    //             />
    //           </Box>

    //           {/* PHONE */}
    //           <Box
    //             sx={{
    //               gridColumn: {
    //                 xs: "auto",
    //                 md: "1 / -1",
    //               },
    //               minWidth: 0,
    //               position: "relative",
    //             }}
    //           >
    //             <Typography
    //               sx={{
    //                 fontSize: {
    //                   xs: "14px",
    //                   md: "15px",
    //                 },
    //                 fontWeight: 500,
    //                 mb: 1,
    //               }}
    //             >
    //               Phone Number <span>*</span>
    //             </Typography>

    //             <Box
    //               sx={{
    //                 width: "100%",

    //                 "& .react-tel-input": {
    //                   width: "100%",
    //                 },

    //                 "& .react-tel-input .form-control": {
    //                   width: "100%",
    //                   height: {
    //                     xs: "48px",
    //                     md: "50px",
    //                   },
    //                   borderRadius: "12px",
    //                   border:
    //                     submitted && errors.phone
    //                       ? "2px solid #ff1f1f"
    //                       : "1px solid #111111",
    //                   color: "#111111",
    //                   fontSize: {
    //                     xs: "14px",
    //                     md: "16px",
    //                   },
    //                   backgroundColor: "#ffffff",
    //                   paddingLeft: "58px",
    //                   boxSizing: "border-box",
    //                 },

    //                 "& .react-tel-input .form-control:focus": {
    //                   border:
    //                     submitted && errors.phone
    //                       ? "2px solid #ff1f1f"
    //                       : "2px solid #111111",
    //                   boxShadow: "none",
    //                 },

    //                 "& .react-tel-input .flag-dropdown": {
    //                   border: "none",
    //                   borderRadius: "12px 0 0 12px",
    //                   backgroundColor: "#ffffff",
    //                 },

    //                 "& .react-tel-input .flag-dropdown.open": {
    //                   border: "none",
    //                   backgroundColor: "#ffffff",
    //                 },

    //                 "& .react-tel-input .selected-flag": {
    //                   width: "50px",
    //                   height: "100%",
    //                   paddingLeft: "12px",
    //                   borderRadius: "12px 0 0 12px",
    //                   backgroundColor: "#ffffff",
    //                 },

    //                 "& .react-tel-input .selected-flag:hover": {
    //                   backgroundColor: "#ffffff",
    //                 },

    //                 "& .react-tel-input .selected-flag:focus": {
    //                   backgroundColor: "#ffffff",
    //                 },

    //                 "& .react-tel-input .country-list": {
    //                   width: {
    //                     xs: "calc(100vw - 70px)",
    //                     sm: "450px",
    //                     md: "450px",
    //                   },
    //                   maxWidth: "450px",
    //                   maxHeight: "300px",
    //                   zIndex: 9999,
    //                   marginTop: "4px",
    //                   boxShadow: "0 5px 18px rgba(0,0,0,0.18)",
    //                   borderRadius: "4px",
    //                   fontSize: "16px",
    //                 },

    //                 "& .react-tel-input .country-list .country": {
    //                   padding: "10px 12px",
    //                 },

    //                 "& .react-tel-input .country-list .country:hover": {
    //                   backgroundColor: "#f1f1f1",
    //                 },

    //                 "& .react-tel-input .country-list .country.highlight": {
    //                   backgroundColor: "#f1f1f1",
    //                 },

    //                 "& .react-tel-input .country-list .search": {
    //                   position: "sticky",
    //                   top: 0,
    //                   zIndex: 2,
    //                   backgroundColor: "#ffffff",
    //                   padding: "10px",
    //                 },

    //                 "& .react-tel-input .country-list .search-box": {
    //                   width: "100%",
    //                   height: "38px",
    //                   border: "1px solid #cccccc",
    //                   borderRadius: "7px",
    //                   padding: "0 10px",
    //                   fontSize: "14px",
    //                   boxSizing: "border-box",
    //                 },
    //               }}
    //             >
    //               <PhoneInput
    //                 country="in"
    //                 value={formData.phone}
    //                 onChange={handlePhoneChange}
    //                 countryCodeEditable={false}
    //                 enableSearch
    //                 searchPlaceholder="Search country"
    //                 preferredCountries={["in", "us", "gb", "ae"]}
    //                 autoFormat
    //                 inputProps={{
    //                   name: "phone",
    //                   autoComplete: "tel",
    //                   "aria-label": "Phone Number",
    //                 }}
    //                 isValid={(value, country) => {
    //                   if (!value) {
    //                     return "Valid phone required";
    //                   }

    //                   const digits = String(value).replace(/\D/g, "");
    //                   const dialCode = String(country?.dialCode || "");

    //                   const localLength = digits.length - dialCode.length;

    //                   if (localLength < 6 || localLength > 15) {
    //                     return "Valid phone required";
    //                   }

    //                   return true;
    //                 }}
    //               />
    //             </Box>

    //             {submitted && errors.phone && (
    //               <Typography
    //                 sx={{
    //                   color: "#ff1f1f",
    //                   fontSize: "14px",
    //                   marginTop: "4px",
    //                 }}
    //               >
    //                 {errors.phone}
    //               </Typography>
    //             )}
    //           </Box>

    //           {/* COMPANY */}
    //           <Box>
    //             <Typography
    //               sx={{
    //                 fontSize: {
    //                   xs: "14px",
    //                   md: "15px",
    //                 },
    //                 fontWeight: 500,
    //                 mb: 1,
    //               }}
    //             >
    //               Company Name <span>*</span>
    //             </Typography>

    //             <TextField
    //               fullWidth
    //               name="company"
    //               value={formData.company}
    //               onChange={handleChange}
    //               placeholder="Enter your company name"
    //               variant="outlined"
    //               error={submitted && Boolean(errors.company)}
    //               helperText={submitted ? errors.company : ""}
    //               sx={fieldSx("company")}
    //             />
    //           </Box>

    //           {/* TEAM SIZE */}
    //           <Box>
    //             <Typography
    //               sx={{
    //                 fontSize: {
    //                   xs: "14px",
    //                   md: "15px",
    //                 },
    //                 fontWeight: 500,
    //                 mb: 1,
    //               }}
    //             >
    //               Sales Team Size <span>*</span>
    //             </Typography>

    //             <FormControl
    //               fullWidth
    //               error={submitted && Boolean(errors.teamSize)}
    //             >
    //               <Select
    //                 name="teamSize"
    //                 value={formData.teamSize}
    //                 onChange={handleChange}
    //                 displayEmpty
    //                 sx={{
    //                   height: {
    //                     xs: "46px",
    //                     md: "50px",
    //                   },
    //                   borderRadius: "12px",
    //                   fontSize: {
    //                     xs: "14px",
    //                     md: "16px",
    //                   },

    //                   "& .MuiOutlinedInput-notchedOutline": {
    //                     borderColor:
    //                       submitted && errors.teamSize ? "#ff1f1f" : "#111111",
    //                     borderWidth:
    //                       submitted && errors.teamSize ? "2px" : "1px",
    //                   },

    //                   "&:hover .MuiOutlinedInput-notchedOutline": {
    //                     borderColor:
    //                       submitted && errors.teamSize ? "#ff1f1f" : "#111111",
    //                   },

    //                   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //                     borderColor:
    //                       submitted && errors.teamSize ? "#ff1f1f" : "#111111",
    //                     borderWidth: "2px",
    //                   },

    //                   "& .MuiSelect-select": {
    //                     display: "flex",
    //                     alignItems: "center",
    //                     paddingLeft: {
    //                       xs: "14px",
    //                       md: "16px",
    //                     },
    //                   },
    //                 }}
    //               >
    //                 <MenuItem value="" disabled>
    //                   Select team size
    //                 </MenuItem>
    //                 <MenuItem value="1-5">1 - 5</MenuItem>
    //                 <MenuItem value="6-10">6 - 10</MenuItem>
    //                 <MenuItem value="11-25">11 - 25</MenuItem>
    //                 <MenuItem value="26-50">26 - 50</MenuItem>
    //                 <MenuItem value="51-100">51 - 100</MenuItem>
    //                 <MenuItem value="100+">100+</MenuItem>
    //               </Select>

    //               {submitted && errors.teamSize && (
    //                 <Typography
    //                   sx={{
    //                     color: "#ff1f1f",
    //                     fontSize: "14px",
    //                     marginTop: "4px",
    //                   }}
    //                 >
    //                   {errors.teamSize}
    //                 </Typography>
    //               )}
    //             </FormControl>
    //           </Box>

    //           {/* USE CASE */}
    //           <Box
    //             sx={{
    //               gridColumn: {
    //                 xs: "auto",
    //                 md: "1 / -1",
    //               },
    //             }}
    //           >
    //             <Typography
    //               sx={{
    //                 fontSize: {
    //                   xs: "14px",
    //                   md: "15px",
    //                 },
    //                 fontWeight: 500,
    //                 mb: 1,
    //               }}
    //             >
    //               Your Use Case
    //             </Typography>

    //             <TextField
    //               fullWidth
    //               multiline
    //               rows={3}
    //               name="useCase"
    //               value={formData.useCase}
    //               onChange={handleChange}
    //               placeholder="Agency, brand, automation needs..."
    //               variant="outlined"
    //               sx={{
    //                 "& .MuiOutlinedInput-root": {
    //                   minHeight: {
    //                     xs: "80px",
    //                     md: "85px",
    //                   },
    //                   borderRadius: "12px",
    //                   fontSize: {
    //                     xs: "14px",
    //                     md: "16px",
    //                   },
    //                   alignItems: "flex-start",
    //                 },

    //                 "& .MuiOutlinedInput-notchedOutline": {
    //                   borderColor: "#111111",
    //                 },

    //                 "&:hover .MuiOutlinedInput-notchedOutline": {
    //                   borderColor: "#111111",
    //                 },

    //                 "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    //                   {
    //                     borderColor: "#111111",
    //                     borderWidth: "2px",
    //                   },

    //                 "& textarea": {
    //                   paddingLeft: {
    //                     xs: "14px",
    //                     md: "16px",
    //                   },
    //                   paddingTop: {
    //                     xs: "12px",
    //                     md: "14px",
    //                   },
    //                 },

    //                 "& textarea::placeholder": {
    //                   color: "#718096",
    //                   opacity: 1,
    //                 },
    //               }}
    //             />
    //           </Box>
    //         </Box>

    //         {/* SEND BUTTON */}
    //         <Box
    //           sx={{
    //             width: "100%",
    //             display: "flex",
    //             justifyContent: "center",
    //             mt: {
    //               xs: 3,
    //               md: 3.5,
    //             },
    //           }}
    //         >
    //           <Button
    //             type="submit"
    //             variant="contained"
    //             disabled={loading}
    //             sx={{
    //               width: {
    //                 xs: "100%",
    //                 sm: "200px",
    //               },
    //               height: {
    //                 xs: "46px",
    //                 md: "48px",
    //               },
    //               borderRadius: "12px",
    //               backgroundColor: "#4b36df",
    //               color: "#ffffff",
    //               fontSize: {
    //                 xs: "14px",
    //                 md: "16px",
    //               },
    //               fontWeight: 600,
    //               textTransform: "none",
    //               boxShadow: "0 8px 18px rgba(75, 54, 223, 0.20)",
    //               "&:hover": {
    //                 backgroundColor: "#3d2ac5",
    //                 boxShadow: "0 10px 22px rgba(75, 54, 223, 0.26)",
    //               },
    //               "&.Mui-disabled": {
    //                 backgroundColor: "#8c82df",
    //                 color: "#ffffff",
    //               },
    //             }}
    //           >
    //             {loading ? "Sending..." : "Send Message"}
    //           </Button>
    //         </Box>
    //       </Box>
    //     </Container>
    //   </Box>

    //   {/* FAQ SECTION */}

    //   <FAQHome />

    //   {/* FORM STATUS MESSAGE */}
    //   <Snackbar
    //     open={snackbar.open}
    //     autoHideDuration={5000}
    //     onClose={() =>
    //       setSnackbar((previous) => ({
    //         ...previous,
    //         open: false,
    //       }))
    //     }
    //     anchorOrigin={{
    //       vertical: "bottom",
    //       horizontal: "center",
    //     }}
    //   >
    //     <Alert
    //       severity={snackbar.severity}
    //       onClose={() =>
    //         setSnackbar((previous) => ({
    //           ...previous,
    //           open: false,
    //         }))
    //       }
    //       sx={{ width: "100%" }}
    //     >
    //       {snackbar.message}
    //     </Alert>
    //   </Snackbar>
    // </Box>
    <>
      <ContactForm />
      <FAQHome />
    </>
  );
};

export default ContactUs;
