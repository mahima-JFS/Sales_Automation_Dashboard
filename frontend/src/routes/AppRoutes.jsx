import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

// Pages
import Dashboard from "../pages/Dashboard/Dashboard";
import Leads from "../pages/Leads/Leads";
import Home from "../pages/Website/Home";
import ContactUs from "../pages/Website/ContactUs";
import Blog from "../pages/Website/Blog";
import Pricing from "../pages/Website/Pricing";
import Features from "../pages/Website/Features";
import Comparisons from "../pages/Website/Comparisons";
import BookDemo from "../pages/Website/BookDemo";

// import LeadSources from "../pages/LeadSources/LeadSources";
// import Automation from "../pages/Automation/Automation";
// import Email from "../pages/Email/Email";
// import WhatsApp from "../pages/WhatsApp/WhatsApp";
// import AICalls from "../pages/AICalls/AICalls";
// import FollowUps from "../pages/FollowUps/FollowUps";
// import Analytics from "../pages/Analytics/Analytics";
// import Settings from "../pages/Settings/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/comparisons" element={<Comparisons />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
      </Route>
      {/* Main Dashboard Layout */}
      {/* <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="leads" element={<Leads />} />
      </Route> */}
    </Routes>
  );
};

export default AppRoutes;

// sora sora fallback
