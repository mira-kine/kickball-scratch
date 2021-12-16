# Plan

## Organizing Folders

- [x] views
  - [x] Teams.js (all the teams)
  - [x] Team.js (individual teams, url /teams/:id)
  - [x] Players.js (all the players)
  - [x] Player.js (individual players, url /players/:id)
- [x] components
  - [x] TeamList.js
  - [x] PlayerList.js
  - [x] TeamDetail.js
  - [x] PlayerDetail.js
- [ ] services
  - [x] client.js
  - [x] players.js -> fetchPlayers, fetchPlayerById to match by id
  - [x] teams.js -> fetchTeams, fetchTeamById to match by id
- [ ] Make NavLinks/Routes

## Start with Team

1. Starting with views to setStates

- [ ] Teams.js -> useEffect and fetchData from teams.js using fetchTeams, useState [teams, setTeams]

2. After setStates and fetchData, work on TeamList to render all teams

- [ ] TeamList.js -> teams.map to create team links that will link to Team.js

3. Team.js will render each team individually by id

- [ ] use useEffect and fetchTeamById API call, and props.match.params.id to render individual team
- [ ] renders team details by calling TeamDetail.js component

4. TeamDetail.js includes list of players for individual team

- [ ] .map list of players with Player Links according to team

## Players

1. Create views to setStates

- [ ] Players.js -> useEffect and fetchData from players.js using fetchPlayers, useState [ players, setPlayers], fetchPlayerById [player, setPlayer]

2. Create PlayersList.js component that renders all players in the league

- [ ] PlayersList.js takes in players and setPlayers, renders player links

3. Player.js renders player information individually (/players/:id)

- [ ] display individual player information
