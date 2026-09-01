import { Box, Container, Divider, Typography } from "@mui/material";

// Stat numbers/labels — edit these to change the section's content.
const STATS = [
  { value: "40%", label: "less manual work" },
  { value: "50%", label: "faster lead outreach" },
  { value: "30%", label: "lower outreach stack cost" },
];

export default function StatsSection() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        bgcolor: "#f2f2f3",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 4, sm: 0 },
          }}
        >
          {STATS.map((stat, index) => (
            <Box
              key={stat.label}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box sx={{ textAlign: "center", px: { xs: 0, sm: 5, md: 8 } }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "2.5rem", sm: "3rem" },
                    color: "#F97316",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 16,
                    color: "#64748B",
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>

              {index !== STATS.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    display: { xs: "none", sm: "block" },
                    borderColor: "#E2E8F0",
                    height: 60,
                    alignSelf: "center",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
