import Link from "next/link";
import ContactForm from "../../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact newapp or donate. Every contribution helps us bring hope and resources to those who need it most.",
  openGraph: {
    title: "Contact | newapp",
    description: "Contact newapp or donate. Every contribution helps us bring hope and resources to those who need it most."
  }
};

export default function ContactPage() {
  return (
    <main className="page-section" aria-label="Contact">
      <div className="single-column">
        <nav className="minimal-nav" aria-label="Quick navigation">
          <Link href="/" className="minimal-nav-link">Home</Link>
          <Link href="/services" className="minimal-nav-link">Services</Link>
          <Link href="/about" className="minimal-nav-link">About</Link>
        </nav>
        <section className="hero-section" style={{ paddingTop: 0 }}>
          <h2>Contact & Donations</h2>
          <p>
            Ready to make a difference? Reach out or donate below. Every contribution, big or small, helps us bring hope and resources to those who need it most.
          </p>
        </section>
        <section className="contact-form-section">
          <ContactForm />
        </section>
        <footer className="simple-footer">
          &copy; 2024 newapp. Non profit org.
        </footer>
      </div>
    </main>
  );
}
