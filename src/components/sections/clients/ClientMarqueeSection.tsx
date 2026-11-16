import AppearOnScroll from "@/components/animation/AppearOnScroll";

interface Client {
  name: string;
  category?: string;
  logoUrl: string;
}

const CLIENTS: Client[] = [
  {
    name: "Colis",
    category: "Logistics & Delivery SaaS",
    logoUrl: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346605-8dqa933l.jpg"
  },
  {
    name: "Crystal Clear Tech",
    category: "Software & Digital Solutions",
    logoUrl: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346606-5f1fikxr.jpg"
  },
  {
    name: "Mabfem",
    category: "Enterprise Software Client",
    logoUrl: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346606-kmj53b5u.png"
  },
  {
    name: "Veloce SaaS Hub",
    category: "Startup Incubator Partner",
    logoUrl: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346604-86bbv9ad.png"
  },
  {
    name: "NexGen Cloud",
    category: "Custom Web Application",
    logoUrl: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346605-14d4xx52.png"
  }
];

export default function ClientMarqueeSection() {
  const repeatedClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <div
      id="clients"
      data-webild-section="ClientMarqueeSection"
      data-webild-section-id="ClientMarqueeSection-1"
      data-section="clients"
      className="py-16 md:py-24 border-y border-border/40 bg-card/20 overflow-hidden relative"
    >
      <div className="w-full max-w-6xl px-6 mx-auto mb-10 text-center">
        <AppearOnScroll variant="fade">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs md:text-sm card rounded-full mb-3 text-muted-foreground">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span>Nos Clients & Startup Partners</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
            Ils nous font confiance pour leurs solutions sur-mesure
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            De la création de SaaS à l'ingénierie d'applications web, mobiles et systèmes d'entreprise ERP/CRM.
          </p>
        </AppearOnScroll>
      </div>

      <div
        className="relative w-full overflow-hidden py-4"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
      >
        <div className="flex w-max gap-6 animate-marquee-horizontal hover:[animation-play-state:paused]">
          {repeatedClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-4 px-6 py-4 card rounded-2xl bg-card/80 border border-border/60 hover:border-primary/50 transition-all duration-300 hover:scale-105 shrink-0 shadow-lg"
            >
              <div className="size-12 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center p-1.5 shrink-0 border border-white/10">
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-bold text-foreground leading-tight">{client.name}</span>
                {client.category && (
                  <span className="text-xs text-muted-foreground mt-0.5">{client.category}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
