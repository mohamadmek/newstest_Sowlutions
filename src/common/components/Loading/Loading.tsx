import type {StyleProp, ViewProps, ViewStyle} from 'react-native';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {memo} from 'react';

interface ILoadingProps extends ViewProps {
  fullScreen?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Loading = memo(({fullScreen = true, ...rest}: ILoadingProps) => {
  const addedStyles: ViewStyle = {height: fullScreen ? '100%' : 0};
  return (
    <View
      testID="loadingComp"
      style={[styles.container, addedStyles]}
      {...rest}>
      <ActivityIndicator size="small" color={'#079E01'} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#fff',
  },
});
