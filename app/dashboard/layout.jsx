import Navbar from "@/components/dashboard/navbar/Navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import "@/components/dashboard/dashboard.css";
import Footer from "@/components/dashboard/footer/footer";

const layout = ({ children }) => {
  return (
    <div className="container">
      <div className="menu">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;
