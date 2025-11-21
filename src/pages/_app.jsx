import Link from 'next/link';
import '../styles/globals.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/agents', label: 'Agents' },
  { href: '/deployment', label: 'Deployment' },
];

function AppLayout({ children }) {
  return (
    <div className="app-shell">
      <nav className="top-nav">
        <div className="nav-brand">BlackRoad OS Docs</div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="layout-content">{children}</div>
    </div>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
