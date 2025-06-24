import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page-section" aria-label="Home">
      <div className="hero-header">
        <h1>Welcome to newapp</h1>
        <p>
          Empowering change together: Join our mission to make a difference.<br />
          Your donation enables real impact for communities in need.
        </p>
        <Link href="/contact" className="donate-btn">Donate Now</Link>
      </div>
      <section className="hero-section">
        <h2>Our Vision</h2>
        <p>
          newapp is a non-profit organization dedicated to driving positive change. We believe that even the smallest act of kindness can make a significant impact. Our work is powered by generous donors and passionate volunteers, enabling us to support vital causes and provide resources where they're needed most.
        </p>
        <Link href="/services" className="donate-btn" style={{ background: "var(--primary-dark)" }}>See Our Services</Link>
      </section>
      <footer className="simple-footer">
        &copy; 2024 newapp &mdash; Non Profit Organization. All rights reserved.
      </footer>
    </main>
  );
}
