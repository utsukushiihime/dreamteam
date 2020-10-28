import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className="footer footer-nav">
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/resources">
            <a>Resources</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/assessment">
            <a>Assessment</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
}
