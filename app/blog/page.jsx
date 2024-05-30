import Heading from "@/components/Heading";
import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <Heading>blog</Heading>
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
