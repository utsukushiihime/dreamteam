import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      email
      name
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
              <Link href="/">
                <img src="/logo.png" alt="DreamTeam" />
              </Link>
            </li>
            <li className="nav-item ml-2">
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
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <Link href="/profile/[id]" as={`/profile/${viewer.id}`}>
                <a className="nav-link">
                  <span className="font-weight-bold mr-2">{viewer.name}</span>
                  <span className="float-right px-0">
                    <FontAwesomeIcon icon="user-circle" />
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/signout">
                <a className="nav-link">
                  <span className="float-right px-0">
                    <FontAwesomeIcon icon="sign-out-alt" />
                    <span className="ml-2">Logout</span>
                  </span>
                </a>
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
          <li className="navbar-brand">
            <img src="/logo.png" alt="DreamTeam" />
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
        <ul className="nav">
          <li className="nav-item">
            <Link href="/signin">
              <a className="nav-link">
                <span className="mr-2">
                  <FontAwesomeIcon icon="sign-in-alt" />
                </span>
                Sign In
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/signup">
              <a className="nav-link">
                <span className="mr-2">
                  <FontAwesomeIcon icon="user-plus" />
                </span>
                Sign Up
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
