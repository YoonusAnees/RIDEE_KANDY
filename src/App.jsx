import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className='bg-[url("/src/assets/hotelhero.jpg")] bg-cover bg-center h-screen w-full'>
        <Navbar  />
        <Home />
        
      </div>
    </>
  );
}

export default App;

