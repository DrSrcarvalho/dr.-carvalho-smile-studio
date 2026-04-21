import implantVideo from "@/assets/implant-procedure.mp4.asset.json";

const ImplantVideo = () => {
  return (
    <section id="procedimento" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Veja como funciona
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Implante Dentário em 3D
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Entenda de forma simples e visual como é realizado o procedimento de
              implante dentário. Com técnica moderna e materiais de alta qualidade,
              devolvemos a função e a estética do seu sorriso.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cada caso é avaliado individualmente para garantir o melhor
              resultado, com segurança e conforto durante todo o tratamento.
            </p>
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl overflow-hidden shadow-xl">
              <video
                src={implantVideo.url}
                autoPlay
                loop
                muted
                playsInline
                controls
                preload="metadata"
                aria-label="Animação 3D do procedimento de implante dentário"
                className="w-full h-auto block bg-muted"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mt-3">
              Toque no vídeo caso não inicie automaticamente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantVideo;
