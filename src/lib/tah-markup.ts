import logoUrl from "../assets/Trust & Hope_Logo_Round_Transparent.webp";
import indianMapUrl from "../assets/Indian map.webp";
import heroVideo1Url from "../assets/watermarked_preview (1).webm";
import heroVideo2Url from "../assets/WhatsApp_Video_2026-07-31_at_5.47.27_PM.webm";
import whoWeAreImgUrl from "../assets/image.webp";

export const tahMarkup = `

<header class="nav">
  <div class="container">
    <div class="nav-wrap">
      <a href="#hero" class="brand">
        <img src="${logoUrl}" alt="Trust and Hope Rad logo">
        <span>TAH RAD<small>Trust and Hope Rad Pvt. Ltd.</small></span>
      </a>
      <nav class="links">
        <a href="#hero" class="nav-home-btn" id="nav-home-btn">Home</a>
        <a href="#who-we-are">About Us</a>
        <a href="#how-reporting-works">How It Works</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="d-flex align-items-center gap-3">
        <a href="https://pacs.trustandhoperad.com/login" target="_blank" rel="noopener noreferrer" class="nav-cta nav-cta-desktop">Login</a>
        <button class="burger" id="burger-btn" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </div>
</header>

<div class="mobile-drawer" id="mobile-drawer">
  <a href="#hero" class="mobile-home-btn" id="mobile-home-btn">Home</a>
  <a href="#who-we-are">About Us</a>
  <a href="/our-team">Our Team</a>
  <a href="#where-we-work">Pan India Coverage</a>
  <a href="#how-reporting-works">How It Works</a>
  <a href="#services">Services</a>
  <a href="#why-us">Why Us</a>
  <a href="#contact">Contact</a>
  <a href="https://pacs.trustandhoperad.com/login" target="_blank" rel="noopener noreferrer" class="nav-cta btn-glow mb-2">Login</a>
  <a href="#contact" class="nav-cta btn-glow">Partner With Us</a>
</div>

<main>
  <!-- HERO SECTION -->
  <section class="hero" id="hero">
    <video id="hero-bg-video" src="${heroVideo1Url}" data-next-src="${heroVideo2Url}" autoplay muted playsinline class="hero-bg-video"></video>
    <div class="hero-video-overlay"></div>

    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-12 col-lg-10 col-xl-9 reveal">
          <span class="eyebrow"><span class="highlight-247-badge">24×7</span> Teleradiology Reporting</span>
          <h1 class="hero-main-title">
            <span class="hero-title-white">FULL-SPECTRUM<br>TELERADIOLOGY,</span><br>
            <span class="hero-title-gradient-wrap">
              <span class="hero-title-gradient">ONE REPORTING PARTNER</span>
              <span class="hero-title-light-streak"></span>
            </span>
          </h1>
          <p class="lead">From X-Rays to specialty MRIs, we cover the entire diagnostic imaging spectrum so you don't have to work with multiple vendors for different modalities.</p>
          
          <div class="hero-quick-nav mt-3 pt-2 d-flex flex-wrap gap-3">
            <a href="#services" class="hero-btn-services">Services →</a>
            <a href="#contact" class="hero-btn-contact">Contact Us →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS COUNTER BAR -->
  <section class="impact" id="stats">
    <div class="container">
      <div class="row g-3 text-center reveal-stagger">
        <div class="col-6 col-md-3 item">
          <div class="num"><span class="counter" data-stat-counter="centres" data-target="350">0</span><span class="suffix" data-stat-suffix="centres">+</span></div>
          <span class="impact-label">Centres Served</span>
        </div>
        <div class="col-6 col-md-3 item">
          <div class="num"><span class="counter" data-stat-counter="studies" data-target="1000">0</span><span class="suffix" data-stat-suffix="studies">+</span></div>
          <span class="impact-label">New Studies Uploaded Daily to PACS</span>
        </div>
        <div class="col-6 col-md-3 item">
          <div class="num"><span class="counter" data-stat-counter="radiologists" data-target="140">0</span><span class="suffix" data-stat-suffix="radiologists">+</span></div>
          <span class="impact-label">Radiologists Across Specialisations</span>
        </div>
        <div class="col-6 col-md-3 item">
          <div class="num"><span class="counter" data-stat-counter="states" data-target="15">0</span><span class="suffix" data-stat-suffix="states">+</span></div>
          <span class="impact-label">States Covered in India</span>
        </div>
      </div>
    </div>
  </section>

  <!-- WHO WE ARE SECTION -->
  <section class="who-we-are" id="who-we-are">
    <div class="container">
      <div class="row g-4 g-lg-5 align-items-center">
        <div class="col-12 col-lg-5 reveal">
          <div class="who-we-are-image-card">
            <img src="${whoWeAreImgUrl}" alt="Trust & Hope Radiologists Consulting CT & MRI Diagnostic Scans" class="who-we-are-img">
            <div class="who-we-are-img-overlay">
              <span class="badge-tag">🔬 Expert Consultation</span>
              <p class="overlay-caption">Board-certified radiologists reviewing live diagnostic studies</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-7 reveal">
          <span class="eyebrow">WHO WE ARE</span>
          <h2 class="who-title">Direct Radiologist Communication, Zero Disconnect</h2>
          
          <p class="who-text mb-3">Every scan request means there’s a patient on the line. Patients experiencing everything from strokes to CT traumas to anxious patients waiting for follow-up MRIs and more. Our workflow deliberately adopts this level of pressure.</p>
          
          <div class="quote-box my-3">
            <p>“We don’t just read scans, we remain accessible before, during and after the report is signed.”</p>
          </div>

          <p class="who-text mb-0">The main differentiator for us, is our extensive network of Radiologists as well as our communication with our clients. Our clients don’t have to rely on ticket systems with no information related to the request, or approximate time frames. Our clients can expect direct communication with the radiologist, clear paths for escalation, and reporting turnaround times we are actually accountable to.</p>
          
          <div class="d-flex flex-wrap gap-2 mt-4 btn-swap-group">
            <a href="/our-team" class="btn-custom btn-custom-primary">Meet Our Radiologists Panel →</a>
            <a href="#why-us" class="btn-custom btn-custom-ghost">Why Choose TAH RAD →</a>
            <a href="#where-we-work" class="btn-custom btn-custom-ghost">Pan India Coverage →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MISSION & VISION SECTION -->
  <section class="mission-vision" id="mission-vision">
    <div class="container">
      <div class="row justify-content-center text-center mb-4 reveal">
        <div class="col-12 col-lg-8">
          <h2>Improving the speed and quality of clinical decisions</h2>
          <p style="color:var(--muted-slate); font-size:16px;">We empower hospitals, diagnostic centres, and clinical teams across India with remote diagnostic interpretations that you can trust implicitly.</p>
        </div>
      </div>

      <div class="row g-4 reveal-stagger">
        <div class="col-12 col-md-6">
          <div class="mv-card mission">
            <div class="icon-badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <span class="eyebrow mb-2">OUR MISSION</span>
            <h3>Timely, precise, high-quality reporting</h3>
            <p>Enhance healthcare delivery through timely, precise, and high-quality tele-radiology services.</p>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <div class="mv-card vision">
            <div class="icon-badge">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <span class="eyebrow mb-2" style="color:var(--teal);">OUR VISION</span>
            <h3>A global leader in tele-radiology</h3>
            <p>Become a global leader in tele-radiology by fostering innovation, trust, and diagnostic excellence.</p>
          </div>
        </div>
      </div>

      <div class="philosophy-bar reveal">
        <h5>SERVICE PHILOSOPHY</h5>
        <div class="philosophy-pills">
          <span class="philosophy-pill"><span class="pill-dot"></span> Accuracy</span>
          <span class="philosophy-pill"><span class="pill-dot"></span> Speed</span>
          <span class="philosophy-pill"><span class="pill-dot"></span> Reliability</span>
          <span class="philosophy-pill"><span class="pill-dot"></span> Workflow Optimization</span>
          <span class="philosophy-pill"><span class="pill-dot"></span> Patient Care</span>
        </div>
      </div>
    </div>
  </section>

  <!-- HOW REPORTING WORKS SECTION -->
  <section class="how-reporting-works" id="how-reporting-works" style="padding: 16px 0 30px 0; background: var(--paper); border-bottom: 1px solid var(--line);">
    <div class="container">
      <div class="row justify-content-center text-center mb-3 reveal">
        <div class="col-12 col-lg-9">
          <span class="eyebrow mb-1">FROM SCAN TO SIGNED REPORT, IN FIVE STEPS</span>
          <h2 style="font-size: clamp(26px, 3.5vw, 40px); margin-top: 6px; margin-bottom: 6px;">How Reporting Works</h2>
          <p style="color: var(--muted-slate); font-size: 16px; max-width: 750px; margin: 0 auto;">Each of these steps is designed to facilitate the process of getting reports done, and is fully integrated with PACS.</p>
        </div>
      </div>

      <!-- DETAILED PROCESS FLOW GRID (SINGLE LINE LAYOUT) -->
      <div class="steps-flow-container reveal-stagger">
        <div class="steps-flow-row">
          <!-- STEP 1 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div>
                    <span class="step-num-badge" title="Image acquisition">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 14.9"></path><rect x="9" y="13" width="6" height="5" rx="1"></rect><path d="M10 13v-1.5a2 2 0 0 1 4 0V13"></path></svg>
                    </span>
                    <div class="flip-title">Image acquisition</div>
                  </div>
                  <div class="flip-hint">
                    <span>Hover</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 2 14.9"></path><rect x="9" y="13" width="6" height="5" rx="1"></rect><path d="M10 13v-1.5a2 2 0 0 1 4 0V13"></path></svg>
                  </span>
                  <h3>Image acquisition</h3>
                  <p class="step-text">A technologist at the hospital or diagnostic centre acquires the scan using standard imaging equipment (X-ray, CT, MRI, or mammography machine).</p>
                  <div class="step-highlight">The images are stored in DICOM format, the universal standard for medical imaging.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 1 -> 2 -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 2 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div>
                    <span class="step-num-badge" title="Secure transmission">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </span>
                    <div class="flip-title">Secure transmission</div>
                  </div>
                  <div class="flip-hint">
                    <span>Hover</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </span>
                  <h3>Secure transmission</h3>
                  <p class="step-text">The DICOM images are transmitted securely from the facility's PACS (Picture Archiving and Communication System) to the teleradiology platform.</p>
                  <div class="step-highlight">Transmission uses encrypted channels compliant with healthcare data standards.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 2 -> 3 -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 3 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div>
                    <span class="step-num-badge" title="Radiologist interpretation">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path></svg>
                    </span>
                    <div class="flip-title">Radiologist interpretation</div>
                  </div>
                  <div class="flip-hint">
                    <span>Hover</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"></circle><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path></svg>
                  </span>
                  <h3>Radiologist interpretation</h3>
                  <p class="step-text">A board-certified radiologist reviews the images, identifies pathologies, and generates the draft report.</p>
                  <div class="step-highlight">Work is performed exclusively by certified specialists to ensure diagnostic precision.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 3 -> 4 -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 4 -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front">
                  <div>
                    <span class="step-num-badge" title="Quality Check">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    </span>
                    <div class="flip-title">Quality Check</div>
                  </div>
                  <div class="flip-hint">
                    <span>Hover</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card">
                  <span class="step-num-badge">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  </span>
                  <h3>Quality Check</h3>
                  <p class="step-text">They validate correct findings, correct any errors, add clinical context, and finalise the report.</p>
                  <div class="step-highlight">The final report is double-checked for critical findings before communication.</div>
                </div>
              </div>
            </div>
          </div>

          <!-- ARROW 4 -> PACS -->
          <div class="step-arrow-inline" title="Next Step">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </div>

          <!-- STEP 5: REPORT DELIVERY -->
          <div class="step-card-col">
            <div class="step-flip-card" tabindex="0">
              <div class="step-flip-inner">
                <div class="step-flip-front" style="background: linear-gradient(135deg, #071A3A 0%, #0D3B8E 100%); color: #FFFFFF;">
                  <div>
                    <span class="step-num-badge" style="background: rgba(255,255,255,0.15); color: #FFFFFF;" title="Report Delivery">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>
                    </span>
                    <div class="flip-title" style="color: #FFFFFF;">Report Delivery</div>
                  </div>
                  <div class="flip-hint" style="background: rgba(255,255,255,0.15); color: #E6EDF5;">
                    <span>Hover</span>
                    <svg class="flip-icon-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                  </div>
                </div>
                <div class="step-flip-back step-detail-card" style="background: linear-gradient(135deg, #071A3A 0%, #0D3B8E 100%); color: #FFFFFF;">
                  <span class="step-num-badge" style="background: rgba(255,255,255,0.15); color: #FFFFFF;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>
                  </span>
                  <h3 style="color: #FFFFFF;">Report Delivery</h3>
                  <p class="step-text" style="color: #D0DCED;">The finalised report is delivered directly to the referring clinician via the integrated PACS or secure portal — fast, accurate, and actionable.</p>
                  <div class="step-highlight" style="background: rgba(255,255,255,0.08); border-color: var(--teal); color: #E6EDF5;">Zero technical friction with IT support.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT WE REPORT / SERVICES SECTION -->
  <section class="services" id="services">
    <div class="container">
      <div class="row mb-5 reveal text-center justify-content-center">
        <div class="col-12 col-lg-9">
          <span class="eyebrow">WHAT WE DO</span>
          <h2 style="font-size:clamp(30px, 4vw, 48px); margin-top:10px;">FULL-SPECTRUM TELERADIOLOGY,<br><em style="font-style:normal; color:var(--teal);">ONE REPORTING PARTNER</em></h2>
          <p style="color:var(--navy-blue); font-size:16px; margin-top:14px; max-width:620px; margin-left:auto; margin-right:auto;">From X-Rays to specialty MRIs, we cover the entire diagnostic imaging spectrum so you don't have to work with multiple vendors for different modalities.</p>
        </div>
      </div>

      <!-- SPLIT-PANEL SERVICES EXPLORER -->
      <div class="svc-explorer reveal" id="svc-explorer">

        <!-- LEFT: Service Nav Sidebar -->
        <div class="svc-nav" id="svc-nav">
          <div class="svc-nav-header">
            <span class="svc-nav-badge">24/7 Active</span>
          </div>
          <div class="svc-nav-list">
            <button class="svc-pill active" data-svc="ct">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg></span>
              <span class="svc-pill-name">CT Reporting</span>
            </button>
            <button class="svc-pill" data-svc="mri">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/></svg></span>
              <span class="svc-pill-name">MRI Reporting</span>
            </button>
            <button class="svc-pill" data-svc="xray">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 8V1"/><path d="M12 16v7"/><path d="m15.5 10 6-3.5"/><path d="m8.5 14-6 3.5"/><path d="m15.5 14 6 3.5"/><path d="m8.5 10-6-3.5"/></svg></span>
              <span class="svc-pill-name">X-Ray Reporting</span>
            </button>
            <button class="svc-pill" data-svc="pet">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><ellipse cx="12" cy="12" rx="9" ry="3"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(120 12 12)"/></svg></span>
              <span class="svc-pill-name">PET Reporting</span>
            </button>
            <button class="svc-pill" data-svc="usg">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></span>
              <span class="svc-pill-name">USG Reporting</span>
            </button>
            <button class="svc-pill" data-svc="subspecialty">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg></span>
              <span class="svc-pill-name">Subspecialty Reads</span>
            </button>
            <button class="svc-pill" data-svc="nighthawk">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg></span>
              <span class="svc-pill-name">Nighthawk &amp; Stat</span>
            </button>
            <button class="svc-pill" data-svc="second">
              <span class="svc-pill-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg></span>
              <span class="svc-pill-name">Second Opinions</span>
            </button>

          </div>
        </div>

        <!-- RIGHT: Detail Panel -->
        <div class="svc-detail-panel" id="svc-detail-panel">

          <!-- CT -->
          <div class="svc-panel active" id="svc-ct">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg></div>
              <div>
                <span class="svc-panel-cat">Emergency &amp; Cross-Sectional</span>
                <h3 class="svc-panel-title">CT Reporting</h3>
                <p class="svc-panel-sub">Fast &amp; Accurate Computed Tomography</p>
              </div>
            </div>
            <p class="svc-panel-desc">High-speed CT reporting for head, chest, abdomen, angiography, and polytrauma emergencies with sub-hour stat delivery.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Trauma &amp; Stroke Emergency Reads</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>3D Angiography &amp; Vessel Analysis</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Routine Abdominal &amp; Chest Scans</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Head CT</span><span class="svc-footer-chip">Chest CT</span><span class="svc-footer-chip">CTA</span><span class="svc-footer-chip">Polytrauma</span><span class="svc-footer-chip">Abdominal CT</span>
            </div>
          </div>

          <!-- MRI -->
          <div class="svc-panel" id="svc-mri">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v13"/></svg></div>
              <div>
                <span class="svc-panel-cat">Subspecialty</span>
                <h3 class="svc-panel-title">MRI Reporting</h3>
                <p class="svc-panel-sub">High-Resolution Soft Tissue Diagnostic</p>
              </div>
            </div>
            <p class="svc-panel-desc">Comprehensive MRI interpretations covering neuroradiology, spine, musculoskeletal joints, pelvic, and cardiac studies.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Subspecialty Neuroradiology &amp; Spine</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>MSK Joint &amp; Cartilage Imaging</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Multiparametric Prostate &amp; Abdomen</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Neuro MRI</span><span class="svc-footer-chip">Spine MRI</span><span class="svc-footer-chip">MSK</span><span class="svc-footer-chip">Cardiac MRI</span><span class="svc-footer-chip">mpMRI</span>
            </div>
          </div>

          <!-- X-Ray -->
          <div class="svc-panel" id="svc-xray">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 8V1"/><path d="M12 16v7"/><path d="m15.5 10 6-3.5"/><path d="m8.5 14-6 3.5"/><path d="m15.5 14 6 3.5"/><path d="m8.5 10-6-3.5"/></svg></div>
              <div>
                <span class="svc-panel-cat">Routine &amp; High-Volume</span>
                <h3 class="svc-panel-title">X-Ray Reporting</h3>
                <p class="svc-panel-sub">24/7 Digital Radiography</p>
              </div>
            </div>
            <p class="svc-panel-desc">Rapid turnaround for high-volume plain radiography, chest X-rays, trauma skeletal series, and routine screening.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Chest &amp; Cardiac Radiography</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Orthopedic Skeletal Series</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>High-Volume Batch Reporting</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Chest X-Ray</span><span class="svc-footer-chip">Skeletal</span><span class="svc-footer-chip">Trauma</span><span class="svc-footer-chip">Screening</span><span class="svc-footer-chip">Batch</span>
            </div>
          </div>

          <!-- PET -->
          <div class="svc-panel" id="svc-pet">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><ellipse cx="12" cy="12" rx="9" ry="3"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(120 12 12)"/></svg></div>
              <div>
                <span class="svc-panel-cat">Subspecialty &amp; Advanced</span>
                <h3 class="svc-panel-title">PET Reporting</h3>
                <p class="svc-panel-sub">Oncology &amp; Metabolic Imaging</p>
              </div>
            </div>
            <p class="svc-panel-desc">Specialized PET/CT molecular imaging reads for cancer staging, therapy evaluation, and metabolic lesion tracking.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Oncology Staging &amp; Restaging</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>FDG Whole-Body Scans</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Radiotracer Uptake Quantification</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">PET/CT</span><span class="svc-footer-chip">FDG</span><span class="svc-footer-chip">Oncology</span><span class="svc-footer-chip">PERCIST</span><span class="svc-footer-chip">SUVmax</span>
            </div>
          </div>

          <!-- USG -->
          <div class="svc-panel" id="svc-usg">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
              <div>
                <span class="svc-panel-cat">Routine</span>
                <h3 class="svc-panel-title">USG Reporting</h3>
                <p class="svc-panel-sub">Ultrasonography &amp; Color Doppler</p>
              </div>
            </div>
            <p class="svc-panel-desc">Expert review for general ultrasound, Doppler vascular studies, anomaly scans, and pelvic diagnostic imagery.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Color Doppler Vascular Reads</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Obstetric &amp; Fetal Anomaly Scans</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Abdominal &amp; Small Parts Review</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Doppler</span><span class="svc-footer-chip">Obstetric</span><span class="svc-footer-chip">Abdomen USG</span><span class="svc-footer-chip">Thyroid</span><span class="svc-footer-chip">Scrotal</span>
            </div>
          </div>

          <!-- Subspecialty -->
          <div class="svc-panel" id="svc-subspecialty">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg></div>
              <div>
                <span class="svc-panel-cat">Expert Interpretation</span>
                <h3 class="svc-panel-title">Subspecialty Reads</h3>
                <p class="svc-panel-sub">Domain-Specific Expert Interpretations</p>
              </div>
            </div>
            <p class="svc-panel-desc">Domain-specific imaging reads are reported by radiologists trained in Neuroradiology, Musculoskeletal Imaging, Cardiothoracic Imaging, Oncology and Obstetric Imaging.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Neuro &amp; MSK Board Radiologists</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Cardiothoracic &amp; Vascular Specialists</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Oncology &amp; Obstetric Imaging</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Neuro</span><span class="svc-footer-chip">MSK</span><span class="svc-footer-chip">Cardiothoracic</span><span class="svc-footer-chip">Oncology</span><span class="svc-footer-chip">Obstetric</span>
            </div>
          </div>

          <!-- Nighthawk -->
          <div class="svc-panel" id="svc-nighthawk">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg></div>
              <div>
                <span class="svc-panel-cat">Emergency</span>
                <h3 class="svc-panel-title">Nighthawk &amp; Stat Reads</h3>
                <p class="svc-panel-sub">Nighttime Radiology Coverage, Daytime Peace of Mind</p>
              </div>
            </div>
            <p class="svc-panel-desc">Overnight and emergency reads are reported so your nightshift won't be unproductive, leaving undetermined cases for the morning hours.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Rapid Access to Radiologists</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Expedited Reporting for Decisive Action</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Uninterrupted Expert Care Around the Clock</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Overnight</span><span class="svc-footer-chip">Emergency</span><span class="svc-footer-chip">ED Coverage</span><span class="svc-footer-chip">ICU</span><span class="svc-footer-chip">Prelim Reads</span>
            </div>
          </div>

          <!-- Second Opinions -->
          <div class="svc-panel" id="svc-second">
            <div class="svc-panel-header">
              <div class="svc-panel-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg></div>
              <div>
                <span class="svc-panel-cat">Peer Review &amp; QA</span>
                <h3 class="svc-panel-title">Second Opinions</h3>
                <p class="svc-panel-sub">Clinical Certainty for Complex Cases</p>
              </div>
            </div>
            <p class="svc-panel-desc">For your complex and/or conflicting cases, we provide an additional clinical level of certainty through independent subspecialty reviews.</p>
            <div class="svc-panel-bullets">
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Independent Quality Assurance Review</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Detailed Peer Audit Reports</strong></div></div>
              <div class="svc-bullet"><span class="svc-bullet-dot"></span><div><strong>Conflict Resolution &amp; Expert Consensus</strong></div></div>
            </div>
            <div class="svc-panel-footer">
              <span class="svc-footer-chip">Blinded Review</span><span class="svc-footer-chip">Discrepancy</span><span class="svc-footer-chip">Medico-legal</span><span class="svc-footer-chip">Consensus</span><span class="svc-footer-chip">Complex Cases</span>
            </div>
          </div>


        </div><!-- /svc-detail-panel -->

      </div><!-- /svc-explorer -->
    </div>
  </section>

  <!-- WHY US SECTION -->
  <section class="why-us" id="why-us">
    <div class="container" style="position:relative; z-index:2;">

      <!-- WHY US — ASYMMETRIC HERO -->
      <div class="why-top reveal">
        <div class="why-top-left">
          <span class="eyebrow" style="color:var(--teal);">WHY US</span>
          <h2 class="why-headline">HOSPITALS WHO WORK WITH US<br><em class="why-em">ALWAYS GET A CALL BACK.</em></h2>
          <div class="why-divider"></div>
          <p class="lead-why">Ask any radiology coordinator what the biggest disconnect is with teleradiology. The answer is almost always the silence that occurs within the process. There is no one to contact if there are questions, and the response deadlines for the reports come and go without an explanation. These issues are what we aim to address with Trust and Hope Rad Pvt Ltd.</p>
        </div>
        <div class="why-top-right">
          <div class="why-pull-quote">
            <span class="why-quote-mark">&ldquo;</span>
            <p>Radio silence is the enemy of good patient care. We built our entire operation around the belief that a radiologist should be reachable, always.</p>
            <cite>- TAH Rad, Clinical Operations</cite>
          </div>
        </div>
      </div>

      <!-- WHY US — 3 COLUMN FEATURE GRID (2 IN A ROW PER CONTAINER) -->
      <div class="row g-4 why-features-grid reveal-stagger">
        <div class="col-12 col-lg-4">
          <div class="why-features h-100">
            <div class="why-feature-row">
              <div class="why-feature-icon-col">
                <div class="why-feature-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
              </div>
              <div class="why-feature-body">
                <h4>Avoiding Queue Theory</h4>
                <p>Your team has a dedicated contact for communication, not an ever-changing support inbox. Connect with radiologists when every minute matters.</p>
              </div>
            </div>

            <div class="why-feature-divider"></div>

            <div class="why-feature-row why-feature-row--alt">
              <div class="why-feature-icon-col">
                <div class="why-feature-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
              </div>
              <div class="why-feature-body">
                <h4>We&rsquo;ve Got Your Back</h4>
                <p>We hold ourselves accountable for our promises. Disciplined turnaround times with dependable report delivery.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="why-features h-100">
            <div class="why-feature-row">
              <div class="why-feature-icon-col">
                <div class="why-feature-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
              </div>
              <div class="why-feature-body">
                <h4>Large Radiology Network</h4>
                <p>Your reports will not be delayed because of the unavailability of one radiologist. <span data-stat-val="radiologists">140+</span> subspecialty radiologists on call 24/7/365.</p>
              </div>
            </div>

            <div class="why-feature-divider"></div>

            <div class="why-feature-row why-feature-row--alt">
              <div class="why-feature-icon-col">
                <div class="why-feature-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
              </div>
              <div class="why-feature-body">
                <h4>Lots of Volume, Still Personal</h4>
                <p>We have a responsive and dedicated team, and have reported over a million studies, with more to come while maintaining personal doctor rapport.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="why-features h-100">
            <div class="why-feature-row">
              <div class="why-feature-icon-col">
                <div class="why-feature-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
                </div>
              </div>
              <div class="why-feature-body">
                <h4>Pioneer in Teleradiology</h4>
                <p>Trusted partner for hospitals and imaging centers across India with multi-level quality assurance and cloud PACS workflow.</p>
              </div>
            </div>

            <div class="why-feature-divider"></div>

            <div class="why-feature-row why-feature-row--alt">
              <div class="why-feature-icon-col">
                <div class="why-feature-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                </div>
              </div>
              <div class="why-feature-body">
                <h4>24/7 Direct Customer Support</h4>
                <p>Never experience radio silence. Immediate escalation pathways and doctor-to-doctor consultation whenever critical findings emerge.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-4 pt-3 reveal">
        <div class="d-inline-flex flex-wrap gap-2 justify-content-center btn-swap-group">
          <a href="/our-team" class="btn-custom btn-custom-primary">Meet Our 140+ Radiologists →</a>
          <a href="#how-reporting-works" class="btn-custom btn-custom-ghost">How Reporting Works →</a>
          <a href="#where-we-work" class="btn-custom btn-custom-ghost">Pan India Coverage →</a>
        </div>
      </div>

      <!-- MAP SHOWCASE BANNER -->
      <div class="row mt-5 reveal" id="where-we-work">
        <div class="col-12">
          <div style="background: radial-gradient(circle at 80% 50%, rgba(32, 183, 229, 0.2), transparent 65%), linear-gradient(135deg, #071A3A 0%, #0D3B8E 100%); border: 1px solid rgba(32, 183, 229, 0.35); border-radius: 24px; padding: clamp(28px, 4vw, 48px); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4); backdrop-filter: blur(12px); position: relative; overflow: hidden;">
            
            <!-- NEWS CHANNEL TICKER MARQUEE -->
            <div class="news-ticker-container">
              <div class="news-ticker-wrapper">
                <div class="news-ticker-track">
                  <span class="news-ticker-item">MAHARASHTRA <span class="dot">•</span></span>
                  <span class="news-ticker-item">UTTAR PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">DELHI NCR <span class="dot">•</span></span>
                  <span class="news-ticker-item">KARNATAKA <span class="dot">•</span></span>
                  <span class="news-ticker-item">TAMIL NADU <span class="dot">•</span></span>
                  <span class="news-ticker-item">KERALA <span class="dot">•</span></span>
                  <span class="news-ticker-item">GUJARAT <span class="dot">•</span></span>
                  <span class="news-ticker-item">RAJASTHAN <span class="dot">•</span></span>
                  <span class="news-ticker-item">WEST BENGAL <span class="dot">•</span></span>
                  <span class="news-ticker-item">MADHYA PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">ANDHRA PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">TELANGANA <span class="dot">•</span></span>
                  <span class="news-ticker-item">BIHAR <span class="dot">•</span></span>
                  <span class="news-ticker-item">ODISHA <span class="dot">•</span></span>
                  <span class="news-ticker-item">PUNJAB <span class="dot">•</span></span>
                  <span class="news-ticker-item">HARYANA <span class="dot">•</span></span>
                  <span class="news-ticker-item">ASSAM <span class="dot">•</span></span>
                  <span class="news-ticker-item">CHHATTISGARH <span class="dot">•</span></span>
                  <span class="news-ticker-item">JHARKHAND <span class="dot">•</span></span>

                  <!-- DUPLICATE FOR INFINITE LOOP -->
                  <span class="news-ticker-item">MAHARASHTRA <span class="dot">•</span></span>
                  <span class="news-ticker-item">UTTAR PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">DELHI NCR <span class="dot">•</span></span>
                  <span class="news-ticker-item">KARNATAKA <span class="dot">•</span></span>
                  <span class="news-ticker-item">TAMIL NADU <span class="dot">•</span></span>
                  <span class="news-ticker-item">KERALA <span class="dot">•</span></span>
                  <span class="news-ticker-item">GUJARAT <span class="dot">•</span></span>
                  <span class="news-ticker-item">RAJASTHAN <span class="dot">•</span></span>
                  <span class="news-ticker-item">WEST BENGAL <span class="dot">•</span></span>
                  <span class="news-ticker-item">MADHYA PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">ANDHRA PRADESH <span class="dot">•</span></span>
                  <span class="news-ticker-item">TELANGANA <span class="dot">•</span></span>
                  <span class="news-ticker-item">BIHAR <span class="dot">•</span></span>
                  <span class="news-ticker-item">ODISHA <span class="dot">•</span></span>
                  <span class="news-ticker-item">PUNJAB <span class="dot">•</span></span>
                  <span class="news-ticker-item">HARYANA <span class="dot">•</span></span>
                  <span class="news-ticker-item">ASSAM <span class="dot">•</span></span>
                  <span class="news-ticker-item">CHHATTISGARH <span class="dot">•</span></span>
                  <span class="news-ticker-item">JHARKHAND <span class="dot">•</span></span>
                </div>
              </div>
            </div>

            <div class="row align-items-center g-4 g-lg-5">
              <div class="col-12 col-lg-6">
                <div class="d-flex align-items-center gap-2 mb-2">
                  <span class="eyebrow" style="color:var(--sky-blue); margin: 0;">PAN-INDIA COVERAGE</span>
                </div>

                <h3 style="font-size: clamp(26px, 3vw, 38px); color: #FFFFFF; font-weight: 700; margin-top: 8px; line-height: 1.25;">
                  <span data-stat-val="states">15+</span> States Covered in India
                </h3>

                <p style="color: #C3D5EB; font-size: 15.5px; margin: 16px 0 24px 0; line-height: 1.65; text-align: left !important;">
                  From major city trauma centers to regional diagnostic clinics, our network of <span data-stat-val="radiologists" style="color: #FFFFFF; font-weight: 600;">140+</span> board-certified radiologists delivers 24x7 teleradiology reporting across India.
                </p>

                <!-- MAP BANNER METRIC MINI BADGES -->
                <div class="row g-2 mb-4">
                  <div class="col-4">
                    <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(32, 183, 229, 0.2); border-radius: 12px; padding: 12px 10px; text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 20px; font-weight: 700; color: #FFFFFF; line-height: 1;"><span data-stat-val="centres">350+</span></div>
                      <div style="font-size: 11px; color: #8DA5C4; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Centres</div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(32, 183, 229, 0.2); border-radius: 12px; padding: 12px 10px; text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 20px; font-weight: 700; color: #FFFFFF; line-height: 1;"><span data-stat-val="radiologists">140+</span></div>
                      <div style="font-size: 11px; color: #8DA5C4; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Doctors</div>
                    </div>
                  </div>
                  <div class="col-4">
                    <div style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(32, 183, 229, 0.2); border-radius: 12px; padding: 12px 10px; text-align: center;">
                      <div style="font-family: var(--font-mono); font-size: 20px; font-weight: 700; color: #20B7E5; line-height: 1;">15-30m</div>
                      <div style="font-size: 11px; color: #8DA5C4; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600;">Emergency TAT</div>
                    </div>
                  </div>
                </div>

                <!-- CTA BUTTON ROW -->
                <div class="d-flex flex-wrap align-items-center gap-2 pt-1 btn-swap-group btn-swap-group-dark">
                  <a href="#contact" class="btn-custom btn-custom-primary" style="padding: 12px 22px; font-size: 14px;">Partner With Us &rarr;</a>
                  <a href="/our-team" class="btn-custom btn-custom-ghost" style="padding: 12px 18px; font-size: 14px;">Our Team &rarr;</a>
                  <a href="#how-reporting-works" class="btn-custom btn-custom-ghost" style="padding: 12px 18px; font-size: 14px;">How It Works &rarr;</a>
                </div>
              </div>

              <!-- RIGHT MAP GRAPHIC -->
              <div class="col-12 col-lg-6 text-center">
                <div style="position: relative; display: inline-block; width: 100%;">
                  <img src="${indianMapUrl}" alt="Pan India Teleradiology Reporting Map" style="max-height: 440px; width: 100%; object-fit: contain; border-radius: 16px; filter: drop-shadow(0 0 35px rgba(32, 183, 229, 0.45)); transition: transform 0.3s ease;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section class="contact" id="contact">
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-12 col-lg-6 contact-info reveal">
          <span class="eyebrow">GET IN TOUCH</span>
          <h2>Partner with Trust &amp; Hope Rad Today</h2>
          <p>Ready to eliminate radiology reporting delays and empower your clinical team with responsive teleradiology? Reach out to schedule a demo or set up your hospital workflow.</p>
          
          <div class="office">
            <h4>REGISTERED OFFICE &amp; CONTACT</h4>
            <p>Trust and Hope Rad Pvt. Ltd.<br>#1035, 4th 'M' Block, Dr. Rajkumar Road, Rajajinagar, Bangalore – 560010</p>
            <p style="margin-bottom:12px;">
              <strong>Call / Helpline:</strong> <a href="tel:+918123388860" style="color:var(--teal); font-weight:600; text-decoration:none;">+91 81233 88860</a><br>
              <strong>WhatsApp:</strong> <a href="https://wa.me/918123388860" target="_blank" rel="noopener noreferrer" style="color:#25D366; font-weight:600; text-decoration:none;">+91 81233 88860 (Chat Now &rarr;)</a><br>
              <strong>Email:</strong> <a href="mailto:admin@trustandhoperad.com" style="color:var(--teal); font-weight:600; text-decoration:none;">admin@trustandhoperad.com</a>
            </p>
            <div class="contact-social-buttons d-flex flex-wrap gap-2 mt-3 btn-swap-group">
              <a href="https://wa.me/918123388860" target="_blank" rel="noopener noreferrer" class="btn-custom btn-swap-default" style="background:#25D366; color:#fff; padding:7px 16px; font-size:13px; border-radius:30px; text-decoration:none;">WhatsApp</a>
              <a href="https://in.linkedin.com/company/trust-and-hope-rad?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer" class="btn-custom btn-custom-ghost" style="padding:7px 16px; font-size:13px; border-radius:30px; text-decoration:none;">LinkedIn</a>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6 reveal">
          <form id="contact-form" class="contact-form">
            <h3 style="font-size:19px; margin-bottom:14px; color:var(--deep-navy);">Request a Partnership Callback</h3>
            <div class="row g-2">
              <div class="col-12 col-md-6 field">
                <label for="name">Your Name</label>
                <input type="text" id="name" required placeholder="Dr. / Mr. / Ms. Name" autocomplete="name">
              </div>
              <div class="col-12 col-md-6 field">
                <label for="hospital">Hospital / Center Name</label>
                <input type="text" id="hospital" required placeholder="Hospital / Diagnostic Name" autocomplete="organization">
              </div>
              <div class="col-12 col-md-6 field">
                <label for="email">Work Email</label>
                <input type="email" id="email" required placeholder="name@hospital.com" autocomplete="email">
              </div>
              <div class="col-12 col-md-6 field">
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" required placeholder="+91 98765 43210" autocomplete="tel">
              </div>
              <div class="col-12 field">
                <label for="modality">Primary Modality Needs</label>
                <select id="modality">
                  <option value="Full-Spectrum">Full-Spectrum (CT, MRI, X-Ray, PET, USG)</option>
                  <option value="CT-MRI">CT &amp; MRI Reporting</option>
                  <option value="Nighthawk">Nighthawk &amp; Emergency Stat Reads</option>
                  <option value="Subspecialty">Subspecialty Reads</option>
                  <option value="Second-Opinion">Second Opinions &amp; QA</option>
                </select>
              </div>
              <div class="col-12 field">
                <label for="message">Message / Daily Scan Volume</label>
                <textarea id="message" rows="2" placeholder="Tell us about your daily scan volume and reporting requirements..."></textarea>
              </div>
            </div>
            <button type="submit" class="submit-btn mt-2">Submit Request →</button>
            <div id="form-msg">Thank you! Your request has been submitted. Our team will call you back shortly.</div>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <div class="row g-4 g-lg-5">
      <div class="col-12 col-lg-4 pe-lg-4">
        <a href="#hero" class="brand">
          <img src="${logoUrl}" alt="Trust and Hope Rad logo">
          <span>TAH RAD</span>
        </a>
        <p data-stat-summary>Trust and Hope Rad Pvt. Ltd. | 24×7 teleradiology services serving 350+ centres, 1000+ new studies uploaded daily to PACS, 140+ radiologists across specialisations, 15+ states covered in India.</p>
      </div>
      <div class="col-6 col-md-4 col-lg-3">
        <h5>Contact Us</h5>
        <ul style="font-size: 13.5px;">
          <li><strong>Call:</strong> <a href="tel:+918123388860">+91 81233 88860</a></li>
          <li><strong>WhatsApp:</strong> <a href="https://wa.me/918123388860" target="_blank" rel="noopener noreferrer" style="color:#25D366;">+91 81233 88860</a></li>
          <li><strong>Mail:</strong> <a href="mailto:admin@trustandhoperad.com" style="word-break:break-all;">admin@trustandhoperad.com</a></li>
        </ul>
        <div class="topbar-socials mt-3">
          <a href="https://in.linkedin.com/company/trust-and-hope-rad?trk=public_post_feed-actor-name" target="_blank" rel="noopener noreferrer" class="topbar-social-link li-hover" title="LinkedIn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-1.25.7-1.92 1.63-1.92.93 0 1.36.67 1.36 1.92v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
          </a>
          <a href="https://wa.me/918123388860" target="_blank" rel="noopener noreferrer" class="topbar-social-link wa-hover" title="WhatsApp" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" style="width:14px;height:14px;"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.987l-1.414 5.163 5.286-1.386a9.96 9.96 0 004.787 1.22h.005c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.039-5.176-2.924-7.062A9.923 9.923 0 0012.012 2zm5.82 14.161c-.247.692-1.22 1.326-1.996 1.492-.533.113-1.229.206-3.567-.763-2.989-1.237-4.908-4.275-5.059-4.474-.148-.198-1.218-1.621-1.218-3.092 0-1.47.767-2.196 1.041-2.495.274-.298.599-.373.799-.373.199 0 .399.002.573.01.185.008.435-.07.68.518.248.598.847 2.068.921 2.217.075.149.124.323.025.522-.099.198-.149.322-.298.497-.149.174-.313.389-.447.523-.148.149-.303.311-.13.609.174.298.774 1.277 1.662 2.067 1.14 1.015 2.102 1.33 2.399 1.478.298.149.472.124.646-.075.174-.199.746-.87.945-1.168.199-.298.398-.248.671-.149.274.099 1.742.82 2.04 1.043.298.224.497.348.572.473.075.124.075.72-.172 1.412z"/></svg>
          </a>
        </div>
      </div>
      <div class="col-6 col-md-4 col-lg-2">
        <h5>Navigate</h5>
        <ul>
          <li><a href="#who-we-are">About Us</a></li>
          <li><a href="/our-team">Our Team</a></li>
          <li><a href="#where-we-work">Pan India Coverage</a></li>
          <li><a href="#how-reporting-works">How It Works</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="col-6 col-md-3 col-lg-3">
        <h5>Modalities</h5>
        <ul>
          <li><a href="#services">CT Reporting</a></li>
          <li><a href="#services">MRI Reporting</a></li>
          <li><a href="#services">X-Ray &amp; USG Reads</a></li>
          <li><a href="#services">PET Oncology Scans</a></li>
          <li><a href="#services">Nighthawk &amp; Stat Reads</a></li>
        </ul>
      </div>
    </div>

    <div class="foot-bottom">
      <span>© ${new Date().getFullYear()} Trust and Hope Rad Pvt. Ltd. All rights reserved.</span>
      <span>Read Right. Read Fast. 24/7.</span>
    </div>
  </div>
</footer>

<button id="back-to-top" aria-label="Back to Top">↑</button>

<a href="https://wa.me/918123388860" target="_blank" rel="noopener noreferrer" class="floating-whatsapp" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.474 1.33 4.987l-1.414 5.163 5.286-1.386a9.96 9.96 0 004.787 1.22h.005c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.039-5.176-2.924-7.062A9.923 9.923 0 0012.012 2zm5.82 14.161c-.247.692-1.22 1.326-1.996 1.492-.533.113-1.229.206-3.567-.763-2.989-1.237-4.908-4.275-5.059-4.474-.148-.198-1.218-1.621-1.218-3.092 0-1.47.767-2.196 1.041-2.495.274-.298.599-.373.799-.373.199 0 .399.002.573.01.185.008.435-.07.68.518.248.598.847 2.068.921 2.217.075.149.124.323.025.522-.099.198-.149.322-.298.497-.149.174-.313.389-.447.523-.148.149-.303.311-.13.609.174.298.774 1.277 1.662 2.067 1.14 1.015 2.102 1.33 2.399 1.478.298.149.472.124.646-.075.174-.199.746-.87.945-1.168.199-.298.398-.248.671-.149.274.099 1.742.82 2.04 1.043.298.224.497.348.572.473.075.124.075.72-.172 1.412z"/></svg>
  <span>Chat on WhatsApp</span>
</a>
`;
