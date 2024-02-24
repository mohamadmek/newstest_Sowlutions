import React from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, View} from 'react-native';
import type {ReactNode} from 'react';

interface IFlexBetween {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export const FlexBetween = ({children, style, testID}: IFlexBetween) => (
  <View testID={testID} style={[styles.main, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
});
