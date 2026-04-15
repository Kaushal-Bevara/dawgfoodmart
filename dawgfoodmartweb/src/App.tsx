import { useState } from "react";

const HOURS = [
  { day: "Monday",    time: "12 PM – 12 AM" },
  { day: "Tuesday",   time: "12 PM – 12 AM" },
  { day: "Wednesday", time: "12 PM – 12 AM" },
  { day: "Thursday",  time: "12 PM – 12 AM" },
  { day: "Friday",    time: "12 PM – 12 AM" },
  { day: "Saturday",  time: "12 PM – 12 AM" },
  { day: "Sunday",    time: "12 PM – 12 AM" },
];

const SERVICES = [
  { icon: "🚬", title: "Smoke Shop",        desc: "Premium cigars, pipes, vapes, wraps, papers, and accessories." },
  { icon: "🛒", title: "Convenience Store", desc: "Snacks, drinks, essentials — everything you need, anytime." },
  { icon: "🚚", title: "U-Haul Rentals",    desc: "Moving trucks and equipment rentals available here." },
  { icon: "📦", title: "Package Pickup",    desc: "Amazon and Wish pickup point. Grab your packages anytime." },
  { icon: "₿",  title: "Bitcoin ATM",       desc: "Unbank Bitcoin ATM on-site. Buy and sell crypto fast." },
  { icon: "⭐", title: "Rated 4.7 Stars",   desc: "28 Google reviews. We take care of our community.", highlight: true },
];

