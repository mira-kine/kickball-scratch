import client from './client';

export async function fetchTeams() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/teams?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

// export async function fetchTeamById(teams) {
//   const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/teams/?${teams.id}`, {
//     headers: {
//       apikey: process.env.REACT_APP_SUPABASE_KEY,
//       Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
//     },
//   });
//   const data = await resp.json();
//   return data;
// }

export async function fetchTeamById(id) {
  return client.from('teams').select(`*, name (*)`).match({ id: id }).single();
}
