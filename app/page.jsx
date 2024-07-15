import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="homepage">
      Homepage
      <Link href="/dashboard">Go to dashboard</Link>
    </main>
  );
}
