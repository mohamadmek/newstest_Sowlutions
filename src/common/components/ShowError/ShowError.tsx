import {StyleSheet} from 'react-native';
import React from 'react';
import {CenteredView, Icon, Text} from '..';

export const ShowError = ({title}: {title: string}) => {
  return (
    <CenteredView style={styles.container}>
      <Icon name="alert-circle-outline" size={'xxxLarge'} color="#FF0000" />
      <Text align="center" bold>
        {title}
      </Text>
    </CenteredView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '15%',
    gap: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
});
