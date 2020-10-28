import Link from "next/link";

export default function About() {
  return (
    <div>
      Welcome to the about page. Go to the{" "}
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      or{" "}
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      page.
    </div>
  );
}
