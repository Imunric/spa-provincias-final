import { useEffect, useState } from "react";
import { getProvincias } from "../api/provinciasApi";
import ProvinciaCard from "../components/ProvinciaCard";
import styles from "./Home.module.css";

function Home() {
  const [provincias, setProvincias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProvincias = async () => {
      try {
        const data = await getProvincias();
        setProvincias(data);
      } catch (err) {
        setError("Error al cargar las provincias");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProvincias();
  }, []);

  if (loading) return <p className={styles.loading}>Cargando provincias...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Provincias de Castilla-La Mancha</h1>

      <div className={styles.grid}>
        {provincias.map((provincia) => (
          <ProvinciaCard
            key={provincia.id}
            provincia={provincia}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;