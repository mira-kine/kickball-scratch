import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

export default function TeamDetail({ team }) {
  return (
    <div>
      {team.players.map((item) => (
        <div className="player-list-card" key={item.id}>
          <Link key={item.id} to={`/players/${item.id}`}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
