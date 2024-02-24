import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import {RootNavigator} from './navigation/RootNavigator';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
