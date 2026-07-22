import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
    return (
      <nav className={styles.menu}>
        <span className={styles.brand}>SPA Provincias Final</span>
        <div className={styles.nav}>
          <Link to="/" className={styles.link}>Inicio</Link>
          <Link to="#" className={styles.link}>Provincias</Link>
        </div>
      </nav>
    );
}

export default Menu;