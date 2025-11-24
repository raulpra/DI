import Title from "../components/Title";
import { teams } from "../data/teams";
import { useState } from "react";

export default function TeamsPage() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredTeams = normalizedQuery
    ? teams.filter((team) => {
        const searchableText = [
          team.name,
          team.city,
          team.country,
          team.coach,
          team.stadium,
          String(team.founded),
          team.description,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
    : teams;

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

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por nombre, ciudad, país, entrenador..."
          style={{
            flex: 1,
            padding: "12px 14px",
            borderRadius: "10px",
            border: "1px solid #d0d7de",
            background: "#f9fafb",
            fontSize: "1rem",
          }}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            style={{
              padding: "12px 14px",
              borderRadius: "10px",
              border: "1px solid #d0d7de",
              background: "white",
              cursor: "pointer",
            }}
          >
            Limpiar
          </button>
        )}
      </div>

      {filteredTeams.length === 0 ? (
        <p style={{ color: "#666" }}>
          No encontramos equipos con ese criterio de búsqueda.
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredTeams.map((team) => (
            <li
              key={team.id}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #f0f0f0",
              }}
            >
              <a href={`/teams/${team.id}`}>{team.name}</a>
              <p style={{ margin: "6px 0", color: "#555" }}>
                {team.city}, {team.country}
              </p>
              <p style={{ margin: 0, color: "#7a7a7a", fontSize: "0.95rem" }}>
                Entrenador: {team.coach} · Fundado: {team.founded}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
