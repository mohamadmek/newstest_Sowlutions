import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main} from '../features/news/views/Main';
import {TMainStackParamList} from './types';

const Stack = createNativeStackNavigator<TMainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTintColor: '#5F2B78',
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerTitleStyle: {
          color: '#5F2B78',
          fontSize: 18,
          fontWeight: '400',
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
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
