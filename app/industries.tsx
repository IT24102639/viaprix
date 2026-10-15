"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ShoppingBag,
  UtensilsCrossed,
  Boxes,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";
const industries = [
  {
    name: "Retail & commerce",
    icon: ShoppingBag,
    headline: "From your shop floor.\nTo your next store.",
    description:
      "Keep sales, inventory, and customer information connected. Give your team the clarity to make every day run better.",
    features: [
      "Point of sale & billing",
      "Multi-location inventory",
      "Customer & sales insights",
    ],
    label: "RETAIL WORKFLOW",
    stages: ["Sale completed", "Inventory updated", "Insights connected"],
    number: "01",
  },
  {
    name: "Food & hospitality",
    icon: UtensilsCrossed,
    headline: "Great service starts\nbehind the scenes.",
    description:
      "Connect front-of-house and everyday operations with software shaped around your service, your people, and your pace.",
    features: [
      "Order & billing workflows",
      "Stock & ingredient tracking",
      "Daily business reporting",
    ],
    label: "HOSPITALITY WORKFLOW",
    stages: ["Order received", "Kitchen notified", "Bill prepared"],
    number: "02",
  },
  {
    name: "Distribution",
    icon: Boxes,
    headline: "Every order. Every item.\nA clearer picture.",
    description:
      "Bring purchasing, stock, and order management together. Build a dependable view of what’s coming in and what’s going out.",
    features: [
      "Purchase & supplier management",
      "Warehouse visibility",
      "Order & delivery tracking",
    ],
    label: "DISTRIBUTION WORKFLOW",
    stages: ["Order confirmed", "Stock allocated", "Delivery tracked"],
    number: "03",
  },
  {
    name: "Growing businesses",
    icon: BriefcaseBusiness,
    headline: "Big ambitions.\nConnected operations.",
    description:
      "Replace disconnected processes with a workspace built around your team. Start with what matters and evolve as you grow.",
    features: [
      "Custom business workflows",
      "Team access & collaboration",
      "Connected management reports",
    ],
    label: "BUSINESS WORKFLOW",
    stages: ["Request received", "Team connected", "Progress visible"],
    number: "04",
  },
];
export default function Industries() {
  const [active, setActive] = useState(0);
  const item = industries[active];
  return (
    <section className="section industries-section" id="industries">
      <div className="section-intro">
        <div>
          <div className="eyebrow">
            / DIFFERENT BUSINESSES. SHARED POSSIBILITIES.
          </div>
          <h2>
            Your world.
            <br />
            <span>Our starting point.</span>
          </h2>
        </div>
        <p>
          We learn how your business works.
          <br />
          Then build the technology to move it forward.
        </p>
      </div>
      <div
        className="industry-tabs"
        role="tablist"
        aria-label="Industry solutions"
      >
        {industries.map((x, i) => (
          <button
            role="tab"
            id={`industry-tab-${i}`}
            aria-selected={active === i}
            aria-controls="industry-panel"
            tabIndex={active === i ? 0 : -1}
            key={x.name}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
                e.preventDefault();
                const next =
                  e.key === "Home"
                    ? 0
                    : e.key === "End"
                      ? 3
                      : (active + (e.key === "ArrowRight" ? 1 : 3)) % 4;
                setActive(next);
                document.getElementById(`industry-tab-${next}`)?.focus();
              }
            }}
          >
            <x.icon size={16} />
            {x.name}
            <ArrowUpRight size={14} />
          </button>
        ))}
      </div>
      <div
        className="industry-content"
        role="tabpanel"
        id="industry-panel"
        aria-labelledby={`industry-tab-${active}`}
        key={active}
      >
        <div className="industry-copy">
          <span className="industry-index">
            {item.number} / SOLUTIONS THAT FIT
          </span>
          <h3>
            {item.headline.split("\n").map((line, i) => (
              <span key={line}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h3>
          <p>{item.description}</p>
          <div className="industry-features">
            {item.features.map((x) => (
              <span key={x}>
                <Check size={14} />
                {x}
              </span>
            ))}
          </div>
          <a href="#contact" className="text-link">
            Let’s talk about your business <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="workflow-art">
          <div className="workflow-art-head">
            <span>{item.label}</span>
            <span>ILLUSTRATIVE CONCEPT</span>
          </div>
          <div className="workflow-title">
            <item.icon size={23} />
            <span>
              Good systems.
              <br />
              <b>Better everyday.</b>
            </span>
          </div>
          <div className="workflow-stages">
            {item.stages.map((stage, i) => (
              <div key={stage}>
                <span className="workflow-count">0{i + 1}</span>
                <span>{stage}</span>
                <span className="workflow-tick">
                  <Check size={13} />
                </span>
              </div>
            ))}
          </div>
          <div className="workflow-bottom">
            <span className="live-dot" /> LESS FRICTION. MORE MOMENTUM.
            <ArrowRight size={17} />
          </div>
        </div>
      </div>
    </section>
  );
}
