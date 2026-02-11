import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>🐹 Capybara Vault</h1>

        <p style={styles.text}>
          El acceso no es para todos.<br />
          Información asimétrica. Decisiones frías. Tiempo.
        </p>

        <p style={styles.text}>
          Capybara Vault es un entorno privado enfocado en economía,
          administración personal, libertad financiera y superación personal.
        </p>

        <Link href="/vault" style={styles.button}>
          Solicitar acceso
        </Link>

        <Link href="/manifesto" style={styles.link}>
          Leer el manifiesto
        </Link>

        <p style={styles.subtext}>
          Fase Génesis · Acceso limitado<br />
          Construido on-chain · Estrategia primero · Sin hype
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
    textDecoration: "none",
    display: "inline-block",
  },
  link: {
    display: "block",
    marginTop: "1.2rem",
    fontSize: "0.9rem",
    opacity: 0.8,
    textDecoration: "underline",
    color: "#fff",
  },
  subtext: {
    marginTop: "2rem",
    fontSize: "0.8rem",
    opacity: 0.6,
    lineHeight: "1.4",
  },
};
