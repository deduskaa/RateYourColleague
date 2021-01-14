import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Content} from './components/Content';
import {Header} from './components/Header';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <Content />
      </SafeAreaView>
    </>
  );
};

export default App;
