import HeroToolRing from "@/components/sections/hero/HeroToolRing";
import AboutTextWave from "@/components/sections/about/AboutTextWave";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FeaturesStatCards from "@/components/sections/features/FeaturesStatCards";
import PricingLayeredEnterprise from "@/components/sections/pricing/PricingLayeredEnterprise";
import TeamOverlayCards from "@/components/sections/team/TeamOverlayCards";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import LightRaysCornerBackground from "@/components/backgrounds/LightRaysCornerBackground";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import { Code, Shield, Database, Cpu, Lock, Zap, User } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <LightRaysCornerBackground className="absolute -scale-x-100" />

      {/* Hero Section */}
      <div id="hero" data-webild-section="HeroToolRing" data-webild-section-id="HeroToolRing-1" data-section="hero" className="relative isolate">
        <HeroToolRing
          title="Custom Software & SaaS by"
          titleMuted="Veloce Labs."
          description="We are a software engineering firm specialized in customized web & mobile apps, cyber security, CRM, PLM, and ERP systems. We launch our own startups and help clients create their own SaaS and custom web apps."
          detail={{
            title: "CEO & Leadership",
            description: "Moheb Awichewi"
          }}
          stat={{
            value: 100,
            label: "% Custom Solutions"
          }}
          primaryButton={{
            text: "Start Your Project",
            href: "#contact"
          }}
          secondaryButton={{
            text: "Our Services",
            href: "#services"
          }}
          items={[
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346604-86bbv9ad.png"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346605-8dqa933l.jpg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346606-5f1fikxr.jpg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346606-kmj53b5u.png"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346605-14d4xx52.png"
            }
          ]}
        />
      </div>

      {/* Client Logos Section */}
      <div id="clients" data-webild-section="ClientLogos" data-webild-section-id="ClientLogos-1" data-section="clients" className="py-16 border-y border-border/40 bg-card/30">
        <div className="w-full max-w-6xl px-6 mx-auto flex flex-col items-center gap-8">
          <AppearOnScroll variant="fade">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="px-3 py-1 text-sm card rounded w-fit">
                <p>Our Clients</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">Trusted by Leading Companies</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                Partnering with ambitious startups and businesses to deliver high-performance custom applications and enterprise platforms.
              </p>
            </div>
          </AppearOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* Client 1: Colis */}
            <AppearOnScroll variant="slide-up" delay={0.05}>
              <div className="flex flex-col items-center justify-center p-6 card rounded-xl transition-all duration-300 hover:border-primary/50 group text-center h-full">
                <div className="w-full h-28 flex items-center justify-center p-4 bg-white/5 rounded-lg mb-4">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346605-8dqa933l.jpg"
                    alt="Colis Delivery"
                    className="max-h-20 max-w-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold">Colis</h3>
                <p className="text-xs text-muted-foreground mt-1">Smart Logistics & Delivery Platform</p>
              </div>
            </AppearOnScroll>

            {/* Client 2: Crystal Clear Tech */}
            <AppearOnScroll variant="slide-up" delay={0.1}>
              <div className="flex flex-col items-center justify-center p-6 card rounded-xl transition-all duration-300 hover:border-primary/50 group text-center h-full">
                <div className="w-full h-28 flex items-center justify-center p-4 bg-white/5 rounded-lg mb-4">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346606-5f1fikxr.jpg"
                    alt="Crystal Clear Tech"
                    className="max-h-20 max-w-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold">Crystal Clear Tech</h3>
                <p className="text-xs text-muted-foreground mt-1">Technology & IT Solutions</p>
              </div>
            </AppearOnScroll>

            {/* Client 3: Mabfem */}
            <AppearOnScroll variant="slide-up" delay={0.15}>
              <div className="flex flex-col items-center justify-center p-6 card rounded-xl transition-all duration-300 hover:border-primary/50 group text-center h-full">
                <div className="w-full h-28 flex items-center justify-center p-4 bg-white/5 rounded-lg mb-4">
                  <img
                    src="https://storage.googleapis.com/webild/users/user_3MADSCziAlAb5QOvY6wGFqwkeep/uploaded-1794833346606-kmj53b5u.png"
                    alt="Mabfem"
                    className="max-h-20 max-w-full object-contain rounded transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold">Mabfem</h3>
                <p className="text-xs text-muted-foreground mt-1">Enterprise Business Client</p>
              </div>
            </AppearOnScroll>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" data-webild-section="AboutTextWave" data-webild-section-id="AboutTextWave-1" data-section="about">
        <AboutTextWave
          title="Veloce Labs is a software engineering firm built to engineer tailored web apps, mobile applications, Cyber Security architecture, CRM, PLM, and ERP systems — while scaling our own startups and helping clients launch their own SaaS."
          primaryButton={{
            text: "Start Your Project",
            href: "#contact"
          }}
          secondaryButton={{
            text: "See Pricing",
            href: "#pricing"
          }}
        />
      </div>

      {/* Services Bento Grid */}
      <div id="services" data-webild-section="FeaturesBento" data-webild-section-id="FeaturesBento-1" data-section="services">
        <FeaturesBento
          titleGradient
          buttonStagger
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Engineering Services"
          title="Full-stack engineering & enterprise solutions."
          primaryButton={{
            text: "Contact Engineering",
            href: "#contact"
          }}
          secondaryButton={{
            text: "See Pricing",
            href: "#pricing"
          }}
          features={[
            {
              bentoComponent: "orbiting-icons",
              centerIcon: Code,
              orbitIcons: [
                Shield,
                Database,
                Cpu,
                Lock
              ],
              title: "Customized Web & Mobile Apps",
              description: "Bespoke web applications and mobile apps engineered for speed, scalability, and seamless user experience."
            },
            {
              bentoComponent: "tilted-stack-cards",
              stackCards: [
                {
                  icon: Lock,
                  title: "Cyber Security",
                  subtitle: "Infrastructure Defense",
                  detail: "Audited"
                },
                {
                  icon: Database,
                  title: "CRM & ERP Systems",
                  subtitle: "Custom Business Flow",
                  detail: "Live"
                },
                {
                  icon: Cpu,
                  title: "PLM Solutions",
                  subtitle: "Product Lifecycle",
                  detail: "Integrated"
                }
              ],
              title: "Enterprise ERP, CRM & PLM",
              description: "Custom Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and Product Lifecycle Management (PLM) software tailored to your company."
            },
            {
              bentoComponent: "chat-marquee",
              aiIcon: Code,
              userIcon: User,
              exchanges: [
                {
                  userMessage: "Can Veloce Labs create custom SaaS applications?",
                  aiResponse: "Yes, we build our own startups and guide clients from SaaS architecture to launch."
                },
                {
                  userMessage: "What enterprise software do you specialize in?",
                  aiResponse: "We build custom ERP, CRM, PLM, and Cyber Security infrastructure."
                },
                {
                  userMessage: "Who leads the engineering team at Veloce Labs?",
                  aiResponse: "CEO Moheb Awichewi leads all strategic engineering projects."
                }
              ],
              placeholder: "Ask about Veloce Labs...",
              title: "Startup Incubation & SaaS Products",
              description: "We launch our own startups and help clients transform their visions into market-ready SaaS applications and custom web apps."
            }
          ]}
        />
      </div>

      {/* Statistics Section */}
      <div id="results" data-webild-section="FeaturesStatCards" data-webild-section-id="FeaturesStatCards-1" data-section="results">
        <FeaturesStatCards
          titleGradient
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Why Veloce Labs"
          title="Engineering excellence grounded in innovation."
          features={[
            {
              icon: Shield,
              stat: {
                value: 100,
                suffix: "%"
              },
              title: "Tailored Cyber Security & Enterprise Code"
            },
            {
              icon: Cpu,
              stat: {
                value: 6,
                suffix: "+"
              },
              title: "Core Specializations (Apps, Cyber, CRM, PLM, ERP, SaaS)"
            },
            {
              icon: Zap,
              stat: {
                value: 1000,
                suffix: " TND"
              },
              title: "Starting price for custom project packages"
            }
          ]}
        />
      </div>

      {/* Pricing Section */}
      <div id="pricing" data-webild-section="PricingLayeredEnterprise" data-webild-section-id="PricingLayeredEnterprise-1" data-section="pricing">
        <PricingLayeredEnterprise
          titleGradient
          buttonStagger
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Pricing Packages"
          title="Transparent engineering pricing starting from 1 000 TND."
          plans={[
            {
              tag: "Starter MVP",
              price: "1 000 TND",
              description: "Custom web app prototype or initial mobile MVP build.",
              primaryButton: {
                text: "Get Started",
                href: "#contact"
              },
              features: [
                "Custom web/mobile app MVP scope",
                "Core UI/UX design & architecture",
                "Database & basic API integrations",
                "Deployment assistance"
              ]
            },
            {
              tag: "Pro SaaS & App",
              price: "3 500 TND",
              description: "Complete custom web app, mobile app, or SaaS platform.",
              primaryButton: {
                text: "Get Started",
                href: "#contact"
              },
              features: [
                "Full-stack custom SaaS engineering",
                "Advanced API & database architecture",
                "Cyber Security hardening & encryption",
                "60 days dedicated technical support"
              ]
            },
            {
              tag: "Enterprise System",
              price: "7 500 TND",
              description: "Bespoke ERP, CRM, PLM, and Cyber Security infrastructure.",
              primaryButton: {
                text: "Get Started",
                href: "#contact"
              },
              features: [
                "Tailor-made ERP, CRM, or PLM module",
                "Complete Cyber Security suite",
                "Legacy data migration & API orchestration",
                "Dedicated engineer & SLA support"
              ]
            }
          ]}
          enterprise={{
            tag: "Enterprise & Startups",
            title: "Dedicated Engineering Squad",
            description: "Custom enterprise software solutions, multi-startup incubation, dedicated engineering team, and direct leadership oversight by CEO Moheb Awichewi.",
            primaryButton: {
              text: "Talk to CEO",
              href: "#contact"
            }
          }}
        />
      </div>

      {/* Team Section */}
      <div id="team" data-webild-section="TeamOverlayCards" data-webild-section-id="TeamOverlayCards-1" data-section="team">
        <TeamOverlayCards
          titleGradient
          buttonStagger
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Leadership"
          title="Engineered by innovators & startup founders."
          members={[
            {
              name: "Moheb Awichewi",
              role: "CEO & Founder",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/ceo-1600.webp"
            },
            {
              name: "Veloce Engineering Squad",
              role: "Full-Stack & Security Architects",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/cto-1600.webp"
            }
          ]}
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-webild-section="ContactCenter" data-webild-section-id="ContactCenter-1" data-section="contact">
        <ContactCenter
          titleGradient
          buttonStagger
          wideContent
          textAnimation="slide-up"
          tag="Contact Us"
          title="Ready to build your custom software?"
          description="Get in touch with CEO Moheb Awichewi and the Veloce Labs team to discuss your custom web apps, mobile apps, SaaS startup, Cyber Security, CRM, PLM, or ERP project."
          inputPlaceholder="Enter your email address"
          buttonText="Submit Request"
          contactInfo={{
            ceo: "Moheb Awichewi",
            email: "Mohebawichewi9@gmail.com",
            phone: "+216 50 564 964"
          }}
        />
      </div>
    </>
  );
}
