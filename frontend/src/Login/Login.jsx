import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { Link as RouterLink } from "react-router-dom";
import LogoBlue from "../assets/images/JFSpx.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* ==========================================
          LEFT SIDE
      ========================================== */}

      <Box
        sx={{
          width: {
            xs: "0%",
            md: "50%",
          },

          display: {
            xs: "none",
            md: "flex",
          },

          minHeight: "100vh",

          position: "relative",

          flexDirection: "column",

          bgcolor: "#192436",

          background:
            "linear-gradient(135deg, #192436 0%, #1F2A3D 55%, #202737 100%)",

          px: {
            md: 8,
            lg: 12,
          },

          py: 8,
        }}
      >
        {/* TOP BRAND */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: {
              md: 12,
              lg: 14,
            },
            ml: {
              md: 4,
              lg: 8,
            },
          }}
        >
          {/* LOGO */}

          <Box
            sx={{
              width: 96,
              height: 80,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              flexShrink: 0,

              // White background only for logo
              backgroundColor: "#FFFFFF",

              borderRadius: "12px",

              overflow: "hidden",

              p: 1,
            }}
          >
            <Box
              component="img"
              src={LogoBlue}
              alt="Sales Automation"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </Box>

          <Typography
            sx={{
              color: "#E5E7EB",
              fontSize: {
                md: "24px",
                lg: "27px",
              },
              fontWeight: 400,
            }}
          >
            Sales Automation
          </Typography>
        </Box>

        {/* MAIN CONTENT */}

        <Box
          sx={{
            mt: {
              md: 8,
              lg: 9,
            },

            ml: {
              md: 0,
              lg: 0,
            },

            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#F8FAFC",

              fontSize: {
                md: "32px",
                lg: "39px",
              },

              fontWeight: 700,

              letterSpacing: "0.3px",

              lineHeight: 1.2,
            }}
          >
            AI-Powered Sales Automation
          </Typography>

          <Typography
            sx={{
              mt: {
                md: 10,
                lg: 11,
              },

              color: "#CBD5E1",

              fontSize: {
                md: "20px",
                lg: "23px",
              },

              fontWeight: 400,
            }}
          >
            Make 1000+ AI calls per day
          </Typography>
        </Box>

        {/* BOTTOM TRUST SECTION */}

        <Box
          sx={{
            width: {
              md: "78%",
              lg: "72%",
            },

            mx: "auto",

            mt: {
              md: 11,
              lg: 12,
            },
          }}
        >
          <Divider
            sx={{
              borderColor: "rgba(148, 163, 184, 0.22)",
            }}
          />

          <Typography
            sx={{
              mt: 5,

              textAlign: "center",

              color: "#AAB7C8",

              fontSize: {
                md: "16px",
                lg: "18px",
              },
            }}
          >
            Trusted by 500+ businesses
          </Typography>
        </Box>
      </Box>

      {/* ==========================================
          RIGHT SIDE LOGIN
      ========================================== */}

      <Box
        sx={{
          width: {
            xs: "100%",
            md: "50%",
          },

          minHeight: "100vh",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          bgcolor: "#FFFFFF",

          px: {
            xs: 3,
            sm: 6,
            md: 8,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "465px",
          }}
        >
          {/* MOBILE LOGO */}

          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },

              justifyContent: "center",

              mb: 4,
            }}
          >
            <Box
              component="img"
              src="/assets/images/logo-blue.png"
              alt="JFS"
              sx={{
                width: 80,
                height: 65,
                objectFit: "contain",
              }}
            />
          </Box>

          {/* HEADING */}

          <Box
            sx={{
              textAlign: "center",
              mb: 5,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "27px",
                  sm: "31px",
                },

                fontWeight: 700,

                color: "#1E293B",

                lineHeight: 1.2,
              }}
            >
              Welcome back
            </Typography>

            <Typography
              sx={{
                mt: 1,

                fontSize: {
                  xs: "16px",
                  sm: "18px",
                },

                color: "#475569",
              }}
            >
              Sign in to your account
            </Typography>
          </Box>

          {/* EMAIL */}

          <Typography
            sx={{
              mb: 1.2,

              fontSize: "16px",

              fontWeight: 500,

              color: "#334155",
            }}
          >
            Email Address
          </Typography>

          <TextField
            fullWidth
            placeholder="you@example.com"
            type="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon
                    sx={{
                      color: "#94A3B8",
                      fontSize: 26,
                    }}
                  />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "55px",

                borderRadius: "12px",

                backgroundColor: "#FFFFFF",

                "& fieldset": {
                  borderColor: "#CBD5E1",
                },

                "&:hover fieldset": {
                  borderColor: "#94A3B8",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#FF5A00",
                  borderWidth: "1px",
                },
              },

              "& input": {
                fontSize: "18px",
                color: "#334155",
              },

              "& input::placeholder": {
                color: "#94A3B8",
                opacity: 1,
              },
            }}
          />

          {/* PASSWORD */}

          <Typography
            sx={{
              mt: 3.5,
              mb: 1.2,

              fontSize: "16px",

              fontWeight: 500,

              color: "#334155",
            }}
          >
            Password
          </Typography>

          <TextField
            fullWidth
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOutlinedIcon
                    sx={{
                      color: "#94A3B8",
                      fontSize: 26,
                    }}
                  />
                </InputAdornment>
              ),

              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((previous) => !previous)}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon
                        sx={{
                          color: "#94A3B8",
                        }}
                      />
                    ) : (
                      <VisibilityOutlinedIcon
                        sx={{
                          color: "#94A3B8",
                        }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "55px",

                borderRadius: "12px",

                backgroundColor: "#FFFFFF",

                "& fieldset": {
                  borderColor: "#CBD5E1",
                },

                "&:hover fieldset": {
                  borderColor: "#94A3B8",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#FF5A00",
                  borderWidth: "1px",
                },
              },

              "& input": {
                fontSize: "18px",
                color: "#334155",
              },

              "& input::placeholder": {
                color: "#94A3B8",
                opacity: 1,
              },
            }}
          />

          {/* REMEMBER ME */}

          <FormControlLabel
            sx={{
              mt: 2,

              ml: -1,

              "& .MuiFormControlLabel-label": {
                fontSize: "16px",
                color: "#475569",
              },
            }}
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                sx={{
                  color: "#94A3B8",

                  "&.Mui-checked": {
                    color: "#FF5A00",
                  },
                }}
              />
            }
            label="Remember me"
          />

          {/* SIGN IN */}

          <Button
            fullWidth
            sx={{
              mt: 2,

              height: "53px",

              borderRadius: "12px",

              textTransform: "none",

              fontSize: "18px",

              fontWeight: 600,

              color: "#FFFFFF",

              backgroundColor: "#FF5A00",

              boxShadow: "none",

              "&:hover": {
                backgroundColor: "#E94F00",
                boxShadow: "none",
              },
            }}
          >
            Sign In
          </Button>

          {/* DIVIDER */}

          <Divider
            sx={{
              my: 4,
              borderColor: "#E2E8F0",
            }}
          />

          {/* CREATE ACCOUNT */}

          <Typography
            sx={{
              textAlign: "center",

              fontSize: "16px",

              color: "#475569",
            }}
          >
            Don't have an account?{" "}
            <Box
              component={RouterLink}
              to="/register"
              sx={{
                color: "#D95000",

                fontWeight: 600,

                textDecoration: "none",

                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Create one
            </Box>
          </Typography>

          {/* TERMS */}

          <Typography
            sx={{
              mt: 4,

              textAlign: "center",

              fontSize: {
                xs: "13px",
                sm: "14px",
              },

              color: "#64748B",

              lineHeight: 1.6,
            }}
          >
            By signing in, you agree to our Terms of Service and Privacy Policy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