export default function App() {
  const [hovered, setHovered] = useState<number | null>(null);
  const todayIndex = new Date().getDay(); // 0=Sun
  // convert so Mon=0 ... Sun=6
  const todayRow = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div style={{ fontFamily: "'Barlow', sans-serif", background: "#0a0a0a", color: "#f0ece4", minHeight: "100vh" }}>

        {/* ── NAV ── */}
        <nav style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "1rem 2rem", borderBottom: "1px solid #222",
          position: "sticky", top: 0, background: "rgba(10,10,10,0.93)",
          backdropFilter: "blur(8px)", zIndex: 10,
        }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", letterSpacing: "2px" }}>
            DAWGS<span style={{ color: "#CC1414" }}>.</span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Home", "Services", "Hours", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ color: "#aaa", textDecoration: "none", fontSize: "0.85rem", letterSpacing: "1px", textTransform: "uppercase" }}>
                {l}
              </a>
            ))}
          </div>
        </nav>

        {/* ── HERO ── */}
        <div id="home" style={{
          padding: "5rem 2rem 4rem", textAlign: "center",
          background: "linear-gradient(180deg,#1a0505 0%,#0a0a0a 100%)",
          borderBottom: "1px solid #1a0505",
        }}>
          <div style={{
            display: "inline-block", background: "#CC1414", color: "#fff",
            fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase",
            padding: "0.3rem 0.8rem", borderRadius: "2px", marginBottom: "1.5rem",
          }}>
            Athens, GA · 350 Macon Hwy
          </div>

          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3rem, 9vw, 5.5rem)",
            lineHeight: 0.9, letterSpacing: "3px", color: "#fff", margin: 0,
          }}>
            YOUR NEIGHBORHOOD<br />
            <span style={{ color: "#CC1414" }}>SMOKE SHOP</span>
          </h1>

          <p style={{ color: "#888", margin: "1.2rem auto", maxWidth: "480px", fontSize: "0.95rem", lineHeight: 1.7 }}>
            Convenience store, smoke shop, U-Haul rentals, Amazon &amp; Wish pickups,
            and a Bitcoin ATM — all under one roof.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2rem", flexWrap: "wrap" }}>
            <button onClick={() => window.open("https://maps.google.com/?q=350+Macon+Hwy+Athens+GA+30606", "_blank")}
              style={{
                background: "#CC1414", color: "#fff", padding: "0.75rem 1.8rem",
                border: "none", fontFamily: "'Barlow',sans-serif", fontWeight: 600,
                fontSize: "0.9rem", letterSpacing: "1px", textTransform: "uppercase",
                cursor: "pointer", borderRadius: "2px",
              }}>
              📍 Get Directions
            </button>
            <button onClick={() => window.open("tel:7068508139")}
              style={{
                background: "transparent", color: "#f0ece4", padding: "0.75rem 1.8rem",
                border: "1px solid #444", fontFamily: "'Barlow',sans-serif", fontWeight: 500,
                fontSize: "0.9rem", letterSpacing: "1px", textTransform: "uppercase",
                cursor: "pointer", borderRadius: "2px",
              }}>
              📞 (706) 850-8139
            </button>
          </div>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {[["4.7 ★", "Google Reviews"], ["Open", "Until 12 AM"], ["U-Haul", "Rentals"], ["Bitcoin", "ATM On-Site"]].map(([b, l]) => (
              <div key={l} style={{
                background: "#111", border: "1px solid #222", padding: "0.4rem 1rem",
                borderRadius: "2px", fontSize: "0.75rem", color: "#aaa", letterSpacing: "0.5px",
              }}>
                <strong style={{ color: "#f0ece4" }}>{b}</strong> {l}
              </div>
            ))}
          </div>
        </div>

        {/* ── SERVICES ── */}
        <section id="services" style={{ padding: "4rem 2rem" }}>
          <div style={{ color: "#666", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.3rem" }}>
            What We Offer
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.5rem", letterSpacing: "2px", margin: "0 0 1.5rem" }}>
            Everything You Need
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem" }}>
            {SERVICES.map((s, i) => (
              <div key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: s.highlight ? "#110000" : "#111",
                  border: `1px solid ${s.highlight ? "#CC1414" : hovered === i ? "#CC1414" : "#1a1a1a"}`,
                  borderRadius: "4px", padding: "1.5rem", transition: "border-color 0.2s",
                }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "0.4rem", letterSpacing: "0.5px" }}>{s.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#777", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOURS + LOCATION ── */}
        <section id="hours" style={{
          padding: "4rem 2rem", background: "#080808",
          borderTop: "1px solid #111", borderBottom: "1px solid #111",
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "3rem", alignItems: "start" }}>

            {/* Hours */}
            <div>
              <div style={{ color: "#666", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                When We're Open
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.5rem", letterSpacing: "2px", margin: "0 0 1.5rem" }}>
                Store Hours
              </h2>
              {HOURS.map((h, i) => (
                <div key={h.day} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "0.6rem 0", borderBottom: "1px solid #1a1a1a", fontSize: "0.9rem",
                }}>
                  <span style={{ color: i === todayRow ? "#CC1414" : "#888" }}>
                    {h.day}{i === todayRow ? " ← Today" : ""}
                  </span>
                  <span style={{ color: i === todayRow ? "#4CAF50" : "#f0ece4", fontWeight: i === todayRow ? 600 : 400 }}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Location */}
            <div id="contact">
              <div style={{ color: "#666", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                Find Us
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "2.5rem", letterSpacing: "2px", margin: "0 0 1.5rem" }}>
                Location
              </h2>
              {[
                { label: "Address", value: <span>350 Macon Hwy<br />Athens, GA 30606</span> },
                { label: "Phone",   value: "(706) 850-8139" },
                { label: "Rating",  value: <span><span style={{ color: "#CC1414" }}>★★★★½</span> <span style={{ color: "#888", fontSize: "0.85rem" }}>4.7 · 28 reviews</span></span> },
              ].map(({ label, value }) => (
                <div key={label} style={{
                  background: "#111", border: "1px solid #1a1a1a",
                  borderRadius: "4px", padding: "1.5rem", marginBottom: "1rem",
                }}>
                  <div style={{ color: "#CC1414", fontSize: "0.7rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                    {label}
                  </div>
                  <div>{value}</div>
                </div>
              ))}
              <button
                onClick={() => window.open("https://maps.google.com/?q=350+Macon+Hwy+Athens+GA+30606", "_blank")}
                style={{
                  width: "100%", background: "#CC1414", color: "#fff",
                  padding: "0.75rem", border: "none", fontFamily: "'Barlow',sans-serif",
                  fontWeight: 600, fontSize: "0.9rem", letterSpacing: "1px",
                  textTransform: "uppercase", cursor: "pointer", borderRadius: "2px",
                }}>
                Open in Google Maps
              </button>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{
          background: "#050505", borderTop: "1px solid #1a1a1a",
          padding: "2rem", textAlign: "center",
        }}>
          <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: "1.8rem", letterSpacing: "3px", marginBottom: "0.5rem" }}>
            DAWGS FOOD MART <span style={{ color: "#CC1414" }}>/</span> SMOKESHOP
          </div>
          <div style={{ color: "#555", fontSize: "0.8rem" }}>
            350 Macon Hwy, Athens, GA 30606 · (706) 850-8139
          </div>
          <div style={{ marginTop: "1rem", color: "#333", fontSize: "0.75rem" }}>
            © {new Date().getFullYear()} Dawgs Food Mart / Smokeshop · All Rights Reserved
          </div>
        </footer>

      </div>
    </>
  );
}
