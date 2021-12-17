import React from 'react';

export default function PlayerDetail({ player }) {
  return (
    <div>
      <div className="player-detail">
        {player.map((item) => (
          <div className="player-card" key={item.id}>
            <p>{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
