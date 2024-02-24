import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import React from 'react';
import {Card} from '../components/Card';
import {
  Divider,
  Loading,
  SectionHeader,
  ShowError,
  Text,
} from '../../../common/components';
import {newsApi, useGetNewsQuery} from '../store/dashboard.api';
import {useAppDispatch} from '../../../app/storeUtilities';

export const Main = () => {
  const dispatch = useAppDispatch();
  const {data, error, isLoading} = useGetNewsQuery({});

  const onRefresh = React.useCallback(() => {
    dispatch(newsApi.util.invalidateTags(['News']));
  }, [dispatch]);

  if (isLoading) {
    return <Loading fullScreen />;
  }

  if (error) {
    return <ShowError title="Something went wrong, please try again later" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <SectionHeader title="Today Posts">
          <Text bold style={styles.seeAll}>
            See all
          </Text>
        </SectionHeader>
      </View>
      <FlatList
        refreshControl={
          <RefreshControl
            progressBackgroundColor={'#079E01'}
            refreshing={isLoading}
            onRefresh={onRefresh}
          />
        }
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <>
            <View style={styles.screenContainer}>
              <Card article={item} />
            </View>
            <Divider style={styles.divider} />
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingVertical: 10,
  },
  screenContainer: {paddingHorizontal: 16},
  divider: {marginVertical: 12},
  seeAll: {color: '#585858'},
});
