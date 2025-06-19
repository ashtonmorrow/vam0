import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700">
        
        {/* Column 1: Logo & Tagline */}
        <div>
          <h2 className="text-xl font-bold mb-2">Whisker Leaks</h2>
          <p className="mb-4">A travel log & data toy for curious humans</p>
          <div className="flex gap-3">
            <Link href="#"><span className="sr-only">Instagram</span>📸</Link>
            <Link href="#"><span className="sr-only">LinkedIn</span>💼</Link>
            <Link href="#"><span className="sr-only">Google Maps</span>📺</Link>
          </div>
          <p className="mt-4 text-xs text-gray-400">Made with ❤️ from abroad</p>
        </div>

        {/* Column 2: Product */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-900">Product</h3>
          <ul className="space-y-1">
            <li><Link href="#">Demo</Link></li>
            <li><Link href="#">Updates</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-900">Resources</h3>
          <ul className="space-y-1">
            <li><Link href="#">Help</Link></li>
          </ul>
        </div>

        {/* Column 4: Legal */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-900">Legal</h3>
          <ul className="space-y-1">
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Terms</Link></li>
            <li><Link href="#">Security</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
