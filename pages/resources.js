import Link from "next/link";

export default function Resources() {
  return (
    <div>
      Welcome to the about page. Go to the{" "}
      <Link href="/">
        <a>Home</a>
      </Link>{" "}
      or{" "}
      <Link href="/contact">
        <a>contact</a>
      </Link>
      page.
    </div>
  );
}
