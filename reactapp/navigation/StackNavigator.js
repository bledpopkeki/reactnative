import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/native;
import StackNavigator from '.src/navigation/StackNavigator';
import BottomTabNavigator from '.src/navigatin/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigator/> */ }
        <BottomTabNavigator/>
    </NavigationContainer>
  );
}

export default App;