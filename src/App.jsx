function App() {
  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      color: "#e5e7eb",
      padding: "2rem",
      boxSizing: "border-box"
    }}>
      <main style={{
        maxWidth: "600px",
        background: "rgba(15, 23, 42, 0.9)",
        borderRadius: "1.5rem",
        padding: "2.5rem",
        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        border: "1px solid rgba(148, 163, 184, 0.3)"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>
          My React Static Site
        </h1>
        <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem", color: "#cbd5f5" }}>
          Welcome to my new website built with <strong>React</strong> and deployed on <strong>Netlify</strong>.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.75rem 1.3rem",
            borderRadius: "999px",
            border: "1px solid rgba(248, 250, 252, 0.25)",
            textDecoration: "none",
            fontWeight: 500,
            backdropFilter: "blur(8px)"
          }}
        >
          <span>View my code on GitHub</span>
          <span>↗</span>
        </a>
      </main>
    </div>
  );
}

export default App;
