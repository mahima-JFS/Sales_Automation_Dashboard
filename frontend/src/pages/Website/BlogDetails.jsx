import React from "react";
import FAQHome from "./FAQHome";

import {
  Box,
  Breadcrumbs,
  Container,
  Typography,
  Link,
  Divider,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import {
  CalendarMonth,
  AccessTime,
  MenuBook,
  ChevronRight,
  ExpandMore,
  WhatsApp,
  ChatBubble,
} from "@mui/icons-material";

import { Link as RouterLink, useParams } from "react-router-dom";
import { blogData, createSlug } from "./Blog";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogData.find((item) => createSlug(item.title) === slug);

  if (!blog) {
    return (
      <Container
        maxWidth="lg"
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 10,
        }}
      >
        <Alert
          severity="error"
          sx={{
            width: "100%",
            maxWidth: "700px",
            mb: 3,
          }}
        >
          Blog article not found.
        </Alert>

        <Link
          component={RouterLink}
          to="/blog"
          underline="none"
          sx={{
            color: "#ff5a1f",
            fontSize: 10,
            fontWeight: 700,
          }}
        >
          ← Back to Blog
        </Link>
      </Container>
    );
  }

  const title = blog.title || "Untitled Blog";

  const date = blog.date || "";

  const description = blog.description || "";

  const image = blog.image || "";

  const formatDate = (value) => {
    if (!value) return "";

    const parsedDate = new Date(value);

    if (Number.isNaN(parsedDate.getTime())) {
      return value;
    }

    return parsedDate.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const readTime = "10 min read";

  const getArticleData = (blogTitle) => {
    const lowerTitle = String(blogTitle).toLowerCase();

    if (lowerTitle.includes("cod") && lowerTitle.includes("prepaid")) {
      return {
        contents: [
          {
            id: "section-1",
            title: "The Economics of Converting COD to Prepaid",
          },
          {
            id: "section-2",
            title: "Why Manual Prepaid Conversion Fails",
          },
          {
            id: "section-3",
            title: "AI Voice and WhatsApp Automation",
          },
          {
            id: "section-4",
            title: "The Automated Conversion Workflow",
          },
          {
            id: "section-5",
            title: "Payment Confirmation and Order Updates",
          },
          {
            id: "section-6",
            title: "How Automation Improves Revenue",
          },
        ],

        sections: [
          {
            id: "section-1",
            title: "The Economics of Converting COD to Prepaid",
            paragraphs: [
              "Cash-on-delivery orders can create additional operational costs for e-commerce businesses. Failed deliveries, return-to-origin shipments, reverse logistics and customer support can reduce the profitability of an order.",
              "Converting a customer from COD to prepaid before dispatch can reduce these risks while improving payment certainty.",
            ],
          },

          {
            id: "section-2",
            title: "Why Manual Prepaid Conversion Fails",
            paragraphs: [
              "Traditional teams often depend on manual calls and messages to convince customers to convert their COD orders into prepaid orders.",
              "This approach becomes difficult when order volumes increase. Sales representatives may miss customers, follow-ups may happen late, and there may be no consistent process for tracking payment conversions.",
            ],
          },

          {
            id: "section-3",
            title: "AI Voice and WhatsApp Automation",
            paragraphs: [
              "AI voice automation can contact customers shortly after an order is created and explain the benefits of converting the order to prepaid.",
              "WhatsApp can then provide a secure payment link so the customer can complete the payment without requiring a manual intervention from the sales team.",
            ],
          },

          {
            id: "section-4",
            title: "The Automated Conversion Workflow",
            paragraphs: [
              "The workflow can begin when a COD order is created. The automation platform identifies the order and starts a predefined communication sequence.",
              "An AI voice agent can call the customer, explain the prepaid option and direct the customer to a secure payment link. If the customer does not respond, WhatsApp can be used for a follow-up message.",
            ],
          },

          {
            id: "section-5",
            title: "Payment Confirmation and Order Updates",
            paragraphs: [
              "After the customer completes payment, the payment gateway can send a confirmation event to the system.",
              "The order status can then be updated automatically so the operations team knows that the payment has been completed.",
            ],
          },

          {
            id: "section-6",
            title: "How Automation Improves Revenue",
            paragraphs: [
              "The biggest benefit of automated COD conversion is the ability to run the process consistently across a large number of orders.",
              "By combining AI voice calls, WhatsApp messages and payment automation, businesses can reduce manual work while creating a more structured customer journey.",
            ],
          },
        ],
      };
    }

    // --------------------------------------------------------
    // REAL ESTATE CRM
    // --------------------------------------------------------

    if (lowerTitle.includes("real estate") || lowerTitle.includes("crm")) {
      return {
        contents: [
          {
            id: "section-1",
            title: "Why Real Estate Developers Need Automation",
          },
          {
            id: "section-2",
            title: "Lead Management for High-Volume Projects",
          },
          {
            id: "section-3",
            title: "WhatsApp and Automated Follow-Ups",
          },
          {
            id: "section-4",
            title: "Sales Team Productivity",
          },
          {
            id: "section-5",
            title: "Campaign and Lead Analytics",
          },
          {
            id: "section-6",
            title: "Choosing the Right CRM",
          },
        ],

        sections: [
          {
            id: "section-1",
            title: "Why Real Estate Developers Need Automation",
            paragraphs: [
              "Real estate developers often receive leads from multiple marketing channels including websites, social media, paid advertising and property portals.",
              "A CRM helps centralize these leads and gives sales teams a structured way to manage customer conversations.",
            ],
          },
          {
            id: "section-2",
            title: "Lead Management for High-Volume Projects",
            paragraphs: [
              "When a project receives hundreds or thousands of enquiries, manual lead management becomes difficult.",
              "Automated assignment, lead qualification and follow-up workflows help sales teams prioritize prospects who are more likely to convert.",
            ],
          },
          {
            id: "section-3",
            title: "WhatsApp and Automated Follow-Ups",
            paragraphs: [
              "WhatsApp automation can help sales teams communicate with prospects quickly after a lead is generated.",
              "Automated reminders and personalized messages can reduce delays between lead generation and the first sales interaction.",
            ],
          },
          {
            id: "section-4",
            title: "Sales Team Productivity",
            paragraphs: [
              "A centralized CRM reduces repetitive administrative work by keeping lead information, conversations and follow-up activities together.",
              "Sales representatives can spend more time talking to qualified prospects instead of maintaining multiple spreadsheets.",
            ],
          },
          {
            id: "section-5",
            title: "Campaign and Lead Analytics",
            paragraphs: [
              "Analytics allow management teams to understand which campaigns generate quality leads and which channels produce the highest conversion rates.",
            ],
          },
          {
            id: "section-6",
            title: "Choosing the Right CRM",
            paragraphs: [
              "The right CRM should provide lead management, communication automation, reporting, campaign tracking and an easy workflow for sales teams.",
            ],
          },
        ],
      };
    }

    // --------------------------------------------------------
    // EDUCATION
    // --------------------------------------------------------

    if (lowerTitle.includes("education") || lowerTitle.includes("admission")) {
      return {
        contents: [
          {
            id: "section-1",
            title: "Managing Education Leads",
          },
          {
            id: "section-2",
            title: "Lead Qualification",
          },
          {
            id: "section-3",
            title: "WhatsApp Admission Follow-Ups",
          },
          {
            id: "section-4",
            title: "Automated Student Communication",
          },
          {
            id: "section-5",
            title: "Reducing Missed Opportunities",
          },
          {
            id: "section-6",
            title: "Admission Analytics",
          },
        ],

        sections: [
          {
            id: "section-1",
            title: "Managing Education Leads",
            paragraphs: [
              "Educational institutions receive enquiries through websites, advertisements, social media and referral campaigns.",
              "A centralized lead management system makes it easier for admission teams to organize and respond to these enquiries.",
            ],
          },
          {
            id: "section-2",
            title: "Lead Qualification",
            paragraphs: [
              "Not every enquiry represents the same level of admission intent.",
              "Automated questions can help identify the student's course interest, location, preferred intake and other relevant information.",
            ],
          },
          {
            id: "section-3",
            title: "WhatsApp Admission Follow-Ups",
            paragraphs: [
              "WhatsApp can be used to send course information, application reminders and follow-up messages to prospective students.",
            ],
          },
          {
            id: "section-4",
            title: "Automated Student Communication",
            paragraphs: [
              "Automation helps admission teams maintain consistent communication without requiring representatives to manually send every reminder.",
            ],
          },
          {
            id: "section-5",
            title: "Reducing Missed Opportunities",
            paragraphs: [
              "Fast responses and scheduled follow-ups can help institutions reduce the number of enquiries that become inactive because they were not contacted on time.",
            ],
          },
          {
            id: "section-6",
            title: "Admission Analytics",
            paragraphs: [
              "Analytics can show which campaigns generate enquiries and how many of those enquiries progress through the admission funnel.",
            ],
          },
        ],
      };
    }

    // --------------------------------------------------------
    // WHATSAPP VS EMAIL
    // --------------------------------------------------------

    if (lowerTitle.includes("whatsapp") && lowerTitle.includes("email")) {
      return {
        contents: [
          {
            id: "section-1",
            title: "WhatsApp vs Email Engagement",
          },
          {
            id: "section-2",
            title: "Speed of Communication",
          },
          {
            id: "section-3",
            title: "Personalized Conversations",
          },
          {
            id: "section-4",
            title: "Automated Follow-Ups",
          },
          {
            id: "section-5",
            title: "When Email Works Better",
          },
          {
            id: "section-6",
            title: "Combining Both Channels",
          },
        ],

        sections: [
          {
            id: "section-1",
            title: "WhatsApp vs Email Engagement",
            paragraphs: [
              "WhatsApp and email serve different communication purposes. WhatsApp is useful for direct conversational communication, while email is often better suited for longer-form information and formal communication.",
            ],
          },
          {
            id: "section-2",
            title: "Speed of Communication",
            paragraphs: [
              "WhatsApp conversations can provide a fast way to communicate with customers immediately after an enquiry or transaction.",
            ],
          },
          {
            id: "section-3",
            title: "Personalized Conversations",
            paragraphs: [
              "Automated WhatsApp messages can be personalized using customer and campaign information while still following predefined communication workflows.",
            ],
          },
          {
            id: "section-4",
            title: "Automated Follow-Ups",
            paragraphs: [
              "Both WhatsApp and email can be integrated into automated follow-up sequences to keep prospects engaged throughout the sales journey.",
            ],
          },
          {
            id: "section-5",
            title: "When Email Works Better",
            paragraphs: [
              "Email remains valuable when businesses need to send detailed documents, newsletters, reports or longer-form information.",
            ],
          },
          {
            id: "section-6",
            title: "Combining Both Channels",
            paragraphs: [
              "Rather than choosing only one channel, businesses can combine WhatsApp and email to create an omnichannel customer communication strategy.",
            ],
          },
        ],
      };
    }

    // --------------------------------------------------------
    // DEFAULT ARTICLE
    // --------------------------------------------------------

    return {
      contents: [
        {
          id: "section-1",
          title: "Understanding the Challenge",
        },
        {
          id: "section-2",
          title: "Why Automation Matters",
        },
        {
          id: "section-3",
          title: "Building an Automated Workflow",
        },
        {
          id: "section-4",
          title: "Improving Sales Productivity",
        },
        {
          id: "section-5",
          title: "Measuring Performance",
        },
        {
          id: "section-6",
          title: "The Future of Sales Automation",
        },
      ],

      sections: [
        {
          id: "section-1",
          title: "Understanding the Challenge",
          paragraphs: [
            description ||
              "Modern sales teams often manage leads across multiple communication channels. Without a structured workflow, important follow-ups can easily be missed.",
          ],
        },
        {
          id: "section-2",
          title: "Why Automation Matters",
          paragraphs: [
            "Automation allows businesses to handle repetitive communication tasks consistently while allowing sales teams to focus on high-value conversations.",
          ],
        },
        {
          id: "section-3",
          title: "Building an Automated Workflow",
          paragraphs: [
            "A successful automation workflow can combine lead capture, qualification, communication, reminders and analytics into a single process.",
          ],
        },
        {
          id: "section-4",
          title: "Improving Sales Productivity",
          paragraphs: [
            "Automating repetitive tasks can reduce administrative work and help sales representatives spend more time engaging with potential customers.",
          ],
        },
        {
          id: "section-5",
          title: "Measuring Performance",
          paragraphs: [
            "Businesses should track response rates, conversion rates, campaign performance and revenue contribution to understand the impact of automation.",
          ],
        },
        {
          id: "section-6",
          title: "The Future of Sales Automation",
          paragraphs: [
            "AI, WhatsApp, email and voice automation are increasingly becoming important parts of modern sales communication strategies.",
          ],
        },
      ],
    };
  };

  const articleData = getArticleData(title);

  const recentPosts = blogData
    .filter((item) => item.id !== blog.id)
    .slice(0, 6);

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) {
      return "";
    }

    return String(imageUrl).trim();
  };

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",

        pt: { xs: 3, sm: 5, md: 7 },
        px: { xs: 2, sm: 3 },
        pb: { xs: 2, sm: 3, md: 3 },

        backgroundColor: "#FDFDFF",

        // Layered mesh gradient — indigo, orange, and a hint of pink
        backgroundImage: `
                        radial-gradient(at 15% 20%, rgba(79, 70, 229, 0.16) 0px, transparent 50%),
                        radial-gradient(at 85% 10%, rgba(255, 104, 17, 0.14) 0px, transparent 50%),
                        radial-gradient(at 50% 60%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
                        radial-gradient(at 90% 80%, rgba(79, 70, 229, 0.10) 0px, transparent 50%)
                      `,
      }}
    >
      {/* Fine noise/texture overlay — keeps the mesh from looking too "smooth/plasticky" */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          width: "100%",
          // backgroundColor: "#ffffff",
          color: "#07182f",
          // overflowX: "hidden",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: { xs: 2, sm: 4, md: 6 },
            // pt: { xs: 5, md: 8 },
            pb: { xs: 5, md: 8 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Soft background accent behind the text column only */}
          <Box
            sx={{
              position: "absolute",
              top: "-10%",
              left: "-5%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,90,31,0.06) 0%, rgba(255,90,31,0) 70%)",
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 5, md: 7 },
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* LEFT SIDE — now filled with hierarchy */}
            <Box>
              {/* <Breadcrumbs
                separator={<ChevronRight sx={{ fontSize: 14 }} />}
                sx={{ mb: 2.5, fontSize: 13, color: "#777" }}
              >
                <Link
                  component={RouterLink}
                  to="/blog"
                  underline="hover"
                  sx={{ color: "#777", fontSize: 13 }}
                >
                  Blog
                </Link>
                <Typography
                  sx={{ fontSize: 13, color: "#ff5a1f", fontWeight: 600 }}
                >
                  Education
                </Typography>
              </Breadcrumbs> */}

              <Box
                sx={{
                  display: "inline-block",
                  bgcolor: "#ffe0d2",
                  color: "#ff5a1f",
                  fontSize: 13,
                  fontWeight: 700,
                  px: 2,
                  py: 0.6,
                  borderRadius: "20px",
                  mb: 2.5,
                }}
              >
                Education Sector
              </Box>

              {/* Title */}
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: 28, sm: 34, md: 42, lg: 46 },
                  lineHeight: 1.15,
                  fontWeight: 800,
                  letterSpacing: "-1.5px",
                  color: "#050505",
                  mb: 3,
                }}
              >
                {title}
              </Typography>

              {/* Description preview — fills space, gives context */}
              {description && (
                <Typography
                  sx={{
                    fontSize: { xs: 15, md: 18 },
                    lineHeight: 1.7,
                    color: "#555",
                    mb: 4,
                    maxWidth: "480px",
                  }}
                >
                  {description}
                </Typography>
              )}

              <Divider sx={{ mb: 3, borderColor: "#eee" }} />

              {/* Meta row — date, read time, share */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarMonth sx={{ fontSize: 19, color: "#777" }} />
                    <Typography sx={{ fontSize: 14, color: "#777" }}>
                      {formatDate(date)}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <AccessTime sx={{ fontSize: 19, color: "#777" }} />
                    <Typography sx={{ fontSize: 14, color: "#777" }}>
                      {readTime}
                    </Typography>
                  </Box>
                </Box>

                {/* Share icons — fills right edge of the row */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      border: "1px solid #eee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      "&:hover": { borderColor: "#ff5a1f" },
                    }}
                  >
                    <WhatsApp sx={{ fontSize: 17, color: "#25D366" }} />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* RIGHT IMAGE — unchanged */}
            <Box
              sx={{
                width: "100%",
                height: { xs: 280, sm: 360, md: 460 },
                overflow: "hidden",
                borderRadius: { xs: "18px", md: "18px" },
                backgroundColor: "#f3f4f6",
              }}
            >
              {image ? (
                <Box
                  component="img"
                  src={getImageUrl(image)}
                  alt={title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography color="text.secondary">
                    No image available
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Container>

        {/* ======================================================
          ARTICLE + CONTENTS
      ====================================================== */}

        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: {
              xs: 2,
              sm: 3,
              md: 5,
            },
            py: {
              xs: 5,
              md: 8,
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "350px 1fr",
              },
              gap: {
                xs: 4,
                lg: 5,
              },
              alignItems: "start",
            }}
          >
            {/* ==================================================
              CONTENTS
          ================================================== */}

            <Box
              sx={{
                border: "1px solid #dedede",
                borderRadius: "24px",
                backgroundColor: "#fafafa",
                p: {
                  xs: 3,
                  md: 4,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: "16px",
                    backgroundColor: "#ffe0d2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MenuBook
                    sx={{
                      color: "#ff5a1f",
                      fontSize: 30,
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 25,
                      fontWeight: 800,
                      color: "#111",
                    }}
                  >
                    Contents
                  </Typography>

                  <Typography
                    sx={{
                      color: "#555",
                      fontSize: 15,
                    }}
                  >
                    {articleData.contents.length} sections
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 2 }} />

              {articleData.contents.map((item, index) => {
                const itemId = item.id || `section-${index + 1}`;

                return (
                  <Box
                    key={itemId}
                    component="a"
                    href={`#${itemId}`}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 1.5,
                      py: 1.6,
                      textDecoration: "none",
                      color: "#697386",
                      cursor: "pointer",

                      "&:hover": {
                        color: "#ff5a1f",
                      },
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: "#ff5a1f",
                        fontSize: 20,
                        lineHeight: 1,
                      }}
                    >
                      ›
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 15,
                        lineHeight: 1.45,
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            {/* ARTICLE */}
            <Box
              sx={{
                border: "1px solid #dedede",
                borderRadius: "24px",
                backgroundColor: "#fafafa",
                p: {
                  xs: 3,
                  sm: 4,
                  md: 5,
                },

                height: {
                  lg: "calc(110vh - 150px)",
                },

                overflowY: {
                  lg: "auto",
                },

                overflowX: "hidden",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: 10,
                    md: 25,
                  },
                  lineHeight: 1.25,
                  fontWeight: 800,
                  color: "#111",
                  mb: 3,
                }}
              >
                {title}
              </Typography>

              {/* DESCRIPTION */}

              {description && (
                <Typography
                  sx={{
                    fontSize: {
                      xs: 10,
                      md: 20,
                    },
                    lineHeight: 1.65,
                    color: "#555",
                    mb: 4,
                  }}
                >
                  {description}
                </Typography>
              )}

              {/* ARTICLE SECTIONS */}

              {articleData.sections.map((section) => (
                <Box
                  key={section.id}
                  id={section.id}
                  sx={{
                    scrollMarginTop: "100px",
                    mb: 5,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontSize: {
                        xs: 10,
                        md: 25,
                      },
                      lineHeight: 1.3,
                      fontWeight: 800,
                      color: "#111",
                      mb: 2,
                    }}
                  >
                    {section.title}
                  </Typography>

                  {section.paragraphs.map((paragraph, index) => (
                    <Typography
                      key={index}
                      component="p"
                      sx={{
                        fontSize: {
                          xs: 10,
                          md: 20,
                        },
                        lineHeight: 1.7,
                        color: "#222",
                        mb: 2.5,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Container>

        {/* ======================================================
          RECENT POSTS
      ====================================================== */}

        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1400px",
            mx: "auto",
            px: {
              xs: 2,
              sm: 3,
              md: 5,
            },
            pb: 8,
          }}
        >
          <Box
            sx={{
              border: "1px solid #dedede",
              borderRadius: "24px",
              backgroundColor: "#fafafa",
              p: {
                xs: 3,
                md: 4,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 26,
                fontWeight: 800,
                color: "#111",
                mb: 3,
              }}
            >
              Recent Posts
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1fr",
                },
                columnGap: 6,
              }}
            >
              {recentPosts.map((item) => {
                const itemTitle = item.title || "Untitled Blog";

                const itemSlug = createSlug(itemTitle);

                return (
                  <Box
                    key={item.id}
                    component={RouterLink}
                    to={`/blog/${itemSlug}`}
                    sx={{
                      display: "block",
                      textDecoration: "none",
                      color: "#111",
                      py: 2.5,

                      "&:hover .recent-title": {
                        color: "#ff5a1f",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 20,
                          lineHeight: 1,
                          color: "#ff5a1f",
                        }}
                      >
                        ›
                      </Typography>

                      <Box>
                        <Typography
                          className="recent-title"
                          sx={{
                            fontSize: {
                              xs: 10,
                              md: 20,
                            },
                            lineHeight: 1.45,
                            fontWeight: 500,
                            transition: "0.2s",
                          }}
                        >
                          {itemTitle}
                        </Typography>

                        <Typography
                          sx={{
                            mt: 1,
                            fontSize: 15,
                            color: "#555",
                          }}
                        >
                          {formatDate(item.date)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Container>

        <FAQHome />
      </Box>
    </Box>
  );
};

export default BlogDetails;
