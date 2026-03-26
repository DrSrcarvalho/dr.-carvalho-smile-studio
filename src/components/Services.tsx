import iconImplante from "@/assets/icon-implante.png";
import iconProtese from "@/assets/icon-protese.png";
import iconClareamento from "@/assets/icon-clareamento.png";
import iconExtracao from "@/assets/icon-extracao.png";
import iconCanal from "@/assets/icon-canal.png";
import iconRestauracao from "@/assets/icon-restauracao.png";

const services = [
  { name: "Implantes", desc: "Reposição de dentes perdidos com implantes de última geração para um sorriso natural e funcional.", icon: iconImplante },
  { name: "Próteses", desc: "Próteses fixas e removíveis personalizadas para devolver conforto e estética ao seu sorriso.", icon: iconProtese },
  { name: "Clareamento", desc: "Clareamento dental seguro e eficaz para dentes mais brancos e um sorriso radiante.", icon: iconClareamento },
  { name: "Extrações", desc: "Extrações realizadas com técnica minimamente invasiva, priorizando o conforto do paciente.", icon: iconExtracao },
  { name: "Tratamento de Canal", desc: "Tratamento endodôntico moderno para eliminar dores e preservar seu dente natural.", icon: iconCanal },
  { name: "Restaurações", desc: "Restaurações estéticas e funcionais utilizando materiais de alta qualidade e durabilidade.", icon: iconRestauracao },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Procedimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground">
            Oferecemos uma ampla gama de tratamentos odontológicos para cuidar da sua saúde bucal de forma completa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.name}
              className="group glass-card rounded-2xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 text-center"
            >
              <img
                src={s.icon}
                alt={s.name}
                loading="lazy"
                width={512}
                height={512}
                className="w-20 h-20 mx-auto mb-6 group-hover:scale-110 transition-transform"
              />
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {s.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Convênio */}
        <div className="mt-16 glass-card rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Convênio Odontológico
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Aceitamos convênios odontológicos. Entre em contato conosco para consultar 
            se o seu convênio é aceito e agendar sua consulta.
          </p>
          <a
            href="https://wa.me/5517996626667?text=Olá! Gostaria de saber sobre convênios."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full hero-gradient text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Consultar Convênio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
