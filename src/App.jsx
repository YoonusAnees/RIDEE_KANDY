import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="">
        <div className='bg-[url("/src/assets/Home.jpg")] bg-cover bg-center h-screen w-full backdrop-brightness-50'>
        <Navbar  />
        <Home />

      </div>
      </div>
    </>
  );
}

export default App;

