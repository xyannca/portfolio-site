export default function Data() {
  return (
    <main style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 20px" }}>
      <h1>Power BI Dashboard</h1>

      <p style={{ marginBottom: 16 }}>
        Tool: Power BI · Data: Fiber call center operations · Skills: DAX, modeling, UX
      </p>

      {/* Embedded PDF */}
      <iframe
        src="/PowerBI_Dashboard_Fiber.pdf"
        style={{
          width: "100%",
          height: "80vh",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
        }}
      />

      <p style={{ marginTop: 12, fontSize: 14, opacity: 0.7 }}>
        Note: You can scroll, zoom, or download the PDF from the viewer.
      </p>
    </main>
  );
}

