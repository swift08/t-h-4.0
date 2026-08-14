import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { tahMarkup } from "@/lib/tah-markup";
import { ORGANIZATION_SCHEMA, FAQ_SCHEMA, getBreadcrumbSchema, SITE_URL } from "@/lib/seo-schemas";
import { updateStatsInDOM, STATS_UPDATED_EVENT } from "@/lib/stats-store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trust and Hope Rad Pvt. Ltd. | 24x7 Teleradiology Services India" },
      {
        name: "description",
        content:
          "India's premier 24x7 teleradiology reporting service for hospitals and diagnostic centres. High-accuracy CT, MRI, X-Ray & subspecialty reporting with 15-30 min emergency TAT.",
      },
      {
        name: "keywords",
        content:
          "teleradiology India, 24x7 teleradiology reporting, CT scan reporting, MRI reporting, X-Ray reporting, emergency radiologist, PACS teleradiology, subspecialty radiology, TAH RAD, Trust and Hope Rad, remote radiology",
      },
      { property: "og:title", content: "Trust and Hope Rad Pvt. Ltd. | 24x7 Teleradiology Services India" },
      {
        property: "og:description",
        content:
          "Fast, accurate, and secure 24x7 radiology reporting for hospitals across India. 140+ fellowship-trained radiologists and cloud PACS integration.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Trust and Hope Rad Pvt. Ltd." },
      { property: "og:image", content: `${SITE_URL}/Trust%20&%20Hope_Logo_Round_Transparent.webp` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Trust and Hope Rad Pvt. Ltd. | 24x7 Teleradiology Services" },
      { name: "twitter:description", content: "24x7 remote radiology reporting for CT, MRI, X-Ray & emergency reads across India." },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
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
        children: JSON.stringify(ORGANIZATION_SCHEMA),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_SCHEMA),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(getBreadcrumbSchema([{ name: "Home", item: "/" }])),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // Sync stats from localStorage to DOM on mount and live updates
    updateStatsInDOM();
    const handleStatsUpdated = () => {
      updateStatsInDOM();
    };
    window.addEventListener(STATS_UPDATED_EVENT, handleStatsUpdated);
    window.addEventListener("storage", handleStatsUpdated);
    cleanups.push(() => {
      window.removeEventListener(STATS_UPDATED_EVENT, handleStatsUpdated);
      window.removeEventListener("storage", handleStatsUpdated);
    });

    const form = document.getElementById("contact-form");
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const msg = document.getElementById("form-msg");
      if (msg) msg.style.display = "block";
    };
    form?.addEventListener("submit", onSubmit);
    cleanups.push(() => form?.removeEventListener("submit", onSubmit));

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

    // Dynamic Home button in nav: appears after scrolling past the hero section
    const heroSection = document.getElementById("hero");
    const navHomeBtn = document.getElementById("nav-home-btn");
    const mobileHomeBtn = document.getElementById("mobile-home-btn");

    const checkHeroScroll = () => {
      if (!heroSection || !navHomeBtn) return;
      const heroRect = heroSection.getBoundingClientRect();
      const scrolledPastHero = heroRect.bottom <= 80;
      if (scrolledPastHero) {
        navHomeBtn.classList.add("visible");
        if (mobileHomeBtn) mobileHomeBtn.classList.add("visible");
      } else {
        navHomeBtn.classList.remove("visible");
        if (mobileHomeBtn) mobileHomeBtn.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", checkHeroScroll, { passive: true });
    checkHeroScroll();
    cleanups.push(() => window.removeEventListener("scroll", checkHeroScroll));

    const scrollToHeroTop = (e: Event) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (navHomeBtn) {
      navHomeBtn.addEventListener("click", scrollToHeroTop);
      cleanups.push(() => navHomeBtn.removeEventListener("click", scrollToHeroTop));
    }
    if (mobileHomeBtn) {
      mobileHomeBtn.addEventListener("click", scrollToHeroTop);
      cleanups.push(() => mobileHomeBtn.removeEventListener("click", scrollToHeroTop));
    }

    const revealEls = document.querySelectorAll(".reveal, .reveal-stagger");
    const counters = document.querySelectorAll<HTMLElement>(".counter");

    const runCounter = (el: HTMLElement) => {
      const target = parseInt(el.dataset.target ?? "0", 10);
      const duration = 1400;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(eased * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );
      revealEls.forEach((el) => revealObserver.observe(el));

      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runCounter(entry.target as HTMLElement);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      counters.forEach((el) => counterObserver.observe(el));
      cleanups.push(() => {
        revealObserver.disconnect();
        counterObserver.disconnect();
      });
    } else {
      revealEls.forEach((el) => el.classList.add("in-view"));
      counters.forEach((el) => runCounter(el));
    }

    // Services Split-Panel Explorer Logic
    const svcPills = document.querySelectorAll<HTMLButtonElement>(".svc-pill");
    const svcPanels = document.querySelectorAll<HTMLElement>(".svc-panel");

    svcPills.forEach((pill) => {
      const onPillClick = () => {
        const target = pill.dataset.svc;
        // Update active pill
        svcPills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        // Show matching panel
        svcPanels.forEach((panel) => {
          if (panel.id === `svc-${target}`) {
            panel.classList.add("active");
          } else {
            panel.classList.remove("active");
          }
        });
      };
      pill.addEventListener("click", onPillClick);
      cleanups.push(() => pill.removeEventListener("click", onPillClick));
    });

    // Hero PACS Video Playlist Logic (Sequential Playback)
    const videos = [
      document.getElementById("hero-bg-video") as HTMLVideoElement | null,
      document.getElementById("hero-scan-video") as HTMLVideoElement | null,
    ].filter(Boolean) as HTMLVideoElement[];

    videos.forEach((video) => {
      video.play().catch(() => {});

      const video1 = video.getAttribute("src") || "";
      const video2 = video.dataset.nextSrc || "";
      const playlist = [video1, video2].filter(Boolean);

      if (playlist.length <= 1) return;

      let currentIdx = 0;

      const playNext = () => {
        currentIdx = (currentIdx + 1) % playlist.length;
        video.src = playlist[currentIdx];
        video.load();
        video.play().catch(() => {});
      };

      video.addEventListener("ended", playNext);
      video.addEventListener("error", playNext);
      cleanups.push(() => {
        video.removeEventListener("ended", playNext);
        video.removeEventListener("error", playNext);
      });
    });

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

  return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: tahMarkup }} />;
}
