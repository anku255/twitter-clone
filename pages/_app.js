import { makeServer } from "../utils/server";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/index.css";

// Start miragejs server 
makeServer();

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex justify-center bg-gray-200  min-h-screen max-h-screen sm:py-2">
      <div className="flex flex-col min-h-full max-h-screen bg-pearl max-w-full sm:max-w-sm sm:min-w-sm lg:max-h-screen-80">
        <Header title={Component.title} />
        <div className="flex-1 overflow-y-scroll">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
