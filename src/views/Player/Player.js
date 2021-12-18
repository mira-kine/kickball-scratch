import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPlayerById } from '../../services/players';
import PlayerDetail from '../../components/Player/PlayerDetail';

export default function Player(props) {
  const [player, setPlayer] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayerById(id);
      setPlayer(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <PlayerDetail player={player} />
    </div>
  );
}
