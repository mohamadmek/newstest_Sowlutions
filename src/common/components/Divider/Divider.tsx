import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, View} from 'react-native';
import React from 'react';

interface IDividerProps {
  style?: StyleProp<ViewStyle>;
}

export const Divider = ({style}: IDividerProps) => (
  <View style={[styles.divider, style]} />
);

const styles = StyleSheet.create({
  divider: {
    backgroundColor: 'lightgrey',
    height: 1,
    width: '100%',
  },
});
