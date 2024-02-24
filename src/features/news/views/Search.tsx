import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Platform,
  Keyboard,
  ViewStyle,
} from 'react-native';
import React, {useCallback} from 'react';
import {Pressable} from 'react-native';
import {Card} from '../components/Card';
import {
  DismissKeyboardView,
  Divider,
  Icon,
  Loading,
  NoData,
  ShowError,
  Text,
} from '../../../common/components';
import {useLazySearchNewsQuery} from '../store/dashboard.api';
import {IArticle} from '../types';

export const Search = () => {
  const [searchNews, {data, isLoading, error, isUninitialized, isFetching}] =
    useLazySearchNewsQuery();
  const [search, onChangeSearch] = React.useState('');

  const inputStyles: ViewStyle = {
    borderColor: search !== '' ? '#079E01' : 'gray',
    borderWidth: search !== '' ? 2 : 1,
  };

  const buttonStyles: ViewStyle = {opacity: search === '' ? 0.5 : 1};
  const clearButtonStyles: ViewStyle = {opacity: search === '' ? 0 : 1};

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

  return (
    <DismissKeyboardView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 80}>
      <View style={styles.container}>
        <View style={styles.screenContainer}>
          {/* Normally I would use React-Hook-Form and Yup or zod for validations */}
          {/* // Add clear input */}
          <View>
            <TextInput
              style={[styles.input, inputStyles]}
              value={search}
              onChangeText={onChangeSearch}
              placeholder="Search"
            />
            <Pressable
              style={[styles.clearButton, clearButtonStyles]}
              onPress={() => onChangeSearch('')}>
              <Icon name="close" size="large" />
            </Pressable>
          </View>
          {error ? <ShowError title="Something went wrong!" /> : null}
        </View>
        {isLoading || isFetching ? (
          <Loading fullScreen />
        ) : (
          <FlatList
            contentContainerStyle={styles.list}
            ListEmptyComponent={
              <NoData
                text={
                  isUninitialized
                    ? search === ''
                      ? 'Search here'
                      : ''
                    : 'No results found'
                }
              />
            }
            renderItem={({item}) => renderItem(item)}
            data={data}
          />
        )}

        <View style={styles.screenContainer}>
          <Pressable
            disabled={search === '' || isLoading || isFetching}
            style={[styles.searchButton, buttonStyles]}
            onPress={() => {
              searchNews(search);
              Keyboard.dismiss();
            }}>
            {isLoading || isFetching ? (
              <Loading />
            ) : (
              <Text white bold>
                Search
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </DismissKeyboardView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 5,
    paddingBottom: 10,
  },
  screenContainer: {paddingHorizontal: 16},
  searchButton: {
    backgroundColor: '#079E01',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  divider: {marginVertical: 12},
  input: {
    height: 40,
    paddingLeft: 10,
    paddingRight: 40,
    borderRadius: 8,
  },
  list: {marginTop: 10},
  clearButton: {position: 'absolute', right: 10, top: 8},
});
