export default function Data() {
  return (
    <main>
      <h1>Power BI Dashboard</h1>
      <p>Tool: Power BI · Data: Fiber call center operations · Skills: DAX, modeling, UX</p>

      <div style={{ position: "relative", width: "100%", height: "70vh", marginTop: 16 }}>
        <iframe
          title="Power BI Dashboard"
          src="YOUR_POWERBI_EMBED_URL_HERE"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          allowFullScreen
        />
      </div>

      <p style={{ marginTop: 12, fontSize: 14, opacity: 0.75 }}>
        Note: Live view may require Microsoft authorization.
      </p>
    </main>
  );
}
