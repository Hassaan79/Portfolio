import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./Components/LoadingScreen";
import "./index.css";

function App() {
  const [isLoaded, setLoaded] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
    </>
  );

}

export default App;
