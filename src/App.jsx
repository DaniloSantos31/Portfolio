import React from "react";
import Navigation from "./components/Navigation";
import { useIntersectionObserver } from "./hooks/UseIntersectionObserver";
import { useScrollToTop } from "./hooks/UseScrollToTop";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  const hasAnimated = useIntersectionObserver();
  const showScrollTop = useScrollToTop();

  return (
    <div className = "min-h-screen bg-white text-black">
      <Navigation />
      <Hero hasAnimated={hasAnimated} />
      <About hasAnimated={hasAnimated} />
    </div>
  );
};

export default App;
