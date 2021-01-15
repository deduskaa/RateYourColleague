import React, {useState} from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {defaultStyles, theme} from '../theme';

export const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [description, setDescription] = useState('');

  return (
    <KeyboardAvoidingView>
      <View style={defaultStyles.contentPadding}>
        <Text style={styles.label}>Your Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          defaultValue={name}
        />

        <Text style={styles.label}>Your Age</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAge(text)}
          defaultValue={age}
          keyboardType="number-pad"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.description]}
          onChangeText={(text) => setDescription(text)}
          defaultValue={description}
          multiline={true}
          textAlignVertical="top"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.gray[600],
    fontSize: 14,
    marginTop: 24,
    textTransform: 'uppercase',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: theme.colors.gray[600],
    fontSize: 18,
    height: 40,
    marginTop: 8,
  },
  description: {
    height: 80,
  },
});
