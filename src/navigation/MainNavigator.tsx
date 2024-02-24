import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TMainStackParamList} from './types';
import {Icon} from '../common/components';
import {useNavigation} from '@react-navigation/native';
import {Main, Search} from '../features/news/views';

const Stack = createNativeStackNavigator<TMainStackParamList>();

export const MainNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTintColor: '#000',
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          color: '#000',
          fontSize: 18,
          fontWeight: 'bold',
        },
        headerShadowVisible: false,
      })}>
      {/* News */}
      <Stack.Group screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="MainNews"
          component={Main}
          options={() => ({
            headerTitle: 'News',
            headerRight: () => (
              <Icon
                onPress={() => navigation.navigate('SearchNews')}
                name="magnify"
                size="xLarge"
              />
            ),
          })}
        />
        <Stack.Screen
          name="SearchNews"
          component={Search}
          options={() => ({
            headerTitle: 'Search News',
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};