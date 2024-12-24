import Navbar from "../ui/navbar";
import Sidebar from "../ui/sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <Navbar />
      <div className="w-full flex-none md:w-64">
        <Sidebar />
      </div>
      <div className="flex-grow px-8 pt-24 pb-12 md:pl-0 md:pr-8 overflow-y-auto scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
