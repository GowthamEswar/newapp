import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about newapp, a non-profit organization built on the principle of collective action and dedicated to creating real, lasting impact.",
  openGraph: {
    title: "About Us | newapp",
    description: "Learn about newapp, a non-profit organization built on the principle of collective action and dedicated to creating real, lasting impact."
  }
};

export default function AboutPage() {
  return (
    <main className="page-section" aria-label="About">
      <div className="single-column">
        <nav className="minimal-nav" aria-label="Quick navigation">
          <Link href="/" className="minimal-nav-link">Home</Link>
          <Link href="/services" className="minimal-nav-link">Services</Link>
          <Link href="/contact" className="minimal-nav-link">Contact</Link>
        </nav>
        <section className="content-with-image">
          <Image
            src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=facearea&w=400&h=400&facepad=2"
            alt="Teamwork for Change"
            className="content-img"
            width={170}
            height={170}
            priority
          />
          <div className="about-content">
            <h2>About newapp</h2>
            <p>
              Founded in 2024, newapp is a non-profit organization built on the principle of collective action. Our team is a diverse group of dedicated individuals sharing one goal: to create real, lasting impact for people and communities in need.<br /><br />
              We are transparent, donor-driven, and always striving to maximize every contribution. Our commitment is to integrity, compassion, and measurable results. Every donation fuels hope and positive change.
            </p>
          </div>
        </section>
        <footer className="simple-footer">
          &copy; 2024 newapp. Non profit org.
        </footer>
      </div>
    </main>
  );
}
