import HeroToolRing from "@/components/sections/hero/HeroToolRing";
import AboutTextWave from "@/components/sections/about/AboutTextWave";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FeaturesStatCards from "@/components/sections/features/FeaturesStatCards";
import PricingLayeredEnterprise from "@/components/sections/pricing/PricingLayeredEnterprise";
import TeamOverlayCards from "@/components/sections/team/TeamOverlayCards";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import ClientMarqueeSection from "@/components/sections/clients/ClientMarqueeSection";
import LightRaysCornerBackground from "@/components/backgrounds/LightRaysCornerBackground";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import { Code, Shield, Database, Cpu, Lock, Zap, User } from "lucide-react";

// Tool Icon SVGs (Original Template Icons)
const notionSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'><path d='M4.459 4.258c.746.606 1.026.56 2.428.466l12.113-.794c.28 0 .047-.28-.046-.326L16.48 1.776c-.467-.374-1.121-.56-2.008-.467L3.06 2.29c-.373.047-.467.28-.28.467zm.7 3.967v13.633c0 .84.373 1.214 1.26 1.167l14.475-.84c.887-.047 1.12-.607 1.12-1.353V7.085c0-.747-.326-.98-.933-.933l-14.94.887c-.654.047-.982.373-.982 1.186zm13.12 1.353c.094.42 0 .84-.42.887l-.7.14v10.364c0 .7-.374 1.027-1.12 1.074l-2.755.14c-.327 0-.514-.14-.514-.42v-.373c0-.28.187-.467.514-.514l1.167-.14V11.23l-3.922 8.497c-.28.607-.607.794-1.074.794h-.28c-.467-.094-.747-.42-.84-.933l-1.635-8.59v7.75c.42.047.747.187.747.514v.373c0 .28-.234.42-.514.42H5.771c-.327 0-.514-.14-.514-.42v-.373c0-.327.28-.467.654-.514l1.12-.14V9.69L5.865 9.55c-.327 0-.514-.234-.467-.56l.233-1.4c.094-.374.374-.514.887-.56l13.028-.794c.56-.047.887.187.98.514z'/></svg>";
const zapierSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF4A00'><path d='M12 0L9.5 9.5H0L7.5 14.5L4.5 24L12 18.5L19.5 24L16.5 14.5L24 9.5H14.5L12 0Z'/></svg>";
const makeSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23A855F7'><path d='M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4.8 10.1L11 13.2v6.7l-6.2-3.1v-6.8zm14.4 6.8l-6.2 3.1v-6.7l6.2-3.1v6.7z'/></svg>";
const slackSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23e01e5a'><path d='M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 11.393 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.521-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.122a2.528 2.528 0 0 1 2.521 2.52 2.528 2.528 0 0 1-2.521 2.522 2.528 2.528 0 0 1-2.521-2.522v-2.52h2.521zm0-1.268a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.521h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.313z'/></svg>";
const hubspotSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF7A59'><path d='M17.65 11.23a3.52 3.52 0 0 0-2.28 1.48l-5.07-3.95a3.46 3.46 0 0 0 .15-.99 3.5 3.5 0 1 0-4.7 3.29l3.41 6.55a3.49 3.49 0 1 0 4.14 0l2.3-4.44a3.5 3.5 0 1 0 2.05-1.94z'/></svg>";
const webflowSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234353FF'><path d='M24 6.75l-4.75 10.5h-4.25l-2.5-5.5-2.5 5.5h-4.25l-5.75-10.5h4.25l3.5 7.5 2.5-5.5h3.5l2.5 5.5 3.5-7.5h4z'/></svg>";
const stripeSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23635BFF'><path d='M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.806-1.395 2.233-1.395 2.015 0 3.844.744 4.96 1.457l1.24-3.658C17.713 2.186 15.542 1.6 13.17 1.6c-4.464 0-7.316 2.387-7.316 6.355 0 4.898 6.727 5.146 6.727 7.78 0 .992-.93 1.55-2.418 1.55-2.14 0-4.526-.961-5.89-1.891l-1.302 3.782c1.55.992 4.154 1.767 6.944 1.767 4.712 0 7.626-2.325 7.626-6.417.031-4.867-6.565-5.27-6.565-7.376z'/></svg>";
const chatgptSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2310A37F'><path d='M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z'/></svg>";
const figmaSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23f24e1e'><path d='M12 12A4 4 0 1 1 16 8a4 4 0 0 1-4 4zm0 0a4 4 0 1 1-4-4 4 4 0 0 1 4 4zm0 0v8a4 4 0 1 1-4-4 4 4 0 0 1 4 4zm0-8a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-8a4 4 0 1 1-4-4 4 4 0 0 1 4 4z'/></svg>";
const githubSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'><path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z'/></svg>";

