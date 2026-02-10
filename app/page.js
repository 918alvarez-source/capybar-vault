export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>🐹 Bóveda del Carpincho</h1>

        <p style={styles.text}>
          El acceso no es para todos.<br />
          Conocimiento. Estrategia. Paciencia.
        </p>

        <p style={styles.text}>
          La bóveda solo se abre para los titulares.
        </p>

        <button style={styles.button}>
          Solicitar acceso
        </button>

        <p style={styles.subtext}>
          Apertura limitada · Q1 2026<br />
          Built on-chain · Strategy first · No hype
        </p>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontFamily: "serif",
    padding: "20px",
  },
  card: {
    textAlign: "center",
    maxWidth: "420px",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "1rem",
  },
  button: {
    marginTop: "2rem",
    padding: "12px 28px",
    fontSize: "1rem",
    backgroundColor: "transparent",
    color: "#fff",
    border: "1px solid #fff",
    cursor: "pointer",
  },
  subtext: {
    marginTop: "2rem",
    fontSize: "0.8rem",
    opacity: 0.6,
    lineHeight: "1.4",
  },
};
