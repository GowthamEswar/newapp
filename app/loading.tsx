export default function Loading() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--primary-light)" }}>
      <div style={{ color: "var(--primary-dark)", fontFamily: "Oswald, Arial, sans-serif", fontSize: "1.5rem", letterSpacing: "1px" }}>
        Loading...
      </div>
    </div>
  );
}
