import { useState } from "react";
import { Play, Loader2 } from "lucide-react";
import implantVideo from "@/assets/implant-procedure.mp4.asset.json";

const ImplantVideo = () => {
  const [loadVideo, setLoadVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlay = () => {
    setIsLoading(true);
    setLoadVideo(true);
  };

  return (
    <section id="procedimento" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
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

          <div className="relative w-full">
            <div
              className="glass-card rounded-2xl overflow-hidden shadow-xl bg-muted relative w-full"
              style={{ aspectRatio: "16 / 9", minHeight: "220px" }}
            >
              {loadVideo ? (
                <>
                  <video
                    src={implantVideo.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    onCanPlay={() => setIsLoading(false)}
                    aria-label="Animação 3D do procedimento de implante dentário"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted/80 pointer-events-none">
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    </div>
                  )}
                </>
              ) : (
                <button
                  type="button"
                  onClick={handlePlay}
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 hero-gradient text-white transition-transform active:scale-[0.99]"
                  aria-label="Carregar e reproduzir vídeo do procedimento de implante"
                >
                  <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </span>
                  <span className="text-sm font-medium tracking-wide">
                    Toque para assistir
                  </span>
                  <span className="text-xs text-white/80">
                    Vídeo de ~13MB
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantVideo;
