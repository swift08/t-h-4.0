import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import logoUrl from "../assets/Trust & Hope_Logo_Round_Transparent.webp";
import indianMapUrl from "../assets/Indian map.webp";
import { useStats } from "@/lib/stats-store";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/seo-schemas";

export const Route = createFileRoute("/where-we-work")({
  head: () => ({
    meta: [
      { title: "Pan-India Teleradiology Coverage & Network | Trust and Hope Rad Pvt. Ltd." },
      {
        name: "description",
        content:
          "Serving 350+ hospitals and diagnostic centres across 15+ states in India. High-quality remote radiology reporting for metro trauma centers and regional clinics.",
      },
      {
        name: "keywords",
        content:
          "teleradiology network India, pan-India radiology reporting, remote diagnostic imaging India, diagnostic center radiology partner, hospital teleradiology",
      },
      { property: "og:title", content: "Pan-India Teleradiology Coverage & Network | Trust and Hope Rad Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "One reporting network across 15+ states in India serving trauma centers, hospitals, and diagnostic clinics.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/where-we-work` },
      { property: "og:image", content: `${SITE_URL}/Trust%20&%20Hope_Logo_Round_Transparent.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/where-we-work` },
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
            { name: "Where We Work", item: "/where-we-work" },
          ])
        ),
      },
    ],
  }),
  component: WhereWeWork,
});

function WhereWeWork() {
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
    backToTop?.addEventListener("click", toTop);
    cleanups.push(() => {
      window.removeEventListener("scroll", onScroll);
      backToTop?.removeEventListener("click", toTop);
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <div className="where-we-work-page">
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
        <Link to="/where-we-work">Where We Work</Link>
        <Link to="/our-team">Our Team</Link>
        <Link to="/how-reporting-works">How It Works</Link>
        <Link to="/" hash="services">Services</Link>
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
              "radial-gradient(1200px 600px at 85% -10%, rgba(32, 183, 229, 0.25), transparent 60%), linear-gradient(135deg, #071A3A 0%, #0D3B8E 55%, #20B7E5 100%)",
            color: "#E6EDF5",
            padding: "90px 0 70px 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12 col-lg-10">
                <div className="d-inline-flex align-items-center gap-2 mb-3">
                  <span className="eyebrow" style={{ color: "var(--sky-blue)", margin: 0 }}>
                    PAN-INDIA COVERAGE &amp; NETWORK
                  </span>
                </div>

                <h1
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(34px, 4.5vw, 56px)",
                    fontWeight: 700,
                    marginBottom: "20px",
                    lineHeight: 1.2,
                  }}
                >
                  One Reporting Network, <span style={{ color: "var(--sky-blue)" }}>{stats.states}{stats.statesSuffix}</span> States
                </h1>

                <p
                  className="lead"
                  style={{
                    fontSize: "18.5px",
                    color: "#E2EEFB",
                    maxWidth: "860px",
                    margin: "0 auto 36px auto",
                    lineHeight: 1.65,
                    textAlign: "center",
                  }}
                >
                  From major city trauma centers to regional diagnostic clinics, our clients span the
                  entire country, and our team of radiologists and reporting keeps growing.
                </p>

                {/* HERO STATS BAR */}
                <div className="row g-3 justify-content-center">
                  <div className="col-6 col-md-3">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(32, 183, 229, 0.3)",
                        borderRadius: "16px",
                        padding: "20px 16px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "30px", fontWeight: 700, color: "#FFFFFF" }}>
                        {stats.states}{stats.statesSuffix}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--sky-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginTop: "4px" }}>
                        States Covered
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(32, 183, 229, 0.3)",
                        borderRadius: "16px",
                        padding: "20px 16px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "30px", fontWeight: 700, color: "#FFFFFF" }}>
                        {stats.centres}{stats.centresSuffix}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--sky-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginTop: "4px" }}>
                        Centres Served
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(32, 183, 229, 0.3)",
                        borderRadius: "16px",
                        padding: "20px 16px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "30px", fontWeight: 700, color: "#FFFFFF" }}>
                        {stats.studies}{stats.studiesSuffix}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--sky-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginTop: "4px" }}>
                        Daily Scans
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-md-3">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.08)",
                        border: "1px solid rgba(32, 183, 229, 0.3)",
                        borderRadius: "16px",
                        padding: "20px 16px",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "30px", fontWeight: 700, color: "#FFFFFF" }}>
                        {stats.radiologists}{stats.radiologistsSuffix}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--sky-blue)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, marginTop: "4px" }}>
                        Radiologists
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE STATEMENT BANNER */}
        <section style={{ padding: "50px 0 0 0", background: "var(--paper)" }}>
          <div className="container">
            <div
              style={{
                background: "linear-gradient(135deg, #071A3A 0%, #0D3B8E 100%)",
                border: "1px solid rgba(32, 183, 229, 0.35)",
                borderRadius: "20px",
                padding: "36px 40px",
                color: "#FFFFFF",
                boxShadow: "0 14px 40px rgba(7, 26, 58, 0.25)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "20px",
                  color: "#E6EDF5",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: "920px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                With every new state we expand to, expect no less: <strong style={{ color: "var(--sky-blue)" }}>direct communication</strong>,{" "}
                <strong style={{ color: "#FFFFFF" }}>disciplined turnaround times</strong>, and <strong style={{ color: "var(--sky-blue)" }}>consistent quality of radiologists</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* MAP & NETWORK PILLARS SECTION */}
        <section style={{ padding: "70px 0 90px 0", background: "var(--paper)" }}>
          <div className="container">
            <div className="row align-items-center g-5">
              {/* LEFT 3D MAP DISPLAY */}
              <div className="col-12 col-lg-6">
                <div
                  style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(32, 183, 229, 0.15), transparent 70%), linear-gradient(135deg, #071A3A 0%, #0D3B8E 100%)",
                    border: "1px solid rgba(32, 183, 229, 0.35)",
                    borderRadius: "24px",
                    padding: "36px",
                    boxShadow: "0 20px 60px rgba(7, 26, 58, 0.25)",
                    textAlign: "center",
                    position: "relative",
                  }}
                >
                  <img
                    src={indianMapUrl}
                    alt="Pan-India Teleradiology Reporting Map"
                    style={{
                      maxHeight: "480px",
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "16px",
                      filter: "drop-shadow(0 0 35px rgba(32, 183, 229, 0.45))",
                    }}
                  />
                </div>
              </div>

              {/* RIGHT NETWORK PILLARS */}
              <div className="col-12 col-lg-6">
                <span className="eyebrow mb-2" style={{ color: "var(--sky-blue)" }}>
                  OUR COVERAGE COMMITMENT
                </span>
                <h2 style={{ fontSize: "34px", color: "var(--deep-navy)", fontWeight: 700, marginBottom: "24px" }}>
                  Why Hospitals Across India Trust Our Network
                </h2>

                <div className="d-flex flex-column gap-4">
                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid var(--line)",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      boxShadow: "0 4px 16px rgba(7, 26, 58, 0.04)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: "rgba(32, 183, 229, 0.12)",
                          color: "var(--sky-blue)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                        }}
                      >
                        01
                      </div>
                      <h4 style={{ margin: 0, fontSize: "18px", color: "var(--deep-navy)", fontWeight: 700 }}>
                        Radiologist Consultation
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: "14.5px", color: "var(--navy-blue)", lineHeight: 1.6, textAlign: "left" }}>
                      Direct communication with reporting radiologists without ticket queues or call center delays.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid var(--line)",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      boxShadow: "0 4px 16px rgba(7, 26, 58, 0.04)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: "rgba(32, 183, 229, 0.12)",
                          color: "var(--sky-blue)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                        }}
                      >
                        02
                      </div>
                      <h4 style={{ margin: 0, fontSize: "18px", color: "var(--deep-navy)", fontWeight: 700 }}>
                        Rapid Emergency Turnaround
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: "14.5px", color: "var(--navy-blue)", lineHeight: 1.6, textAlign: "left" }}>
                      15–30 min emergency turnaround for trauma &amp; stroke CT/MRI, with sub-2 hour routine reporting 24/7/365.
                    </p>
                  </div>

                  <div
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid var(--line)",
                      borderRadius: "16px",
                      padding: "20px 24px",
                      boxShadow: "0 4px 16px rgba(7, 26, 58, 0.04)",
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "10px",
                          background: "rgba(32, 183, 229, 0.12)",
                          color: "var(--sky-blue)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                        }}
                      >
                        03
                      </div>
                      <h4 style={{ margin: 0, fontSize: "18px", color: "var(--deep-navy)", fontWeight: 700 }}>
                        Consistent Radiologist Quality
                      </h4>
                    </div>
                    <p style={{ margin: 0, fontSize: "14.5px", color: "var(--navy-blue)", lineHeight: 1.6, textAlign: "left" }}>
                      140+ fellowship-trained MD/DNB radiologists matching specialized subspecialties across Neuro, MSK, Body, and Cardiac imaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION CARD */}
            <div
              className="mt-5 text-center"
              style={{
                background: "linear-gradient(135deg, #071A3A 0%, #0D3B8E 55%, #20B7E5 100%)",
                border: "1px solid rgba(32, 183, 229, 0.35)",
                borderRadius: "24px",
                padding: "48px 32px",
                color: "#FFFFFF",
                boxShadow: "0 20px 50px rgba(7, 26, 58, 0.3)",
              }}
            >
              <h3 style={{ fontSize: "28px", color: "#FFFFFF", fontWeight: 700, marginBottom: "12px" }}>
                Expand Your Diagnostic Capacity Today
              </h3>
              <p style={{ color: "#E2EEFB", fontSize: "16px", maxWidth: "680px", margin: "0 auto 28px auto" }}>
                Connect your PACS gateway in minutes and experience zero-delay 24/7 radiology reporting tailored for your facility.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <Link to="/" hash="contact" className="btn-custom btn-custom-primary" style={{ padding: "14px 32px", fontSize: "15px" }}>
                  Partner With Us →
                </Link>
                <Link to="/how-reporting-works" className="btn-custom btn-custom-ghost" style={{ borderColor: "rgba(32, 183, 229, 0.4)", color: "#FFFFFF", background: "rgba(255, 255, 255, 0.08)", padding: "14px 28px", fontSize: "15px" }}>
                  See How It Works →
                </Link>
              </div>
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
                  <Link to="/where-we-work">Where We Work</Link>
                </li>
                <li>
                  <Link to="/our-team">Our Team</Link>
                </li>
                <li>
                  <Link to="/how-reporting-works">How It Works</Link>
                </li>
                <li>
                  <Link to="/" hash="services">Services</Link>
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
