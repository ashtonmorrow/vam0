import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Sidebar */}
      <aside className="w-64 p-6 border-r border-gray-200">
        <h2 className="text-lg font-bold mb-4">Whisker Leaks 🐾</h2>

        <div className="mb-6">
          <h3 className="font-semibold text-sm text-gray-600 mb-2">Links</h3>
          <ul className="space-y-1">
            <li><Link className="text-blue-600 hover:underline" href="#">Home</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="#">Plan</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="#">Cities</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="#">Countries</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="#">Reviews</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="#">Flavors</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="#">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm text-gray-600 mb-2">Social / Channels</h3>
          <ul className="space-y-1">
            <li><Link className="text-blue-600 hover:underline" href="#">Cat Videos</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="#">Corporate Hustle</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="#">Google Maps</Link></li>
            <li><Link className="text-blue-600 hover:underline" href="#">Weekends</Link></li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
