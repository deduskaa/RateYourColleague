import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Content} from '../components/Content';
import {Header} from '../components/Header';

export const MainScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <View style={{padding: 24}}>
        <Content />
      </View>
    </SafeAreaView>
  );
};
