import Link from "next/link"

export function Navigation() {
  return (
    <div className="absolute right-[24px] top-[24px]">
      <Link href="/" className="text-xs text-gray-400 mr-4">
        HOME
      </Link>
      <Link href="/about" className="text-xs text-gray-400 mr-4">
        ABOUT
      </Link>
      <Link href="/contact" className="text-xs text-gray-400">
        CONTACT
      </Link>
    </div>
  );
}