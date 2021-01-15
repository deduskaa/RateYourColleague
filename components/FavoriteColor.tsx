import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {theme} from '../theme';
import {RadioButton} from './RadioButton';

export const FavoriteColor = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const options = ['yellow', 'red', 'blue'];

  const selectOption = (index: number) => setSelectedOption(index);
  return (
    <View>
      <Text style={styles.sectionHeading}>Favorite color</Text>
      <View style={styles.options}>
        {options.map((option, i) => (
          <Pressable
            key={option}
            onPress={() => selectOption(i)}
            style={styles.radioSelection}>
            <RadioButton selected={selectedOption === i} />
            <Text>{option}</Text>
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
  options: {
    backgroundColor: 'white',
    padding: 24,
    marginTop: 8,
    marginBottom: 36,
    borderRadius: theme.default.borderRadius,
  },
  radioSelection: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
  },
});
