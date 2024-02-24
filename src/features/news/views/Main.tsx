import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
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
import {IArticle} from '../types';
import {CategoryCard} from '../components/CategoryCard';

export type ICategories =
  | 'general'
  | 'world'
  | 'nation'
  | 'business'
  | 'technology'
  | 'entertainment'
  | 'sports'
  | 'health'
  | 'science';

export const Main = () => {
  const categories: ICategories[] = [
    'general',
    'world',
    'nation',
    'business',
    'technology',
    'entertainment',
    'sports',
    'health',
    'science',
  ];
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  const {data, error, isLoading} = useGetNewsQuery(selectedCategory);

  const onRefresh = React.useCallback(() => {
    dispatch(newsApi.util.invalidateTags(['News']));
  }, [dispatch]);

  const renderItem = useCallback((item: IArticle) => {
    return (
      <>
        <View style={styles.screenContainer}>
          <Card article={item} />
        </View>
        <Divider style={styles.divider} />
      </>
    );
  }, []);

  if (isLoading) {
    return <Loading fullScreen />;
  }

  if (error) {
    return <ShowError title="Something went wrong, please try again later" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.categoriesContainer}>
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category}
                isSelected={category === selectedCategory}
                onPress={() => setSelectedCategory(category)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={[styles.screenContainer, styles.sectionHeader]}>
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
        renderItem={({item}) => renderItem(item)}
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
  categoriesContainer: {flexDirection: 'row'},
  screenContainer: {paddingHorizontal: 16},
  divider: {marginVertical: 12},
  seeAll: {color: '#585858'},
  sectionHeader: {marginTop: 5},
});
