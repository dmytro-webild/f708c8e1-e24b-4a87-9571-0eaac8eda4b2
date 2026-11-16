import { useState } from "react";
import AppearOnScroll from "@/components/animation/AppearOnScroll";
import WordByWordReveal from "@/components/animation/WordByWordReveal";
import GradientWordReveal from "@/components/animation/GradientWordReveal";
import StaggerText from "@/components/animation/StaggerText";
import { Mail, Phone, User } from "lucide-react";

type ContactCenterProps = {
  tag: string;
  title: string;
  description: string;
  inputPlaceholder: string;
  buttonText: string;
  onSubmit?: (email: string) => void;
  titleGradient?: boolean;
  buttonStagger?: boolean;
  wideContent?: boolean;
  textAnimation: "slide-up" | "fade-blur" | "fade";
  contactInfo?: {
    email?: string;
    phone?: string;
    ceo?: string;
  };
};

const ContactCenter = ({
  tag,
  title,
  description,
  inputPlaceholder,
  buttonText,
  onSubmit,
  titleGradient,
  buttonStagger,
  wideContent,
  textAnimation,
  contactInfo,
}: ContactCenterProps) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      onSubmit?.(email);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section aria-label="Contact section" className="py-20">
      <div className="w-full max-w-6xl px-6 mx-auto">
        <AppearOnScroll variant="slide-up" className="flex items-center justify-center py-20 card rounded">
          <div className={wideContent ? "flex flex-col items-center w-full md:w-8/10 gap-2 px-5" : "flex flex-col items-center w-full md:w-1/2 gap-2 px-5"}>
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
                className="md:max-w-9/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
              />
            ) : (
              <WordByWordReveal
                text={title}
                variant={textAnimation}
                tag="h2"
                className="md:max-w-9/10 text-3xl md:text-5xl 2xl:text-6xl leading-[1.15] font-semibold text-center text-balance"
              />
            )}

            <WordByWordReveal
              text={description}
              variant={textAnimation}
              tag="p"
              className="md:max-w-9/10 text-base md:text-lg 2xl:text-xl leading-snug text-center text-balance"
            />

            <form
              onSubmit={handleSubmit}
              className={wideContent ? "flex flex-col md:flex-row w-full md:w-7/10 gap-3 md:gap-1 p-1 mt-2 md:mt-3 card rounded" : "flex flex-col md:flex-row w-full md:w-8/10 2xl:w-6/10 gap-3 md:gap-1 p-1 mt-2 md:mt-3 card rounded"}
            >
              <input
                type="email"
                placeholder={inputPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-3 md:py-0 text-base text-center md:text-left bg-transparent placeholder:opacity-75 focus:outline-none truncate"
                aria-label="Email address"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center h-10 px-6 text-sm rounded btn-primary bg-primary text-primary-foreground cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : buttonStagger ? <StaggerText text={buttonText} /> : buttonText}
              </button>
            </form>

            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}

            {contactInfo && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8 pt-6 border-t border-border/40">
                {contactInfo.ceo && (
                  <div className="flex items-center gap-3 p-3.5 card rounded text-left">
                    <div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
                      <User className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">CEO & Founder</p>
                      <p className="text-sm font-semibold truncate">{contactInfo.ceo}</p>
                    </div>
                  </div>
                )}
                {contactInfo.email && (
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 p-3.5 card rounded text-left hover:border-primary/50 transition-colors">
                    <div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
                      <Mail className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email Us</p>
                      <p className="text-sm font-semibold truncate">{contactInfo.email}</p>
                    </div>
                  </a>
                )}
                {contactInfo.phone && (
                  <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 p-3.5 card rounded text-left hover:border-primary/50 transition-colors">
                    <div className="p-2.5 rounded-full bg-primary/10 text-primary shrink-0">
                      <Phone className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Call Us</p>
                      <p className="text-sm font-semibold truncate">{contactInfo.phone}</p>
                    </div>
                  </a>
                )}
              </div>
            )}
          </div>
        </AppearOnScroll>
      </div>
    </section>
  );
};

export default ContactCenter;
