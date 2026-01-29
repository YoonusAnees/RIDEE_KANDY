import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />

      {/* <main className="pt-[clamp(64px,8vh,90px)]"> */}
      <Home />
      <CTA />
      <Footer />
      {/* </main> */}
    </>
  );
}

export default App;

