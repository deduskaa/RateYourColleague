import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme';
import {Colleague} from '../types';

type Props = Colleague & {index: number};

export const ColleagueItem = ({title, description, rating, index}: Props) => {
  return (
    <View key={title} style={styles.item}>
      <View
        style={{
          ...styles.ball,
          backgroundColor:
            index % 2 ? theme.colors.indigo[800] : theme.colors.yellow[200],
        }}
      />
      <View style={{flex: 1}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{color: theme.colors.gray[600]}}>{description}</Text>
      </View>
      <Text style={{color: theme.colors.gray[600]}}>{rating} / 7</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    borderRadius: theme.default.borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  ball: {
    borderRadius: 100,
    height: 60,
    marginRight: 16,
    width: 60,
  },
});
