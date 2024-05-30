import Navbar from "../components/Navbar";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Latihab next js</title>
      </head>
      <body className="bg-gray-50 flex flex-col px-4 py-4 min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children}</main>
        <footer className="border-t py-3 text-center text-xs">
          <span>Im her to stay (footer)</span>
        </footer>
      </body>
    </html>
  );
}
