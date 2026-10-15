import { ArrowUpRight, Box, Cloud, Code2, ScanLine } from "lucide-react";
import BrandMark from "./brand-mark";
export default function HeroScene() {
  return (
    <div className="hero-visual brand-universe">
      <div className="universe-grid" aria-hidden="true" />
      <div className="universe-aura" aria-hidden="true" />
      <div className="universe-coordinates" aria-hidden="true">
        <span>THE VIAPRIX ECOSYSTEM</span>
        <span>01 — ∞</span>
      </div>
      <div className="universe-ring ring-outer" aria-hidden="true" />
      <div className="universe-ring ring-middle" aria-hidden="true" />
      <div className="universe-ring ring-inner" aria-hidden="true" />
      <div className="orbital-track" aria-hidden="true">
        <i />
      </div>
      <div className="universe-core" aria-hidden="true">
        <div className="core-cross cross-top">+</div>
        <BrandMark />
        <div className="core-cross cross-bottom">+</div>
        <span>YOUR NEXT. CONNECTED.</span>
      </div>
      <a className="universe-node universe-erp" href="#services">
        <span className="node-icon">
          <Box size={18} />
        </span>
        <span>
          <small>CONNECT YOUR BUSINESS</small>
          <strong>
            ERP solutions <ArrowUpRight size={12} />
          </strong>
        </span>
      </a>
      <a className="universe-node universe-pos" href="#services">
        <span className="node-icon">
          <ScanLine size={18} />
        </span>
        <span>
          <small>SIMPLIFY EVERY SALE</small>
          <strong>
            Smart POS <ArrowUpRight size={12} />
          </strong>
        </span>
      </a>
      <a className="universe-node universe-saas" href="#saas">
        <span className="node-icon">
          <Cloud size={18} />
        </span>
        <span>
          <small>WORK WITHOUT LIMITS</small>
          <strong>
            Cloud & SaaS <ArrowUpRight size={12} />
          </strong>
        </span>
      </a>
      <a className="universe-node universe-code" href="#services">
        <span className="node-icon">
          <Code2 size={18} />
        </span>
        <span>
          <small>MAKE IT YOUR OWN</small>
          <strong>
            Custom software <ArrowUpRight size={12} />
          </strong>
        </span>
      </a>
      <div className="universe-bottom">
        <span>
          <i /> BUILT AROUND YOUR BUSINESS
        </span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </div>
  );
}
