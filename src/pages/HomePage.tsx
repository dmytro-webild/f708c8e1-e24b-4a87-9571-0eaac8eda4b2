import HeroToolRing from "@/components/sections/hero/HeroToolRing";
import AboutTextWave from "@/components/sections/about/AboutTextWave";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FeaturesStatCards from "@/components/sections/features/FeaturesStatCards";
import PricingLayeredEnterprise from "@/components/sections/pricing/PricingLayeredEnterprise";
import TeamOverlayCards from "@/components/sections/team/TeamOverlayCards";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import LightRaysCornerBackground from "@/components/backgrounds/LightRaysCornerBackground";
import { Bot, Calendar, Clock, FileSpreadsheet, Layers, Mail, MessageSquare, User, Workflow, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <LightRaysCornerBackground
        className="absolute -scale-x-100"
      />

      <div id="hero" data-webild-section="HeroToolRing" data-webild-section-id="HeroToolRing-1" data-section="hero" className="relative isolate">
        <HeroToolRing
          title="Hire AI agents,"
          titleMuted="not more people."
          description="We build custom agents that take over follow-ups, data entry and admin, so your team can focus on the work that grows the business."
          detail={{
            title: "Hours saved this week",
            description: "2,480 across clients"
          }}
          stat={{
            value: 50,
            label: "tools connected"
          }}
          primaryButton={{
            text: "Book a Free Audit",
            href: "#contact"
          }}
          secondaryButton={{
            text: "Our Services",
            href: "#services"
          }}
          items={[
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/chatgpt.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/gmail.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/zapier.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/notion.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/claude.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/slack.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/hubspot.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/make.svg"
            },
            {
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/shopify.svg"
            }
          ]}
        />
      </div>

      <div id="about" data-webild-section="AboutTextWave" data-webild-section-id="AboutTextWave-1" data-section="about">
        <AboutTextWave
          title="Most teams lose 20+ hours a week to copy-paste, follow-ups and admin. We map where the time goes, then build AI automations that give it back."
          primaryButton={{
            text: "Book a Free Audit",
            href: "#contact"
          }}
          secondaryButton={{
            text: "See Results",
            href: "#results"
          }}
        />
      </div>

      <div id="services" data-webild-section="FeaturesBento" data-webild-section-id="FeaturesBento-1" data-section="services">
        <FeaturesBento
          titleGradient
          buttonStagger
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="What We Automate"
          title="Your workflows, on autopilot."
          primaryButton={{
            text: "Book a Free Audit",
            href: "#contact"
          }}
          secondaryButton={{
            text: "See Pricing",
            href: "#pricing"
          }}
          features={[
            {
              bentoComponent: "orbiting-icons",
              centerIcon: Workflow,
              orbitIcons: [
                Mail,
                Calendar,
                FileSpreadsheet,
                MessageSquare
              ],
              title: "Connected Tools",
              description: "Your CRM, inbox and calendar finally work as one system."
            },
            {
              bentoComponent: "tilted-stack-cards",
              stackCards: [
                {
                  icon: Mail,
                  title: "Lead follow-up",
                  subtitle: "Sent in 2 minutes",
                  detail: "Automated"
                },
                {
                  icon: FileSpreadsheet,
                  title: "Invoice processing",
                  subtitle: "340 this week",
                  detail: "Done"
                },
                {
                  icon: Calendar,
                  title: "Meeting booking",
                  subtitle: "28 booked",
                  detail: "Live"
                }
              ],
              title: "Self-Running Workflows",
              description: "Follow-ups, invoices and scheduling handled without anyone touching them."
            },
            {
              bentoComponent: "chat-marquee",
              aiIcon: Bot,
              userIcon: User,
              exchanges: [
                {
                  userMessage: "Qualify today's new leads",
                  aiResponse: "Scored 42 leads and booked 6 calls."
                },
                {
                  userMessage: "Summarize this week's support tickets",
                  aiResponse: "Found 3 themes, report sent to Slack."
                },
                {
                  userMessage: "Update the CRM from yesterday's calls",
                  aiResponse: "128 records updated."
                }
              ],
              placeholder: "Ask your agent...",
              title: "AI Agents on Your Team",
              description: "Agents that read, decide and act inside your tools around the clock."
            }
          ]}
        />
      </div>

      <div id="results" data-webild-section="FeaturesStatCards" data-webild-section-id="FeaturesStatCards-1" data-section="results">
        <FeaturesStatCards
          titleGradient
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Results"
          title="Less busywork. More time to grow."
          features={[
            {
              icon: Clock,
              stat: {
                value: 20,
                suffix: "+"
              },
              title: "Hours saved every week"
            },
            {
              icon: Zap,
              stat: {
                value: 24,
                suffix: "/7"
              },
              title: "Agents working around the clock"
            },
            {
              icon: Layers,
              stat: {
                value: 50,
                suffix: "+"
              },
              title: "Tools connected to your stack"
            }
          ]}
        />
      </div>

      <div id="pricing" data-webild-section="PricingLayeredEnterprise" data-webild-section-id="PricingLayeredEnterprise-1" data-section="pricing">
        <PricingLayeredEnterprise
          titleGradient
          buttonStagger
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Pricing"
          title="Clear pricing. Results you can measure."
          plans={[
            {
              tag: "Roadmap",
              price: "$1,500",
              description: "A clear plan for what to automate first.",
              primaryButton: {
                text: "Get Started",
                href: "#contact"
              },
              features: [
                "Workflow and tool audit",
                "Time and cost savings estimate",
                "Prioritized automation plan",
                "Delivered within one week"
              ]
            },
            {
              tag: "Build",
              price: "$6,000",
              description: "Your top workflows, built and running.",
              primaryButton: {
                text: "Get Started",
                href: "#contact"
              },
              features: [
                "Everything in Roadmap",
                "Up to 3 automations or agents",
                "Connected to your existing tools",
                "30 days of support"
              ]
            },
            {
              tag: "Growth",
              price: "$3,000/mo",
              description: "Automation that grows with you.",
              primaryButton: {
                text: "Get Started",
                href: "#contact"
              },
              features: [
                "Everything in Build",
                "New automations every month",
                "Ongoing monitoring and tuning",
                "Priority support"
              ]
            }
          ]}
          enterprise={{
            tag: "Custom pricing",
            title: "Enterprise",
            description: "Unlimited automations, SSO, security review and a dedicated engineer, scoped to your team.",
            primaryButton: {
              text: "Talk to Sales",
              href: "#contact"
            }
          }}
        />
      </div>

      <div id="team" data-webild-section="TeamOverlayCards" data-webild-section-id="TeamOverlayCards-1" data-section="team">
        <TeamOverlayCards
          titleGradient
          buttonStagger
          cardAnimation="rotate-scale"
          textAnimation="slide-up"
          tag="Team"
          title="Built by engineers who automate for a living."
          members={[
            {
              name: "Brody Glanville",
              role: "CEO",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/ceo-1600.webp"
            },
            {
              name: "Bennett Spooner",
              role: "COO",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/coo-1600.webp"
            },
            {
              name: "Jesse Rurka",
              role: "CTO",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/ai-consulting/cto-1600.webp"
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactCenter" data-webild-section-id="ContactCenter-1" data-section="contact">
        <ContactCenter
          titleGradient
          buttonStagger
          wideContent
          textAnimation="slide-up"
          tag="Get Started"
          title="Ready to get your hours back?"
          description="Book a free 30-minute automation audit and see what we would automate first."
          inputPlaceholder="Enter your email"
          buttonText="Book a Free Audit"
        />
      </div>
    </>
  );
}
