import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { getProvinciaById } from "../api/provinciasApi";
import { getProvinciaBySlug } from "../api/provinciasApi";
import { getImageUrl } from "../utils/imageUtils";
import styles from "./ProvinciaDetail.module.css";

export default function ProvinciaDetail() {
  //const { id } = useParams();
  const { slug } = useParams();
  const [provincia, setProvincia] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProvincia = async () => {
      try {
        //const data = await getProvinciaById(id);
        const data = await getProvinciaBySlug(slug);
        if (!data) {
          setError("Provincia no encontrada");
        } else {
          setProvincia(data);
        }
      } catch (err) {
        console.error(err);
        setError("Error al cargar la provincia");
      }
    };

    loadProvincia();
  }, //[id]
    [slug]);

  if (error) return <p className={styles.error}>{error}</p>;
  if (!provincia) return <p className={styles.loading}>Cargando detalle...</p>;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1>{provincia.nombre}</h1>
      </header>

      <div className={styles.content}>
        {/* BLOQUE IMÁGENES */}
        <div className={styles.images}>
          {provincia.imagen_mapa && (
            <figure className={styles.imageBox}>
              <img
                src={getImageUrl(provincia.imagen_mapa)}
                alt={`Mapa de ${provincia.nombre}`}
                loading="lazy"
              />
              <figcaption className={styles.figcaption}>Ubicación en España</figcaption>
            </figure>
          )}

          {provincia.imagen_escudo && (
            <figure className={styles.imageBox}>
              <img
                src={getImageUrl(provincia.imagen_escudo)}
                alt={`Escudo de ${provincia.nombre}`}
                loading="lazy"
              />
              <figcaption className={styles.figcaption}>Escudo heráldico</figcaption>
            </figure>
          )}
        </div>

        {/* BLOQUE INFO */}
        <div className={styles.info}>
          <p><strong>Capital:</strong> {provincia.capital}</p>
          <p><strong>Habitantes:</strong> {provincia.habitantes}</p>
          <p><strong>Superficie:</strong> {provincia.superficie} km²</p>
          <p><strong>Comunidad:</strong> {provincia.comunidad}</p>
        </div>
      </div>

      <a
        href={`https://es.wikipedia.org/wiki/${provincia.nombre}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.externalLink}
      >
        [Ampliar información en Wikipedia]
      </a>

      <Link to="/" className={styles.backLink}>
         [Volver al listado]
      </Link>
    </section>
  );
}