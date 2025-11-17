import { NavLink } from "react-router-dom";

export default function Navigation() {

  return (
    <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            padding: "16px 0",
            backgroundColor: "#2c4469",
            fontSize: "18px",
            fontWeight: 500,
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/score"
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
            })}
          >
            Marcador
          </NavLink>

          <NavLink
            to="/teams"
            style={({ isActive }) => ({
              color: "white",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: "6px",
              backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "transparent",
            })}
          >
            Equipos
          </NavLink>
        </nav>
  );
}