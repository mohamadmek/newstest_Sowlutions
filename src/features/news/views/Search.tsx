import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React from 'react';
import {Pressable} from 'react-native';
import {Card} from '../components/Card';
import {
  Divider,
  Loading,
  NoData,
  ShowError,
  Text,
} from '../../../common/components';
import {useLazySearchNewsQuery} from '../store/dashboard.api';

// Add clear input
// Add Categories filtration
// Maybe Carousel
// make apiKey as constant
// Add some tests
// Make renderItem as component

export const Search = () => {
  const [searchNews, {data, isLoading, error, isUninitialized, isFetching}] =
    useLazySearchNewsQuery();
  const [search, onChangeSearch] = React.useState('');

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.screenContainer}>
          {/* Normally I would use React-Hook-Form and Yup or zod for validations */}
          <TextInput
            style={[
              styles.input,
              {
                borderColor: search !== '' ? '#079E01' : 'gray',
                borderWidth: search !== '' ? 2 : 1,
              },
            ]}
            value={search}
            onChangeText={onChangeSearch}
            placeholder="Search"
          />
          {error ? <ShowError title="Something went wrong!" /> : null}
        </View>
        {isLoading || isFetching ? (
          <Loading fullScreen />
        ) : (
          <FlatList
            contentContainerStyle={{marginTop: 10}}
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
            renderItem={({item}) => (
              <>
                <View style={styles.screenContainer}>
                  <Card article={item} />
                </View>
                <Divider style={styles.divider} />
              </>
            )}
            data={data}
          />
        )}

        <View style={styles.screenContainer}>
          <Pressable
            disabled={search === '' || isLoading || isFetching}
            style={[styles.searchButton, {opacity: search === '' ? 0.5 : 1}]}
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
    </KeyboardAvoidingView>
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
  },
  divider: {marginVertical: 12},
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});