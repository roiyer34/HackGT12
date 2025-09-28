import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { Image } from 'react-native';

type NavigationProp = StackNavigationProp<RootStackParamList, 'GameDetails'>;
type GameDetailsRouteProp = RouteProp<RootStackParamList, 'GameDetails'>;


const GameDetailsScreen = () => {
  const route = useRoute<GameDetailsRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { game } = route.params;

  const [activeTab, setActiveTab] = useState<'Stats' | 'Plays'>('Stats');

  return (
    <View style={styles.container}>
      {/* Top header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.leftArrow}>
            <Text style={styles.arrow}>&lt;</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.tabs}>
          <TouchableOpacity onPress={() => setActiveTab('Stats')}>
            <Text style={[styles.tabText, activeTab === 'Stats' && styles.activeTab]}>
              Stats
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('Plays')}>
            <Text style={[styles.tabText, activeTab === 'Plays' && styles.activeTab]}>
              Plays
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: 24 }} /> {/* spacer for symmetry */}
      </View>

      {/* Tab content */}
      <View style={styles.content}>
        {activeTab === 'Stats' ? (
          <Text style={styles.pageText}>Stats page content for {game.team1.name} vs {game.team2.name}</Text>
        ) : (
          <Text style={styles.pageText}>Plays page content for {game.team1.name} vs {game.team2.name}</Text>
        )}
      </View>

      {/* Bottom score */}
      <View style={styles.scoreContainer}>
      <View style={styles.scoreRow}>
        {/* Team 1 */}
        <View style={styles.teamContainer}>
          <Image source={{ uri: game.team1.logo }} style={styles.teamLogo} resizeMode="contain" />
          <Text style={styles.teamName}>{game.team1.name}</Text>
        </View>

        {/* Score */}
        <Text style={styles.scoreTextCenter}>{game.score}</Text>

        {/* Team 2 */}
        <View style={styles.teamContainer}>
          <Image source={{ uri: game.team2.logo }} style={styles.teamLogo} resizeMode="contain" />
          <Text style={styles.teamName}>{game.team2.name}</Text>
        </View>
      </View>
    </View>

    </View>
  );
};

export default GameDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111',
    height: 60,
  },
  tabs: {
    flexDirection: 'row',
    gap: 20,
  },
  tabText: {
    color: '#aaa',
    fontSize: 18,
    marginHorizontal: 10,
  },
  activeTab: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  pageText: {
    color: '#fff',
    fontSize: 16,
  },
  scoreContainer: {
    padding: 20,
    backgroundColor: '#1a1a1a',
    borderTopWidth: 1,
    borderTopColor: '#333',
    alignItems: 'center',
  },
  scoreText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 4,
  },
  leftArrow: {
    width: 20,
    alignItems: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 24,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', // Or 'space-evenly'
    paddingHorizontal: 16,
    width: '40%',
  },
  teamContainer: {
    alignItems: 'center',
  },
  teamLogo: {
    width: 50,
    height: 50,
    marginBottom: 4,
  },
  teamName: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  scoreTextCenter: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});