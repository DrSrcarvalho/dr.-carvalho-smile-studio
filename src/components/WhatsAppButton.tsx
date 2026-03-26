import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5517996626667?text=Olá! Gostaria de agendar uma consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform float-animation"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
