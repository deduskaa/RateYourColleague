import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme';

export const Note = () => {
  const [visible, setVisible] = useState(true);

  const dismissNote = () => {
    setVisible(false);
  };

  return visible ? (
    <View style={styles.note}>
      <View style={styles.content}>
        <View style={styles.ball} />
        <Text style={styles.description}>
          <Text style={styles.title}>Welcome user</Text>
          {'\n'}
          Learn the basics of Rate Your Colleague and discover the fun.
        </Text>
      </View>
      <Pressable style={styles.button} onPress={dismissNote}>
        <Text style={styles.buttonText}>Dismiss</Text>
      </Pressable>
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
  ball: {
    backgroundColor: theme.colors.yellow[200],
    borderRadius: 100,
    height: 80,
    marginRight: 20,
    width: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    fontSize: 14,
    flexShrink: 1,
    flexWrap: 'wrap',
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
