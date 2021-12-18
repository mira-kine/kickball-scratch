import React from 'react';
import { fetchPlayers } from '../../services/players';
import { useEffect, useState } from 'react';
import PlayerList from '../../components/Player/PlayerList';

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      setPlayers(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <PlayerList players={players} />
    </div>
  );
}
