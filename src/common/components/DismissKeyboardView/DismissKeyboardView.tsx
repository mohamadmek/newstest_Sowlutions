import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import React from 'react';

interface IDismissKeyboardViewProps {
  keyboardVerticalOffset?: number;
  children: React.ReactNode;
}

export const DismissKeyboardView = ({
  keyboardVerticalOffset,
  children,
}: IDismissKeyboardViewProps) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={keyboardVerticalOffset}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
