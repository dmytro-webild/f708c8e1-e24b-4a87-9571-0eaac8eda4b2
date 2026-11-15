import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, animate, useAnimationFrame, useInView, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
import type { MotionValue } from "motion/react";
import NumberFlow from "@/components/vendor/NumberFlow";
import StaggerText from "@/components/animation/StaggerText";

type MediaItem = { imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never };

type HeroToolRingProps = {
  title: string;
  titleMuted: string;
  description?: string;
  detail?: { title: string; description: string };
  stat: { value: number; label: string };
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  items: MediaItem[];
};

const EASE = [0.22, 1, 0.36, 1] as const;
const SLIDE_EASE = [0.76, 0, 0.24, 1] as const;
const CARD_EASE = [0.16, 1, 0.3, 1] as const;
const COUNT_EASE = [0.33, 0, 0.2, 1] as const;
const COUNT_DURATION = 1.7;
const SPRING = { stiffness: 110, damping: 18, mass: 0.6 };
const IDLE_SPEED = 360 / 80;
const SPIN_PER_PX = 0.04;
const SPIN_BOOST = 120;
const SCROLL_KEYS = [" ", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"];

const seeded = (index: number, salt: number) => {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
};

type RingTileProps = {
  item: MediaItem;
  index: number;
  total: number;
  isShown: boolean;
  glare: MotionValue<string>;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
  angle: MotionValue<number>;
  still: boolean;
};

const RingTile = ({ item, index, total, isShown, glare, pointerX, pointerY, angle, still }: RingTileProps) => {
  const depth = 0.55 + seeded(index, 1) * 0.9;
  const spring = { stiffness: 60 + seeded(index, 2) * 90, damping: 14 + seeded(index, 3) * 8, mass: 0.5 + seeded(index, 4) * 0.6 };
  const base = (360 / total) * index;
  const screenX = useSpring(useTransform(pointerX, [-1, 1], [-14 * depth, 14 * depth]), spring);
  const screenY = useSpring(useTransform(pointerY, [-1, 1], [-10 * depth, 10 * depth]), spring);
  const turnY = useSpring(useTransform(pointerX, [-1, 1], [-18 * depth, 18 * depth]), spring);
  const turnX = useSpring(useTransform(pointerY, [-1, 1], [14 * depth, -14 * depth]), spring);
  const toLocal = (a: number, b: number, degrees: number, pick: "first" | "second") => {
    const theta = ((base + degrees) * Math.PI) / 180;
    return pick === "first" ? a * Math.cos(theta) + b * Math.sin(theta) : -a * Math.sin(theta) + b * Math.cos(theta);
  };
  const x = useTransform([screenX, screenY, angle], ([a, b, d]: number[]) => toLocal(a, b, d, "first"));
  const y = useTransform([screenX, screenY, angle], ([a, b, d]: number[]) => toLocal(a, b, d, "second"));
  const leanX = useTransform([turnX, turnY, angle], ([a, b, d]: number[]) => toLocal(a, b, d, "first"));
  const leanY = useTransform([turnX, turnY, angle], ([a, b, d]: number[]) => toLocal(a, b, d, "second"));
  const drift = { x: 3 + seeded(index, 5) * 6, y: 5 + seeded(index, 6) * 9, turn: 1 + seeded(index, 7) * 3, duration: 5 + seeded(index, 8) * 4 };

  return (
    <div className="absolute inset-0 transform-3d" style={{ transform: `rotate(${(360 / total) * index}deg)` }}>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 size-16 md:size-[8vw] transform-3d">
        <motion.div style={still ? undefined : { x, y }} className="size-full transform-3d">
          <motion.div style={still ? undefined : { rotateX: leanX, rotateY: leanY }} className="size-full transform-3d">
            <motion.div
              initial={still ? false : { opacity: 0, y: "-34%", rotateX: 42, rotateY: -18, rotateZ: 8, scale: 1.3 }}
              animate={isShown ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1 } : undefined}
              transition={{ default: { duration: 1.25, ease: CARD_EASE }, opacity: { duration: 0.5, ease: "easeOut" } }}
              className="size-full transform-3d will-change-transform"
            >
              <motion.div
                animate={
                  still || !isShown
                    ? undefined
                    : { x: [0, drift.x, 0, -drift.x, 0], y: [0, -drift.y, 0, drift.y * 0.4, 0], rotateZ: [0, drift.turn, 0, -drift.turn, 0] }
                }
                transition={{ duration: drift.duration * 2, repeat: Infinity, ease: "easeInOut", delay: 1 + seeded(index, 9) * 2 }}
                className="relative size-full overflow-hidden rounded shadow-[0_18px_40px_-18px_color-mix(in_srgb,var(--color-foreground)_55%,transparent)] card"
              >
                {item.videoSrc ? (
                  <video src={item.videoSrc} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline />
                ) : (
                  <img src={item.imageSrc} alt="" className="absolute inset-0 w-full h-full object-contain p-[30%]" />
                )}
                <motion.div aria-hidden="true" style={still ? undefined : { background: glare }} className="absolute inset-0 pointer-events-none mix-blend-screen" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const HeroToolRing = ({ title, titleMuted, description, detail, stat, primaryButton, secondaryButton, items }: HeroToolRingProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const slotX = useMotionValue(0);
  const slotY = useMotionValue(0);
  const still = Boolean(useReducedMotion());
  const inView = useInView(sectionRef);
  const [count, setCount] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const progress = useMotionValue(0);
  const spin = useMotionValue(0);
  const idle = useMotionValue(0);
  const angle = useTransform([spin, idle], ([a, b]: number[]) => a + b);
  const { scrollY } = useScroll();
  const scrollSpeed = useSpring(useVelocity(scrollY), { stiffness: 120, damping: 30 });
  useAnimationFrame((_, delta) => {
    if (still || !inView) return;
    const boost = Math.max(-SPIN_BOOST, Math.min(SPIN_BOOST, scrollSpeed.get() * SPIN_PER_PX));
    idle.set((idle.get() + (delta / 1000) * (IDLE_SPEED + boost)) % 360);
  });
  useMotionValueEvent(progress, "change", (latest) => setCount(Math.round(latest * stat.value)));
  const barScale = useTransform(progress, [0, 1], [0, 1]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const tiltY = useSpring(useTransform(pointerX, [-1, 1], [-5, 5]), SPRING);
  const tiltX = useSpring(useTransform(pointerY, [-1, 1], [4, -4]), SPRING);
  const glareX = useSpring(useTransform(pointerX, [-1, 1], [15, 85]), SPRING);
  const glareY = useSpring(useTransform(pointerY, [-1, 1], [10, 70]), SPRING);
  const glare = useTransform(
    [glareX, glareY],
    ([x, y]: number[]) => `radial-gradient(70% 70% at ${x}% ${y}%, color-mix(in srgb, var(--color-background) 38%, transparent) 0%, transparent 65%)`
  );

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (still) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  useEffect(() => {
    if (isRevealed || still) return;
    const block = (event: Event) => {
      if (event instanceof KeyboardEvent && !SCROLL_KEYS.includes(event.key)) return;
      event.preventDefault();
      event.stopImmediatePropagation();
    };
    const options = { capture: true, passive: false };
    window.scrollTo(0, 0);
    ["wheel", "touchmove", "keydown"].forEach((type) => window.addEventListener(type, block, options));
    return () => ["wheel", "touchmove", "keydown"].forEach((type) => window.removeEventListener(type, block, options));
  }, [isRevealed, still]);

  useEffect(() => {
    const controls: ReturnType<typeof animate>[] = [];
    let cancelled = false;
    const sources = items.map((item) => item.imageSrc).filter((src): src is string => Boolean(src));
    const loaded = Promise.all(
      sources.map(
        (src) =>
          new Promise<void>((resolve) => {
            const image = new Image();
            image.onload = image.onerror = () => resolve();
            image.src = src;
          })
      )
    );
    const timeout = new Promise<void>((resolve) => setTimeout(resolve, 3000));

    if (still) {
      progress.set(1);
      setIsRevealed(true);
      return;
    }

    const counting = animate(progress, 1, { duration: COUNT_DURATION, ease: COUNT_EASE });
    controls.push(counting, animate(spin, 180, { duration: COUNT_DURATION + 1.2, ease: [0.2, 0.6, 0.35, 1] }));

    Promise.all([counting, Promise.race([loaded, timeout])]).then(() => {
      if (!cancelled) setIsRevealed(true);
    });

    return () => {
      cancelled = true;
      controls.forEach((control) => control.stop());
    };
  }, [items, progress, spin, still]);

  useLayoutEffect(() => {
    const slot = slotRef.current;
    if (still || !slot) return;
    window.scrollTo(0, 0);
    const rect = slot.getBoundingClientRect();
    slotX.set(window.innerWidth / 2 - (rect.left + rect.width / 2 - slotX.get()));
    slotY.set(window.innerHeight / 2 - (rect.top + rect.height / 2 - slotY.get()));
  }, [slotX, slotY, still]);

  useEffect(() => {
    if (!isRevealed) return;
    const controls = [animate(slotX, 0, { duration: 1, ease: SLIDE_EASE }), animate(slotY, 0, { duration: 1, ease: SLIDE_EASE })];
    return () => controls.forEach((control) => control.stop());
  }, [isRevealed, slotX, slotY]);

  const ring = (
    <div className="relative aspect-square h-[min(72vw,calc(100svh-18rem))] md:h-[min(30vw,calc(100svh-22rem))] transform-3d">
      <motion.div style={still ? undefined : { rotateX: tiltX, rotateY: tiltY }} className="absolute inset-0 transform-3d">
        <div className="absolute inset-0 transform-3d">
          <motion.div style={{ rotate: angle }} className="absolute inset-0 transform-3d">
            {items.map((item, index) => (
              <RingTile
                key={index}
                item={item}
                index={index}
                total={items.length}
                isShown={count >= Math.round(((index + 0.5) / items.length) * stat.value)}
                glare={glare}
                pointerX={pointerX}
                pointerY={pointerY}
                angle={angle}
                still={still}
              />
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <NumberFlow value={count} format={{ minimumIntegerDigits: 2 }} className="text-5xl md:text-7xl font-medium leading-none tracking-tight tabular-nums" />
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="flex items-center gap-2 -mt-2 md:-mt-3 text-xs md:text-sm whitespace-nowrap"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
            {stat.label}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );

  const line = (text: string, index: number, className = "") => (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "110%" }}
        animate={isRevealed ? { y: "0%" } : undefined}
        transition={{ duration: 1.1, delay: 0.45 + index * 0.1, ease: EASE }}
      >
        {text}
      </motion.span>
    </span>
  );

  const buttons = (
    <>
      <a href={primaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-primary bg-primary text-primary-foreground"><StaggerText text={primaryButton.text} /></a>
      {secondaryButton && (
        <a href={secondaryButton.href} className="flex items-center justify-center h-10 px-6 text-sm rounded-lg cursor-pointer btn-secondary bg-secondary text-secondary-foreground"><StaggerText text={secondaryButton.text} /></a>
      )}
    </>
  );

  return (
    <section
      ref={sectionRef}
      aria-label="Hero section"
      data-revealed={isRevealed}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      className="relative flex items-center min-h-svh pt-25 pb-20 md:py-0 overflow-hidden"
    >
      <motion.div
        aria-hidden="true"
        style={{ scaleY: barScale }}
        animate={{ opacity: isRevealed ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute inset-y-0 left-0 w-1 origin-bottom bg-foreground"
      />

      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20 w-full max-w-6xl px-6 mx-auto">
        <div className="relative z-30 flex flex-col items-center md:items-start gap-3 md:gap-5 w-full md:w-1/2 text-center md:text-left">
          <h1 aria-label={`${title} ${titleMuted}`} className="text-4xl md:text-6xl 2xl:text-7xl font-medium leading-[1.05] tracking-tight md:whitespace-nowrap">
            <span aria-hidden="true">
              {line(title, 0)}
              {line(titleMuted, 1, "opacity-45")}
            </span>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isRevealed ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, delay: 0.65, ease: EASE }}
            className="flex flex-col items-center md:items-start gap-4 md:gap-6"
          >
            {description && <p className="text-base md:text-lg 2xl:text-xl leading-snug text-balance">{description}</p>}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:mt-1">{buttons}</div>
            {detail && (
              <p className="flex items-center gap-2 md:mt-1 text-sm">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary animate-pulse" />
                {detail.title}: {detail.description}
              </p>
            )}
          </motion.div>
        </div>
        <motion.div ref={slotRef} style={{ x: slotX, y: slotY }} className="relative z-40 order-first md:order-none flex items-center justify-center w-full md:w-1/2 aspect-square md:aspect-auto md:h-svh perspective-[1400px]">
          {ring}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroToolRing;
