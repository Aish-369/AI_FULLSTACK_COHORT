
import { useState, useEffect } from "react";

function EventCard() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      width: "300px",
      margin: "20px auto",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      fontFamily: "Arial"
    }}>
      <img
        src="/babyboss.jpg"
        alt="Baby Boss"
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h2>Baby Boss Event</h2>
      <p><b>Event Name:</b> Baby Boss</p>
      <p><b>Title:</b> Fun & Entertainment</p>
      <p><b>Date:</b> 20 October 2026</p>
      <p><b>Time:</b> 10 AM - 12 PM</p>

      <hr />

      <h3>Current Date & Time</h3>
      <p>{time.toLocaleString()}</p>
    </div>
  );
}

export default EventCard;