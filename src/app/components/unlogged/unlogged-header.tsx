import Link from 'next/link';

export default function UnloggedHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-background shadow">
      <Link href="/" className="text-2xl font-semibold text-cta-primary hover:font-bold transition">
        NEXT
      </Link>
      <nav className="flex items-center gap-4">
        <Link href="/login" className="font-medium text-cta-primary-hover hover:text-cta-primary transition">
          My account
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 bg-cta-primary text-white rounded hover:bg-cta-primary-hover transition"
        >
          Open Account
        </Link>
      </nav>
    </header>
  );
}
