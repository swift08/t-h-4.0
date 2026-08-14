import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import { getStats, saveStats, resetStats, DEFAULT_STATS, StatsData } from "@/lib/stats-store";
import logoUrl from "../assets/Trust & Hope_Logo_Round_Transparent.webp";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Stats CMS Admin Login | Trust and Hope Rad Pvt. Ltd." },
      { name: "robots", content: "noindex, nofollow" },
      { name: "googlebot", content: "noindex, nofollow" },
      {
        name: "description",
        content: "Internal CMS for managing website key performance statistics.",
      },
    ],
    links: [
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
  }),
  component: StatsCMS,
});

function StatsCMS() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loginUsername, setLoginUsername] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>("");

  const [formData, setFormData] = useState<StatsData>(DEFAULT_STATS);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setFormData(getStats());
    const storedAuth = sessionStorage.getItem("tah_stats_authenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }

    // Override tah.css default body padding-top (80px) and paper background
    document.body.style.paddingTop = "0px";
    document.body.style.backgroundColor = "#081424";
    return () => {
      document.body.style.paddingTop = "";
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const VALID_USER = "TAH@trustandhoperad.com";
    const VALID_PASS = "TAH@2026";

    if (
      loginUsername.trim().toLowerCase() === VALID_USER.toLowerCase() &&
      loginPassword === VALID_PASS
    ) {
      sessionStorage.setItem("tah_stats_authenticated", "true");
      setIsAuthenticated(true);
      setLoginError("");
      toast.success("Welcome, Admin!", {
        description: "Authenticated into TAH RAD Stats CMS.",
      });
    } else {
      setLoginError("Invalid username or password. Please try again.");
      toast.error("Authentication Failed", {
        description: "Incorrect credentials entered.",
      });
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("tah_stats_authenticated");
    setIsAuthenticated(false);
    setLoginUsername("");
    setLoginPassword("");
    setLoginError("");
    toast.info("Logged out of Stats CMS.");
  };

  const handleChange = (field: keyof StatsData, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: typeof prev[field] === "number" ? Number(value) || 0 : value,
    }));
    setIsSaved(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveStats(formData);
    setIsSaved(true);
    toast.success("Website statistics updated successfully!", {
      description: "Changes are now live across all pages.",
    });
  };

  const handleReset = () => {
    const defaultData = resetStats();
    setFormData(defaultData);
    setIsSaved(true);
    toast.info("Statistics reset to default values.");
  };

  // -------------------------------------------------------------
  // LOGIN SCREEN (UNAUTHENTICATED) — FULLY RESPONSIVE
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "radial-gradient(1000px 500px at 50% 20%, rgba(43, 168, 183, 0.15), transparent 70%), #081424",
          color: "#E6EDF5",
          fontFamily: "'Inter', sans-serif",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <style>{`body { padding-top: 0 !important; background-color: #081424 !important; }`}</style>
        <Toaster position="top-right" richColors theme="dark" />

        <div
          style={{
            width: "100%",
            maxWidth: "440px",
            background: "#0E2440",
            border: "1px solid rgba(43, 168, 183, 0.3)",
            borderRadius: "20px",
            padding: "clamp(24px, 5vw, 40px) clamp(18px, 4vw, 32px)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* BRAND LOGO HEADER */}
          <div className="text-center mb-4">
            <img
              src={logoUrl}
              alt="Trust & Hope Rad Logo"
              style={{ height: "clamp(48px, 8vw, 64px)", width: "auto", margin: "0 auto 16px auto" }}
            />
            <h1 style={{ fontSize: "clamp(20px, 4.5vw, 24px)", fontWeight: 700, color: "#FFFFFF", marginBottom: "6px" }}>
              Stats CMS Admin Login
            </h1>
            <p style={{ fontSize: "13.5px", color: "#8DA5C4", margin: 0 }}>
              Trust and Hope Rad Pvt. Ltd.
            </p>
          </div>

          {/* LOGIN FORM */}
          <form onSubmit={handleLoginSubmit}>
            {loginError && (
              <div
                style={{
                  background: "rgba(239, 68, 68, 0.15)",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  color: "#FCA5A5",
                  fontSize: "13px",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  textAlign: "center",
                  wordBreak: "break-word",
                }}
              >
                ⚠️ {loginError}
              </div>
            )}

            <div className="mb-3">
              <label style={{ fontSize: "13px", fontWeight: 600, color: "#20B7E5", marginBottom: "6px", display: "block" }}>
                Username / Email
              </label>
              <input
                type="email"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                placeholder="TAH@trustandhoperad.com"
                autoComplete="username"
                className="form-control"
                style={{
                  background: "#081424",
                  border: "1px solid rgba(32, 183, 229, 0.3)",
                  color: "#FFFFFF",
                  padding: "12px 14px",
                  borderRadius: "8px",
                  fontSize: "14.5px",
                }}
                required
              />
            </div>

            <div className="mb-4">
              <label style={{ fontSize: "13px", fontWeight: 600, color: "#20B7E5", marginBottom: "6px", display: "block" }}>
                Password
              </label>
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  className="form-control"
                  style={{
                    background: "#081424",
                    border: "1px solid rgba(32, 183, 229, 0.3)",
                    color: "#FFFFFF",
                    padding: "12px 55px 12px 14px",
                    borderRadius: "8px",
                    fontSize: "14.5px",
                  }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "#8DA5C4",
                    fontSize: "12.5px",
                    fontWeight: 600,
                    cursor: "pointer",
                    padding: "4px 8px",
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn w-100 mb-3"
              style={{
                background: "linear-gradient(90deg, #00BCEB 0%, #14B8DD 35%, #22B69E 65%, #2BB560 85%, #32B43C 100%)",
                color: "#FFFFFF",
                fontWeight: 600,
                padding: "12px",
                borderRadius: "10px",
                fontSize: "15px",
                border: "none",
                boxShadow: "0 4px 15px rgba(0, 188, 235, 0.35)",
              }}
            >
              Sign In to CMS →
            </button>

            <div className="text-center">
              <Link
                to="/"
                style={{
                  fontSize: "13px",
                  color: "#8DA5C4",
                  textDecoration: "none",
                }}
              >
                ← Back to Main Website
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // FULL CMS DASHBOARD (AUTHENTICATED) — FULLY RESPONSIVE
  // -------------------------------------------------------------
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#081424",
        color: "#E6EDF5",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`body { padding-top: 0 !important; background-color: #081424 !important; }`}</style>
      <Toaster position="top-right" richColors theme="dark" />

      {/* ADMIN HEADER — RESPONSIVE WRAP & GAP */}
      <header
        style={{
          background: "#0B1D33",
          borderBottom: "1px solid rgba(43, 168, 183, 0.2)",
          padding: "12px 0",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 gap-sm-3">
            {/* BRAND LOGO & CMS BADGE */}
            <div className="d-flex align-items-center flex-wrap gap-2 gap-sm-3">
              <Link to="/" className="d-flex align-items-center text-decoration-none">
                <img
                  src={logoUrl}
                  alt="TAH RAD Logo"
                  style={{ height: "36px", width: "auto", marginRight: "10px" }}
                />
                <span
                  style={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "18px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  TAH RAD
                </span>
              </Link>
              <span
                style={{
                  background: "rgba(32, 183, 229, 0.15)",
                  color: "#20B7E5",
                  border: "1px solid rgba(32, 183, 229, 0.3)",
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "3px 9px",
                  borderRadius: "20px",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Stats CMS
              </span>
            </div>

            {/* ACTION BUTTONS & STATUS */}
            <div className="d-flex align-items-center flex-wrap gap-2 gap-sm-3">
              <span
                className="d-none d-md-inline-flex"
                style={{
                  fontSize: "12.5px",
                  color: "#8DA5C4",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#32B43C",
                    display: "inline-block",
                    boxShadow: "0 0 8px #32B43C",
                  }}
                />
                Admin Active
              </span>
              <Link
                to="/"
                className="btn btn-sm"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  color: "#E6EDF5",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  fontWeight: 500,
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontSize: "12.5px",
                }}
              >
                ← View Website
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="btn btn-sm"
                style={{
                  background: "rgba(239, 68, 68, 0.15)",
                  color: "#FCA5A5",
                  border: "1px solid rgba(239, 68, 68, 0.3)",
                  fontWeight: 500,
                  padding: "6px 12px",
                  borderRadius: "8px",
                  fontSize: "12.5px",
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* CMS MAIN CONTAINER */}
      <main style={{ padding: "clamp(24px, 4vw, 48px) 0 clamp(40px, 6vw, 80px) 0" }}>
        <div className="container">
          {/* TITLE BAR */}
          <div className="mb-4 mb-md-5 text-center text-md-start">
            <span
              style={{
                color: "#20B7E5",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Content Management System
            </span>
            <h1
              style={{
                fontSize: "clamp(24px, 4vw, 40px)",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "10px",
              }}
            >
              Manage Website Statistics
            </h1>
            <p style={{ color: "#8DA5C4", fontSize: "clamp(14px, 2vw, 16px)", maxWidth: "680px", margin: "0 auto 0 0" }}>
              Update key metric numbers here. Any saved changes will automatically reflect across all pages, hero banners, impact counters, and site footers.
            </p>
          </div>

          <div className="row g-4 g-xl-5">
            {/* LEFT COLUMN: EDIT FORM */}
            <div className="col-12 col-lg-6">
              <div
                style={{
                  background: "#071A3A",
                  border: "1px solid rgba(32, 183, 229, 0.25)",
                  borderRadius: "16px",
                  padding: "clamp(20px, 4vw, 32px)",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
                }}
              >
                <form onSubmit={handleSave}>
                  <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                    <h2 style={{ fontSize: "clamp(17px, 3vw, 20px)", fontWeight: 600, color: "#FFFFFF", margin: 0 }}>
                      Stats Data Inputs
                    </h2>
                    {isSaved && (
                      <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-25 px-2 py-1" style={{ fontSize: "11px" }}>
                        ✓ Saved
                      </span>
                    )}
                  </div>

                  {/* STAT 1: CENTRES SERVED */}
                  <div className="mb-4">
                    <label style={{ fontSize: "13.5px", fontWeight: 600, color: "#20B7E5", marginBottom: "6px", display: "block" }}>
                      1. Centres Served
                    </label>
                    <div className="row g-2">
                      <div className="col-7 col-sm-8">
                        <input
                          type="number"
                          value={formData.centres}
                          onChange={(e) => handleChange("centres", e.target.value)}
                          className="form-control"
                          style={{
                            background: "#081424",
                            border: "1px solid rgba(32, 183, 229, 0.3)",
                            color: "#FFFFFF",
                            padding: "10px 12px",
                            borderRadius: "8px",
                            fontSize: "15px",
                            fontWeight: 600,
                          }}
                          required
                        />
                      </div>
                      <div className="col-5 col-sm-4">
                        <input
                          type="text"
                          value={formData.centresSuffix}
                          onChange={(e) => handleChange("centresSuffix", e.target.value)}
                          placeholder="Suffix (+)"
                          className="form-control"
                          style={{
                            background: "#081424",
                            border: "1px solid rgba(32, 183, 229, 0.3)",
                            color: "#20B7E5",
                            padding: "10px 8px",
                            borderRadius: "8px",
                            fontSize: "15px",
                            fontWeight: 700,
                            textAlign: "center",
                          }}
                        />
                      </div>
                    </div>
                    <small style={{ color: "#7B96B5", fontSize: "12px", marginTop: "4px", display: "block" }}>
                      Appears on Hero counter & why us ribbons (Default: 350+)
                    </small>
                  </div>

                  {/* STAT 2: NEW STUDIES DAILY */}
                  <div className="mb-4">
                    <label style={{ fontSize: "13.5px", fontWeight: 600, color: "#20B7E5", marginBottom: "6px", display: "block" }}>
                      2. New Studies Uploaded Daily to PACS
                    </label>
                    <div className="row g-2">
                      <div className="col-7 col-sm-8">
                        <input
                          type="number"
                          value={formData.studies}
                          onChange={(e) => handleChange("studies", e.target.value)}
                          className="form-control"
                          style={{
                            background: "#081424",
                            border: "1px solid rgba(32, 183, 229, 0.3)",
                            color: "#FFFFFF",
                            padding: "10px 12px",
                            borderRadius: "8px",
                            fontSize: "15px",
                            fontWeight: 600,
                          }}
                          required
                        />
                      </div>
                      <div className="col-5 col-sm-4">
                        <input
                          type="text"
                          value={formData.studiesSuffix}
                          onChange={(e) => handleChange("studiesSuffix", e.target.value)}
                          placeholder="Suffix (+)"
                          className="form-control"
                          style={{
                            background: "#081424",
                            border: "1px solid rgba(32, 183, 229, 0.3)",
                            color: "#20B7E5",
                            padding: "10px 8px",
                            borderRadius: "8px",
                            fontSize: "15px",
                            fontWeight: 700,
                            textAlign: "center",
                          }}
                        />
                      </div>
                    </div>
                    <small style={{ color: "#7B96B5", fontSize: "12px", marginTop: "4px", display: "block" }}>
                      Appears on main counter grid & team page stats (Default: 1000+)
                    </small>
                  </div>

                  {/* STAT 3: RADIOLOGISTS */}
                  <div className="mb-4">
                    <label style={{ fontSize: "13.5px", fontWeight: 600, color: "#20B7E5", marginBottom: "6px", display: "block" }}>
                      3. Radiologists Across Specialisations
                    </label>
                    <div className="row g-2">
                      <div className="col-7 col-sm-8">
                        <input
                          type="number"
                          value={formData.radiologists}
                          onChange={(e) => handleChange("radiologists", e.target.value)}
                          className="form-control"
                          style={{
                            background: "#081424",
                            border: "1px solid rgba(32, 183, 229, 0.3)",
                            color: "#FFFFFF",
                            padding: "10px 12px",
                            borderRadius: "8px",
                            fontSize: "15px",
                            fontWeight: 600,
                          }}
                          required
                        />
                      </div>
                      <div className="col-5 col-sm-4">
                        <input
                          type="text"
                          value={formData.radiologistsSuffix}
                          onChange={(e) => handleChange("radiologistsSuffix", e.target.value)}
                          placeholder="Suffix (+)"
                          className="form-control"
                          style={{
                            background: "#081424",
                            border: "1px solid rgba(32, 183, 229, 0.3)",
                            color: "#20B7E5",
                            padding: "10px 8px",
                            borderRadius: "8px",
                            fontSize: "15px",
                            fontWeight: 700,
                            textAlign: "center",
                          }}
                        />
                      </div>
                    </div>
                    <small style={{ color: "#7B96B5", fontSize: "12px", marginTop: "4px", display: "block" }}>
                      Appears on team page hero, quality tags & workflow sections (Default: 140+)
                    </small>
                  </div>

                  {/* STAT 4: STATES COVERED */}
                  <div className="mb-4">
                    <label style={{ fontSize: "13.5px", fontWeight: 600, color: "#20B7E5", marginBottom: "6px", display: "block" }}>
                      4. States Covered in India
                    </label>
                    <div className="row g-2">
                      <div className="col-7 col-sm-8">
                        <input
                          type="number"
                          value={formData.states}
                          onChange={(e) => handleChange("states", e.target.value)}
                          className="form-control"
                          style={{
                            background: "#081424",
                            border: "1px solid rgba(32, 183, 229, 0.3)",
                            color: "#FFFFFF",
                            padding: "10px 12px",
                            borderRadius: "8px",
                            fontSize: "15px",
                            fontWeight: 600,
                          }}
                          required
                        />
                      </div>
                      <div className="col-5 col-sm-4">
                        <input
                          type="text"
                          value={formData.statesSuffix}
                          onChange={(e) => handleChange("statesSuffix", e.target.value)}
                          placeholder="Suffix (+)"
                          className="form-control"
                          style={{
                            background: "#081424",
                            border: "1px solid rgba(32, 183, 229, 0.3)",
                            color: "#20B7E5",
                            padding: "10px 8px",
                            borderRadius: "8px",
                            fontSize: "15px",
                            fontWeight: 700,
                            textAlign: "center",
                          }}
                        />
                      </div>
                    </div>
                    <small style={{ color: "#7B96B5", fontSize: "12px", marginTop: "4px", display: "block" }}>
                      Appears on Pan-India coverage sections & footers (Default: 15+)
                    </small>
                  </div>

                  {/* BUTTON ACTION ROW */}
                  <div className="d-flex flex-wrap gap-2 gap-sm-3 pt-2">
                    <button
                      type="submit"
                      className="btn flex-fill"
                      style={{
                        background: "linear-gradient(90deg, #00BCEB 0%, #14B8DD 35%, #22B69E 65%, #2BB560 85%, #32B43C 100%)",
                        color: "#FFFFFF",
                        fontWeight: 600,
                        padding: "11px 18px",
                        borderRadius: "10px",
                        border: "none",
                        fontSize: "14.5px",
                        boxShadow: "0 4px 15px rgba(0, 188, 235, 0.35)",
                      }}
                    >
                      Save Changes Live
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="btn"
                      style={{
                        background: "rgba(255, 255, 255, 0.06)",
                        color: "#A2B6CF",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        fontWeight: 500,
                        padding: "11px 16px",
                        borderRadius: "10px",
                        fontSize: "14px",
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* RIGHT COLUMN: LIVE PREVIEW & FOOTER SUMMARY PREVIEW */}
            <div className="col-12 col-lg-6">
              {/* LIVE PREVIEW CONTAINER */}
              <div
                style={{
                  background: "#071A3A",
                  border: "1px solid rgba(32, 183, 229, 0.25)",
                  borderRadius: "16px",
                  padding: "clamp(20px, 4vw, 32px)",
                  marginBottom: "24px",
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.35)",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h2 style={{ fontSize: "clamp(16px, 3vw, 18px)", fontWeight: 600, color: "#FFFFFF", margin: 0 }}>
                    Live Website Counter Preview
                  </h2>
                  <span
                    style={{
                      background: "rgba(50, 180, 60, 0.15)",
                      color: "#32B43C",
                      fontSize: "11px",
                      fontWeight: 600,
                      padding: "3px 8px",
                      borderRadius: "12px",
                      textTransform: "uppercase",
                    }}
                  >
                    Real-time
                  </span>
                </div>

                {/* 2x2 STAT PREVIEW GRID — RESPONSIVE COLS & SIZES */}
                <div className="row g-2 g-sm-3">
                  <div className="col-6 col-sm-6">
                    <div
                      style={{
                        background: "#081424",
                        border: "1px solid rgba(32, 183, 229, 0.2)",
                        borderRadius: "12px",
                        padding: "clamp(14px, 3vw, 20px)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "clamp(22px, 5vw, 32px)",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1,
                          marginBottom: "6px",
                          fontFamily: "'IBM Plex Mono', monospace",
                          wordBreak: "break-word",
                        }}
                      >
                        {formData.centres}
                        <span style={{ color: "#20B7E5" }}>{formData.centresSuffix}</span>
                      </div>
                      <div style={{ fontSize: "clamp(10.5px, 2.5vw, 11.5px)", color: "#8DA5C4", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                        Centres Served
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-sm-6">
                    <div
                      style={{
                        background: "#081424",
                        border: "1px solid rgba(32, 183, 229, 0.2)",
                        borderRadius: "12px",
                        padding: "clamp(14px, 3vw, 20px)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "clamp(22px, 5vw, 32px)",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1,
                          marginBottom: "6px",
                          fontFamily: "'IBM Plex Mono', monospace",
                          wordBreak: "break-word",
                        }}
                      >
                        {formData.studies}
                        <span style={{ color: "#20B7E5" }}>{formData.studiesSuffix}</span>
                      </div>
                      <div style={{ fontSize: "clamp(10.5px, 2.5vw, 11.5px)", color: "#8DA5C4", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                        New Studies Daily
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-sm-6">
                    <div
                      style={{
                        background: "#081424",
                        border: "1px solid rgba(32, 183, 229, 0.2)",
                        borderRadius: "12px",
                        padding: "clamp(14px, 3vw, 20px)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "clamp(22px, 5vw, 32px)",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1,
                          marginBottom: "6px",
                          fontFamily: "'IBM Plex Mono', monospace",
                          wordBreak: "break-word",
                        }}
                      >
                        {formData.radiologists}
                        <span style={{ color: "#20B7E5" }}>{formData.radiologistsSuffix}</span>
                      </div>
                      <div style={{ fontSize: "clamp(10.5px, 2.5vw, 11.5px)", color: "#8DA5C4", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                        Radiologists Panel
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-sm-6">
                    <div
                      style={{
                        background: "#081424",
                        border: "1px solid rgba(32, 183, 229, 0.2)",
                        borderRadius: "12px",
                        padding: "clamp(14px, 3vw, 20px)",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "clamp(22px, 5vw, 32px)",
                          fontWeight: 700,
                          color: "#FFFFFF",
                          lineHeight: 1,
                          marginBottom: "6px",
                          fontFamily: "'IBM Plex Mono', monospace",
                          wordBreak: "break-word",
                        }}
                      >
                        {formData.states}
                        <span style={{ color: "#20B7E5" }}>{formData.statesSuffix}</span>
                      </div>
                      <div style={{ fontSize: "clamp(10.5px, 2.5vw, 11.5px)", color: "#8DA5C4", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                        States Covered
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER TEXT PREVIEW */}
              <div
                style={{
                  background: "#071A3A",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  padding: "clamp(16px, 3vw, 24px)",
                }}
              >
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#8DA5C4", marginBottom: "10px" }}>
                  Footer Summary Text Preview:
                </div>
                <div
                  style={{
                    background: "#081424",
                    padding: "14px 16px",
                    borderRadius: "10px",
                    fontSize: "13px",
                    color: "#C5D6EA",
                    lineHeight: 1.65,
                    borderLeft: "3px solid #20B7E5",
                    wordBreak: "break-word",
                  }}
                >
                  Trust and Hope Rad Pvt. Ltd. | 24×7 teleradiology services serving{" "}
                  <strong style={{ color: "#FFFFFF" }}>{formData.centres}{formData.centresSuffix}</strong> centres,{" "}
                  <strong style={{ color: "#FFFFFF" }}>{formData.studies}{formData.studiesSuffix}</strong> new studies uploaded daily to PACS,{" "}
                  <strong style={{ color: "#FFFFFF" }}>{formData.radiologists}{formData.radiologistsSuffix}</strong> radiologists across specialisations,{" "}
                  <strong style={{ color: "#FFFFFF" }}>{formData.states}{formData.statesSuffix}</strong> states covered in India.
                </div>
              </div>

              {/* INVISIBLE LINK & INDEXING INFO */}
              <div
                style={{
                  marginTop: "20px",
                  padding: "16px",
                  borderRadius: "12px",
                  background: "rgba(32, 183, 229, 0.06)",
                  border: "1px dashed rgba(32, 183, 229, 0.3)",
                  fontSize: "12.5px",
                  color: "#8DA5C4",
                  wordBreak: "break-word",
                }}
              >
                <div className="d-flex align-items-center gap-2 mb-1" style={{ color: "#20B7E5", fontWeight: 600 }}>
                  🔒 Admin Security & SEO Status
                </div>
                <ul className="mb-0 ps-3 style-disc" style={{ lineHeight: 1.6 }}>
                  <li>Route: <code style={{ fontSize: "11.5px" }}>https://trustandhoperad.com/stats</code></li>
                  <li>Admin Session: Active (Authenticated as <code style={{ fontSize: "11.5px" }}>TAH@trustandhoperad.com</code>)</li>
                  <li>Robots Meta: <code>noindex, nofollow</code> enabled</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
