import Link from 'next/link';
import { Linkedin, Instagram, GitHub, MapPin } from 'react-feather';

const navItems = [
  { text: 'Home', icon: '←', href: '/' },
  { text: 'Contact', icon: '←', href: '/contact' },
  { text: 'Spice-Rack', icon: '←', href: '/spice-rack' },
  { text: 'Leak-Social', icon: '←', href: '/leak-social' },
  { text: 'Notes', icon: '🛫', href: '/notes' },
  { text: 'Leaks', icon: '🐈', href: '/leaks' },
];

export function Header() {
  return (
    <nav className="flex justify-between items-center border-b border-gray-200 py-4 px-6 text-sm">
      {/* Left: Navigation */}
      <ul className="flex flex-wrap items-center gap-4">
        {navItems.map(({ text, href, icon }, i) => (
          <li key={i}>
            <Link href={href} className="hover:underline">
              {icon} {text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right: Icons */}
      <div className="flex gap-4">
        <Link href="https://linkedin.com" target="_blank"><Linkedin size={18} /></Link>
        <Link href="https://instagram.com" target="_blank"><Instagram size={18} /></Link>
        <Link href="https://github.com" target="_blank"><GitHub size={18} /></Link>
        <Link href="https://maps.google.com" target="_blank"><MapPin size={18} /></Link>
      </div>
    </nav>
  );
}
