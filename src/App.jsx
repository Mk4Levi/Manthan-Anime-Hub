import { useEffect, useState } from "react";
import "./css/App.css";
import { PreLoader, Navbar } from "./components";
import {
  Home,
  AboutMe,
  Recommendation,
  Manga,
  Characters,
  Members,
  Guidelines,
  Register,
} from "./pages";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  return (
    <div>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div className="junoon-app">
          <Navbar />
          <div className="app__bg">
            <Home />
            <AboutMe />
            <Recommendation />
            <Manga />
            <Characters />
            <Members />
            <Guidelines />
            <Register />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
