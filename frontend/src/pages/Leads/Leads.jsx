import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Stack,
  Avatar,
  TextField,
  InputAdornment,
  Button,
  MenuItem,
  Pagination,
  IconButton,
} from "@mui/material";

import {
  Search,
  Add,
  Phone,
  Email,
  MoreVert,
  PeopleAltOutlined,
} from "@mui/icons-material";

// ---- design tokens (shared with MainLayout / Dashboard) ------------------
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

const statusStyles = {
  New: { dot: "#6B7280", text: "#374151", bg: "#F0F0EE" },
  Contacted: { dot: "#2F6FEB", text: "#1D4ED8", bg: "#EAF1FE" },
  Qualified: { dot: tokens.accent, text: "#186F5C", bg: tokens.accentSoft },
  "Follow-up": { dot: "#F5A623", text: "#B45309", bg: "#FFF4E1" },
};

const priorityStyles = {
  High: { dot: "#E5484D", text: "#C0392B" },
  Medium: { dot: "#F5A623", text: "#B45309" },
  Low: { dot: "#6B7280", text: "#374151" },
};

const Badge = ({ style, label }) => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: 0.75,
      backgroundColor: style.bg ?? "transparent",
      border: style.bg ? "none" : `1px solid ${tokens.border}`,
      borderRadius: "999px",
      px: 1.1,
      py: 0.4,
      width: "fit-content",
    }}
  >
    <Box
      sx={{
        width: 6,
        height: 6,
        borderRadius: "50%",
        backgroundColor: style.dot,
        flexShrink: 0,
      }}
    />
    <Typography
      sx={{
        fontSize: 12,
        fontWeight: 600,
        color: style.text,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </Typography>
  </Box>
);

const columns = "2fr 1.6fr 1.1fr 1fr 0.9fr 1.2fr 1fr 48px";

const focusedFieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: tokens.accent,
    },
  },
  "& .MuiInputLabel-root.Mui-focused": { color: tokens.accent },
};

