import { useRef, useState } from "react";
import { ExternalLink, Loader2, Maximize2, Play } from "lucide-react";

const mobileOptimizedVideo = "/implant-procedure-mobile.mp4?v=2";
const mobileVideoPoster = "/implant-procedure-poster.webp?v=2";

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
      video.load();
      void video.play().catch((error) => {
        console.error("Falha ao iniciar vídeo no celular:", error);
        setHasError(true);
        setIsLoading(false);
      });
    } catch (error) {
      console.error("Falha ao iniciar vídeo no celular:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    const anyVideo = video as HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    };

    if (anyVideo.webkitEnterFullscreen) {
      anyVideo.webkitEnterFullscreen();
    } else if (video.requestFullscreen) {
      void video.requestFullscreen();
    }
  };

  return (
    <section id="procedimento" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Veja como funciona
            </p>
            <h2 className="mb-6 text-3xl font-heading font-bold text-foreground md:text-4xl">
              Implante Dentário em 3D
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Entenda de forma simples e visual como é realizado o procedimento de
              implante dentário. Com técnica moderna e materiais de alta qualidade,
              devolvemos a função e a estética do seu sorriso.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Cada caso é avaliado individualmente para garantir o melhor
              resultado, com segurança e conforto durante todo o tratamento.
            </p>
          </div>

          <div className="w-full space-y-4">
            <div
              className="glass-card relative overflow-hidden rounded-2xl bg-muted shadow-xl"
              style={{ aspectRatio: "16 / 9", minHeight: "240px" }}
            >
              <video
                ref={videoRef}
                src={mobileOptimizedVideo}
                poster={mobileVideoPoster}
                loop
                muted
                playsInline
                controls={hasStarted}
                preload="metadata"
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
                className="absolute inset-0 h-full w-full bg-card object-cover"
              />

              {!hasStarted && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-foreground/45 px-6 text-center text-primary-foreground backdrop-blur-[2px]">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/20 shadow-lg backdrop-blur-sm">
                    <Play className="ml-1 h-8 w-8" fill="currentColor" />
                  </span>
                  <p className="text-base font-semibold">Vídeo do procedimento de implante</p>
                  <p className="max-w-xs text-sm text-primary-foreground/90">
                    Toque para assistir aqui no site ou abra direto no player do celular.
                  </p>
                </div>
              )}

              {isLoading && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-background/90">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <span className="text-xs text-muted-foreground">Carregando vídeo...</span>
                </div>
              )}

              {hasStarted && (
                <div className="absolute right-3 top-3 z-20 flex gap-2">
                  <button
                    type="button"
                    onClick={handleFullscreen}
                    aria-label="Ver vídeo em tela cheia"
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground/70 px-3 py-2 text-xs font-medium text-primary-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-foreground/85"
                  >
                    <Maximize2 className="h-4 w-4" />
                    Tela cheia
                  </button>
                </div>
              )}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handlePlay}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg hero-gradient px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-[1.01]"
              >
                <Play className="h-4 w-4" fill="currentColor" />
                Assistir aqui no site
              </button>

              <a
                href={mobileOptimizedVideo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                aria-label="Abrir vídeo no celular"
              >
                <ExternalLink className="h-4 w-4 text-primary" />
                Abrir no celular
              </a>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              No celular, se o player do site não iniciar, o botão <strong className="text-foreground">Abrir no celular</strong> abre o vídeo diretamente no aparelho.
            </p>

            {hasError && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                O player do navegador pode bloquear a reprodução automática. Use o botão <strong className="text-foreground">Abrir no celular</strong> para assistir sem falhas.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantVideo;
