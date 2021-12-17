import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerList({ players }) {
  return (
    <>
      <div className="container">
        <div className="team-cards">
          {players.map((players) => (
            <Link key={players.id} to={`/players/${players.id}`}>
              {players.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