export default function HomePage() {
  return (
    <>
      <LightRaysCornerBackground className="absolute -scale-x-100" />

      {/* Hero Section */}
      <div id="hero" data-webild-section="HeroToolRing" data-webild-section-id="HeroToolRing-1" data-section="hero" className="relative isolate">
        <HeroToolRing
          title="Software & SaaS by"
          titleMuted="Veloce Labs."
          description="Engineered by innovators & startup founders. We build tailored web & mobile apps, SaaS platforms, and enterprise solutions designed for high growth."
          detail={{
            title: "CEO & Founder",
            description: "Moheb Awichewi"
          }}
          stat={{
            value: 50,
            label: "tools connected"
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
            { imageSrc: notionSvg },
            { imageSrc: zapierSvg },
            { imageSrc: makeSvg },
            { imageSrc: slackSvg },
            { imageSrc: hubspotSvg },
            { imageSrc: webflowSvg },
            { imageSrc: stripeSvg },
            { imageSrc: chatgptSvg },
            { imageSrc: figmaSvg },
            { imageSrc: githubSvg }
          ]}
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
                  userMessage: "Who leads Veloce Labs?",
                  aiResponse: "CEO & Founder Moheb Awichewi leads our engineering direction."
                }
              ],
              placeholder: "Ask about Veloce Labs...",
              title: "Startup Incubation & SaaS Products",
              description: "We launch our own startups and help clients transform their visions into market-ready SaaS applications and custom web apps."
            }
          ]}
        />
      </div>

      {/* Client Logos Animated Marquee Section */}
      <ClientMarqueeSection />

      {/* Integrations Section */}
      <div id="tools" data-webild-section="ToolIntegrations" data-webild-section-id="ToolIntegrations-1" data-section="tools" className="py-16 border-y border-border/40 bg-card/30">
        <div className="w-full max-w-6xl px-6 mx-auto flex flex-col items-center gap-8">
          <AppearOnScroll variant="fade">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="px-3 py-1 text-sm card rounded w-fit">
                <p>Ecosystem Integrations</p>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">Native Tool & Platform Integrations</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                Seamlessly connecting your custom apps with Notion, Zapier, Make, Slack, HubSpot, Webflow, Stripe, ChatGPT, Figma, and GitHub.
              </p>
            </div>
          </AppearOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
            {[
              { name: "Notion", desc: "Workspace Sync", icon: notionSvg },
              { name: "Zapier", desc: "Workflow Automation", icon: zapierSvg },
              { name: "Make", desc: "Scenario Execution", icon: makeSvg },
              { name: "Slack", desc: "Webhooks & Bots", icon: slackSvg },
              { name: "HubSpot", desc: "CRM Data Pipeline", icon: hubspotSvg },
              { name: "Webflow", desc: "CMS Integration", icon: webflowSvg },
              { name: "Stripe", desc: "Payment Gateways", icon: stripeSvg },
              { name: "ChatGPT", desc: "AI Agent Orchestration", icon: chatgptSvg },
              { name: "Figma", desc: "Design Systems", icon: figmaSvg },
              { name: "GitHub", desc: "CI/CD & Codebases", icon: githubSvg },
            ].map((tool) => (
              <AppearOnScroll key={tool.name} variant="slide-up" delay={0.05}>
                <div className="flex flex-col items-center justify-center p-5 card rounded-xl transition-all duration-300 hover:border-primary/50 group text-center h-full">
                  <div className="w-12 h-12 flex items-center justify-center p-2 bg-white/5 rounded-lg mb-3">
                    <img src={tool.icon} alt={tool.name} className="size-6 object-contain" />
                  </div>
                  <h3 className="text-base font-semibold">{tool.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{tool.desc}</p>
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" data-webild-section="AboutTextWave" data-webild-section-id="AboutTextWave-1" data-section="about">
        <AboutTextWave
          title="Veloce Labs is engineered by innovators and startup founders to craft bespoke web applications, mobile apps, SaaS products, and custom enterprise software."
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
                  userMessage: "Who leads Veloce Labs?",
                  aiResponse: "CEO & Founder Moheb Awichewi leads our engineering direction."
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
          title="Engineered by innovators & startup founders."
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
                value: 100,
                suffix: "%"
              },
              title: "Customized solutions for ambitious startups & enterprises"
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
          title="Transparent engineering pricing tailored to your scale."
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
              price: "Customized",
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
              price: "Customized",
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
              bio: "Chief Executive Officer & Founder at Veloce Labs. Leading custom software engineering and startup creation."
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
        />
      </div>
    </>
  );
}
