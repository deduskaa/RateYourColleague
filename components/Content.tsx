import React from 'react';
import {SectionList, SectionListData, StyleSheet, Text} from 'react-native';
import {colleagues} from '../colleagues';
import {theme} from '../theme';
import {Colleague} from '../types';
import {ColleagueItem} from './ColleagueItem';
import {Note} from './Note';

export const Content = () => {
  const renderItem = ({item, index}: {item: Colleague; index: number}) => (
    <ColleagueItem key={`${item.title}_${index}`} index={index} {...item} />
  );

  const renderSectionHeader = ({
    section,
  }: {
    section: SectionListData<Colleague, {title: string}>;
  }) => <Text style={styles.header}>{section.title}</Text>;

  return (
    <SectionList
      ListHeaderComponent={Note}
      keyExtractor={(item, index) => `${item}_${index}`}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={[{title: 'Colleagues', data: colleagues}]}
      stickySectionHeadersEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    color: theme.colors.gray[600],
    textTransform: 'uppercase',
  },
});
