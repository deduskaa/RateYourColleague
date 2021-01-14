import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  color: string;
  size: number;
}

export const Ball: FC<Props> = ({size, color}) => {
  return (
    <View
      style={{
        ...styles.ball,
        width: size,
        height: size,
        backgroundColor: color,
      }}
    />
  );
};

const styles = StyleSheet.create({
  ball: {
    width: 10,
    height: 10,
    borderRadius: 100,
  },
});
