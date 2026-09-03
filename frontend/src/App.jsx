import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import Header from "./pages/Website/Header";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const { pathname } = useLocation();

  // Pages without Header and Footer
  const isAuthPage = pathname === "/login";

  return (
    <>
      <ScrollToTop />

      <div id="top">
        {/* WEBSITE HEADER */}
        {!isAuthPage && <Header />}

        {/* ALL ROUTES */}
        <AppRoutes />

        {/* WEBSITE FOOTER */}
        {!isAuthPage && <Footer />}
      </div>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
