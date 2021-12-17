import React from 'react';

export default function PlayerDetail({ player }) {
  return (
    <div>
      <div className="player-detail">
        <p>{player.name}</p>
        <p>{player.position}</p>
        <p>Team ID: {player.team_id}</p>
      </div>
    </div>
  );
}
