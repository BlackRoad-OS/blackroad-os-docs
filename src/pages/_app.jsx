import Link from 'next/link';
import '../styles/globals.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/architecture', label: 'Architecture' },
  { href: '/agents', label: 'Agents' },
  { href: '/deployment', label: 'Deployment' },
];

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-brand">BlackRoad OS Docs</div>
      <div className="nav-links">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
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
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
