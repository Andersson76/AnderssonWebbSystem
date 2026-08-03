"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

type MotionExperienceProps = {
  children: ReactNode;
};

type MediaConditions = {
  isDesktop: boolean;
  isMobile: boolean;
  reduceMotion: boolean;
};

const DESKTOP_QUERY = "(min-width: 1024px) and (min-height: 720px)";
const MOBILE_QUERY = "(max-width: 1023px), (max-height: 719px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function MotionExperience({ children }: MotionExperienceProps) {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add(
        {
          isDesktop: DESKTOP_QUERY,
          isMobile: MOBILE_QUERY,
          reduceMotion: REDUCED_MOTION_QUERY,
        },
        (mediaContext) => {
          const { isDesktop, reduceMotion } =
            mediaContext.conditions as MediaConditions;

          if (reduceMotion) {
            document.documentElement.classList.remove("motion-ready");
            return;
          }

          document.documentElement.classList.add("motion-ready");

          const lenis = new Lenis({
            anchors: { duration: 1.05 },
            autoRaf: false,
            duration: 1.05,
            smoothWheel: true,
            stopInertiaOnNavigate: true,
            syncTouch: false,
          });
          const onLenisScroll = () => ScrollTrigger.update();
          const unsubscribeLenis = lenis.on("scroll", onLenisScroll);
          const updateLenis = (time: number) => lenis.raf(time * 1000);

          gsap.ticker.add(updateLenis);
          gsap.ticker.lagSmoothing(0);

          const queryAll = <T extends Element>(selector: string) =>
            Array.from(root.querySelectorAll<T>(selector));
          const query = <T extends Element>(selector: string) =>
            root.querySelector<T>(selector);

          const hero = query<HTMLElement>("[data-hero]");
          const heroLines = queryAll<HTMLElement>("[data-hero-line]");
          const heroDetails = queryAll<HTMLElement>("[data-hero-detail]");
          const board = query<HTMLElement>("[data-operating-board]");
          const boardLayers = queryAll<HTMLElement>("[data-board-layer]");
          const chartBars = queryAll<HTMLElement>("[data-chart-bar]");

          if (hero && window.scrollY < 80) {
            const heroIntro = gsap.timeline({
              defaults: { ease: "power4.out" },
            });

            heroIntro
              .from(heroLines, {
                duration: 0.9,
                stagger: 0.1,
                yPercent: 110,
              })
              .from(
                heroDetails,
                {
                  autoAlpha: 0,
                  duration: 0.7,
                  stagger: 0.08,
                  y: 18,
                },
                "-=0.5",
              );

            if (board) {
              heroIntro.from(
                board,
                {
                  autoAlpha: 0,
                  duration: 0.85,
                  rotate: 0.6,
                  y: 28,
                },
                0.3,
              );
            }

            heroIntro
              .from(
                boardLayers,
                {
                  autoAlpha: 0,
                  duration: 0.55,
                  stagger: 0.06,
                  y: 12,
                },
                0.58,
              )
              .from(
                chartBars,
                {
                  duration: 0.65,
                  scaleY: 0,
                  stagger: 0.055,
                  transformOrigin: "bottom",
                },
                0.72,
              );
          }

          queryAll<HTMLElement>("[data-reveal]").forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              duration: 0.78,
              ease: "power3.out",
              scrollTrigger: {
                once: true,
                start: "top 88%",
                trigger: element,
              },
              y: 26,
            });
          });

          const servicesSection = query<HTMLElement>("[data-services]");
          const serviceCards = queryAll<HTMLElement>("[data-service-card]");
          const serviceProgress = query<HTMLElement>("[data-service-progress]");

          if (isDesktop && servicesSection && serviceProgress) {
            gsap.fromTo(
              serviceProgress,
              { scaleY: 0, transformOrigin: "top" },
              {
                ease: "none",
                scaleY: 1,
                scrollTrigger: {
                  end: "bottom 42%",
                  scrub: 0.65,
                  start: "top 68%",
                  trigger: servicesSection,
                },
              },
            );
          }

          serviceCards.forEach((card) => {
            gsap.from(card, {
              autoAlpha: 0,
              duration: 0.82,
              ease: "power3.out",
              scrollTrigger: {
                once: true,
                start: "top 84%",
                trigger: card,
              },
              y: isDesktop ? 42 : 24,
            });
          });

          if (isDesktop && hero) {
            const heroCopy = query<HTMLElement>("[data-hero-copy]");

            if (heroCopy) {
              gsap.to(heroCopy, {
                ease: "none",
                scrollTrigger: {
                  end: "bottom top",
                  scrub: 0.8,
                  start: "top top",
                  trigger: hero,
                },
                y: -34,
              });
            }

            if (board) {
              gsap.to(board, {
                ease: "none",
                rotate: -0.45,
                scrollTrigger: {
                  end: "bottom top",
                  scrub: 0.9,
                  start: "top top",
                  trigger: hero,
                },
                y: -62,
              });
            }
          }

          if (isDesktop && servicesSection) {
            const serviceDiagram = query<HTMLElement>("[data-service-diagram]");
            const diagramFlow = query<HTMLElement>("[data-diagram-flow]");
            const diagramNodes = queryAll<HTMLElement>("[data-diagram-node]");

            if (diagramFlow) {
              gsap.fromTo(
                diagramFlow,
                { scaleX: 0.08, transformOrigin: "left" },
                {
                  ease: "none",
                  scaleX: 1,
                  scrollTrigger: {
                    end: "bottom 46%",
                    scrub: 0.7,
                    start: "top 62%",
                    trigger: servicesSection,
                  },
                },
              );
            }

            diagramNodes.forEach((node, index) => {
              const card = serviceCards[index];

              if (!card) {
                return;
              }

              gsap.fromTo(
                node,
                { autoAlpha: 0.42, y: 8 },
                {
                  autoAlpha: 1,
                  ease: "none",
                  scrollTrigger: {
                    end: "center 42%",
                    scrub: 0.5,
                    start: "top 68%",
                    trigger: card,
                  },
                  y: 0,
                },
              );
            });

            if (serviceDiagram) {
              gsap.to(serviceDiagram, {
                ease: "none",
                scrollTrigger: {
                  end: "bottom top",
                  scrub: 0.9,
                  start: "top bottom",
                  trigger: servicesSection,
                },
                y: -14,
              });
            }
          }

          const processSection = query<HTMLElement>("[data-process]");
          const processStage = query<HTMLElement>("[data-process-stage]");
          const processCards = queryAll<HTMLElement>("[data-process-card]");
          const processProgress = query<HTMLElement>("[data-process-progress]");

          if (
            isDesktop &&
            processSection &&
            processStage &&
            processCards.length > 0 &&
            processProgress
          ) {
            gsap.set(processCards, { autoAlpha: 0.52, y: 22 });
            gsap.set(processCards[0], { autoAlpha: 1, y: 0 });
            gsap.set(processProgress, {
              scaleX: 0,
              transformOrigin: "left",
            });

            const processTimeline = gsap.timeline({
              scrollTrigger: {
                anticipatePin: 1,
                end: () => `+=${Math.max(window.innerHeight * 1.9, 1200)}`,
                invalidateOnRefresh: true,
                pin: processStage,
                scrub: 0.75,
                start: "top top",
                trigger: processSection,
              },
            });

            processTimeline.to(
              processProgress,
              { duration: 3, ease: "none", scaleX: 1 },
              0,
            );

            processCards.forEach((card, index) => {
              const rule = card.querySelector<HTMLElement>(
                "[data-process-rule]",
              );

              if (index > 0) {
                processTimeline
                  .to(
                    processCards[index - 1],
                    {
                      autoAlpha: 0.52,
                      duration: 0.4,
                      ease: "none",
                      y: -10,
                    },
                    index,
                  )
                  .to(
                    card,
                    {
                      autoAlpha: 1,
                      duration: 0.5,
                      ease: "none",
                      y: 0,
                    },
                    index,
                  );
              }

              if (rule) {
                processTimeline.from(
                  rule,
                  {
                    duration: 0.45,
                    ease: "none",
                    scaleX: 0,
                    transformOrigin: "left",
                  },
                  index,
                );
              }
            });
          } else {
            processCards.forEach((card) => {
              gsap.from(card, {
                autoAlpha: 0,
                duration: 0.78,
                ease: "power3.out",
                scrollTrigger: {
                  once: true,
                  start: "top 86%",
                  trigger: card,
                },
                y: 24,
              });
            });
          }

          let isActive = true;
          const refreshFrame = window.requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });

          void document.fonts.ready.then(() => {
            if (isActive) {
              ScrollTrigger.refresh();
            }
          });

          return () => {
            isActive = false;
            window.cancelAnimationFrame(refreshFrame);
            unsubscribeLenis();
            gsap.ticker.remove(updateLenis);
            gsap.ticker.lagSmoothing(500, 33);
            lenis.destroy();
            document.documentElement.classList.remove("motion-ready");
          };
        },
      );
    }, root);

    return () => {
      media.revert();
      context.revert();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#huvudinnehall">
        Hoppa till innehållet
      </a>
      <main id="huvudinnehall" ref={rootRef} tabIndex={-1}>
        {children}
      </main>
    </>
  );
}
