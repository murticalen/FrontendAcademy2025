export const API_HOSTNAME = "https://api.sofascore.com/api/v1"
export const teamPlayers = (teamId: number) =>
  `${API_HOSTNAME}/team/${teamId}/players`
