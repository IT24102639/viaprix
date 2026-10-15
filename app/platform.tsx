import {
  ArrowUpRight,
  Layers3,
  Cloud,
  LockKeyhole,
  Workflow,
  BarChart3,
  Check,
} from "lucide-react";
export default function Platform() {
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
              Your business.
              <br />
              Digitally connected.
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
          </div>
          <figure className="transformation-visual">
            <div className="transformation-ambient" aria-hidden="true" />
            <img
              src="/images/digital-transformation.webp"
              alt="A luminous digital core connects cloud services, business data, and retail systems into one digital ecosystem."
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>
                <i /> FROM COMPLEXITY TO CONNECTION
              </span>
              <span>THE VIAPRIX WAY ↗</span>
            </figcaption>
          </figure>
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
