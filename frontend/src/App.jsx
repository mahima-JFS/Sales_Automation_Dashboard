import { BrowserRouter } from "react-router-dom"; 
import AppRoutes from "./routes/AppRoutes"; 
import Footer from "./components/Footer"; 
 
function App() { 
  return ( 
    <BrowserRouter> 
      <div id="top"> 
        <AppRoutes /> 
        <Footer /> 
      </div> 
    </BrowserRouter> 
  ); 
} 
 
export default App; this 