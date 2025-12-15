import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link href="/ai">AI</Link>
        </li>
        <li>
          <Link href="/data">Data</Link>
        </li>
      </ul>
    </main>
  );
}
