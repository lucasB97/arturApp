import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ChatBotArtur from './components/ChatBotArtur';

const AppStack = createStackNavigator();

const Routes = () => {

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" initialRouteName="ChatBotArtur">
        <AppStack.Screen name="ChatBotArtur" component={ChatBotArtur} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;