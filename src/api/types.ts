export interface Player {
  name: string;
  lastname: string;
  wins?: number;
}

export interface StoredPlayer extends Player {
  id: string;
}

export interface Players {
  players: Player[];
}
