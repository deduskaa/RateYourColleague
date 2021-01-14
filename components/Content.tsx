import React from 'react';
import {colleagues} from '../colleagues';
import {ColleagueList} from './ColleagueList';
import {Note} from './Note';

export const Content = () => {
  return (
    <>
      <Note />
      <ColleagueList colleagues={colleagues} />
    </>
  );
};
