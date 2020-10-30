import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

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
          <ul className="nav justify-content-center">
            <li className="navbar-brand">
              <img src="/logo.png" alt="DreamTeam" />
            </li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
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
              <Link href="/assessment">
                <a className="nav-link">Assessment</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/profile">
                <a className="nav-link">Profile</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signout">
                <a className="nav-link">Sign Out</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  return (
    <header>
      <nav className="navbar fixed-top">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
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

          <li className="nav-item">
            <Link href="/signin">
              <a className="nav-link">Sign In</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/signup">
              <a className="nav-link">Sign Up</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
