import { useState } from "react";
import Title from "../components/Title";
import MatchResult from "../components/MatchResult";
import ActionButton from "../components/ActionButton";
import TeamScore from "../components/TeamScore";

function PaginaMarcador() {
  const [local, setLocal] = useState(0);
  const [visitante, setVisitante] = useState(0);
  const [finalizado, setFinalizado] = useState<boolean>(false);
  const [nombreColegiado, setNombreColegiado] = useState<string>("");
  const reiniciar = () => {
    setLocal(0);
    setVisitante(0);
    setFinalizado(false);
    setNombreColegiado("");
  };

  const handleNombreColegiadoChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNombreColegiado(e.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
            width: "80%",
            maxWidth: "360px",
          }}
        >
          <Title text="🏀 Marcador Reactivo" />

          <TeamScore nombre="Local" puntos={local} onScoreChange={setLocal} />

          <TeamScore
            nombre="Visitante"
            puntos={visitante}
            onScoreChange={setVisitante}
          />

          <MatchResult
            local={local}
            visitante={visitante}
            finalizado={finalizado}
          />
          <ActionButton
            onClick={reiniciar}
            text="Reiniciar marcador"
            color="#e63946"
          />

          <ActionButton
            onClick={() => setFinalizado(true)}
            text="Finalizar partido"
          />

          <div style={{ marginBottom: "20px" }}>
            <p
              style={{
                marginTop: "30px",
                marginBottom: "6px",
                fontWeight: "500",
                color: nombreColegiado ? "#1d3557" : "#e63946",
              }}
            >
              {nombreColegiado
                ? `👨‍⚖️ Colegiado: ${nombreColegiado}`
                : "⚠️ Colegiado pendiente de asignar"}
            </p>
            <input
              type="text"
              value={nombreColegiado}
              onChange={handleNombreColegiadoChange}
              placeholder="Nombre del colegiado..."
              style={{
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                width: "220px",
                textAlign: "center",
                outline: "none",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PaginaMarcador;
