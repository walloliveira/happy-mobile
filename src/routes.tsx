
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import OrphanageDetails from './views/OrphanageDetails';
import OrphanagesMap from './views/OrphanagesMap';


const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen
          name='OrphanagesMap'
          component={OrphanagesMap}
        />
        <Screen
          name='OrphanageDetails'
          component={OrphanageDetails}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
