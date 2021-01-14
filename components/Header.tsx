import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    borderBottomColor: 'lightgrey',
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
    backgroundColor: 'pink',
    marginRight: 16,
  },
});
