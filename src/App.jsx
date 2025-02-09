import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./Components/LoadingScreen";
import { Navbar } from "./Components/Navbar";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);


  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />


      </div>
    </>
  );
}

export default App;
