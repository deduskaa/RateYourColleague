import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme';
import {Ball} from './Ball';
import {Button} from './Button';

export const Note = () => {
  const [visible, setVisible] = useState(true);

  const dismissNote = () => {
    setVisible(false);
  };

  return visible ? (
    <View style={styles.note}>
      <View style={styles.content}>
        <Ball size={80} color={theme.colors.yellow[200]} />
        <Text style={styles.description}>
          <Text style={styles.title}>Welcome user</Text>
          {'\n'}
          Learn the basics of Rate Your Colleague and discover the fun.
        </Text>
      </View>
      <Button onPress={dismissNote}>Dismiss</Button>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  note: {
    backgroundColor: theme.colors.gray[200],
    borderRadius: theme.default.borderRadius,
    paddingTop: 32,
    paddingBottom: 24,
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    flexShrink: 1,
    flexWrap: 'wrap',
    marginLeft: 20,
  },
  button: {
    backgroundColor: theme.colors.indigo[800],
    padding: 16,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
});
