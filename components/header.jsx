import Link from 'next/link';
import { Linkedin, Instagram, GitHub, MapPin } from 'react-feather';

const navItems = [
  { text: 'Home', icon: '←', href: '/' },
  { text: 'Contact', icon: '←', href: '/contact' },
  { text: 'Notes', icon: '🛫', href: '/notes' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">

        {/* Left: Navigation */}
        <ul className="flex flex-wrap items-center gap-4 text-sm">
          {navItems.map(({ text, href, icon }, i) => (
            <li key={i}>
              <Link href={href} className="hover:underline text-[#2C2C2C]">
                {icon} {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-[#2C2C2C]">
          <Link href="https://www.linkedin.com/in/mikelee89/" target="_blank"><Linkedin size={18} /></Link>
          <Link href="https://www.instagram.com/my_key_lee/" target="_blank"><Instagram size={18} /></Link>
          <Link href="https://github.com/ashtonmorrow" target="_blank"><GitHub size={18} /></Link>
          <Link href="https://www.google.com/maps/contrib/102196021953642927221/photos/@9.8357246,-70.4533668,12780093m/data=!3m1!1e3!4m3!8m2!3m1!1e1?entry=ttu" target="_blank"><MapPin size={18} /></Link>
        </div>

      </div>
    </header>
  );
}
