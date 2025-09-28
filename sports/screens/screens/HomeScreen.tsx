import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';
import {Game, Race} from '../types'

type GameSectionProps = {
  title: string;
  icon: string;
  games: Game[];
};

type GameButtonProps = {
  game: Game;
  icon: string;
};

type RaceSectionProps = {
  title: string;
  icon: string;
  races: Race[];
};

type RaceButtonProps = {
  race: Race;
  icon: string;
}

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Past Games</Text>

      <GameSection title="NFL" icon="football-ball" games={nflGames} />
      <GameSection title="NBA" icon="basketball-ball" games={nbaGames} />
      <RaceSection title="F1" icon="car" races={f1Races} />
      <GameSection title="Soccer" icon="futbol" games={soccerGames} />
    </ScrollView>
  );
}

const GameSection: React.FC<GameSectionProps> = ({ title, icon, games }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {games.map((game, index) => (
        <GameButton key={index} game={game} icon={icon} />
      ))}
    </View>
  );
};

const GameButton: React.FC<GameButtonProps> = ({ game, icon }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GameDetails', { game })}>
      {/* Left icon */}
      <View style={styles.leftIcon}>
          <FontAwesome5 name={icon} size={24} color="#fff" />
      </View>

      {/* Center content: teams + score */}
      <View style={styles.centerContent}>
        <View style={styles.team}>
          <Image
            source={{ uri: game.team1.logo }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.teamName}>{game.team1.name}</Text>
        </View>

        <Text style={styles.vsText}>vs.</Text>

        <View style={styles.team}>
          <Image
            source={{ uri: game.team2.logo }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.teamName}>{game.team2.name}</Text>
        </View>

        <Text style={[styles.score, { marginLeft: 10 }]}>{game.score}</Text>
      </View>

      {/* Right arrow */}
      <View style={styles.rightArrow}>
        <Text style={styles.arrow}>&gt;</Text>
      </View>
    </TouchableOpacity>
  );
};

const RaceSection: React.FC<RaceSectionProps> = ({ title, icon, races }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {races.map((race, index) => (
        <RaceButton key={index} race={race} icon={icon} />
      ))}
    </View>
  );
};

const RaceButton: React.FC<RaceButtonProps> = ({ race, icon }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('RaceDetails', { race })}
    >
      {/* Left F1 Icon */}
      <View style={styles.leftIcon}>
        <FontAwesome5 name={icon} size={24} color="#fff" />
      </View>

      {/* Center: Flag + Race Name + Winner */}
      <View style={styles.centerContent}>
        <Image
            source={{ uri: race.flag }}
            style={styles.flag}
            resizeMode="contain"
          />
        <Text style={[styles.teamName, { fontWeight: 'bold', marginRight: 6 }]}>
              {race.name} :
        </Text>
        <Text style={styles.score}>1st Place: {race.firstPlace}</Text>
      </View>

      {/* Right Arrow */}
      <View style={styles.rightArrow}>
        <Text style={styles.arrow}>&gt;</Text>
      </View>
    </TouchableOpacity>
  );
};

// Sample data
const nflGames = [
  {
    team1: {
      name: 'Patriots',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b9/New_England_Patriots_logo.svg',
    },
    team2: {
      name: 'Falcons',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Atlanta_Falcons_logo.svg/1200px-Atlanta_Falcons_logo.svg.png',
    },
    score: '34 - 28',
  },
];

const nbaGames = [
  {
    team1: {
      name: 'Lakers',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Los_Angeles_Lakers_logo.svg',
    },
    team2: {
      name: 'Celtics',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Boston_Celtics.svg',
    },
    score: '102 - 104',
  },
];

const f1Races = [
  {
    name: 'Monaco Grand Prix',
    firstPlace: 'Lewis Hamilton',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/330px-Flag_of_Monaco.svg.png'
  },
];

const soccerGames = [
  {
    team1: {
      name: 'Barcelona',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
    },
    team2: {
      name: 'Real Madrid',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
    },
    score: '2 - 3',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    alignSelf: 'center',
  },
  section: {
    marginBottom: 60,
    alignItems: 'center', // centers children horizontally
  },
  sectionTitle: {
    fontSize: 22,
    color: '#ccc',
    marginBottom: 10,
    width: '95%',
    textAlign: 'center',
  },
  button: {
    width: '95%',
    height: '100%',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // push left, center, right apart
    marginBottom: 12,
    alignSelf: 'center', // center the button horizontally
  },
  leftIcon: {
    width: 30,
    alignItems: 'center',
  },
  centerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', // center teams+score horizontally
    alignItems: 'center',
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 6,
  },
  teamName: {
    color: '#fff',
    fontSize: 14,
    marginRight: 10,
  },
  vsText: {
    color: '#aaa',
    fontSize: 14,
    marginHorizontal: 5,
  },
  score: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  rightArrow: {
    width: 20,
    alignItems: 'center',
  },
  arrow: {
    color: '#888',
    fontSize: 18,
  },
});