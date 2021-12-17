import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamById } from '../services/teams';
import TeamDetails from '../components/Team/TeamDetail';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function Team() {
  const [team, setTeam] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(id);
      setTeam(data);
    };
    fetchData;
  }, [id]);

  return (
    <div>
      <TeamDetails team={team} />
    </div>
  );
}
