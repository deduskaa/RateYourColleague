import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme';
import {Colleague} from '../types';
import {Ball} from './Ball';

type Props = Colleague & {index: number};

export const ColleagueItem = ({title, description, rating, index}: Props) => {
  const navigation = useNavigation();
  const navigate = () => navigation.navigate(title);

  return (
    <Pressable onPress={navigate} style={styles.item}>
      <Ball
        color={index % 2 ? theme.colors.indigo[800] : theme.colors.yellow[200]}
        size={60}
      />
      <View style={{flex: 1, marginHorizontal: 16}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{color: theme.colors.gray[600]}}>{description}</Text>
      </View>
      <Text style={{color: theme.colors.gray[600]}}>{rating} / 7</Text>
    </Pressable>
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
});
