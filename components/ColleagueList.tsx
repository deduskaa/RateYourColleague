import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {theme} from '../theme';
import {Colleague} from '../types';
import {ColleagueItem} from './ColleagueItem';

interface Props {
  colleagues: Colleague[];
}

export const ColleagueList = ({colleagues}: Props) => {
  return (
    <View>
      <Text
        style={{textTransform: 'capitalize', color: theme.colors.gray[700]}}>
        Colleagues
      </Text>
      <FlatList
        data={colleagues}
        renderItem={({item, index}) => (
          <ColleagueItem {...item} index={index} />
        )}
      />
    </View>
  );
};
