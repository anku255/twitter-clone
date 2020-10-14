import React, { useEffect } from "react";

import { makeServer } from "../utils/server";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/index.css";

// Start miragejs server
makeServer();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const handleResize = () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // We listen to the resize event
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center bg-gray-200  min-h-screen max-h-screen sm:py-2">
      <div className="flex flex-col min-w-full min-h-full max-h-screen bg-pearl max-w-full sm:max-w-sm sm:min-w-sm lg:max-h-screen-80">
        {Component.Header ? (
          <Component.Header />
        ) : (
          <Header title={Component.title} />
        )}

        <main className="flex-1 flex-basis-0 overflow-y-scroll">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
