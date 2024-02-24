import {StyleSheet, View} from 'react-native';
import React from 'react';
// import {useGetNewsQuery} from '../store/dashboard.api';
import {Card} from '../components/Card';
import {Divider, SectionHeader, Text} from '../../../common/components';

export const Main = () => {
  // const {data, error} = useGetNewsQuery({});

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <SectionHeader title="Today Posts">
          <Text>See all</Text>
        </SectionHeader>
        <Card />
      </View>
      <Divider style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 10,
  },
  cardContainer: {paddingHorizontal: 16},
  divider: {marginVertical: 12},
});
