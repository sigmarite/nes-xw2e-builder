export interface IGlyph {
  char: string;
  scss: string;
}

interface IManeuver {
  bearing: string;
  difficulty: string;
  speed: number;
}

export interface IShip {
  factions: string[];
  glyph: IGlyph[];
  maneuvers: IManeuver[];
  name: string;
}
