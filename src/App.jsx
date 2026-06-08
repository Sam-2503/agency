import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Global Grain/Film-noise Texture */}
      <div className="noise-overlay" />
      
      {/* Main Agency Platform Page */}
      <Home />
    </>
  );
}

export default App;
