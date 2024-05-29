import Link from "next/link";
export default function BlogPage() {
  return (
    <>
      <h1>blog</h1>
      <p>List of post</p>
      <ul>
        <li>
          <Link href="/blog/belajar-nextjs">Belajar next js</Link>
        </li>
        <li>
          <ul>
            <Link href="/blog/latihan-route-nextjs">Latihan route nextjs</Link>
          </ul>
        </li>
      </ul>
    </>
  );
}
