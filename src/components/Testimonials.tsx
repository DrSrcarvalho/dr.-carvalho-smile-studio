import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Costa",
    text: "O Dr. Sebastião é um profissional incrível! Fiz meu clareamento com ele e o resultado superou minhas expectativas. Atendimento impecável!",
    rating: 5,
    procedure: "Clareamento",
  },
  {
    name: "Carlos Eduardo Silva",
    text: "Sempre tive medo de dentista, mas o Dr. Sebastião me deixou super à vontade. Fiz um implante e foi muito mais tranquilo do que imaginava.",
    rating: 5,
    procedure: "Implante",
  },
  {
    name: "Ana Paula Ferreira",
    text: "Profissional extremamente competente e atencioso. Fiz meu tratamento de canal sem dor nenhuma. Recomendo de olhos fechados!",
    rating: 5,
    procedure: "Tratamento de Canal",
  },
  {
    name: "Roberto Almeida",
    text: "Minha prótese ficou perfeita, muito natural. A equipe toda é muito acolhedora e o consultório é lindo e moderno.",
    rating: 5,
    procedure: "Prótese",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            O que nossos pacientes dizem
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.procedure}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
