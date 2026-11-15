import WordByWordReveal from "@/components/animation/WordByWordReveal";
import GradientWordReveal from "@/components/animation/GradientWordReveal";
import ParallaxImage from "@/components/animation/ParallaxImage";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import StaggerText from "@/components/animation/StaggerText";

type TeamMember = {
  name: string;
  role: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const TeamOverlayCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  members,
  titleGradient,
  buttonStagger,
  cardAnimation = "slide-up",
  textAnimation,
}: {
  tag: string;
  title: string;
  description?: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  members: TeamMember[];
  titleGradient?: boolean;
  buttonStagger?: boolean;
  cardAnimation?: "slide-up" | "rotate-scale";
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Team section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-center gap-2 w-full max-w-6xl px-6 mx-auto">
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
        {members.map((member, index) => (
          <AppearOnScroll key={member.name} variant={cardAnimation} delay={index * 0.08} className="h-full">
            <div className="relative aspect-4/5 card rounded">
              <div className="relative w-full h-full rounded overflow-hidden">
                <ParallaxImage src={member.imageSrc} videoSrc={member.videoSrc} />

                <div className="absolute inset-x-4 bottom-4 xl:inset-x-5 xl:bottom-5 2xl:inset-x-6 2xl:bottom-6 flex items-center justify-between gap-4 xl:gap-5 2xl:gap-6 p-4 xl:p-5 2xl:p-6 card backdrop-blur-sm rounded">
                  <p className="text-lg md:text-xl 2xl:text-2xl font-semibold leading-tight truncate">{member.name}</p>
                  <div className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded">
                    <p className="truncate">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </AppearOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default TeamOverlayCards;
