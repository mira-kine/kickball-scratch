import React from 'react';
import './Player.css';

export default function PlayerDetail({ player }) {
  return (
    <div>
      <div className="player-detail">
        <p className="player-name">{player.name}</p>
        <p>Position: {player.position}</p>
        <p>Team ID: {player.team_id}</p>
      </div>
    </div>
  );
}
