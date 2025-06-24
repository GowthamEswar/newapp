import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Discover the services newapp provides: emergency relief, community outreach, youth empowerment, and health initiatives.",
  openGraph: {
    title: "Our Services | newapp",
    description: "Discover the services newapp provides: emergency relief, community outreach, youth empowerment, and health initiatives."
  }
};

export default function ServicesPage() {
  return (
    <main className="page-section" aria-label="Services">
      <div className="single-column">
        <nav className="minimal-nav" aria-label="Quick navigation">
          <Link href="/" className="minimal-nav-link">Home</Link>
          <Link href="/about" className="minimal-nav-link">About</Link>
          <Link href="/contact" className="minimal-nav-link">Contact</Link>
        </nav>
        <section className="hero-section" style={{ paddingTop: 0 }}>
          <h2>Our Services</h2>
          <p>
            At newapp, we focus on providing:
          </p>
          <ul style={{ textAlign: "left", maxWidth: 480, margin: "1.2em auto 0 auto", color: "var(--primary-dark)", fontSize: "1.09rem", lineHeight: 1.7 }}>
            <li><strong>Emergency Relief:</strong> Rapid response and support for those affected by crises.</li>
            <li><strong>Community Outreach:</strong> Programs that uplift underserved groups through education and direct aid.</li>
            <li><strong>Youth Empowerment:</strong> Workshops and resources to help young people achieve their full potential.</li>
            <li><strong>Health Initiatives:</strong> Access to vital healthcare and wellness services for vulnerable populations.</li>
          </ul>
          <Link href="/contact" className="donate-btn">Support Our Work</Link>
        </section>
        <footer className="simple-footer">
          &copy; 2024 newapp. Non profit org.
        </footer>
      </div>
    </main>
  );
}
