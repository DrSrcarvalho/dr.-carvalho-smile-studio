import { Award, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Sobre o Profissional
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Dr. Sebastião Carvalho
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cirurgião Dentista formado pela Faculdade Anhanguera, com anos de experiência 
            dedicados à saúde bucal. Comprometido em oferecer tratamentos humanizados 
            com as melhores técnicas do mercado.
          </p>
          <p className="text-sm text-muted-foreground mt-2">CRO: 153001-SP</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Award,
              title: "Qualificação",
              desc: "Formação sólida e atualização constante nas mais modernas técnicas odontológicas.",
            },
            {
              icon: Heart,
              title: "Atendimento Humanizado",
              desc: "Cada paciente é único. Tratamento personalizado com empatia e cuidado.",
            },
            {
              icon: Clock,
              title: "Experiência",
              desc: "Anos de prática atendendo pacientes com excelência e dedicação.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-card rounded-2xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full hero-gradient flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
