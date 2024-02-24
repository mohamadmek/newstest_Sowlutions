import React from 'react';
import type {IconProps} from 'react-native-vector-icons/Icon';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IIconProps extends Omit<IconProps, 'size'> {
  size?: IconSizeProps['iconSizes'];
  name: string;
  // type?: 'primary' | 'secondary' | 'error';
}

export const IconSizes = {
  small: 16,
  medium: 18,
  xMedium: 20,
  large: 23,
  xLarge: 27,
  xxLarge: 36,
  xxxLarge: 52,
};

export const Icon = ({
  size = 'medium',
  name,
  // type = 'primary',
  disabled,
  style,
  testID = 'icon',
  ...rest
}: IIconProps) => {
  const color = disabled ? 'black' : 'grey';

  return (
    <MIcon
      name={name}
      size={IconSizes[size]}
      color={color}
      disabled={disabled}
      style={style}
      testID={testID === 'icon' ? `icon-${name}` : testID}
      {...rest}
    />
  );
};
