import React, { useState } from "react";
import "./App.css";

type VALENTIN = "valentin";
type CATHY = "cathy";
type PLAYER = VALENTIN | CATHY;

const CountPlayer = () => {
  const [players, setPlayers] = useState<PLAYER[]>(["valentin"]);

  const addCathy = () => {
    setPlayers([...players, "cathy"]);
  };

  const addVal = () => {
    setPlayers([...players, "valentin"]);
  };

  return (
    <div style={{ backgroundColor: "lightgreen", margin: 10, padding: 10 }}>
      <h1>Les joueurs</h1>

      <button onClick={addCathy}>Cathy</button>
      <button onClick={addVal}>Valentin</button>

      <div style={{ border: "1px solid red", margin: 10, padding: 10 }}>
        {players.map((player) => (
          <BlocPlayer player={player} />
        ))}
      </div>
    </div>
  );
};

const BlocPlayer = ({ player }: { player: PLAYER }) => (
  <div style={{ border: "1px solid green", margin: 10, padding: 10 }}>
    {player}
  </div>
);

export default CountPlayer;
