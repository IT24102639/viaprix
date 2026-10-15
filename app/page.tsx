"use client";
import { useState } from "react";
import Motion from "./motion";
import Platform from "./platform";
import {
  ArrowUpRight,
  ArrowRight,
  Layers3,
  ScanLine,
  Code2,
  Check,
  Plus,
  Minus,
  Menu,
  X,
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  Settings,
  Bell,
  Search,
  TrendingUp,
  Globe2,
  Zap,
  ShieldCheck,
} from "lucide-react";
const services = [
  {
    icon: Layers3,
    n: "01",
    title: "ERP solutions",
    text: "Bring your people, processes, and data together. One connected system. A clearer picture of your business.",
    tags: ["Inventory & finance", "Business automation"],
  },
  {
    icon: ScanLine,
    n: "02",
    title: "POS systems",
    text: "From the first sale to the end-of-day report. A faster, smarter checkout experience built around your business.",
    tags: ["Retail & hospitality", "Real-time reporting"],
  },
  {
    icon: Code2,
    n: "03",
    title: "Custom software",
    text: "Your ideas deserve more than an off-the-shelf solution. We build software that works the way you do.",
    tags: ["Web & mobile apps", "Made to scale"],
  },
];
export default function Home() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const [sent, setSent] = useState(false);
  return (
    <>
      <Motion />
      <header>
        <a href="#" className="brand">
          <img src="/logo.svg" alt="" />
          <span>
            viaprix<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className={menu ? "open" : ""}>
          <a href="#services" onClick={() => setMenu(false)}>
            What we do
          </a>
          <a href="#saas" onClick={() => setMenu(false)}>
            SaaS platform
          </a>
          <a href="#approach" onClick={() => setMenu(false)}>
            Our approach
          </a>
          <a href="#about" onClick={() => setMenu(false)}>
            About us
          </a>
        </nav>
        <a className="nav-cta" href="#contact">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="live-dot" /> BUILT FOR WHAT’S NEXT
            </div>
            <h1>
              Your next big move.
              <br />
              <span>Powered by Viaprix.</span>
            </h1>
            <p>
              From everyday operations to extraordinary ideas. ERP, POS, SaaS,
              and custom software that move your business forward.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Let’s build something <ArrowUpRight size={18} />
              </a>
              <a className="text-link" href="#services">
                Explore our solutions <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-note">
              <span className="tiny-spark">✳︎</span> Navigating Your Digital
              Future.
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-aura" aria-hidden="true" />
            <div className="hero-coordinate" aria-hidden="true">
              VX / SYSTEM 01 <span>+</span>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-label">
              <span /> A LITTLE LESS COMPLEX. A LOT MORE POSSIBLE.
            </div>
            <div className="dashboard">
              <aside>
                <div className="dash-logo">
                  <img src="/logo.svg" alt="" /> viaprix<span> workspace</span>
                </div>
                <div className="workspace">
                  Your workspace <span>⌄</span>
                </div>
                <div className="side-item selected">
                  <LayoutDashboard /> Overview
                </div>
                <div className="side-item">
                  <ShoppingBag /> Sales
                </div>
                <div className="side-item">
                  <Package /> Inventory
                </div>
                <div className="side-item">
                  <Users /> Customers
                </div>
                <div className="side-bottom">
                  <Settings /> Settings
                </div>
              </aside>
              <div className="dash-main">
                <div className="dash-top">
                  <span>
                    Workspace <span>/ Overview</span>
                  </span>
                  <div>
                    <Search size={12} />
                    <Bell size={12} />
                    <b>JD</b>
                  </div>
                </div>
                <div className="dash-heading">
                  <div>
                    <h3>
                      Business overview <span>✧</span>
                    </h3>
                    <p>Here’s how your business is doing today.</p>
                  </div>
                  <span className="date">This month ⌄</span>
                </div>
                <div className="metrics">
                  <div>
                    <span>Total revenue</span>
                    <strong>Rs. 842,500</strong>
                    <small>
                      ↗ 18.6% <span>vs last month</span>
                    </small>
                  </div>
                  <div>
                    <span>Total orders</span>
                    <strong>1,284</strong>
                    <small>
                      ↗ 12.4% <span>vs last month</span>
                    </small>
                  </div>
                  <div>
                    <span>Active customers</span>
                    <strong>856</strong>
                    <small>
                      ↗ 8.2% <span>vs last month</span>
                    </small>
                  </div>
                </div>
                <div className="chart">
                  <div className="chart-title">
                    <b>Revenue overview</b>
                    <span>
                      <i /> Revenue　 ···
                    </span>
                  </div>
                  <div className="chart-body">
                    <div className="axis">
                      <span>900k</span>
                      <span>600k</span>
                      <span>300k</span>
                      <span>0</span>
                    </div>
                    <svg viewBox="0 0 400 130" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="fill" x1="0" y1="0" x2="0" y2="1">
                          <stop stopColor="#ff0140" stopOpacity=".17" />
                          <stop
                            offset="1"
                            stopColor="#ff0140"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 110 C25 110 25 80 50 85 S90 105 115 73 S145 87 170 62 S210 85 235 50 S265 64 290 30 S325 55 350 22 S380 35 400 5 L400 130 L0 130Z"
                        fill="url(#fill)"
                      />
                      <path
                        d="M0 110 C25 110 25 80 50 85 S90 105 115 73 S145 87 170 62 S210 85 235 50 S265 64 290 30 S325 55 350 22 S380 35 400 5"
                        fill="none"
                        stroke="#ff0140"
                        strokeWidth="3"
                      />
                    </svg>
                  </div>
                  <div className="months">
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                  </div>
                </div>
                <div className="recent">
                  <b>Recent transactions</b>
                  <span>View all ↗</span>
                </div>
                {["Invoice #INV-1284", "Invoice #INV-1283"].map((x, i) => (
                  <div className="transaction" key={x}>
                    <span className="transaction-icon">
                      <ShoppingBag size={12} />
                    </span>
                    <b>{x}</b>
                    <span>Today, 10:{i ? "24" : "42"} AM</span>
                    <em>Completed</em>
                    <strong>Rs. {i ? "12,800" : "24,500"}</strong>
                  </div>
                ))}
              </div>
            </div>
            <div className="floating connected">
              <div className="float-icon">
                <Check size={17} />
              </div>
              <div>
                <strong>Everything. Connected.</strong>
                <span>One platform. Endless possibilities.</span>
              </div>
            </div>
            <div className="floating growth">
              <span>
                <TrendingUp size={18} /> Built to grow
              </span>
              <strong>With your business.</strong>
              <div className="mini-bars">
                {[25, 40, 32, 55, 48, 65, 82, 96].map((v, i) => (
                  <i key={i} style={{ height: v + "%" }} />
                ))}
              </div>
            </div>
            <div className="visual-bottom">
              <span>
                <span className="live-dot" /> ALL SYSTEMS, IN SYNC
              </span>
              <span>DESIGNED AROUND YOU ↗</span>
            </div>
          </div>
        </section>
        <section className="promise-strip">
          <span>
            GOOD TECHNOLOGY.
            <br />
            <b>REAL BUSINESS IMPACT.</b>
          </span>
          <div>
            <Layers3 /> Seamlessly connected
          </div>
          <div>
            <Zap /> Built for efficiency
          </div>
          <div>
            <ShieldCheck /> Secure by design
          </div>
          <div>
            <Globe2 /> Ready for tomorrow
          </div>
        </section>
        <section id="services" className="section services">
          <div className="section-intro">
            <div>
              <div className="eyebrow">/ WHAT WE DO</div>
              <h2>
                Big possibilities.
                <br />
                Purpose-built solutions.
              </h2>
            </div>
            <p>
              Technology should move your business forward.
              <br />
              We make sure it does.
            </p>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <a className="service-card" href="#contact" key={s.n}>
                <div className="card-top">
                  <s.icon size={27} />
                  <span>{s.n} /</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="card-bottom">
                  Let’s make it work for you <ArrowUpRight size={20} />
                </div>
              </a>
            ))}
          </div>
        </section>
        <Platform />
        <section id="approach" className="approach section">
          <div className="approach-heading">
            <div className="eyebrow">/ HOW WE MAKE IT HAPPEN</div>
            <h2>
              A clear path.
              <br />
              <span>From idea to impact.</span>
            </h2>
            <p>
              No unnecessary complexity. Just good conversations, thoughtful
              design, and software that delivers.
            </p>
            <a href="#contact" className="text-link">
              Meet your next technology partner <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="steps">
            {[
              [
                "Discover",
                "We listen first. Your goals, your challenges, and what success looks like for you.",
              ],
              [
                "Design & build",
                "We turn the plan into intuitive, reliable software, with you involved at every step.",
              ],
              [
                "Launch & evolve",
                "Go live with confidence. We stay by your side as your business moves forward.",
              ],
            ].map(([title, text], i) => (
              <div className="step" key={title}>
                <span>0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <ArrowUpRight size={19} />
              </div>
            ))}
          </div>
        </section>
        <section className="about section" id="about">
          <div className="about-art">
            <div className="art-grid" />
            <img src="/logo.svg" alt="Viaprix symbol" />
            <span>NAVIGATING YOUR DIGITAL FUTURE</span>
            <div className="art-coord">
              IDEAS → SYSTEMS → POSSIBILITIES <Plus size={16} />
            </div>
          </div>
          <div className="about-copy">
            <div className="eyebrow">/ THE PEOPLE BEHIND THE POSSIBILITIES</div>
            <h2>
              A fresh perspective.
              <br />A shared ambition.
            </h2>
            <p>
              We’re Viaprix — a software company with a simple belief: the right
              technology can change what’s possible for a business.
            </p>
            <p>
              From simplifying everyday operations to bringing a bold idea to
              life, we work as an extension of your team. Curious about your
              challenges. Invested in your future.
            </p>
            <div className="values">
              <span>
                <Check size={16} /> People-first thinking
              </span>
              <span>
                <Check size={16} /> Long-term partnership
              </span>
            </div>
          </div>
        </section>
        <section className="section faq-section">
          <div>
            <div className="eyebrow">/ A LITTLE MORE CLARITY</div>
            <h2>
              Good questions.
              <br />
              Straight answers.
            </h2>
          </div>
          <div className="faqs">
            {[
              [
                "Can you customize software for my business?",
                "Absolutely. We start with your workflows and goals, then build or adapt the solution around them — whether that’s ERP, POS, or a completely custom application.",
              ],
              [
                "How do we get started?",
                "Tell us a little about your business using the form below. We’ll discuss your goals, outline a practical approach, and provide a project proposal.",
              ],
              [
                "Do you provide support after launch?",
                "Yes. We can plan ongoing support, maintenance, and improvements with you, so your software continues to serve your business as it grows.",
              ],
              [
                "How long does a project take?",
                "The timeline depends on the scope and complexity. After our discovery conversation, we’ll share a clear plan with milestones and an estimated delivery timeline.",
              ],
            ].map(([q, a], i) => (
              <div className="faq" key={q}>
                <button
                  aria-expanded={faq === i}
                  onClick={() => setFaq(faq === i ? null : i)}
                >
                  {q}
                  {faq === i ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {faq === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="contact section">
          <div>
            <div className="eyebrow">
              <span className="live-dot" /> YOUR NEXT MOVE STARTS HERE
            </div>
            <h2>
              Let’s build
              <br />
              what’s <span>next.</span>
              <ArrowUpRight />
            </h2>
            <p>
              A challenge to solve? An idea to explore?
              <br />
              We’d love to hear where you want to go.
            </p>
            <span className="contact-slogan">
              Navigating Your Digital Future.
            </span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget);
              const brief =
                "Name: " +
                form.get("name") +
                "\nEmail: " +
                form.get("email") +
                "\nService: " +
                form.get("service") +
                "\n\n" +
                form.get("message");
              if (!contactEmail) {
                const url = URL.createObjectURL(
                  new Blob([brief], { type: "text/plain" }),
                );
                const link = document.createElement("a");
                link.href = url;
                link.download = "viaprix-project-brief.txt";
                link.click();
                URL.revokeObjectURL(url);
                setSent(true);
                return;
              }
              window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent("Project enquiry: " + form.get("service"))}&body=${encodeURIComponent("Name: " + form.get("name") + "\nEmail: " + form.get("email") + "\n\n" + form.get("message"))}`;
              setSent(true);
            }}
          >
            <div className="form-row">
              <label>
                Your name
                <input name="name" placeholder="Alex Morgan" required />
              </label>
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  placeholder="alex@company.com"
                  required
                />
              </label>
            </div>
            <label>
              What can we help you with?
              <select name="service" required defaultValue="">
                <option value="" disabled>
                  Select a solution
                </option>
                <option>ERP solution</option>
                <option>POS system</option>
                <option>Custom software</option>
                <option>SaaS platform</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              A little about your project
              <textarea
                name="message"
                placeholder="Tell us about your idea, goals, or challenges…"
                required
                rows={3}
              />
            </label>
            <button className="button primary" type="submit">
              {contactEmail
                ? "Let’s start a conversation"
                : "Prepare my project brief"}{" "}
              <ArrowUpRight size={18} />
            </button>
            <p className="form-note" role="status">
              {sent
                ? contactEmail
                  ? "Your email app will open with your enquiry. Send it there to complete your message."
                  : "Your project brief has been downloaded. No message has been sent."
                : contactEmail
                  ? "This opens your email app with your project details."
                  : "Prepare a downloadable project brief. Direct enquiries will be available soon."}
            </p>
          </form>
        </section>
      </main>
      <footer>
        <a href="#" className="brand">
          <img src="/logo.svg" alt="" />
          <span>
            viaprix<span className="brand-dot">.</span>
          </span>
        </a>
        <span>
          © {new Date().getFullYear()} Viaprix. Built for what’s next.
        </span>
        <a href="#">Back to top ↑</a>
      </footer>
    </>
  );
}
