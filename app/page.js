export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      backgroundColor: "#0b0b0b",
      color: "#f5f5f5",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        🐹 Capybara Vault
      </h1>

      <p style={{ maxWidth: "600px", fontSize: "1.2rem", lineHeight: "1.6" }}>
        Access is not for everyone.<br />
        Knowledge. Strategy. Patience.<br />
        The vault opens only for holders.
      </p>

      <p style={{ marginTop: "30px", opacity: 0.7 }}>
        Genesis Phase — Coming Soon
      </p>
    </main>
  );
}
