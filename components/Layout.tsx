import { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title = 'News Homepage' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Latest news updates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-primary text-black shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">NewsHub</h1>
          <nav className="mt-2">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Politics</a></li>
              <li><a href="#" className="hover:underline">Technology</a></li>
              <li><a href="#" className="hover:underline">Sports</a></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="bg-primary text-white py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} NewsHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}