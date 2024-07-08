import React from "react";
import Card from "../components/Card";
import UpcomingBirthday from "../components/UpcomingBirthday";

export default function Home() {
  return (
    <div className="body">
      <h1 style={{ color: "lightpink" }}>Today's Birthday</h1>
      <Card />
      <h1 style={{ color: "lightgreen" }}>Upcoming Birthday</h1>
      <UpcomingBirthday />
    </div>
  );
}
