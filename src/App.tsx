import { useState } from "react";

function App() {
  const [local, setLocal] = useState(0);
  const [visitante, setVisitante] = useState(0);

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
              color: "#000",
            }}
          >
            Resultado: {local} - {visitante}
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
