export default function Layout({ children }) {
  return(
    <html lang="en">
      <head>
        <title>Latihab next js</title>
      </head>
      <body>
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
        </body>
    </html>
  );
}