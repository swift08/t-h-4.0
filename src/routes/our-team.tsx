import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import logoUrl from "../assets/Trust & Hope_Logo_Round_Transparent.webp";
import teamImgUrl from "../assets/team.webp";
import { useStats } from "@/lib/stats-store";
import { getBreadcrumbSchema, SITE_URL } from "@/lib/seo-schemas";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: "Our Radiologist Panel & Leadership Team | Trust and Hope Rad Pvt. Ltd." },
      {
        name: "description",
        content:
          "Meet the clinical leadership and 140+ fellowship-trained radiologists at Trust and Hope Rad Pvt. Ltd. Subspecialty expertise across CT, MRI, Neuro, MSK & Cardiac radiology.",
      },
      {
        name: "keywords",
        content:
          "radiologists India, teleradiologists, subspecialty radiologists, neuroradiology reporting, MSK radiologist, TAH RAD team, clinical operations radiology",
      },
      { property: "og:title", content: "Our Radiologist Panel & Leadership Team | Trust and Hope Rad Pvt. Ltd." },
      {
        property: "og:description",
        content:
          "140+ fellowship-trained radiologists delivering high-accuracy reporting 24/7/365 across hospitals in India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/our-team` },
      { property: "og:image", content: `${SITE_URL}/Trust%20&%20Hope_Logo_Round_Transparent.webp` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/our-team` },
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
            { name: "Our Team", item: "/our-team" },
          ])
        ),
      },
    ],
  }),
  component: OurTeam,
});

function OurTeam() {
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
    <div className="our-team-page">
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
        <Link to="/our-team">Our Team</Link>
        <Link to="/where-we-work">Where We Work</Link>
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
        {/* HERO SECTION — LIGHT EDITORIAL SIDE-BY-SIDE */}
        <section
          style={{
            background: "#F6F9FC",
            padding: "90px 0 80px 0",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="container">
            <div className="row g-4 g-lg-5 align-items-center">
              {/* LEFT CONTENT COLUMN */}
              <div className="col-12 col-lg-6">
                <span className="eyebrow mb-3" style={{ color: "var(--sky-blue)" }}>
                  OUR TEAM
                </span>
                <h1
                  style={{
                    color: "var(--deep-navy)",
                    fontSize: "clamp(32px, 3.8vw, 50px)",
                    fontWeight: 700,
                    lineHeight: 1.18,
                    letterSpacing: "-0.02em",
                    marginBottom: "20px",
                  }}
                >
                  {stats.radiologists}{stats.radiologistsSuffix} radiologists.<br />One quality bar.
                </h1>
                <p
                  style={{
                    fontSize: "16.5px",
                    color: "#4A627D",
                    lineHeight: 1.68,
                    marginBottom: "32px",
                    maxWidth: "580px",
                  }}
                >
                  We have a leadership team with wide experience across radiology and healthcare
                  operations and client servicing, backed by a large team of over {stats.radiologists}{stats.radiologistsSuffix} radiologists who
                  report across both general and subspecialties.
                </p>

                {/* 2x2 STAT CARDS GRID */}
                <div className="row g-3">
                  <div className="col-6">
                    <div className="team-stat-card">
                      <h3>{stats.radiologists}{stats.radiologistsSuffix}</h3>
                      <span>RADIOLOGISTS</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="team-stat-card">
                      <h3>{stats.studies}{stats.studiesSuffix}</h3>
                      <span>STUDIES DAILY</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="team-stat-card">
                      <h3>Multi-level</h3>
                      <span>QUALITY CONTROL</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="team-stat-card">
                      <h3>24×7</h3>
                      <span>OPERATIONS DESK</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE COLUMN */}
              <div className="col-12 col-lg-6">
                <div className="team-photo-showcase">
                  <img
                    src={teamImgUrl}
                    alt="Trust and Hope Radiologists and Healthcare Team"
                    className="team-photo-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP TEAM CARDS SECTION */}
        <section style={{ padding: "80px 0 90px 0", background: "#FFFFFF" }}>
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-12 col-lg-8">
                <span className="eyebrow mb-2">LEADERSHIP &amp; MANAGEMENT</span>
                <h2 style={{ fontSize: "32px", color: "var(--deep-navy)", fontWeight: 700 }}>
                  Executive Leadership
                </h2>
              </div>
            </div>

            <div className="row g-4 mb-5">
              {/* 1. Founder and Managing Director */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="team-leader-card">
                  <div className="team-avatar-ph">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3>Founder and Managing Director</h3>
                  <span className="team-role-tag">Company leadership</span>
                </div>
              </div>

              {/* 2. Chief of Radiology and Clinical Quality */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="team-leader-card">
                  <div className="team-avatar-ph">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h3>Chief of Radiology and Clinical Quality</h3>
                  <span className="team-role-tag">Reporting standards and QA</span>
                </div>
              </div>

              {/* 3. Head of Client Success */}
              <div className="col-12 col-md-6 col-lg-4">
                <div className="team-leader-card">
                  <div className="team-avatar-ph">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3>Head of Client Success</h3>
                  <span className="team-role-tag">Onboarding and communication</span>
                </div>
              </div>
            </div>

            {/* NOTE BOX */}
            <div
              style={{
                background: "#F0F7FA",
                border: "1px dashed var(--teal)",
                borderRadius: "14px",
                padding: "20px 28px",
                color: "var(--navy-blue)",
                fontSize: "15px",
                textAlign: "center",
                maxWidth: "900px",
                margin: "0 auto",
                lineHeight: 1.5,
              }}
            >
              <em>(Note: the team names and photos will be added. This has been structured so that real profiles can be added here with no redesign needed.)</em>
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
                  <Link to="/our-team">Our Team</Link>
                </li>
                <li>
                  <Link to="/where-we-work">Where We Work</Link>
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
