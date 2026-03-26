import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Entre em contato
          </h2>
          <p className="text-muted-foreground">
            Estamos prontos para atender você. Agende sua consulta ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <a
            href="tel:17996626667"
            className="glass-card rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-1">Telefone</h3>
            <p className="text-sm text-muted-foreground">(17) 99662-6667</p>
          </a>

          <a
            href="mailto:drsrcarvalho@gmail.com"
            className="glass-card rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-1">E-mail</h3>
            <p className="text-sm text-muted-foreground">drsrcarvalho@gmail.com</p>
          </a>

          <div className="glass-card rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-medium text-foreground mb-1">Atendimento</h3>
            <p className="text-sm text-muted-foreground">Agende pelo WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
