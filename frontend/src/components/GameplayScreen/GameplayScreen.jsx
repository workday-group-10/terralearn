import * as React from "react";
import "./GameplayScreen.css";
import PinMap from "../PinMap/PinMap";
import StreetViewMap from "../StreetViewMap/StreetViewMap";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function GameplayScreen({ positions, setPositions }) {
  const [guessed, setGuessed] = useState(false);

  const navigate = useNavigate();
  function navSummary() {
    if (guessed == true) {
      navigate("/gameSummary");
    }
  }

  return (
    <div className="gameplay-screen">
      <div className="google_street">
        <StreetViewMap />
      </div>
      <div className="google_map">
        <PinMap
          guessed={guessed}
          setGuessed={setGuessed}
          positions={positions}
          setPositions={setPositions}
        />

        <button onClick={navSummary}>Guess</button>
      </div>
    </div>
  );
}

