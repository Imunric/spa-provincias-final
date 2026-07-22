import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Menu />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <strong>© 2026 - Actividad final optativa - Proyecto SPA con React - Ismael Muñoz Rico</strong>
      </footer>
    </div>
  );
}

export default App;
