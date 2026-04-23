import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="flex flex-col bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="flex-1 flex flex-col pt-20 min-h-screen">
        <Services />
      </div>
      <Footer />
    </main>
  );
}
