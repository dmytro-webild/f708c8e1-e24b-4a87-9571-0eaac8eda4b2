import LetterColorWave from "@/components/animation/LetterColorWave";
import StaggerText from "@/components/animation/StaggerText";

interface AboutTextWaveProps {
  title: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  evenPadding?: boolean;
}

const AboutTextWave = ({
  title,
  primaryButton,
  secondaryButton,
  evenPadding = false,
}: AboutTextWaveProps) => {
  return (
    <section aria-label="About section" className={evenPadding ? "py-20" : "pt-20 pb-40"}>
      <div className="w-full max-w-6xl px-6 mx-auto flex flex-col gap-2 items-center">
        <LetterColorWave title={title} className="text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance" />

        {(primaryButton || secondaryButton) && (
          <div className="flex flex-wrap gap-3 justify-center mt-2 md:mt-3">
            {primaryButton && <a href={primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground"><StaggerText text={primaryButton.text} /></a>}
            {secondaryButton && <a href={secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground"><StaggerText text={secondaryButton.text} /></a>}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutTextWave;
