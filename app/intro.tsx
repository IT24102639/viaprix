"use client";
import { useEffect, useState } from "react";
import BrandMark from "./brand-mark";
export default function Intro() {
  const [phase, setPhase] = useState("loading");
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("viaprix-intro") === "seen";
      sessionStorage.setItem("viaprix-intro", "seen");
    } catch {}
    if (seen || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }
    const exit = setTimeout(() => setPhase("exit"), 1250);
    const done = setTimeout(() => setPhase("done"), 1900);
    return () => {
      clearTimeout(exit);
      clearTimeout(done);
    };
  }, []);
  if (phase === "done") return null;
  return (
    <div className={`brand-intro ${phase}`}>
      <div className="intro-coordinate" aria-hidden="true">
        <span>VIAPRIX</span>
        <span>YOUR NEXT CHAPTER / STARTS HERE</span>
      </div>
      <div className="intro-center" aria-hidden="true">
        <div className="intro-halo" />
        <BrandMark className="intro-mark" />
        <span className="intro-wordmark">
          viaprix<span>.</span>
        </span>
        <p>Navigating Your Digital Future</p>
        <div className="intro-line">
          <span />
        </div>
      </div>
      <button onClick={() => setPhase("exit")} className="skip-intro">
        Skip intro ↗
      </button>
      <span className="intro-bottom" aria-hidden="true">
        IDEAS. CONNECTED. POSSIBILITIES. UNLOCKED.
      </span>
    </div>
  );
}
