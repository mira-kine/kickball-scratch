import React from 'react';
import { Link } from 'react-router-dom';
import './Player.css';

export default function PlayerList({ players }) {
  return (
    <>
      <h1 className="players-list">List of Players</h1>
      <div className="player-container">
        <div className="player-cards">
          {players.map((players) => (
            <Link key={players.id} to={`/players/${players.id}`} className="player-link">
              {players.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
