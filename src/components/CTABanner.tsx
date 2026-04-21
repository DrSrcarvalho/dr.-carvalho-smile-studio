import { MessageCircle, Calendar } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Pronto para transformar seu sorriso?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Agende sua consulta agora mesmo pelo WhatsApp e dê o primeiro passo
            para um sorriso saudável e radiante.
          </p>
          <a
            href="https://wa.me/5517996626667?text=Olá! Gostaria de agendar uma consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-background text-primary font-semibold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
