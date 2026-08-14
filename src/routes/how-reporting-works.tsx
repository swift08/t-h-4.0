import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import logoUrl from "../assets/Trust & Hope_Logo_Round_Transparent.webp";
import { useStats } from "@/lib/stats-store";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/seo-schemas";

export const Route = createFileRoute("/how-reporting-works")({
  head: () => ({
    meta: [
      { title: "How Reporting Works | 5-Step Radiology Workflow | Trust and Hope Rad Pvt. Ltd." },
      {
        name: "description",
        content:
          "Discover how Trust and Hope Rad delivers 24x7 teleradiology reports in 5 simple steps. Fully integrated with your hospital PACS for fast CT, MRI & X-Ray reads.",
      },
      {
        name: "keywords",
        content:
          "teleradiology workflow, PACS integration, radiologist reporting process, emergency radiology turnaround, DICOM router",
      },
      { property: "og:title", content: "How Reporting Works | 5-Step Radiology Workflow | Trust and Hope Rad Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "From scan to signed report in 5 steps. Direct DICOM router & cloud PACS integration for instant data transfer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/how-reporting-works` },
      { property: "og:image", content: `${SITE_URL}/Trust%20&%20Hope_Logo_Round_Transparent.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/how-reporting-works` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap",
      },
      { rel: "stylesheet", href: "/tah.css" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          getBreadcrumbSchema([
            { name: "Home", item: "/" },
            { name: "How Reporting Works", item: "/how-reporting-works" },
          ])
        ),
      },
    ],
  }),
  component: HowReportingWorks,
});

function HowReportingWorks() {
  const stats = useStats();

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    const burger = document.getElementById("burger-btn");
    const drawer = document.getElementById("mobile-drawer");
    if (burger && drawer) {
      const toggle = () => {
        burger.classList.toggle("active");
        drawer.classList.toggle("open");
      };
      burger.addEventListener("click", toggle);
      cleanups.push(() => burger.removeEventListener("click", toggle));

      drawer.querySelectorAll("a").forEach((a) => {
        const close = () => {
          burger.classList.remove("active");
          drawer.classList.remove("open");
        };
        a.addEventListener("click", close);
        cleanups.push(() => a.removeEventListener("click", close));
      });
    }

    const backToTop = document.getElementById("back-to-top");
    const onScroll = () => {
      if (!backToTop) return;
      if (window.scrollY > 400) backToTop.classList.add("show");
      else backToTop.classList.remove("show");
    };
    window.addEventListener("scroll", onScroll);
    const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    // Accordion flip toggle behavior on tap/click for step cards (only 1 open at a time)
    const stepCards = document.querySelectorAll(".step-flip-card");
    stepCards.forEach((card) => {
      const handler = (e: Event) => {
        const isAlreadyFlipped = card.classList.contains("is-flipped");
        stepCards.forEach((c) => c.classList.remove("is-flipped"));
        if (!isAlreadyFlipped) {
          card.classList.add("is-flipped");
        }
      };
      card.addEventListener("click", handler);
      cleanups.push(() => card.removeEventListener("click", handler));
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="how-reporting-works-page">
      {/* HEADER NAV */}
      <header className="nav">
        <div className="container">
          <div className="nav-wrap">
            <Link to="/" className="brand">
              <img src={logoUrl} alt="Trust and Hope Rad logo" />
              <span>
                TAH RAD<small>Trust and Hope Rad Pvt. Ltd.</small>
              </span>
            </Link>
            <nav className="links">
              <Link to="/">Home</Link>
              <Link to="/" hash="who-we-are">About Us</Link>
              <Link to="/" hash="services">Services</Link>
              <Link to="/" hash="contact">Contact</Link>
            </nav>
            <div className="d-flex align-items-center gap-3">
              <a
                href="https://pacs.trustandhoperad.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta nav-cta-desktop"
              >
                Login
              </a>
              <button className="burger" id="burger-btn" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-drawer" id="mobile-drawer">
        <Link to="/">Home</Link>
        <Link to="/" hash="who-we-are">About Us</Link>
        <Link to="/" hash="services">Services</Link>
        <Link to="/how-reporting-works">How It Works</Link>
        <Link to="/" hash="why-us">Why Us</Link>
        <Link to="/" hash="contact">Contact</Link>
        <a
          href="https://pacs.trustandhoperad.com/login"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta mb-2"
        >
          Login
        </a>
        <Link to="/" hash="contact" className="nav-cta">
          Partner With Us
        </Link>
      </div>

      <main>
        {/* HERO SECTION */}
        <section
          style={{
            background:
              "radial-gradient(1100px 500px at 85% -10%, rgba(32, 183, 229, 0.25), transparent 60%), linear-gradient(135deg, #071A3A 0%, #0D3B8E 55%, #20B7E5 100%)",
            color: "#E6EDF5",
            padding: "50px 0 40px 0",
          }}
        >
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-9">
                <span className="eyebrow mb-3" style={{ color: "var(--sky-blue)" }}>
                  FROM SCAN TO SIGNED REPORT, IN FIVE STEPS
                </span>
                <h1
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(34px, 4.5vw, 56px)",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  How Reporting Works
                </h1>
                <p
                  className="lead"
                  style={{
                    fontSize: "18.5px",
                    color: "#E2EEFB",
                    maxWidth: "800px",
                    margin: "0 auto 30px auto",
                    lineHeight: 1.6,
                  }}
                >
                  Each of these steps is designed to facilitate the process of getting reports done,
                  and is fully integrated with PACS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STEPPER VISUAL FLOW SECTION */}
        <section style={{ padding: "35px 0 25px 0", background: "var(--paper)", overflow: "hidden" }}>
          <div style={{ width: "calc(100% + 80px)", marginLeft: "-40px", marginRight: "-40px", padding: "0 8px", boxSizing: "border-box" }}>

            {/* DETAILED 5 STEPS PROCESS FLOW GRID (SINGLE LINE LAYOUT) */}
            <div className="steps-flow-container mb-3">
              <div className="steps-flow-row">
                {/* STEP 1 */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div className="step-flip-front">
                        <div>
                          <span className="step-num-badge" title="Image acquisition">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"></path><path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"></path><line x1="10" y1="6" x2="14" y2="6"></line><line x1="10" y1="10" x2="14" y2="10"></line><line x1="10" y1="14" x2="14" y2="14"></line><line x1="10" y1="18" x2="14" y2="18"></line></svg>
                          </span>
                          <div className="flip-title">Image acquisition</div>
                        </div>
                        <div className="flip-hint">
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div className="step-flip-back step-detail-card">
                        <span className="step-num-badge">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"></path><path d="M6 12H4a2 2 0 0 0-2 2v8h20v-8a2 2 0 0 0-2-2h-2"></path><line x1="10" y1="6" x2="14" y2="6"></line><line x1="10" y1="10" x2="14" y2="10"></line><line x1="10" y1="14" x2="14" y2="14"></line><line x1="10" y1="18" x2="14" y2="18"></line></svg>
                        </span>
                        <h3>Image acquisition</h3>
                        <p className="step-text">
                          A technologist at the hospital or diagnostic centre acquires the scan using standard imaging equipment (X-ray, CT, MRI, or mammography machine).
                        </p>
                        <div className="step-highlight">
                          The images are stored in DICOM format, the universal standard for medical imaging.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ARROW 1 -> 2 */}
                <div className="step-arrow-inline" title="Next Step">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>

                {/* STEP 2 */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div className="step-flip-front">
                        <div>
                          <span className="step-num-badge" title="Secure transmission">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                          </span>
                          <div className="flip-title">Secure transmission</div>
                        </div>
                        <div className="flip-hint">
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div className="step-flip-back step-detail-card">
                        <span className="step-num-badge">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                        </span>
                        <h3>Secure transmission</h3>
                        <p className="step-text">
                          The DICOM images are transmitted securely from the facility's PACS (Picture Archiving and Communication System) to the teleradiology platform.
                        </p>
                        <div className="step-highlight">
                          Transmission uses encrypted channels compliant with healthcare data standards.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ARROW 2 -> 3 */}
                <div className="step-arrow-inline" title="Next Step">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>

                {/* STEP 3 */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div className="step-flip-front">
                        <div>
                          <span className="step-num-badge" title="Radiologist interpretation">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path></svg>
                          </span>
                          <div className="flip-title">Radiologist interpretation</div>
                        </div>
                        <div className="flip-hint">
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div className="step-flip-back step-detail-card">
                        <span className="step-num-badge">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path></svg>
                        </span>
                        <h3>Radiologist interpretation</h3>
                        <p className="step-text">
                          A board-certified radiologist reviews the images, identifies pathologies, and generates the draft report.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ARROW 3 -> 4 */}
                <div className="step-arrow-inline" title="Next Step">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>

                {/* STEP 4 */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div className="step-flip-front">
                        <div>
                          <span className="step-num-badge" title="Quality Check">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 14.9"></path><rect x="9" y="13" width="6" height="5" rx="1"></rect><path d="M10 13v-1.5a2 2 0 0 1 4 0V13"></path></svg>
                          </span>
                          <div className="flip-title">Quality Check</div>
                        </div>
                        <div className="flip-hint">
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div className="step-flip-back step-detail-card">
                        <span className="step-num-badge">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 14.9"></path><rect x="9" y="13" width="6" height="5" rx="1"></rect><path d="M10 13v-1.5a2 2 0 0 1 4 0V13"></path></svg>
                        </span>
                        <h3>Quality Check</h3>
                        <p className="step-text">
                          They validate correct findings, correct any errors, add clinical context, and finalise the report.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ARROW 4 -> PACS */}
                <div className="step-arrow-inline" title="Next Step">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>

                {/* PACS INTEGRATION FEATURE CARD */}
                <div className="step-card-col">
                  <div className="step-flip-card" tabIndex={0}>
                    <div className="step-flip-inner">
                      <div
                        className="step-flip-front"
                        style={{
                          background: "linear-gradient(135deg, #071A3A 0%, #0D3B8E 100%)",
                          color: "#FFFFFF",
                        }}
                      >
                        <div>
                          <span
                            className="step-num-badge"
                            style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF" }}
                            title="Fully Integrated PACS"
                          >
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path></svg>
                          </span>
                          <div className="flip-title" style={{ color: "#FFFFFF" }}>Fully Integrated PACS</div>
                        </div>
                        <div
                          className="flip-hint"
                          style={{ background: "rgba(255,255,255,0.15)", color: "#E6EDF5" }}
                        >
                          <span>Hover</span>
                          <svg className="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                        </div>
                      </div>
                      <div
                        className="step-flip-back step-detail-card"
                        style={{
                          background: "linear-gradient(135deg, #071A3A 0%, #0D3B8E 100%)",
                          color: "#FFFFFF",
                        }}
                      >
                        <span
                          className="step-num-badge"
                          style={{ background: "rgba(255,255,255,0.15)", color: "#FFFFFF" }}
                        >
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path></svg>
                        </span>
                        <h3 style={{ color: "#FFFFFF" }}>Fully Integrated PACS</h3>
                        <p className="step-text" style={{ color: "#D0DCED" }}>
                          Hooks directly into DICOM feed to streamline report delivery.
                        </p>
                        <div
                          className="step-highlight"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            borderColor: "var(--sky-blue)",
                            color: "#E6EDF5",
                          }}
                        >
                          Zero technical friction with IT support.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA CALLOUT BANNER */}
            <div
              style={{
                background: "linear-gradient(135deg, #071A3A 0%, #0D3B8E 55%, #20B7E5 100%)",
                borderRadius: "20px",
                padding: "48px 40px",
                color: "#FFFFFF",
                textAlign: "center",
                boxShadow: "0 12px 30px rgba(7, 26, 58, 0.25)",
              }}
            >
              <h2 style={{ color: "#FFFFFF", fontSize: "30px", marginBottom: "16px" }}>
                Ready to Experience Seamless Radiology Reporting?
              </h2>
              <p
                style={{
                  color: "#B4C8E0",
                  fontSize: "17px",
                  maxWidth: "700px",
                  margin: "0 auto 28px auto",
                }}
              >
                Join hundreds of imaging centers and hospitals across India benefiting from our
                24x7 coverage, seamless radiologist consultation, and PACS integration.
              </p>
              <Link
                to="/"
                hash="contact"
                className="btn-custom btn-custom-primary"
                style={{ fontSize: "16px", padding: "14px 32px" }}
              >
                Get Started Today →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="row g-4 g-lg-5">
            <div className="col-12 col-lg-4 pe-lg-4">
              <Link to="/" className="brand">
                <img src={logoUrl} alt="Trust and Hope Rad logo" />
                <span>TAH RAD</span>
              </Link>
              <p data-stat-summary>
                Trust and Hope Rad Pvt. Ltd. | 24×7 teleradiology services serving {stats.centres}{stats.centresSuffix} centres, {stats.studies}{stats.studiesSuffix} new
                studies uploaded daily to PACS, {stats.radiologists}{stats.radiologistsSuffix} radiologists across specialisations, {stats.states}{stats.statesSuffix} states covered in India.
              </p>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <h5>Contact Us</h5>
              <ul style={{ fontSize: "13.5px" }}>
                <li><strong>Call:</strong> <a href="tel:+919741573222">+91 97415 73222</a></li>
                <li><strong>WhatsApp:</strong> <a href="https://wa.link/sz5un4" target="_blank" rel="noopener noreferrer" style={{ color: "#25D366" }}>+91 97415 73222</a></li>
                <li><strong>Mail:</strong> <a href="mailto:trustandhopeteleradiology@gmail.com" style={{ wordBreak: "break-all" }}>trustandhopeteleradiology@gmail.com</a></li>
              </ul>
              <div className="topbar-socials mt-3">
                <a href="https://www.facebook.com/profile.php?id=61550262965070&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="topbar-social-link fb-hover" title="Facebook" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "14px", height: "14px" }}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://in.linkedin.com/company/trust-and-hope-rad?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer" className="topbar-social-link li-hover" title="LinkedIn" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "14px", height: "14px" }}><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.25.7-1.92 1.63-1.92.93 0 1.36.67 1.36 1.92v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
                <a href="https://instagram.com/trustandhopeteleradiology?utm_source=qr&igshid=NGExMmI2YTkyZg==" target="_blank" rel="noopener noreferrer" className="topbar-social-link ig-hover" title="Instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "14px", height: "14px" }}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="https://wa.link/sz5un4" target="_blank" rel="noopener noreferrer" className="topbar-social-link wa-hover" title="WhatsApp" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "14px", height: "14px" }}><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.987l-1.414 5.163 5.286-1.386a9.96 9.96 0 004.787 1.22h.005c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.039-5.176-2.924-7.062A9.923 9.923 0 0012.012 2zm5.82 14.161c-.247.692-1.22 1.326-1.996 1.492-.533.113-1.229.206-3.567-.763-2.989-1.237-4.908-4.275-5.059-4.474-.148-.198-1.218-1.621-1.218-3.092 0-1.47.767-2.196 1.041-2.495.274-.298.599-.373.799-.373.199 0 .399.002.573.01.185.008.435-.07.68.518.248.598.847 2.068.921 2.217.075.149.124.323.025.522-.099.198-.149.322-.298.497-.149.174-.313.389-.447.523-.148.149-.303.311-.13.609.174.298.774 1.277 1.662 2.067 1.14 1.015 2.102 1.33 2.399 1.478.298.149.472.124.646-.075.174-.199.746-.87.945-1.168.199-.298.398-.248.671-.149.274.099 1.742.82 2.04 1.043.298.224.497.348.572.473.075.124.075.72-.172 1.412z"/></svg>
                </a>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h5>Navigate</h5>
              <ul>
                <li>
                  <Link to="/" hash="who-we-are">About Us</Link>
                </li>
                <li>
                  <Link to="/" hash="services">Services</Link>
                </li>
                <li>
                  <Link to="/how-reporting-works">How It Works</Link>
                </li>
                <li>
                  <Link to="/" hash="why-us">Why Us</Link>
                </li>
                <li>
                  <Link to="/" hash="contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 col-lg-3">
              <h5>Modalities</h5>
              <ul>
                <li>
                  <Link to="/" hash="services">CT Reporting</Link>
                </li>
                <li>
                  <Link to="/" hash="services">MRI Reporting</Link>
                </li>
                <li>
                  <Link to="/" hash="services">X-Ray &amp; USG Reads</Link>
                </li>
                <li>
                  <Link to="/" hash="services">PET Oncology Scans</Link>
                </li>
                <li>
                  <Link to="/" hash="services">Nighthawk &amp; Stat Reads</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <span>© {new Date().getFullYear()} Trust and Hope Rad Pvt. Ltd. All rights reserved.</span>
            <span>Read Right. Read Fast. 24/7.</span>
          </div>
        </div>
      </footer>

      <button id="back-to-top" aria-label="Back to Top">
        ↑
      </button>

      <a href="https://wa.link/sz5un4" target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.987l-1.414 5.163 5.286-1.386a9.96 9.96 0 004.787 1.22h.005c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.039-5.176-2.924-7.062A9.923 9.923 0 0012.012 2zm5.82 14.161c-.247.692-1.22 1.326-1.996 1.492-.533.113-1.229.206-3.567-.763-2.989-1.237-4.908-4.275-5.059-4.474-.148-.198-1.218-1.621-1.218-3.092 0-1.47.767-2.196 1.041-2.495.274-.298.599-.373.799-.373.199 0 .399.002.573.01.185.008.435-.07.68.518.248.598.847 2.068.921 2.217.075.149.124.323.025.522-.099.198-.149.322-.298.497-.149.174-.313.389-.447.523-.148.149-.303.311-.13.609.174.298.774 1.277 1.662 2.067 1.14 1.015 2.102 1.33 2.399 1.478.298.149.472.124.646-.075.174-.199.746-.87.945-1.168.199-.298.398-.248.671-.149.274.099 1.742.82 2.04 1.043.298.224.497.348.572.473.075.124.075.72-.172 1.412z"/></svg>
        <span>Chat on WhatsApp</span>
      </a>
    </div>
  );
}

