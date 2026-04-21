import { useRef, useState } from "react";
import { Play, Loader2, Maximize2 } from "lucide-react";
const mobileOptimizedVideo = "/implant-procedure-mobile.mp4";

const ImplantVideo = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsLoading(true);
    setHasError(false);
    setHasStarted(true);

    try {
      video.muted = true;
      video.playsInline = true;
      void video.play().catch((error) => {
        console.error("Falha ao iniciar vídeo no celular:", error);
        setHasError(true);
        setHasStarted(false);
        setIsLoading(false);
      });
    } catch (error) {
      console.error("Falha ao iniciar vídeo no celular:", error);
      setHasError(true);
      setHasStarted(false);
      setIsLoading(false);
    }
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    // iOS Safari uses webkitEnterFullscreen on the video element
    const anyVideo = video as HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    };
    if (anyVideo.webkitEnterFullscreen) {
      anyVideo.webkitEnterFullscreen();
    } else if (video.requestFullscreen) {
      video.requestFullscreen();
    }
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
              style={{ aspectRatio: "16 / 9", minHeight: "240px" }}
            >
              <>
                <video
                  ref={videoRef}
                  src={mobileOptimizedVideo}
                  loop
                  muted
                  playsInline
                  controls
                  preload="auto"
                  onPlaying={() => {
                    setHasStarted(true);
                    setHasError(false);
                    setIsLoading(false);
                  }}
                  onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                  }}
                  aria-label="Animação 3D do procedimento de implante dentário"
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
                {isLoading && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-muted/90 pointer-events-none gap-2">
                    <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    <span className="text-xs text-muted-foreground">Carregando vídeo...</span>
                  </div>
                )}
                {!hasStarted && (
                  <button
                    type="button"
                    onClick={handlePlay}
                    className="absolute inset-0 z-10 flex h-full w-full flex-col items-center justify-center gap-3 hero-gradient text-white transition-transform active:scale-[0.99] cursor-pointer"
                    aria-label="Iniciar vídeo do procedimento de implante"
                  >
                    <span className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </span>
                    <span className="text-sm font-medium tracking-wide">
                      {hasError ? "Tentar novamente" : "Toque para assistir"}
                    </span>
                    <span className="text-xs text-white/80">
                      {hasError ? "Toque para iniciar manualmente" : "O vídeo abre ao tocar"}
                    </span>
                  </button>
                )}
                {hasStarted && (
                  <div className="absolute right-3 top-3 z-10 flex gap-2">
                    <button
                      type="button"
                      onClick={handleFullscreen}
                      aria-label="Ver vídeo em tela cheia"
                      className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/75"
                    >
                      <Maximize2 className="w-4 h-4" />
                      Tela cheia
                    </button>
                    <a
                      href={mobileOptimizedVideo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-black/60 px-3 py-2 text-xs font-medium text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/75"
                      aria-label="Abrir vídeo em nova aba"
                    >
                      Abrir
                    </a>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantVideo;
