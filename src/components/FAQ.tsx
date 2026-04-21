import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vocês atendem por convênio odontológico?",
    answer:
      "Sim! Trabalhamos com diversos convênios odontológicos. Entre em contato pelo WhatsApp (17) 99662-6667 para consultar se o seu plano é aceito.",
  },
  {
    question: "Quanto tempo dura um tratamento de implante dentário?",
    answer:
      "O tratamento completo de implante dentário pode levar de 3 a 6 meses, dependendo do caso. Inclui a colocação do pino, o período de osseointegração e a instalação da coroa definitiva.",
  },
  {
    question: "O clareamento dental é seguro?",
    answer:
      "Sim, quando realizado por um cirurgião dentista qualificado. Utilizamos produtos seguros e técnicas modernas que preservam o esmalte dental, garantindo resultados eficazes sem prejudicar seus dentes.",
  },
  {
    question: "Tratamento de canal dói?",
    answer:
      "Não. Com as técnicas modernas e anestesia adequada, o tratamento de canal é praticamente indolor. O procedimento, na verdade, alivia a dor causada pela inflamação ou infecção do nervo.",
  },
  {
    question: "Qual a diferença entre prótese fixa e removível?",
    answer:
      "A prótese fixa é cimentada ou parafusada e não pode ser retirada pelo paciente, oferecendo maior conforto. Já a removível pode ser retirada para higienização. Avaliamos cada caso para indicar a melhor opção.",
  },
  {
    question: "Com que frequência devo ir ao dentista?",
    answer:
      "Recomendamos consultas de rotina a cada 6 meses para limpeza profissional e avaliação preventiva. Isso ajuda a identificar precocemente qualquer problema e manter a saúde bucal em dia.",
  },
  {
    question: "Como faço para agendar uma consulta?",
    answer:
      "Você pode agendar pelo WhatsApp clicando no botão flutuante, ligando para (17) 99662-6667 ou enviando e-mail para drsrcarvalho@gmail.com. Atendemos com horários flexíveis.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos tratamentos e atendimento
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-heading text-lg hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
