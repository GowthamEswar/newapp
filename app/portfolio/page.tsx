import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "See the impact of newapp's work and our portfolio of community projects and initiatives.",
  openGraph: {
    title: "Portfolio | newapp",
    description: "See the impact of newapp's work and our portfolio of community projects and initiatives."
  }
};

export default function PortfolioPage() {
  return (
    <main className="page-section" aria-label="Portfolio">
      <div className="single-column">
        <nav className="minimal-nav" aria-label="Quick navigation">
          <a href="/" className="minimal-nav-link">Home</a>
          <a href="/services" className="minimal-nav-link">Services</a>
          <a href="/about" className="minimal-nav-link">About</a>
          <a href="/contact" className="minimal-nav-link">Contact</a>
        </nav>
        <section className="hero-section" style={{ paddingTop: 0 }}>
          <h2>Our Portfolio</h2>
          <p>
            Coming soon: Explore our portfolio of successful projects, community initiatives, and the impact we've made together.
          </p>
        </section>
        <footer className="simple-footer">
          &copy; 2024 newapp. Non profit org.
        </footer>
      </div>
    </main>
  );
}
