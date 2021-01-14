import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainScreen} from './screens/MainScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {colleagues} from './colleagues';
import {RateScreen} from './screens/RateScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        {colleagues.map((colleague) => (
          <Stack.Screen
            name={colleague.title}
            children={() => <RateScreen colleague={colleague} />}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
