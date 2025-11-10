type props = {
  local: number;
  visitante: number;
  finalizado: boolean;
};

export default function MatchResult({ local, visitante, finalizado }: props) {
  const ganador =
    local === visitante
      ? "¡Empate!"
      : local > visitante
      ? "🏠 Gana el equipo local"
      : "🛫 Gana el visitante";

  return (
    <>
      <h2 style={{ color: finalizado ? "#007BFF" : "#000" }}>
        Resultado: {local} - {visitante}
      </h2>
      <h4>{ganador}</h4>
    </>
  );
}
