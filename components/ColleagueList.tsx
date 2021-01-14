import React from 'react';
import {Text, View} from 'react-native';
import {theme} from '../theme';
import {Colleague} from '../types';
import {ColleagueItem} from './ColleagueItem';

interface Props {
  colleagues: Colleague[];
}

export const ColleagueList = ({colleagues}: Props) => {
  return (
    <View>
      <Text style={{textTransform: 'uppercase', color: theme.colors.gray[700]}}>
        Colleagues
      </Text>

      {colleagues.map((colleague, index) => (
        <ColleagueItem
          key={`${colleague.title}_${index}`}
          index={index}
          {...colleague}
        />
      ))}
    </View>
  );
};
