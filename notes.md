# Plan

## Organizing Folders

- [x] views
  - [x] Teams.js (all the teams)
  - [x] Team.js (individual teams, url /teams/:id)
  - [x] Players.js (all the players)
  - [x] Player.js (individual players, url /players/:id)
  - [x] Home.js
- [x] components
  - [x] TeamList.js
  - [x] PlayerList.js
  - [x] TeamDetail.js
  - [x] PlayerDetail.js
- [x] services
  - [x] client.js
  - [x] players.js -> fetchPlayers, fetchPlayerById to match by id
  - [x] teams.js -> fetchTeams, fetchTeamById to match by id
- [x] Make NavLinks/Routes in App.js
  - [x] Teams Nav Link
  - [x] Teams/:id navlink
  - [x] Player Nav Link

## Create API calls to SupaBase

- [x] fetchTeams
- [x] fetchTeamById
- [x] fetchPlayers
- [ ] fetchPlayerById

## Start with Team

1. Starting with views to setStates

- [x] Teams.js -> useEffect and fetchData from teams.js using fetchTeams, useState [teams, setTeams]

2. After setStates and fetchData, work on TeamList to render all teams

- [x] TeamList.js -> teams.map to create team links that will link to Team.js

3. Team.js will render each team individually by id

- [x] use useEffect and fetchTeamById API call, and props.match.params.id to render individual team
- [x] renders team details by calling TeamDetail.js component

4. TeamDetail.js includes list of players for individual team

- [x] .map list of players with Player Links according to team

## Players

1. Create views to setStates

- [ ] Players.js -> useEffect and fetchData from players.js using fetchPlayers, useState [ players, setPlayers], fetchPlayerById [player, setPlayer]

2. Create PlayersList.js component that renders all players in the league

- [ ] PlayersList.js takes in players and setPlayers, renders player links

3. Player.js renders player information individually (/players/:id)

- [ ] display individual player information
