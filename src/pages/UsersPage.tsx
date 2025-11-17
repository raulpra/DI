import { useEffect, useState } from "react";
import Title from "../components/Title";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("No se pudo cargar la API 😢");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p>{error}</p>;

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
      <Title text="⛹🏼‍♀️ Usuarios" />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "10px 0",
            }}
          >
            <p>
              {user.username}, {user.email}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
