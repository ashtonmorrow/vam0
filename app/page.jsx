import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome, BSWB</h1>
        <p>Hello there, want to help build this out, let's chat.</p>
      </main>
      <Footer />
    </>
  );
}
