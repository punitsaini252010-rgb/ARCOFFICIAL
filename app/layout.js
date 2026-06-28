import './globals.css';

export const metadata = {
  title: 'ARC MATRIX | Command Center',
  description: 'The premier operator digital infrastructure.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#030A08] text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}

