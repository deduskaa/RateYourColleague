import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Content} from '../components/Content';
import {Header} from '../components/Header';

export const MainScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{padding: 24}}>
        {/* <StatusBar barStyle="dark-content" /> */}
        <Content />
      </ScrollView>
    </SafeAreaView>
  );
};
