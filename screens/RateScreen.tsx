import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Ball} from '../components/Ball';
import {Button} from '../components/Button';
import {FavoriteColor} from '../components/FavoriteColor';
import {FavoriteEmoji} from '../components/FavoriteEmoji';
import {defaultStyles, theme} from '../theme';
import {Colleague} from '../types';

interface Props {
  colleague: Colleague;
}

export const RateScreen: FC<Props> = ({colleague}) => {
  const sendFeedback = () => console.log('helllo');
  return (
    <ScrollView style={defaultStyles.contentPadding}>
      <View style={styles.header}>
        <Ball size={90} color={theme.colors.indigo[800]} />
        <View style={{flex: 1, marginLeft: 20}}>
          <Text style={styles.title}>{colleague.title}</Text>
          <Text style={styles.description}>{colleague.description}</Text>
        </View>
      </View>

      <FavoriteEmoji emojis={colleague.emojis} />
      <FavoriteColor />
      <Button onPress={sendFeedback}>Send Feedback</Button>
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
});
