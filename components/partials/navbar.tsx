// components/navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Inventory App</div>
        <div className="flex space-x-4">
          <Link href="/items" className="hover:text-gray-400">
            Items
          </Link>
          <Link href="/categories" className="hover:text-gray-400">
            Categories
          </Link>
          <Link href="/suppliers" className="hover:text-gray-400">
            Suppliers
          </Link>
          <Link href="/transactions" className="hover:text-gray-400">
            Transactions
          </Link>
        </div>
      </div>
    </nav>
  );
}
