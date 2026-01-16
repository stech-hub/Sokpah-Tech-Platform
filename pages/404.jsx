import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <h1>404</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>

      <Link href="/" className="btn-primary">
        Go Home
      </Link>
    </main>
  );
}
