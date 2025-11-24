import Title from "../components/Title";
import { teams } from "../data/teams";
import { useState } from "react";

export default function TeamsPage() {
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [onlyLargeTeams, setOnlyLargeTeams] = useState(false);

  const cityOptions = Array.from(new Set(teams.map((team) => team.city))).sort();

  const normalizedQuery = query.trim().toLowerCase();
  const filteredTeams = teams.filter((team) => {
    if (cityFilter !== "all" && team.city !== cityFilter) {
      return false;
    }

    if (onlyLargeTeams && team.playersCount < 13) {
      return false;
    }

    if (!normalizedQuery) return true;

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
  });

  const sortedTeams = [...filteredTeams].sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return sortOrder === "asc" ? comparison : -comparison;
  });

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
          flexWrap: "wrap",
        }}
      >
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por nombre, ciudad, país, entrenador..."
          style={{
            flex: 1,
            minWidth: "220px",
            padding: "12px 14px",
            borderRadius: "10px",
            border: "1px solid #d0d7de",
            background: "#f9fafb",
            fontSize: "1rem",
          }}
        />
        <select
          value={cityFilter}
          onChange={(event) => setCityFilter(event.target.value)}
          style={{
            padding: "12px 14px",
            borderRadius: "10px",
            border: "1px solid #d0d7de",
            background: "white",
            fontSize: "1rem",
            minWidth: "170px",
          }}
        >
          <option value="all">Todas las ciudades</option>
          {cityOptions.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <label
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 10px",
            border: "1px solid #d0d7de",
            borderRadius: "10px",
            background: "white",
            cursor: "pointer",
            fontSize: "0.95rem",
          }}
        >
          <input
            type="checkbox"
            checked={onlyLargeTeams}
            onChange={(event) => setOnlyLargeTeams(event.target.checked)}
            style={{ cursor: "pointer" }}
          />
          Solo equipos con 13+ jugadores
        </label>
        <select
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value as "asc" | "desc")}
          style={{
            padding: "12px 14px",
            borderRadius: "10px",
            border: "1px solid #d0d7de",
            background: "white",
            fontSize: "1rem",
            minWidth: "170px",
          }}
        >
          <option value="asc">Ascendente (A-Z)</option>
          <option value="desc">Descendente (Z-A)</option>
        </select>
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
          {sortedTeams.map((team) => (
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
                Entrenador: {team.coach} · Fundado: {team.founded} · Jugadores: {team.playersCount}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
