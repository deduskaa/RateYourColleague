import React from 'react';
import {SectionList, StyleSheet, Text} from 'react-native';
import {colleagues} from '../colleagues';
import {theme} from '../theme';
import {Colleague} from '../types';
import {ColleagueItem} from './ColleagueItem';
import {Note} from './Note';

export const Content = () => {
  const renderItem = ({item, index}: {item: Colleague; index: number}) => (
    <ColleagueItem key={`${item.title}_${index}`} index={index} {...item} />
  );
  return (
    <SectionList
      keyExtractor={(item, index) => `${item}_${index}`}
      sections={[{title: 'Colleagues', data: colleagues}]}
      renderItem={renderItem}
      ListHeaderComponent={Note}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    color: theme.colors.gray[600],
    textTransform: 'uppercase',
  },
});
