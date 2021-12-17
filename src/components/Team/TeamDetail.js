import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamDetail({ team }) {
  return (
    <div>
      <h1>Team Detail</h1>
      {team.map((item) => (
        <div className="team-card" key={item.id}>
          <Link key={item.id} to={`/players`}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
