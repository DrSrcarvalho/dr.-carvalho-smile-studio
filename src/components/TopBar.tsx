import { MessageCircle } from "lucide-react";

const TopBar = () => {
  return (
    <a
      href="https://wa.me/5517996626667?text=Olá! Gostaria de agendar uma consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-2 px-4 flex items-center justify-center gap-2 text-sm font-medium hover:bg-primary/90 transition-colors"
    >
      <MessageCircle className="w-4 h-4" />
      <span className="hidden sm:inline">
        Agende sua consulta agora pelo WhatsApp —
      </span>
      <span className="sm:hidden">Agende pelo WhatsApp —</span>
      <span className="underline">(17) 99662-6667</span>
    </a>
  );
};

export default TopBar;
