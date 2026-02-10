export default function Vault() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>🔒 Vault Locked</h1>
        <p style={styles.text}>
          Acceso restringido.<br />
          Este entorno no está habilitado para exploración pública.
        </p>
        <p style={styles.subtext}>
          Si recibiste una invitación, sabrás cuándo volver.
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
    fontSize: "2.2rem",
    marginBottom: "1.5rem",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
  },
  subtext: {
    marginTop: "1.5rem",
    fontSize: "0.8rem",
    opacity: 0.6,
  },
};
