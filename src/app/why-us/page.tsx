import Navbar from "@/components/Navbar";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function WhyUsPage() {
  return (
    <main className="flex flex-col bg-[#0a0a0a] text-white">
      <Navbar />
      <div className="flex-1 flex flex-col pt-20 min-h-screen">
        <WhyUs />
      </div>
      <Footer />
    </main>
  );
}
