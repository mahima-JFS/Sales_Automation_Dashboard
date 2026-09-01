import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  LinearProgress,
  Button,
  Divider,
} from "@mui/material";

import {
  PeopleAltOutlined,
  WhatshotOutlined,
  EventNoteOutlined,
  PersonAddAltOutlined,
  ArrowUpwardRounded,
  EmailOutlined,
  WhatsApp,
  PhoneInTalkOutlined,
  AddRounded,
} from "@mui/icons-material";

// ---- design tokens (shared with MainLayout) ------------------------------
const tokens = {
  accent: "#1F8A70",
  accentSoft: "rgba(31,138,112,0.12)",
  page: "#F5F5F2",
  paper: "#FFFFFF",
  border: "#E7E6E2",
  textPrimary: "#16171B",
  textSecondary: "#6B6D76",
  textMuted: "#9A9CA5",
};

// Status semantics kept distinct (hot/warm/new mean different things to a
// rep), but rendered as a quiet dot + label instead of a solid MUI chip.
const statusStyles = {
  Hot: { dot: "#E5484D", text: "#C0392B", bg: "#FDECEC" },
  Warm: { dot: "#F5A623", text: "#B45309", bg: "#FFF4E1" },
  New: { dot: "#6B7280", text: "#374151", bg: "#F0F0EE" },
};

const cardSx = {
  border: `1px solid ${tokens.border}`,
  borderRadius: 3,
  boxShadow: "none",
  height: "100%",
};

// Plain CSS grid helpers — deliberately NOT using MUI's <Grid> component.
// MUI v6/v7 replaced the old `item xs={..} md={..}` API with a single
// `size={{ xs, md }}` prop; a codebase on the new version silently ignores
// the old props and every "grid item" collapses to its content width
// (exactly the narrow, un-stretched cards in the screenshot). Native CSS
// grid sidesteps that version drift entirely.
const grid = (columns, gap = 2.5) => ({
  display: "grid",
  gap,
  gridTemplateColumns: columns,
});

// =====================================================
// STAT CARD
// =====================================================

const StatCard = ({ title, value, delta, icon, tint }) => (
  <Card elevation={0} sx={cardSx}>
    <CardContent sx={{ p: 2.5 }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: tint.bg,
            color: tint.fg,
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.4,
            backgroundColor: tokens.accentSoft,
            color: tokens.accent,
            borderRadius: "999px",
            px: 0.9,
            py: 0.3,
            flexShrink: 0,
          }}
        >
          <ArrowUpwardRounded sx={{ fontSize: 13 }} />
          <Typography sx={{ fontSize: 12, fontWeight: 700 }}>
            {delta}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: 13,
          color: tokens.textSecondary,
          fontWeight: 500,
          mt: 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: 28,
          fontWeight: 700,
          color: tokens.textPrimary,
          lineHeight: 1.2,
          mt: 0.25,
        }}
      >
        {value}
      </Typography>
    </CardContent>
  </Card>
);

// =====================================================
// ACTIVITY CARD
// =====================================================

const ActivityCard = ({ title, value, subtitle, icon, tint }) => (
  <Card elevation={0} sx={cardSx}>
    <CardContent>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: tint.bg,
            color: tint.fg,
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography
            sx={{ fontSize: 13, color: tokens.textSecondary, fontWeight: 500 }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ fontSize: 20, fontWeight: 700, color: tokens.textPrimary }}
          >
            {value}
          </Typography>
          <Typography sx={{ fontSize: 12.5, color: tokens.textMuted }}>
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

// =====================================================
// PROGRESS ROW (shared by both funnel cards)
// =====================================================

const ProgressRow = ({ label, value, progress }) => (
  <Box sx={{ mb: 2.75, "&:last-of-type": { mb: 0 } }}>
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        mb: 0.75,
      }}
    >
      <Typography
        sx={{ fontSize: 13.5, fontWeight: 500, color: tokens.textPrimary }}
      >
        {label}
      </Typography>
      <Typography
        sx={{ fontSize: 13.5, fontWeight: 700, color: tokens.textPrimary }}
      >
        {value}
      </Typography>
    </Box>

    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        height: 7,
        borderRadius: 5,
        backgroundColor: tokens.page,
        "& .MuiLinearProgress-bar": {
          backgroundColor: tokens.accent,
          borderRadius: 5,
        },
      }}
    />
  </Box>
);

// =====================================================
// DASHBOARD
// =====================================================