const Leads = () => {
  const [leads] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@gmail.com",
      phone: "+91 9876543210",
      source: "Facebook Ads",
      status: "New",
      priority: "High",
      assignedTo: "Amit Patil",
      createdAt: "31 Aug 2026",
    },
    {
      id: 2,
      name: "Priya Patil",
      email: "priya.patil@gmail.com",
      phone: "+91 9876543211",
      source: "Instagram Ads",
      status: "Contacted",
      priority: "Medium",
      assignedTo: "Sneha Joshi",
      createdAt: "30 Aug 2026",
    },
    {
      id: 3,
      name: "Amit Verma",
      email: "amit.verma@gmail.com",
      phone: "+91 9876543212",
      source: "Google Ads",
      status: "Qualified",
      priority: "High",
      assignedTo: "Rahul Patil",
      createdAt: "29 Aug 2026",
    },
    {
      id: 4,
      name: "Sneha Kulkarni",
      email: "sneha@gmail.com",
      phone: "+91 9876543213",
      source: "Website",
      status: "New",
      priority: "Low",
      assignedTo: "Amit Patil",
      createdAt: "28 Aug 2026",
    },
    {
      id: 5,
      name: "Vikas Deshmukh",
      email: "vikas@gmail.com",
      phone: "+91 9876543214",
      source: "WhatsApp",
      status: "Follow-up",
      priority: "Medium",
      assignedTo: "Sneha Joshi",
      createdAt: "27 Aug 2026",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      lead.phone.includes(search);

    const matchesStatus = !statusFilter || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <Box sx={{ p: { xs: 2, sm: 3 } }}>
      {/* PAGE HEADER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: 2,
          mb: 3,
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
            Leads
          </Typography>
          <Typography
            sx={{ fontSize: 14, color: tokens.textSecondary, mt: 0.4 }}
          >
            Manage and track all your sales leads.
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
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

      {/* FILTERS */}
      <Card
        elevation={0}
        sx={{
          border: `1px solid ${tokens.border}`,
          borderRadius: 3,
          boxShadow: "none",
          p: 2,
          mb: 3,
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <TextField
            fullWidth
            placeholder="Search by name, email or phone…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={focusedFieldSx}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ fontSize: 20, color: tokens.textMuted }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            select
            label="Status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            sx={{ minWidth: { xs: "100%", md: 200 }, ...focusedFieldSx }}
          >
            <MenuItem value="">All Status</MenuItem>
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Contacted">Contacted</MenuItem>
            <MenuItem value="Qualified">Qualified</MenuItem>
            <MenuItem value="Follow-up">Follow-up</MenuItem>
          </TextField>
        </Stack>
      </Card>

      {/* LEADS TABLE */}
      <Card
        elevation={0}
        sx={{
          border: `1px solid ${tokens.border}`,
          borderRadius: 3,
          boxShadow: "none",
          overflow: "hidden",
        }}
      >
        <Box sx={{ overflowX: "auto" }}>
          <Box sx={{ minWidth: 1000 }}>
            {/* TABLE HEADER */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: columns,
                gap: 2,
                px: 2.5,
                py: 1.75,
                bgcolor: tokens.page,
                borderBottom: `1px solid ${tokens.border}`,
              }}
            >
              {[
                "Lead",
                "Contact",
                "Source",
                "Status",
                "Priority",
                "Assigned To",
                "Created",
                "",
              ].map((h) => (
                <Typography
                  key={h}
                  sx={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: tokens.textSecondary,
                  }}
                >
                  {h}
                </Typography>
              ))}
            </Box>

            {/* TABLE ROWS */}
            {filteredLeads.map((lead) => (
              <Box
                key={lead.id}
                sx={{
                  display: "grid",
                  gridTemplateColumns: columns,
                  gap: 2,
                  alignItems: "center",
                  px: 2.5,
                  py: 2,
                  borderBottom: `1px solid ${tokens.border}`,
                  "&:last-of-type": { borderBottom: "none" },
                  "&:hover": { bgcolor: tokens.page },
                }}
              >
                {/* NAME */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    alignItems: "center",
                    minWidth: 0,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: tokens.accentSoft,
                      color: tokens.accent,
                      fontWeight: 700,
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {lead.name.charAt(0)}
                  </Avatar>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: tokens.textPrimary,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {lead.name}
                  </Typography>
                </Box>

                {/* CONTACT */}
                <Stack spacing={0.4}>
                  <Stack direction="row" spacing={0.6} alignItems="center">
                    <Email sx={{ fontSize: 14, color: tokens.textMuted }} />
                    <Typography
                      sx={{
                        fontSize: 12.5,
                        color: tokens.textSecondary,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {lead.email}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={0.6} alignItems="center">
                    <Phone sx={{ fontSize: 14, color: tokens.textMuted }} />
                    <Typography
                      sx={{ fontSize: 12.5, color: tokens.textSecondary }}
                    >
                      {lead.phone}
                    </Typography>
                  </Stack>
                </Stack>

                {/* SOURCE */}
                <Typography sx={{ fontSize: 13.5, color: tokens.textPrimary }}>
                  {lead.source}
                </Typography>

                {/* STATUS */}
                <Badge style={statusStyles[lead.status]} label={lead.status} />

                {/* PRIORITY */}
                <Badge
                  style={priorityStyles[lead.priority]}
                  label={lead.priority}
                />

                {/* ASSIGNED */}
                <Typography sx={{ fontSize: 13.5, color: tokens.textPrimary }}>
                  {lead.assignedTo}
                </Typography>

                {/* CREATED */}
                <Typography
                  sx={{ fontSize: 13.5, color: tokens.textSecondary }}
                >
                  {lead.createdAt}
                </Typography>

                {/* ACTION */}
                <IconButton
                  size="small"
                  sx={{
                    color: tokens.textMuted,
                    "&:hover": { color: tokens.textPrimary },
                  }}
                >
                  <MoreVert sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>

        {/* NO DATA */}
        {filteredLeads.length === 0 && (
          <Box sx={{ p: 6, textAlign: "center" }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "12px",
                backgroundColor: tokens.page,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 1.5,
              }}
            >
              <PeopleAltOutlined
                sx={{ fontSize: 22, color: tokens.textMuted }}
              />
            </Box>
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, color: tokens.textPrimary }}
            >
              No leads found
            </Typography>
            <Typography
              sx={{ fontSize: 13, color: tokens.textSecondary, mt: 0.5 }}
            >
              Try adjusting your search or filter.
            </Typography>
          </Box>
        )}

        {/* PAGINATION */}
        {filteredLeads.length > 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2.5,
              py: 2,
              borderTop: `1px solid ${tokens.border}`,
            }}
          >
            <Typography sx={{ fontSize: 13, color: tokens.textSecondary }}>
              Showing {filteredLeads.length} of {leads.length} leads
            </Typography>

            <Pagination
              count={1}
              page={1}
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: tokens.accent,
                  color: "#fff",
                  "&:hover": { backgroundColor: "#186F5C" },
                },
              }}
            />
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default Leads;
