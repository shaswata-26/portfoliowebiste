import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aarav Mehta — Premium Portfolio',
  description:
    'Premium developer portfolio with responsive design, polished motion, and modern UI for showcasing work, skills, and experience.',
  keywords: ['portfolio', 'developer portfolio', 'next.js portfolio', 'framer motion portfolio'],
  openGraph: {
    title: 'Aarav Mehta — Premium Portfolio',
    description: 'Creative full-stack developer portfolio built with Next.js and Framer Motion.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
