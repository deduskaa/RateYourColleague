import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme';

export const Header = () => (
  <View style={styles.wrapper}>
    <View style={styles.profileIcon} />
    <Text style={styles.headerText}>Rate Your Colleague</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: theme.colors.gray[300],
    borderBottomWidth: 1,
  },
  headerText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: theme.colors.indigo[800],
    marginRight: 16,
  },
});
