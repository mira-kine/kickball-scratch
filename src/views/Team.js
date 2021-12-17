import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamById } from '../services/teams';
import TeamDetail from '../components/Team/TeamDetail';

export default function Team(props) {
  const [team, setTeam] = useState([]);
  // const [players, setPlayers] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeamById(id);
      setTeam(data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <TeamDetail team={team} />
    </div>
  );
}
