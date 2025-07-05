import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoIosArrowUp } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (
    location.pathname === "/admin-cbt" ||
    location.pathname === "/info-kelas-baru" ||
    location.pathname === "/info-kelulusan"
  ) {
    return <>{children}</>;
  }

  return (
    <div className="font-inter">
      <div className="relative z-50">
        <Navbar />
      </div>
      <main className="">{children}</main>
      <Footer />
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-4  rounded-full bg-black/60 text-white shadow-lg hover:bg-primary-dark transition"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp className="h-8 w-8" />
        </Button>
      )}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
