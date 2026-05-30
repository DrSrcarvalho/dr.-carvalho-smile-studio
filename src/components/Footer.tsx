const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading font-bold text-lg text-primary mb-2">
          Dr. Sebastião Carvalho
        </p>
        <p className="text-sm text-muted-foreground mb-1">
          Cirurgião Dentista — CRO: 153001-SP
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} — Todos os direitos reservados.
        </p>
        <p className="text-[10px] text-muted-foreground mt-4">
          Desenvolvido por Sebastião Carvalho
        </p>
      </div>
    </footer>
  );
};

export default Footer;
