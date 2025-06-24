"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log error
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--primary-light)" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontFamily: "Oswald, Arial, sans-serif", color: "var(--primary-dark)" }}>Something went wrong</h2>
        <p style={{ color: "var(--primary-dark)" }}>{error.message}</p>
        <button
          style={{
            marginTop: "1.5rem",
            background: "var(--primary)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "0.7em 2em",
            fontFamily: "Oswald, Arial, sans-serif",
            fontSize: "1.1rem",
            fontWeight: 600,
            cursor: "pointer"
          }}
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
