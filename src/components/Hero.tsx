import heroImage from "@/assets/hero-dental.webp";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-in-up">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Cuidando do seu sorriso
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
            Seu sorriso merece o{" "}
            <span className="text-gradient">melhor cuidado</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Tratamentos odontológicos modernos e personalizados com tecnologia de ponta. 
            Agende sua consulta e transforme seu sorriso.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5517996626667?text=Olá! Gostaria de agendar uma consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full hero-gradient text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Agendar Consulta
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
        <div className="relative fade-in-up" style={{ animationDelay: "0.3s" }}>
          <img
            src={heroImage}
            alt="Ilustração de consultório odontológico moderno"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
