import React from 'react';
import {ScrollView} from 'react-native';
import {Colleague} from '../types';
import {ColleagueList} from './ColleagueList';
import {Note} from './Note';

declare const global: {HermesInternal: null | {}};

export const Content = () => {
  const colleagues: Colleague[] = [
    {title: 'Title', description: 'Desc', rating: 5},
    {title: 'Title', description: 'Desc', rating: 5},
    {title: 'Title', description: 'Desc', rating: 5},
    {title: 'Title', description: 'Desc', rating: 5},
    {title: 'Title', description: 'Desc', rating: 5},
    {title: 'Title', description: 'Desc', rating: 5},
    {title: 'Title', description: 'Desc', rating: 5},
    {title: 'Title', description: 'Desc', rating: 5},
  ];
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{padding: 24}}>
      <Note />
      <ColleagueList colleagues={colleagues} />
    </ScrollView>
  );
};
