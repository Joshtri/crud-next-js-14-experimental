// components/layout.tsx
import Navbar from '@/components/partials/navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">{children}</main>


      
      <footer className="bg-gray-800 text-white text-center p-4">
        Inventory App © 2024
      </footer>
    </div>
  );
}
