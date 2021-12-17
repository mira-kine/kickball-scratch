import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTeamById } from '../services/teams';
import TeamDetail from '../components/Team/TeamDetail';

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
      <TeamDetail team={team} />
    </div>
  );
}
