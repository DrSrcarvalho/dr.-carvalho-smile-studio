import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ImplantVideo from "@/components/ImplantVideo";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <Hero />
      <About />
      <ImplantVideo />
      <Services />
      <CTABanner />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
