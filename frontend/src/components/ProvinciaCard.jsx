import { Link } from "react-router-dom";
import { getImageUrl } from "../utils/imageUtils";
import styles from "./ProvinciaCard.module.css";

function ProvinciaCard({ provincia }){
    return(
        <article className={styles.card}>
            <h2>{provincia.nombre}</h2>
            <p><strong>Capital:</strong> {provincia.capital}</p>
            <p><strong>Habitantes:</strong> {provincia.habitantes}</p>
            <p><strong>Superficie:</strong> {provincia.superficie} km²</p>
            <div className={styles.imageContainer}>
                <img className={styles.image}
                    src={getImageUrl(provincia.imagen_mapa)}
                    alt={`Mapa de ${provincia.nombre}`}
                    loading="lazy"
                />
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image}
                    src={getImageUrl(provincia.imagen_escudo)}
                    alt={`Escudo de ${provincia.nombre}`}
                    loading="lazy"
                />
            </div>
            <Link to={`/provincia/${provincia.slug}`} className={styles.detailLink}>
                Ver detalle
            </Link>
        </article>
    );
}

export default ProvinciaCard;