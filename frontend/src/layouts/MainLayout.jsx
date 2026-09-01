import { useState, useMemo } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Badge,
  Tooltip,
  Divider,
  InputBase,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import CampaignIcon from "@mui/icons-material/Campaign";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EventIcon from "@mui/icons-material/Event";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

// ---- design tokens -------------------------------------------------------
// Ink sidebar + a single deep-teal signal color used only for the active
// state and the brand mark. Everything else stays quiet neutrals so the
// accent actually reads as intentional rather than decorative.
const tokens = {
  ink: "#15171C",
  inkBorder: "rgba(255,255,255,0.08)",
  textMuted: "#9A9CA5",
  textOnInk: "#F4F4F5",
  accent: "#1F8A70",
  accentSoft: "rgba(31,138,112,0.14)",
  page: "#F5F5F2",
  paper: "#FFFFFF",
  border: "#E7E6E2",
  textPrimary: "#16171B",
  textSecondary: "#6B6D76",
};

const EXPANDED_WIDTH = 264;
const RAIL_WIDTH = 76;

const navGroups = [
  {
    label: "Overview",
    items: [
      { text: "Dashboard", path: "/", icon: DashboardIcon },
      { text: "Analytics", path: "/analytics", icon: AnalyticsIcon },
    ],
  },
  {
    label: "Pipeline",
    items: [
      { text: "Leads", path: "/leads", icon: PeopleIcon },
      { text: "Lead Sources", path: "/lead-sources", icon: CampaignIcon },
      { text: "Follow-ups", path: "/follow-ups", icon: EventIcon },
    ],
  },
  {
    label: "Outreach",
    items: [
      { text: "Automation", path: "/automation", icon: AutoAwesomeIcon },
      { text: "Email", path: "/email", icon: EmailIcon },
      { text: "WhatsApp", path: "/whatsapp", icon: WhatsAppIcon },
      { text: "AI Calls", path: "/ai-calls", icon: PhoneInTalkIcon },
    ],
  },
  {
    label: "System",
    items: [{ text: "Settings", path: "/settings", icon: SettingsIcon }],
  },
];

const allItems = navGroups.flatMap((g) => g.items);

const MainLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const activePath = useMemo(() => {
    const match = allItems.find((item) =>
      location.pathname.startsWith(item.path),
    );
    return match?.path ?? allItems[0].path;
  }, [location.pathname]);

  const activePage = allItems.find((item) => item.path === activePath);
  const drawerWidth = collapsed ? RAIL_WIDTH : EXPANDED_WIDTH;

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);
  const handleNav = (path) => {
    navigate(path);
    if (isMobile) setMobileOpen(false);
  };

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: tokens.ink,
        color: tokens.textOnInk,
      }}
    >
      {/* Brand */}
      <Box
        sx={{
          height: 64,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          px: collapsed ? 0 : 2.5,
          borderBottom: `1px solid ${tokens.inkBorder}`,
        }}
      >
        {!collapsed && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.25 }}>
            <Box
              sx={{
                width: 28,
                height: 28,
                borderRadius: "8px",
                backgroundColor: tokens.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 14,
                color: "#0B1210",
                flexShrink: 0,
              }}
            >
              S
            </Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{
                color: tokens.textOnInk,
                whiteSpace: "nowrap",
                letterSpacing: "-0.01em",
              }}
            >
              Sales Automation
            </Typography>
          </Box>
        )}

        {!isMobile && (
          <IconButton
            onClick={() => setCollapsed((prev) => !prev)}
            size="small"
            sx={{
              color: tokens.textMuted,
              "&:hover": { color: tokens.textOnInk },
            }}
          >
            {collapsed ? (
              <ChevronRightIcon fontSize="small" />
            ) : (
              <ChevronLeftIcon fontSize="small" />
            )}
          </IconButton>
        )}
      </Box>

      {/* Nav */}
      <Box
        sx={{ flexGrow: 1, overflowY: "auto", overflowX: "hidden", py: 1.5 }}
      >
        {navGroups.map((group) => (
          <Box key={group.label} sx={{ px: collapsed ? 1 : 1.5, mb: 1.5 }}>
            {!collapsed && (
              <Typography
                sx={{
                  fontSize: 11.5,
                  fontWeight: 600,
                  color: tokens.textMuted,
                  px: 1.5,
                  mb: 0.5,
                  letterSpacing: "0.01em",
                }}
              >
                {group.label}
              </Typography>
            )}

            <List sx={{ py: 0 }}>
              {group.items.map((item) => {
                const isActive = item.path === activePath;
                const Icon = item.icon;

                const button = (
                  <ListItemButton
                    key={item.text}
                    onClick={() => handleNav(item.path)}
                    sx={{
                      borderRadius: "8px",
                      mb: 0.25,
                      minHeight: 40,
                      justifyContent: collapsed ? "center" : "flex-start",
                      px: collapsed ? 1 : 1.5,
                      position: "relative",
                      backgroundColor: isActive
                        ? tokens.accentSoft
                        : "transparent",
                      "&:hover": {
                        backgroundColor: isActive
                          ? tokens.accentSoft
                          : "rgba(255,255,255,0.06)",
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 6,
                        bottom: 6,
                        width: 3,
                        borderRadius: "0 3px 3px 0",
                        backgroundColor: isActive
                          ? tokens.accent
                          : "transparent",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: collapsed ? "auto" : 38,
                        color: isActive ? tokens.accent : tokens.textMuted,
                      }}
                    >
                      <Icon fontSize="small" />
                    </ListItemIcon>

                    {!collapsed && (
                      <ListItemText
                        primary={item.text}
                        primaryTypographyProps={{
                          fontSize: 13.5,
                          fontWeight: isActive ? 600 : 500,
                          color: isActive ? tokens.textOnInk : "#C7C8CD",
                        }}
                      />
                    )}
                  </ListItemButton>
                );

                return collapsed ? (
                  <Tooltip key={item.text} title={item.text} placement="right">
                    <span>{button}</span>
                  </Tooltip>
                ) : (
                  button
                );
              })}
            </List>
          </Box>
        ))}
      </Box>

      {/* Account footer */}
      <Box
        sx={{
          borderTop: `1px solid ${tokens.inkBorder}`,
          p: collapsed ? 1 : 1.5,
          display: "flex",
          alignItems: "center",
          gap: 1.25,
          justifyContent: collapsed ? "center" : "flex-start",
        }}
      >
        <Avatar
          sx={{ width: 32, height: 32, fontSize: 14, bgcolor: tokens.accent }}
        >
          RN
        </Avatar>
        {!collapsed && (
          <Box sx={{ minWidth: 0, flexGrow: 1 }}>
            <Typography
              noWrap
              sx={{ fontSize: 13, fontWeight: 600, color: tokens.textOnInk }}
            >
              Riya Nair
            </Typography>
            <Typography noWrap sx={{ fontSize: 12, color: tokens.textMuted }}>
              Sales Manager
            </Typography>
          </Box>
        )}
        {!collapsed && (
          <IconButton size="small" sx={{ color: tokens.textMuted }}>
            <LogoutIcon fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: tokens.page }}
    >
      {/* ================= HEADER ================= */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: tokens.paper,
          color: tokens.textPrimary,
          borderBottom: `1px solid ${tokens.border}`,
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          ml: { xs: 0, md: `${drawerWidth}px` },
          transition: theme.transitions.create(["width", "margin"], {
            duration: 200,
          }),
        }}
      >
        <Toolbar sx={{ gap: 1.5 }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "flex", md: "none" }, mr: 0.5 }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="h6"
              fontWeight={600}
              noWrap
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "19px" },
                letterSpacing: "-0.01em",
              }}
            >
              {activePage?.text ?? "Dashboard"}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* Search */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              gap: 1,
              backgroundColor: tokens.page,
              border: `1px solid ${tokens.border}`,
              borderRadius: "8px",
              px: 1.5,
              height: 36,
              width: 240,
            }}
          >
            <SearchIcon sx={{ fontSize: 18, color: tokens.textSecondary }} />
            <InputBase
              placeholder="Search leads, contacts…"
              sx={{ fontSize: 13.5, width: "100%", color: tokens.textPrimary }}
            />
          </Box>

          <IconButton sx={{ color: tokens.textSecondary }}>
            <Badge variant="dot" color="error" overlap="circular">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ my: 1.5, borderColor: tokens.border }}
          />

          <IconButton
            onClick={(e) => setMenuAnchor(e.currentTarget)}
            sx={{ p: 0.5 }}
          >
            <Avatar
              sx={{
                width: 32,
                height: 32,
                fontSize: 14,
                bgcolor: tokens.accent,
              }}
            >
              RN
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={() => setMenuAnchor(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={() => setMenuAnchor(null)}>Profile</MenuItem>
            <MenuItem onClick={() => setMenuAnchor(null)}>
              Account settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => setMenuAnchor(null)}>Sign out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* ================= SIDEBAR ================= */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          width: drawerWidth,
          flexShrink: 0,
          transition: theme.transitions.create("width", { duration: 200 }),
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            border: "none",
            transition: theme.transitions.create("width", { duration: 200 }),
            overflowX: "hidden",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: EXPANDED_WIDTH,
            boxSizing: "border-box",
            border: "none",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* ================= MAIN CONTENT ================= */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
          minHeight: "100vh",
          p: { xs: 2, sm: 3, md: 4 },
          mt: "64px",
          overflowX: "hidden",
          transition: theme.transitions.create("width", { duration: 200 }),
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
