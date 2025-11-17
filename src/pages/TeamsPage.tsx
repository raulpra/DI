import Title from "../components/Title";
import { teams } from "../data/teams";

export default function TeamsPage() {

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
        {teams.map((team) => (
          <li
            key={team.id}
            style={{
              padding: "10px 0",
            }}
          >
            <a
              href={`/teams/${team.id}`}
            >
              {team.name}
            </a>
            <p>{team.city}, {team.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}