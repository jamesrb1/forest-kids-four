// app/layout.tsx
import './globals.css'
import Navbar from '../components/navbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>Forest Kids</title>
        <meta name="description" content="Welcome to Forest Kids" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;