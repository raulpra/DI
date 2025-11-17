import { useParams, Link } from "react-router-dom";
import { teams } from "../data/teams";
import Title from "../components/Title";
import NotFoundPage from "./NotFoundPage";

export default function TeamDetailPage() {
  const { id } = useParams();
  const teamId = id ? Number(id) : NaN;
  if (Number.isNaN(teamId)) return <NotFoundPage />;

  const team = teams.find((t) => t.id === teamId);

  if (!team) {
    return (
      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          background: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
          fontFamily: "system-ui",
          textAlign: "center",
        }}
      >
        <h2>Equipo no encontrado 😥</h2>
        <Link to="/teams">← Volver</Link>
      </div>
    );
  }
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        background: "white",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        fontFamily: "system-ui",
        textAlign: "center",
      }}
    >
      <Title text={"Detalle del Equipo " + team.name} />
      <p
        style={{
          marginBottom: "20px",
        }}
      >
        {team.description}
      </p>

      <div style={{ color: "#555", fontSize: "1.1rem", marginBottom: "24px" }}>
        <p>
          <strong>Ciudad:</strong> {team.city}
        </p>
        <p>
          <strong>País:</strong> {team.country}
        </p>
        <p>
          <strong>Fundado:</strong> {team.founded}
        </p>
        <p>
          <strong>Estadio:</strong> {team.stadium}
        </p>
        <p>
          <strong>Entrenador:</strong> {team.coach}
        </p>
        <p>
          <strong>Jugadores:</strong> {team.playersCount}
        </p>
      </div>

      <Link to="/teams">← Volver a equipos</Link>
    </div>
  );
}
