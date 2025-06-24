import "./globals.css";
import type { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: {
    default: "newapp - Non Profit Organization",
    template: "%s | newapp"
  },
  description: "Empowering change together: Join our mission to make a difference. Your donation enables real impact for communities in need.",
  keywords: [
    "non profit",
    "charity",
    "donate",
    "community",
    "outreach",
    "relief",
    "youth empowerment",
    "health initiatives"
  ],
  openGraph: {
    title: "newapp - Non Profit Organization",
    description: "Empowering change together: Join our mission to make a difference. Your donation enables real impact for communities in need.",
    url: "https://newapp.vercel.app/",
    siteName: "newapp",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "newapp - Non Profit Organization",
    description: "Empowering change together: Join our mission to make a difference. Your donation enables real impact for communities in need."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
