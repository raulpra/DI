type props = {
  onClick: () => void;
  text: string;
  color?: string;
};

export default function ActionButton({
  onClick,
  text,
  color = "#007BFF",
}: props) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "10px 20px",
        margin: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
    >
      {text}
    </button>
  );
}
