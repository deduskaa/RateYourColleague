import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Content} from '../components/Content';
import {Header} from '../components/Header';
import {defaultStyles} from '../theme';

export const MainScreen = () => {
  return (
    <SafeAreaView>
      <Header />
      <View style={[defaultStyles.contentPadding]}>
        <Content />
      </View>
    </SafeAreaView>
  );
};
