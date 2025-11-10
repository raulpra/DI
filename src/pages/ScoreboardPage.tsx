import { useState } from "react";

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
          <h1 style={{ marginBottom: "15px" }}>🏀 Marcador Reactivo</h1>

          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <h3>Local: {local}</h3>
            <button onClick={() => setLocal(local + 1)}>+1</button>
            <button onClick={() => setLocal(local + 2)}>+2</button>
            <button onClick={() => setLocal(local + 3)}>+3</button>
          </div>

          <div style={{ marginBottom: "20px", textAlign: "center" }}>
            <h3>Visitante: {visitante}</h3>
            <button onClick={() => setVisitante(visitante + 1)}>+1</button>
            <button onClick={() => setVisitante(visitante + 2)}>+2</button>
            <button onClick={() => setVisitante(visitante + 3)}>+3</button>
          </div>

          <h2
            style={{
              color: finalizado ? "#007BFF" : "#000",
              transition: "color 0.3s ease",
            }}
          >
            Resultado: {local} - {visitante}
          </h2>
          <h4>
            {local === visitante
              ? "¡Empate!"
              : local > visitante
              ? "🏠 Gana el equipo local"
              : "🛫 Gana el visitante"}
          </h4>
          <button
            onClick={reiniciar}
            style={{
              marginTop: "20px",
              backgroundColor: "#e63946",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Reiniciar marcador
          </button>
          <div style={{ marginTop: "20px" }}>
            <button
              onClick={() => setFinalizado(true)}
              style={{
                backgroundColor: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              Finalizar partido
            </button>
          </div>

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
