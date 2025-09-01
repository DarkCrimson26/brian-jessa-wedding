import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-section navbar-left">
        <Link href="/" className="navbar-link-tan-aegean">HOME</Link>
        <Link href="/ceremony" className="navbar-link-tan-aegean">THE CEREMONY</Link>
      </div>
                <div className="navbar-section navbar-center">
            <div className="text-center">
              <div className="navbar-logo-tan-aegean">Welcome to our Wedding Website</div>
            </div>
          </div>
      <div className="navbar-section navbar-right">
        <Link href="/wedding-details" className="navbar-link-tan-aegean">WEDDING DETAILS</Link>
        <Link href="/rsvp" className="navbar-link-tan-aegean">RSVP</Link>
      </div>
    </nav>
  );
} 