import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="antialiased text-white bg-blue-900 bg-noise">
        {/* Full-width header */}
        <Header />

        {/* Padded content wrapper */}
        <div className="flex flex-col min-h-screen px-6 sm:px-12 max-w-5xl mx-auto">
          <main className="grow">{children}</main>
        </div>

        {/* Full-width footer */}
        <Footer />
      </body>
    </html>
  );
}
