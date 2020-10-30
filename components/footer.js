import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container">
        <nav className="navbar navbar-expand-sm fixed-bottom">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-4">
              <Link href="/">
                <a className="nav-link">
                  <FontAwesomeIcon icon="house-user" />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/resources">
                <a className="nav-link">Resources</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
