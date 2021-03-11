export interface Player {
  id: string;
  name: string;
  lastname: string;
  wins: number;
}

export interface Players {
  players: Player[];
}
