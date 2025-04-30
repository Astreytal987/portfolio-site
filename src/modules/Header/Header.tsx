import styles from "./Header.module.css"
import MainStyles from "../Main.module.css"


function Header() {
    return (
        <>
            <header className={styles.header}>
                <div className={MainStyles.container}>
                    <div className={styles.headerWrapper}>
                        <a href="#" className={styles.logo}>Astreytal</a>
                        <nav className={styles.nav}>
                            <ul className={styles.navMenu}>
                                <li className={styles.navItem}>
                                    <a href="#" className={`${styles.navLink} ${styles.active}`}>Home</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#" className={styles.navLink}>About</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#" className={styles.navLink}>Skills</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#" className={styles.navLink}>Services</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#" className={styles.navLink}>Portfolio</a>
                                </li>
                                <li className={styles.navItem}>
                                    <a href="#" className={styles.navLink}>Contact</a>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles.navMenuBtn}></div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header
