
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import OrphanageDetails from './views/OrphanageDetails';
import OrphanagesMap from './views/OrphanagesMap';
import SelectMapPosition from './views/CreateOrphanage/SelectMapPosition';
import OrphanageData from './views/CreateOrphanage/OrphanageData';
import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#f2f3f5',
        },
      }}>
        <Screen
          name='OrphanagesMap'
          component={OrphanagesMap}
        />
        <Screen
          name='OrphanageDetails'
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header showCancel={false} title='Orfanato' />
          }}
        />
        <Screen
          name='SelectMapPosition'
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => <Header title='Selecione no mapa' />
          }}
        />
        <Screen
          name='OrphanageData'
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title='Informe os dados' />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
