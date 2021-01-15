import React, {FC, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  PressableProps,
  Animated,
} from 'react-native';
import {theme} from '../theme';

type ButtonState = 'unknown' | 'pressed' | 'released';

interface Props {
  onPress: PressableProps['onPress'];
}

export const Button: FC<Props> = ({onPress, children}) => {
  if (__DEV__) {
    if (typeof children !== 'string') {
      throw new Error('Button component children must be a string.');
    }
  }

  const [buttonState, setButtonState] = useState<ButtonState>('unknown');
  const scaleRef = useRef(new Animated.Value(1));

  useEffect(() => {
    const toValue = buttonState === 'pressed' ? 1.03 : 1;

    Animated.spring(scaleRef.current, {
      toValue,
      useNativeDriver: true,
    }).start();
  }, [buttonState]);

  return (
    <Pressable
      onPressIn={() => setButtonState('pressed')}
      onPressOut={() => setButtonState('released')}
      onPress={onPress}>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{scale: scaleRef.current}],
          },
        ]}>
        <Text style={styles.text}>{children}</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.indigo[800],
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 60,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    color: '#fff',
  },
});
