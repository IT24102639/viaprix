"use client";
import { useEffect, useRef } from "react";

export default function Motion() {
  const ring = useRef<HTMLDivElement>(null);
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    let cleanupPointer = () => {};
    const sync = () => {
      cleanupPointer();
      if (!media.matches) return;
      let x = 0,
        y = 0,
        rx = 0,
        ry = 0,
        frame = 0,
        active = false;
      let card: HTMLElement | null = null;
      const resetCard = () => {
        if (!card) return;
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
        card.classList.remove("pointer-active");
        card = null;
      };
      const leave = () => {
        active = false;
        resetCard();
        ring.current?.classList.remove("visible");
        glow.current?.classList.remove("visible");
      };
      const move = (event: PointerEvent) => {
        if (!active) {
          rx = event.clientX;
          ry = event.clientY;
          active = true;
        }
        x = event.clientX;
        y = event.clientY;
        ring.current?.classList.add("visible");
        glow.current?.classList.add("visible");
        const target = event.target as Element;
        ring.current?.classList.toggle(
          "hovering",
          !!target.closest("a,button,input,textarea,select"),
        );
        const next = target.closest<HTMLElement>(
          ".service-card, .feature-card, .hero-visual, .transformation-visual, .about-art",
        );
        if (card !== next) {
          resetCard();
          card = next;
        }
        if (card) {
          const b = card.getBoundingClientRect();
          card.style.setProperty("--pointer-x", `${x - b.left}px`);
          card.style.setProperty("--pointer-y", `${y - b.top}px`);
          card.style.setProperty(
            "--tilt-x",
            `${(-(y - b.top - b.height / 2) / b.height) * 5}deg`,
          );
          card.style.setProperty(
            "--tilt-y",
            `${((x - b.left - b.width / 2) / b.width) * 5}deg`,
          );
          card.classList.add("pointer-active");
        }
      };
      const animate = () => {
        rx += (x - rx) * 0.16;
        ry += (y - ry) * 0.16;
        if (ring.current)
          ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
        if (glow.current)
          glow.current.style.transform = `translate3d(${rx}px,${ry}px,0)`;
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      window.addEventListener("pointermove", move, { passive: true });
      document.documentElement.addEventListener("pointerleave", leave);
      window.addEventListener("blur", leave);
      cleanupPointer = () => {
        cancelAnimationFrame(frame);
        leave();
        window.removeEventListener("pointermove", move);
        document.documentElement.removeEventListener("pointerleave", leave);
        window.removeEventListener("blur", leave);
      };
    };
    sync();
    media.addEventListener("change", sync);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    if (!reduced.matches)
      document.querySelectorAll(".section, .promise-strip").forEach((el) => {
        el.classList.add("will-reveal");
        observer.observe(el);
      });
    return () => {
      cleanupPointer();
      media.removeEventListener("change", sync);
      observer.disconnect();
      document
        .querySelectorAll(".will-reveal")
        .forEach((el) => el.classList.remove("will-reveal"));
    };
  }, []);
  return (
    <>
      <div ref={glow} className="cursor-glow" aria-hidden="true" />
      <div ref={ring} className="cursor-ring" aria-hidden="true">
        <span />
      </div>
    </>
  );
}
