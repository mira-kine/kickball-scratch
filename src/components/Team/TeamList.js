import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

export default function TeamList({ teams }) {
  return (
    <>
      <div className="container">
        <h1 className="title">Teams</h1>
        <div className="team-list-cards">
          {teams.map((team) => (
            <Link key={team.id} to={`/teams/${team.id}`}>
              {team.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
