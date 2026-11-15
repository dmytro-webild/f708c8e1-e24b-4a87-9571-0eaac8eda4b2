import { Check } from "lucide-react";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import GradientWordReveal from "@/components/animation/GradientWordReveal";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import StaggerText from "@/components/animation/StaggerText";

type PricingPlan = {
  tag: string;
  price: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  features: string[];
};

type EnterprisePlan = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
};

const PricingLayeredEnterprise = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  plans,
  enterprise,
  titleGradient,
  buttonStagger,
  cardAnimation = "slide-up",
  textAnimation,
  glassPanels = false,
}: {
  glassPanels?: boolean;
  tag: string;
  title: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  plans: PricingPlan[];
  enterprise: EnterprisePlan;
  titleGradient?: boolean;
  buttonStagger?: boolean;
  cardAnimation?: "slide-up" | "rotate-scale";
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Pricing section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-center w-full max-w-6xl px-6 mx-auto gap-2">
        <AppearOnScroll variant="fade">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p>{tag}</p>
          </div>
        </AppearOnScroll>

        {titleGradient ? (
          <GradientWordReveal
            text={title}
            variant={textAnimation}
            tag="h2"
            className="md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
          />
        ) : (
          <WordByWordReveal
            text={title}
            variant={textAnimation}
            tag="h2"
            className="md:max-w-8/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
          />
        )}

        {description && (
          <WordByWordReveal
            text={description}
            variant={textAnimation}
            tag="p"
            className="md:max-w-7/10 text-base md:text-lg 2xl:text-xl leading-snug text-center text-balance"
          />
        )}

        {(primaryButton || secondaryButton) && (
          <AppearOnScroll variant="slide-up" delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <a href={primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground">{buttonStagger ? <StaggerText text={primaryButton.text} /> : primaryButton.text}</a>}
              {secondaryButton && <a href={secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground">{buttonStagger ? <StaggerText text={secondaryButton.text} /> : secondaryButton.text}</a>}
            </div>
          </AppearOnScroll>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl px-6 mx-auto">
        {plans.map((plan, index) => (
          <AppearOnScroll key={plan.tag} variant={cardAnimation} delay={index * 0.08} className="h-full">
            <div className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 h-full card rounded">
              <div className={`flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-3 xl:p-3.5 2xl:p-4 rounded ${glassPanels ? "card" : "bg-secondary text-secondary-foreground"}`}>
                <div className="px-3 py-1 w-fit text-sm card rounded">
                  <p>{plan.tag}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-4xl md:text-5xl 2xl:text-6xl font-semibold leading-none">{plan.price}</p>
                  <p className="text-base font-medium">{plan.description}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <a href={plan.primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground w-full">{buttonStagger ? <StaggerText text={plan.primaryButton.text} /> : plan.primaryButton.text}</a>
                  {plan.secondaryButton && <a href={plan.secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground w-full">{buttonStagger ? <StaggerText text={plan.secondaryButton.text} /> : plan.secondaryButton.text}</a>}
                </div>
              </div>

              <div className="flex flex-col gap-3 p-3 xl:p-3.5 2xl:p-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="flex items-center justify-center shrink-0 size-6 bg-primary text-primary-foreground rounded">
                      <Check className="size-3 text-primary-foreground" strokeWidth={2} />
                    </div>
                    <p className="text-base leading-snug">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </AppearOnScroll>
        ))}

        <AppearOnScroll variant={cardAnimation} delay={plans.length * 0.08} className="md:col-span-2 lg:col-span-3">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-8 card rounded">
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl md:text-3xl 2xl:text-4xl font-semibold leading-tight">{enterprise.title}</h3>
                <div className="px-3 py-1 w-fit text-sm card rounded">
                  <p>{enterprise.tag}</p>
                </div>
              </div>
              <p className="md:max-w-8/10 text-base leading-snug text-balance">{enterprise.description}</p>
            </div>
            <a href={enterprise.primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground shrink-0">{buttonStagger ? <StaggerText text={enterprise.primaryButton.text} /> : enterprise.primaryButton.text}</a>
          </div>
        </AppearOnScroll>
      </div>
    </div>
  </section>
);

export default PricingLayeredEnterprise;
