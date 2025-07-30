import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="px-8 py-2 bg-white text-black justify-between">
      <nav className="flex items-center justify-between">
        <div className="px-2 font-bold">
          <Link to="/">Tanstack Router</Link>
        </div>
        {/* links */}
        <div className="flex items-center gap-4">
          <Link className="hover:underline" to="/about-us">
            About us
          </Link>
          <Link className="hover:underline" to="/contact-us">
            Contact us
          </Link>
          <Link className="hover:underline" to="/products">
            Products
          </Link>
          <Link className="hover:underline" to="/zustand-bear">
            Zustand Bear
          </Link>
        </div>
      </nav>
    </header>
  )
}
