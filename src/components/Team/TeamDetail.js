import React from 'react';
// import { Link } from 'react-router-dom';
import './Team.css';

export default function TeamDetail({ team }) {
  return (
    <div>
      <h1>Team Detail</h1>
      {team.map((item) => (
        <div className="team-detail-card" key={item.id}>
          <p>{item.city}</p>
        </div>
      ))}
    </div>
  );
}
