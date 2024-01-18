import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/excluded">Page excluded from the main layout</Link>
          </li>
          <li>
            <Link href="/non-existent-page">404 page</Link>
          </li>
          <li>
            <Link href="/error-page">Error page</Link>
          </li>
        </ul>
      </nav>
      <main style={{ color: "red" }}>{children}</main>
      <footer>
        Footer from the main layout (not shown in the excluded page)
      </footer>
    </div>
  );
}
