import React from 'react';
import { fetchTeams } from '../services/teams';
import { useEffect, useState } from 'react';
import TeamList from '../components/Team/TeamList';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      setTeams(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <TeamList teams={teams} />
    </div>
  );
}
