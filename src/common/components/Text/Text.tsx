import type {TextProps, TextStyle} from 'react-native';
import {Text as RNText} from 'react-native';
import React from 'react';

interface ITextProps extends TextProps {
  text?: string | null;
  align?: TextStyle['textAlign'];
  bold?: boolean;
  // TODO: Refactor to be type
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  white?: boolean;
  type?: keyof typeof sizes;
}

const sizes = {
  H1: 30,
  H2: 24,
  H3: 20,
  SUBTITLE1: 18,
  SUBTITLE2: 16,
  BODY1: 14,
  BODY2: 12,
  BODY3: 10,
};

export const Text = ({
  style,
  text,
  align = 'left',
  children,
  bold,
  primary,
  secondary,
  white,
  tertiary,
  type = 'BODY1',
  ...rest
}: ITextProps) => {
  const addedStyles: TextStyle = {};
  if (bold) {
    addedStyles.fontWeight = 'bold';
  }

  addedStyles.fontSize = sizes[type];

  return (
    <RNText style={[addedStyles, {textAlign: align}, style]} {...rest}>
      {text || children}
    </RNText>
  );
};
