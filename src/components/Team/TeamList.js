import React from 'react';
import { Link } from 'react-router-dom';
import Team from '../../views/Team';

export default function TeamList({ teams }) {
  return (
    <>
      <div className="container">
        <div className="team-cards">
          {teams.map((team) => (
            <Link key={team.id} to={`/teams/${team.id}`}>
              <Team team={team} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
