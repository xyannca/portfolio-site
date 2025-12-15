// app/page.tsx
import Image from "next/image";

export default function Home() {
  // TODO: replace these with YOUR real links
  const githubRepoUrl = 
    "https://github.com/xyannca/powerbi-dashboard-portfolio.git";
  const dashboardPdfUrl =
    "https://github.com/xyannca/powerbi-dashboard-portfolio/blob/main/PowerBI_Dashboard_Fiber.pdf";
  const overviewPngRawUrl =
    "https://raw.githubusercontent.com/xyannca/powerbi-dashboard-portfolio/main/Overview.png";

  return (
    <main style={{ maxWidth: 920, margin: "0 auto", padding: "56px 20px" }}>
      {/* Hero */}
      <section style={{ marginBottom: 36 }}>
        <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: 0 }}>Portfolio</h1>
        <p style={{ fontSize: 18, marginTop: 12, maxWidth: 720 }}>
          Power BI dashboards and data projects.
        </p>
      </section>

      {/* Featured Project (Main page only) */}
      <section
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: 16,
          padding: 18,
        }}
      >
        <p style={{ margin: 0, fontSize: 12, letterSpacing: 0.6, opacity: 0.7 }}>
          FEATURED PROJECT
        </p>

        <h2 style={{ margin: "10px 0 6px", fontSize: 24 }}>
          Power BI Dashboard – Fiber Case Study
        </h2>

        {/* Option B (short & professional) */}
        <p style={{ margin: "0 0 14px", fontSize: 15, opacity: 0.9, maxWidth: 760 }}>
          Designed an interactive Power BI dashboard to analyze call center KPIs and uncover
          insights that support operational efficiency and service quality improvements.
        </p>

        {/* Preview image */}
        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid #eef2f7",
            background: "#fff",
            marginBottom: 14,
          }}
        >
          {/* Use next/image for performance */}
          <Image
            src={overviewPngRawUrl}
            alt="Power BI dashboard preview"
            width={1200}
            height={700}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href={dashboardPdfUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #111827",
              background: "#111827",
              color: "white",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            View Dashboard (PDF)
          </a>

          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid #e5e7eb",
              background: "white",
              color: "#111827",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            View GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
