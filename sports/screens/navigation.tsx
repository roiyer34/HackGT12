import { Game, Race } from './types';

export type RootStackParamList = {
  Home: undefined;
  GameDetails: {
    game: Game;
  };
  RaceDetails: { race: Race };
};