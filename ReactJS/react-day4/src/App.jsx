
import { useState, useEffect } from "react";
import EventCard from "./EventCard";

function App() {
  const [time, setTime] = useState(new Date());

  const roles = [
    { name: "Frontend Developer", color: "#DBEAFE" },
    { name: "Backend Developer", color: "#FCE7F3" },
    { name: "Fullstack Developer", color: "#D1FAE5" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #E0F2FE, #FCE7F3)",
      padding: "30px 15px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      color: "#1E293B"
    }}>
      <h1 style={{ color: "#4338CA" }}>
        React Day 4 - Assessment
      </h1>

      <div style={{
        maxWidth: "450px",
        margin: "25px auto",
        padding: "25px",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0 8px 25px #00000015"
      }}>
        <h2>Developer Roles</h2>

        {roles.map((role) => (
          <div key={role.name} style={{
            background: role.color,
            padding: "15px",
            margin: "10px 0",
            borderRadius: "12px",
            fontWeight: "bold"
          }}>
            {role.name}
          </div>
        ))}

        <h2>Live Digital Clock</h2>

        <h1 style={{ color: "#4F46E5" }}>
          {time.toLocaleTimeString()}
        </h1>

        <p>{time.toLocaleDateString()}</p>
      </div>

      <h2 style={{ color: "#4338CA" }}>
        Baby Boss Event Card
      </h2>

      <EventCard />
    </div>
  );
}

export default App;