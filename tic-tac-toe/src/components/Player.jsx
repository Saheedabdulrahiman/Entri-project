import { useState } from "react";

export default function ({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  const handleSelect = () => {
    setIsEditing((editing) => !editing);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span>
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleSelect}>{isEditing ? "save" : "Edit"}</button>
    </li>
  );
}
