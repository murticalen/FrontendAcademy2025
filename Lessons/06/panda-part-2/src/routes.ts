export const API_HOSTNAME = "https://api.sofascore.com/api/v1"
export const teamPlayers = (teamId: number) =>
  `${API_HOSTNAME}/team/${teamId}/players`

export const playerImage = (playerId: number) =>
  `https://master.dev.sofascore.dev/api/v1/player/${playerId}/image`
