import { BrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";

import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import Header from "./pages/Website/Header";

// Automatically scroll to top whenever route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div id="top">
        <Header />

        <AppRoutes />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
