import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  selected: boolean;
  style?: any;
}

export const RadioButton: FC<Props> = (props) => {
  return (
    <View style={[styles.radio, props.style]}>
      {props.selected ? <View style={styles.selected} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  selected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
});
