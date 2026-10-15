"use client";
import { useState } from "react";
import {
  ArrowUpRight,
  Layers3,
  Cloud,
  LockKeyhole,
  Workflow,
  BarChart3,
  Check,
  ChevronRight,
  Plus,
  CircleDot,
  Box,
  ArrowRight,
} from "lucide-react";
const views = [
  {
    name: "Overview",
    title: "Your entire business. One clear view.",
    metric: "Rs. 842,500",
    label: "Revenue this month",
    change: "+18.6%",
    bars: [35, 48, 43, 65, 58, 77, 69, 88, 79, 95, 87, 100],
    tasks: [
      "Store inventory synced",
      "Monthly report generated",
      "Customer records updated",
    ],
    note: "A connected view of sales, inventory, and everyday operations.",
  },
  {
    name: "Retail & POS",
    title: "Every sale. A better experience.",
    metric: "1,284",
    label: "Orders this month",
    change: "+12.4%",
    bars: [25, 39, 55, 41, 62, 51, 74, 68, 86, 76, 94, 88],
    tasks: [
      "Sale #1284 completed",
      "Stock levels updated",
      "Daily sales report ready",
    ],
    note: "Keep the checkout moving and your stock in sync.",
  },
  {
    name: "Operations",
    title: "Less busywork. More momentum.",
    metric: "856",
    label: "Active customer records",
    change: "+8.2%",
    bars: [20, 28, 38, 33, 50, 61, 54, 76, 71, 83, 90, 97],
    tasks: [
      "New customer onboarded",
      "Purchase order approved",
      "Team workspace synced",
    ],
    note: "Connect your teams and make everyday workflows simpler.",
  },
];
export default function Platform() {
  const [tab, setTab] = useState(0);
  const view = views[tab];
  return (
    <>
      <section className="section saas-section" id="saas">
        <div className="section-intro">
          <div>
            <div className="eyebrow">
              <span className="live-dot" /> SOFTWARE AS A SERVICE
            </div>
            <h2>
              One connected ecosystem.
              <br />
              <span>Limitless next moves.</span>
            </h2>
          </div>
          <p>
            Your business doesn’t stand still.
            <br />
            Your software shouldn’t either.
          </p>
        </div>
        <div className="platform-layout">
          <div className="platform-copy">
            <div className="pill">
              <Cloud size={13} /> BUILT FOR THE CLOUD
            </div>
            <h3>
              Your workspace.
              <br />
              Reimagined.
            </h3>
            <p>
              Bring your tools, teams, and workflows into one place. We design
              cloud-based software around the way your business works — and
              where it’s going.
            </p>
            <div className="platform-benefits">
              <span>
                <Check /> Access from anywhere
              </span>
              <span>
                <Check /> Connected business data
              </span>
              <span>
                <Check /> Room to grow with you
              </span>
            </div>
            <a className="text-link" href="#contact">
              Explore your SaaS possibilities <ArrowUpRight size={16} />
            </a>
            <small>Interactive concept · Sample data</small>
          </div>
          <div className="platform-window">
            <div className="window-chrome">
              <span>
                <i />
                <i />
                <i />
              </span>
              <div>
                <LockKeyhole size={10} /> viaprix / workspace
              </div>
              <Layers3 size={14} />
            </div>
            <div className="platform-toolbar">
              <div className="workspace-icon">
                <Box size={18} />
              </div>
              <span>
                Business workspace<small>Your next chapter, connected.</small>
              </span>
              <span className="synced">
                <CircleDot size={10} /> In sync
              </span>
            </div>
            <div
              className="platform-tabs"
              role="tablist"
              aria-label="Business dashboard demo"
            >
              {views.map((v, i) => (
                <button
                  key={v.name}
                  id={`workspace-tab-${i}`}
                  role="tab"
                  aria-selected={tab === i}
                  aria-controls="workspace-panel"
                  tabIndex={tab === i ? 0 : -1}
                  onClick={() => setTab(i)}
                  onKeyDown={(e) => {
                    if (
                      ["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                    ) {
                      e.preventDefault();
                      const next =
                        e.key === "Home"
                          ? 0
                          : e.key === "End"
                            ? 2
                            : (tab + (e.key === "ArrowRight" ? 1 : 2)) % 3;
                      setTab(next);
                      document.getElementById(`workspace-tab-${next}`)?.focus();
                    }
                  }}
                >
                  {v.name}
                  {tab === i && <span />}
                </button>
              ))}
            </div>
            <div
              id="workspace-panel"
              role="tabpanel"
              aria-labelledby={`workspace-tab-${tab}`}
              className="platform-panel"
              key={tab}
            >
              <div className="panel-title">
                <h4>{view.title}</h4>
                <span>Monthly overview</span>
              </div>
              <div className="platform-stats">
                <div>
                  <span>{view.label}</span>
                  <strong>{view.metric}</strong>
                  <small>
                    {view.change} <span>vs. last month</span>
                  </small>
                </div>
                <div
                  className="bar-chart"
                  aria-label={`${view.name} illustrative activity chart`}
                >
                  {view.bars.map((v, i) => (
                    <div
                      style={{ height: v + "%", animationDelay: `${i * 35}ms` }}
                      key={i}
                    >
                      <i />
                    </div>
                  ))}
                </div>
              </div>
              <div className="chart-months">
                <span>WEEK 01</span>
                <span>WEEK 02</span>
                <span>WEEK 03</span>
                <span>WEEK 04</span>
              </div>
              <div className="activity-head">
                WORKSPACE ACTIVITY{" "}
                <span>
                  View only <ArrowUpRight size={11} />
                </span>
              </div>
              <div className="activity-list">
                {view.tasks.map((t, i) => (
                  <div key={t}>
                    <span>
                      <Check size={12} />
                    </span>
                    <p>{t}</p>
                    <small>{i + 1} min ago</small>
                  </div>
                ))}
              </div>
              <div className="panel-footer">
                <span className="live-dot" />
                {view.note}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section features-section">
        <div className="section-intro">
          <div>
            <div className="eyebrow">/ MORE THAN JUST SOFTWARE</div>
            <h2>
              Thoughtfully built.
              <br />
              <span>For the way you work.</span>
            </h2>
          </div>
          <a href="#contact" className="text-link">
            Find your unfair advantage <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="feature-grid">
          <div className="feature-card feature-large">
            <div className="integration-art" aria-hidden="true">
              <div className="integration-line" />
              <div className="integration-center">
                <img src="/logo-dark.svg" alt="" />
              </div>
              <span className="integration-node node-one">
                <Layers3 />
              </span>
              <span className="integration-node node-two">
                <BarChart3 />
              </span>
              <span className="integration-node node-three">
                <Cloud />
              </span>
              <span className="integration-node node-four">
                <Workflow />
              </span>
              <span className="integration-ping" />
            </div>
            <div className="feature-copy">
              <span className="feature-number">01 / CONNECT</span>
              <h3>
                Everything works.
                <br />
                Better together.
              </h3>
              <p>
                ERP, POS, and custom applications designed to share the same
                picture. Less switching. More doing.
              </p>
            </div>
            <ArrowUpRight className="feature-arrow" />
          </div>
          <div className="feature-card">
            <div className="security-art" aria-hidden="true">
              <div className="shield-orbit" />
              <LockKeyhole size={39} />
              <span>
                <Check size={10} /> PROTECTED BY DESIGN
              </span>
            </div>
            <div className="feature-copy">
              <span className="feature-number">02 / PROTECT</span>
              <h3>Confidence, built in.</h3>
              <p>
                Thoughtful access controls and secure development practices,
                from the very first line of code.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="scale-art" aria-hidden="true">
              {[25, 38, 34, 56, 49, 70, 85, 100].map((v, i) => (
                <span key={i} style={{ height: v + "%" }} />
              ))}
              <ArrowUpRight />
            </div>
            <div className="feature-copy">
              <span className="feature-number">03 / EVOLVE</span>
              <h3>Built for your next.</h3>
              <p>
                Flexible foundations that make space for new teams, new
                locations, and bigger ideas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
