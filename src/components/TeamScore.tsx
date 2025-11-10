type props = {
  nombre: string;
  puntos: number;
  onScoreChange?: (puntos: number) => void;
};

export default function TeamScore({ nombre, puntos, onScoreChange }: props) {
  const sumar = (valor: number) => {
    const nuevo = puntos + valor;
    onScoreChange?.(nuevo);
    return nuevo;
  };

  return (
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <h3>
        {nombre}: {puntos}
      </h3>
      <button onClick={() => sumar(1)}>+1</button>
      <button onClick={() => sumar(2)}>+2</button>
      <button onClick={() => sumar(3)}>+3</button>
    </div>
  );
}
