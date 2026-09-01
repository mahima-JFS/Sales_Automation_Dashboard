import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer";
import Header from "./pages/Website/Header";

function App() {
  return (
    <BrowserRouter>
      <div id="top">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
