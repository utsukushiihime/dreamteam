import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      Welcome to the about page. Go to the{" "}
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      or{" "}
      <Link href="/about">
        <a>about</a>
      </Link>
      page.
    </div>
  );
}
