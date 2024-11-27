import './globals.css'; // Tambahkan Tailwind atau CSS global
import Layout from '@/components/layout';

export const metadata = {
  title: 'Inventory App',
  description: 'Manage your inventory seamlessly',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
