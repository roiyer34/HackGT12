import { RouteProp } from '@react-navigation/native';

export type Game = {
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  score: string;
};

export type Race = {
  name: string;
  firstPlace: string;
}