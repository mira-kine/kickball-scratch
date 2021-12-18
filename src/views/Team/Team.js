import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamById } from '../services/teams';
import TeamDetail from '../components/Team/TeamDetail';
import './Views.css';

export default function Team(props) {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(id);
      setTeam(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div className="team-detail-card">
        <p>{team.name}</p>
        <p>{team.city}</p>
      </div>
      <TeamDetail team={team} />
    </div>
  );
}
