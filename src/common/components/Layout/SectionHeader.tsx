import React from 'react';
import {StyleSheet, type StyleProp, type ViewStyle} from 'react-native';
import type {ReactNode} from 'react';
import {FlexBetween} from './FlexBetween';
import {Text} from '../Text/Text';

interface ISectionHeader {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  title: string;
}

export const SectionHeader = ({children, title, style}: ISectionHeader) => (
  <FlexBetween style={[style, styles.container]}>
    <Text bold type="H3">
      {title}
    </Text>
    {children}
  </FlexBetween>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
});