const Dashboard = () => {
  const recentLeads = [
    {
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      status: "Hot",
      source: "Website",
    },
    {
      name: "Priya Patil",
      phone: "+91 9876543211",
      status: "Warm",
      source: "WhatsApp",
    },
    {
      name: "Amit Verma",
      phone: "+91 9876543212",
      status: "New",
      source: "Facebook",
    },
    {
      name: "Sneha Joshi",
      phone: "+91 9876543213",
      status: "Hot",
      source: "Website",
    },
  ];

  const upcomingFollowups = [
    { name: "Rahul Sharma", time: "Today, 03:30 PM", type: "Call" },
    { name: "Priya Patil", time: "Today, 05:00 PM", type: "WhatsApp" },
    { name: "Amit Verma", time: "Tomorrow, 11:00 AM", type: "Meeting" },
  ];

  const funnel = [
    { label: "New Leads", value: "1,248", progress: 100 },
    { label: "Contacted", value: "936", progress: 75 },
    { label: "Qualified", value: "648", progress: 52 },
    { label: "Converted", value: "350", progress: 28 },
  ];

  const monthly = [
    { label: "January", value: "₹2,45,000", progress: 65 },
    { label: "February", value: "₹3,20,000", progress: 82 },
    { label: "March", value: "₹4,10,000", progress: 95 },
    { label: "April", value: "₹3,75,000", progress: 78 },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
          mb: 3.5,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 22, sm: 26 },
              fontWeight: 700,
              color: tokens.textPrimary,
              letterSpacing: "-0.01em",
            }}
          >
            Dashboard
          </Typography>
          <Typography
            sx={{ fontSize: 14, color: tokens.textSecondary, mt: 0.4 }}
          >
            Welcome back! Here's what's happening with your sales today.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<AddRounded />}
          disableElevation
          sx={{
            backgroundColor: tokens.accent,
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "8px",
            px: 2,
            flexShrink: 0,
            "&:hover": { backgroundColor: "#186F5C" },
          }}
        >
          Add Lead
        </Button>
      </Box>

      {/* STAT CARDS */}
      <Box sx={grid({ xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" })}>
        <StatCard
          title="Total Leads"
          value="1,248"
          delta="12%"
          icon={<PeopleAltOutlined sx={{ fontSize: 20 }} />}
          tint={{ bg: "#F0F0EE", fg: tokens.textPrimary }}
        />
        <StatCard
          title="Hot Leads"
          value="86"
          delta="8 today"
          icon={<WhatshotOutlined sx={{ fontSize: 20 }} />}
          tint={{ bg: "#FDECEC", fg: "#C0392B" }}
        />
        <StatCard
          title="Today's Follow-ups"
          value="42"
          delta="12 done"
          icon={<EventNoteOutlined sx={{ fontSize: 20 }} />}
          tint={{ bg: "#FFF4E1", fg: "#B45309" }}
        />
        <StatCard
          title="New Customers"
          value="24"
          delta="18%"
          icon={<PersonAddAltOutlined sx={{ fontSize: 20 }} />}
          tint={{ bg: tokens.accentSoft, fg: tokens.accent }}
        />
      </Box>

      {/* FUNNEL + PERFORMANCE */}
      <Box sx={{ ...grid({ xs: "1fr", lg: "repeat(2, 1fr)" }), mt: 2.5 }}>
        <Card elevation={0} sx={cardSx}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{ fontSize: 16, fontWeight: 700, color: tokens.textPrimary }}
            >
              Lead Conversion
            </Typography>
            <Typography
              sx={{ fontSize: 13, color: tokens.textSecondary, mb: 3 }}
            >
              Lead conversion performance
            </Typography>

            {funnel.map((item) => (
              <ProgressRow key={item.label} {...item} />
            ))}
          </CardContent>
        </Card>

        <Card elevation={0} sx={cardSx}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{ fontSize: 16, fontWeight: 700, color: tokens.textPrimary }}
            >
              Sales Performance
            </Typography>
            <Typography
              sx={{ fontSize: 13, color: tokens.textSecondary, mb: 3 }}
            >
              Monthly sales performance overview
            </Typography>

            {monthly.map((item) => (
              <ProgressRow key={item.label} {...item} />
            ))}
          </CardContent>
        </Card>
      </Box>

      {/* RECENT LEADS + FOLLOW-UPS */}
      <Box sx={{ ...grid({ xs: "1fr", lg: "7fr 5fr" }), mt: 2.5 }}>
        <Card elevation={0} sx={cardSx}>
          <CardContent sx={{ p: 3 }}>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: tokens.textPrimary,
                  }}
                >
                  Recent Leads
                </Typography>
                <Typography sx={{ fontSize: 13, color: tokens.textSecondary }}>
                  Recently added leads
                </Typography>
              </Box>

              <Button
                size="small"
                sx={{
                  textTransform: "none",
                  fontWeight: 600,
                  color: tokens.accent,
                  flexShrink: 0,
                }}
              >
                View all
              </Button>
            </Box>

            {recentLeads.map((lead, index) => {
              const s = statusStyles[lead.status];
              return (
                <React.Fragment key={lead.phone}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      alignItems: { xs: "flex-start", sm: "center" },
                      gap: 1.5,
                      width: "100%",
                      py: 2,
                    }}
                  >
                    <Box
                      sx={{ display: "flex", gap: 1.5, alignItems: "center" }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: tokens.accentSoft,
                          color: tokens.accent,
                          fontWeight: 700,
                          fontSize: 14,
                        }}
                      >
                        {lead.name.charAt(0)}
                      </Avatar>

                      <Box>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: tokens.textPrimary,
                          }}
                        >
                          {lead.name}
                        </Typography>
                        <Typography
                          sx={{ fontSize: 12.5, color: tokens.textSecondary }}
                        >
                          {lead.phone} · {lead.source}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.75,
                        backgroundColor: s.bg,
                        borderRadius: "999px",
                        px: 1.1,
                        py: 0.4,
                        flexShrink: 0,
                      }}
                    >
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          backgroundColor: s.dot,
                        }}
                      />
                      <Typography
                        sx={{ fontSize: 12, fontWeight: 600, color: s.text }}
                      >
                        {lead.status}
                      </Typography>
                    </Box>
                  </Box>

                  {index !== recentLeads.length - 1 && (
                    <Divider sx={{ borderColor: tokens.border }} />
                  )}
                </React.Fragment>
              );
            })}
          </CardContent>
        </Card>

        <Card elevation={0} sx={cardSx}>
          <CardContent sx={{ p: 3 }}>
            <Typography
              sx={{ fontSize: 16, fontWeight: 700, color: tokens.textPrimary }}
            >
              Upcoming Follow-ups
            </Typography>
            <Typography
              sx={{ fontSize: 13, color: tokens.textSecondary, mb: 2.5 }}
            >
              Your scheduled follow-ups
            </Typography>

            <Stack spacing={2.5}>
              {upcomingFollowups.map((followup) => (
                <Box
                  key={followup.name}
                  sx={{ display: "flex", gap: 2, alignItems: "center" }}
                >
                  <Avatar
                    sx={{
                      bgcolor: tokens.accentSoft,
                      color: tokens.accent,
                      flexShrink: 0,
                    }}
                  >
                    <EventNoteOutlined sx={{ fontSize: 20 }} />
                  </Avatar>

                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: tokens.textPrimary,
                      }}
                    >
                      {followup.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 12.5, color: tokens.textSecondary }}
                    >
                      {followup.time}
                    </Typography>
                  </Box>

                  <Chip
                    label={followup.type}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: tokens.border,
                      color: tokens.textSecondary,
                      fontWeight: 500,
                      flexShrink: 0,
                    }}
                  />
                </Box>
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Box>

      {/* COMMUNICATION STATISTICS */}
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 700,
          color: tokens.textPrimary,
          mt: 4,
          mb: 2,
        }}
      >
        Communication Statistics
      </Typography>

      <Box sx={grid({ xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" })}>
        <ActivityCard
          title="Email Statistics"
          value="1,540"
          subtitle="Emails sent this month"
          icon={<EmailOutlined sx={{ fontSize: 20 }} />}
          tint={{ bg: "#F0F0EE", fg: tokens.textPrimary }}
        />
        <ActivityCard
          title="WhatsApp Statistics"
          value="2,856"
          subtitle="Messages sent this month"
          icon={<WhatsApp sx={{ fontSize: 20 }} />}
          tint={{ bg: tokens.accentSoft, fg: tokens.accent }}
        />
        <ActivityCard
          title="AI Call Statistics"
          value="786"
          subtitle="AI calls completed"
          icon={<PhoneInTalkOutlined sx={{ fontSize: 20 }} />}
          tint={{ bg: "#FFF4E1", fg: "#B45309" }}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
