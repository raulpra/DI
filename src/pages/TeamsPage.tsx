import Title from "../components/Title";

export default function TeamsPage() {
  const teams = [
    { id: 1, name: "Tigres del Norte" },
    { id: 2, name: "Leones del Este" },
    { id: 3, name: "Halcones Rojos" },
  ];

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        background: "white",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        fontFamily: "system-ui",
      }}
    >
      <Title text="⛹🏼‍♀️ Equipos" />


      <ul style={{ listStyle: "none", padding: 0 }}>
        {teams.map((t) => (
          <li
            key={t.id}
            style={{
              padding: "10px 0",
            }}
          >
            <a
              href="#"
            >
              {t.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}