import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

export default function TeamDetail({ team }) {
  return (
    <div>
      {team.players.map((item) => (
        <div className="team-detail-card" key={item.id}>
          <p>{item.name}</p>
          <p>{item.city}</p>
          <p>{item.state}</p>
        </div>
      ))}
    </div>
  );
}
