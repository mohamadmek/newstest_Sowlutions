import type {StyleProp, ViewStyle} from 'react-native';
import {StyleSheet, View} from 'react-native';
import type {ReactNode} from 'react';
import React from 'react';

interface ICenteredViewProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export const CenteredView = ({style, children}: ICenteredViewProps) => (
  <View testID="CenteredView" style={[styles.container, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
