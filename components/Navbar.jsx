import Link from "next/link";
export default function Navbar() {
    return (

        <nav>
            <ul className="flex gap-2">
              <li>
                <Link href="/" className="text-teal-800 hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/blog" className="text-teal-800 hover:underline">Blog</Link>
              </li>
              <li>
                <Link href="/about" className="text-teal-800 hover:underline">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-teal-800 hover:underline" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

    )
}