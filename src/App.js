import { useCallback, useEffect, useState } from "react";
import Body from "./Layouts/Body";
import Header from "./Layouts/Header";
import "react-spinner-animated/dist/index.css";
import { BarLoader } from "react-spinner-animated";

function App() {
  const [showNav, setShowNav] = useState(true);
  const [y, setY] = useState(window.scrollY);
  const [showLoading, setShowLoading] = useState(false);

  const getCountTimeout = () => {
    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  };

  useEffect(() => {
    getCountTimeout();
    return () => {
      clearTimeout();
    };
  }, [showLoading]);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      console.log(y);
      setY(window.scrollY);
      if (y < 500) return;
      if (y > window.scrollY) {
        setShowNav(true);
      } else if (y < window.scrollY) {
        setShowNav(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, showNav]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className="App">
      {showLoading ? (
        <BarLoader
          text={"Hi!..."}
          bgColor={"var(--blue"}
          textColor={"var(--blue)"}
        />
      ) : (
        <>
          <Header showNav={showNav} />
          <Body />
        </>
      )}
    </div>
  );
}

export default App;
