import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
      <>
      <Navbar />
      <Home />
       <div className="relative">
        <CTA />
        <Footer />
      </div>
      </>
  );
}

export default App;
