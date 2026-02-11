export default function ManifestoPage() {
  return (
    <main style={styles.main}>
      <section style={styles.section}>
        <h1 style={styles.title}>📜 Manifiesto de la Bóveda del Carpincho</h1>

        <p style={styles.text}>
          Este no es un sitio para todos.
        </p>

        <p style={styles.text}>
          La <strong>Bóveda del Carpincho</strong> nace como un espacio privado,
          silencioso y estratégico para quienes entienden que el verdadero
          crecimiento no es inmediato ni ruidoso.
        </p>

        <p style={styles.text}>
          Aquí no se prometen riquezas rápidas.
          No hay fórmulas mágicas.
          No existe asesoramiento financiero.
        </p>

        <p style={styles.text}>
          Existe algo más difícil:
          <br />
          <strong>criterio, paciencia y dirección.</strong>
        </p>

        <h2 style={styles.subtitle}>Principios</h2>

        <ul style={styles.list}>
          <li>La educación financiera es una herramienta, no una promesa.</li>
          <li>La libertad se construye con decisiones conscientes.</li>
          <li>El control personal precede al crecimiento económico.</li>
          <li>El largo plazo siempre vence a la ansiedad.</li>
        </ul>

        <h2 style={styles.subtitle}>Qué es esta bóveda</h2>

        <p style={styles.text}>
          Un entorno de reflexión, herramientas y contenido curado sobre:
        </p>

        <ul style={styles.list}>
          <li>Economía práctica (sin recomendaciones de inversión)</li>
          <li>Administración personal y mentalidad</li>
          <li>Disciplina, enfoque y mejora continua</li>
          <li>Estrategia aplicada a la vida real</li>
        </ul>

        <h2 style={styles.subtitle}>Qué NO es</h2>

        <ul style={styles.list}>
          <li>No es asesoramiento financiero</li>
          <li>No es una promesa de resultados</li>
          <li>No es para la masa</li>
        </ul>

        <p style={styles.text}>
          El acceso no se regala.
          <br />
          Se merece.
        </p>

        <p style={styles.footer}>
          Fase Génesis — Solo para quienes entienden el valor del silencio.
        </p>
      </section>
    </main>
  );
}

const styles = {
  main: {
    minHeight: "100vh",
    backgroundColor: "#0b0b0b",
    color: "#eaeaea",
    display: "flex",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily: "serif",
  },
  section: {
    maxWidth: "700px",
  },
  title: {
    fontSize: "2.2rem",
    marginBottom: "24px",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "1.4rem",
    marginTop: "32px",
    marginBottom: "12px",
  },
  text: {
    fontSize: "1.05rem",
    lineHeight: "1.7",
    marginBottom: "16px",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "16px",
  },
  footer: {
    marginTop: "40px",
    fontSize: "0.9rem",
    opacity: 0.7,
    textAlign: "center",
  },
};
