import React, {FC, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme';

interface Props {
  emojis: string[];
}

export const FavoriteEmoji: FC<Props> = ({emojis}) => {
  const [selectedEmojiIndex, setSelectedEmojiIndex] = useState(0);

  const selectEmoji = (i: number) => {
    setSelectedEmojiIndex(i);
  };

  return (
    <View>
      <Text style={styles.sectionHeading}>Favorite Emoji</Text>
      <View style={styles.emojis}>
        {emojis.map((emoji, i) => (
          <Pressable
            key={i}
            onPress={() => selectEmoji(i)}
            accessibilityLabel={`Select ${emoji} emoji as favorite emoji`}
            style={[
              styles.emojiWrapper,
              selectedEmojiIndex === i
                ? {backgroundColor: theme.colors.indigo[200]}
                : null,
            ]}>
            <Text style={styles.emoji}>{emoji}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: 'white',
    borderRadius: theme.default.borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 8,
    padding: 24,
  },
  emoji: {
    fontSize: 42,
  },
});
