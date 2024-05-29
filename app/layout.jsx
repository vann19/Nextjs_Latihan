import Link from "next/link";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Latihab next js</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
