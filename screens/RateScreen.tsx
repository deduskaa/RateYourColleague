import React, {FC, useState} from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Ball} from '../components/Ball';
import {theme} from '../theme';
import {Colleague} from '../types';

interface Props {
  colleague: Colleague;
}

export const RateScreen: FC<Props> = ({colleague}) => {
  const [selectedEmojiIndex, setSelectedEmojiIndex] = useState(0);

  const selectEmoji = (i: number) => {
    setSelectedEmojiIndex(i);
  };

  return (
    <ScrollView style={{padding: 24}}>
      <View style={styles.header}>
        <Ball size={90} color={theme.colors.indigo[800]} />
        <View style={{flex: 1, marginLeft: 20}}>
          <Text style={styles.title}>{colleague.title}</Text>
          <Text style={styles.description}>{colleague.description}</Text>
        </View>
      </View>

      <View>
        <Text style={styles.sectionHeading}>Favourite Emoji</Text>
        <View style={styles.emojis}>
          {colleague.emojis.map((emoji, i) => (
            <Pressable
              key={i}
              onPress={() => selectEmoji(i)}
              style={[
                styles.emojiWrapper,
                selectedEmojiIndex === i
                  ? {backgroundColor: theme.colors.indigo[200]}
                  : null,
              ]}>
              <Text style={{fontSize: 42}}>{emoji}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    marginBottom: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    color: theme.colors.gray[600],
    fontSize: 16,
  },
  sectionHeading: {
    color: theme.colors.gray[600],
    fontSize: 16,
    textTransform: 'uppercase',
  },
  emojiWrapper: {
    borderRadius: 100,
    padding: 24,
  },
  emojis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    backgroundColor: 'white',
    borderRadius: theme.default.borderRadius,
    marginVertical: 24,
  },
});
