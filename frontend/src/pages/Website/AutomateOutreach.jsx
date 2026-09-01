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

const AutomateOutreach = () => {
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
            Automate your entire outreach across Email, WhatsApp, and AI Calls,
            all from one dashboard.
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
    </Box>
  );
};

export default AutomateOutreach;
