import React from 'react';
import { Link } from 'react-router-dom';
// import Team from '../../views/Team';
import './Team.css';

export default function TeamList({ teams }) {
  return (
    <div>
      <div className="container">
        <div className="team-cards">
          {teams.map((team) => (
            <Link key={team.id} to={`/teams/${team.id}`}>
              {team.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
