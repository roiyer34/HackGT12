import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation';
import { Image } from 'react-native';

type NavigationProp = StackNavigationProp<RootStackParamList, 'RaceDetails'>;
type RaceDetailsRouteProp = RouteProp<RootStackParamList, 'RaceDetails'>;

const RaceDetailsScreen = () => {
  const route = useRoute<RaceDetailsRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { race } = route.params;

  const [activeTab, setActiveTab] = useState<'Stats' | 'Weather'>('Stats');

  return (
    <View style={styles.container}>
      {/* Top Header */}
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
          <TouchableOpacity onPress={() => setActiveTab('Weather')}>
            <Text style={[styles.tabText, activeTab === 'Weather' && styles.activeTab]}>
              Weather
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: 24 }} /> {/* Spacer for symmetry */}
      </View>

      {/* Tab Content */}
      <View style={styles.content}>
        {activeTab === 'Stats' ? (
          <Text style={styles.pageText}>Stats page content for {race.name}</Text>
        ) : (
          <Text style={styles.pageText}>Weather of the {race.name}</Text>
        )}
      </View>

      {/* Bottom Info */}
      <View style={styles.scoreContainer}>
        <View style={styles.raceRow}>
          {/* Flag */}
          <Image source={{ uri: race.flag }} style={styles.flag} resizeMode="contain" />

          {/* Race Name */}
          <Text style={styles.raceName}>{race.name} : </Text>

          {/* 1st Place */}
          <Text style={styles.firstPlace}>1st Place: {race.firstPlace}</Text>
        </View>
      </View>
    </View>
  );
};

export default RaceDetailsScreen;

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
  raceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  leftArrow: {
    width: 20,
    alignItems: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 24,
  },
  scoreTextCenter: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 6,
  },
  raceName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  firstPlace: {
    color: '#ccc',
    fontSize: 16,
  },
});