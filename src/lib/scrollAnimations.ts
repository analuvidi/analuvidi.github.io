import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const HEADING_SELECTORS = ["main h1", "main section[id] h2", "main section article h3"];
const BODY_SELECTORS = ["main section[id] .grid.items-start > p", "main section article p"];

/** Altura da tela em que o conteúdo aparece: assim que entra, longe do meio. */
const REVEAL_LINE = 0.92;

type AnimationOptions = {
  /** Anima também o que já está na tela. Só faz sentido atrás do loader. */
  revealVisible?: boolean;
};

let scrollCtx: gsap.Context | null = null;

function resetScrollSplitElements() {
  document.querySelectorAll<HTMLElement>("[data-scroll-split='true']").forEach((element) => {
    const words = element.querySelectorAll<HTMLElement>(".scroll-word");

    if (words.length > 0) {
      element.textContent = Array.from(words)
        .map((word) => word.textContent?.trim() ?? "")
        .filter(Boolean)
        .join(" ");
    }

    delete element.dataset.scrollSplit;
  });
}

function splitTextIntoWords(element: HTMLElement): HTMLElement[] {
  if (element.dataset.scrollSplit === "true") {
    return Array.from(element.querySelectorAll<HTMLElement>(".scroll-word"));
  }

  const text = element.textContent?.trim();
  if (!text) return [];

  const words = text.split(/\s+/);
  element.textContent = "";

  const wordElements: HTMLElement[] = [];

  words.forEach((word, index) => {
    const wrapper = document.createElement("span");
    wrapper.className = "scroll-word-wrap inline-block overflow-hidden align-top";

    const inner = document.createElement("span");
    inner.className = "scroll-word inline-block";
    inner.textContent = word;

    wrapper.appendChild(inner);
    element.appendChild(wrapper);
    wordElements.push(inner);

    if (index < words.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });

  element.dataset.scrollSplit = "true";
  return wordElements;
}

function isPastRevealLine(element: Element) {
  return element.getBoundingClientRect().top < window.innerHeight * REVEAL_LINE;
}

/** Roda uma vez ao entrar na tela e termina sozinha, sem depender da rolagem. */
function reveal(
  trigger: Element,
  targets: gsap.TweenTarget,
  from: gsap.TweenVars,
  to: gsap.TweenVars,
) {
  gsap.fromTo(targets, from, {
    ...to,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: { trigger, start: `top ${REVEAL_LINE * 100}%`, once: true },
  });
}

function initTextReveal(revealVisible: boolean) {
  const shouldReveal = (element: Element) => revealVisible || !isPastRevealLine(element);

  gsap.utils.toArray<HTMLElement>(HEADING_SELECTORS.join(",")).filter(shouldReveal).forEach((element) => {
    const words = splitTextIntoWords(element);
    if (!words.length) return;

    reveal(element, words, { yPercent: 115 }, { yPercent: 0, stagger: { amount: 0.25 } });
  });

  gsap.utils.toArray<HTMLElement>(BODY_SELECTORS.join(",")).filter(shouldReveal).forEach((element) => {
    reveal(element, element, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1 });
  });
}

export function initScrollAnimations({ revealVisible = false }: AnimationOptions = {}) {
  if (prefersReducedMotion()) return;

  scrollCtx?.revert();
  resetScrollSplitElements();

  scrollCtx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>("footer a, footer span").forEach((element) => {
      gsap.set(element, { clearProps: "opacity,transform,filter" });
    });

    initTextReveal(revealVisible);

    gsap.utils.toArray<HTMLElement>("main section article").forEach((article) => {
      const media =
        article.querySelector<HTMLElement>("[data-portfolio-media]") ??
        article.querySelector<HTMLElement>(":scope img");

      if (media && (revealVisible || !isPastRevealLine(media))) {
        reveal(media, media, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1 });
      }
    });

    ScrollTrigger.refresh();
  });
}

export function initPageAnimations(options?: AnimationOptions) {
  initScrollAnimations(options);

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}

export function refreshScrollAnimations() {
  if (document.body.classList.contains("edit-mode-active")) return;

  initPageAnimations();
}
