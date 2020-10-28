import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import styles from "./header.module.css";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
    }
  }
`;

export default function Header() {
  const { data } = useQuery(ViewerQuery);
  const viewer = data?.viewer;
  if (viewer) {
    return (
      <header>
        <nav className="navbar fixed-top">
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

            <li className={styles.navItem}>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/signout">
                <a>Sign Out</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  return (
    <header>
      <nav className="navbar nav">
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
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
