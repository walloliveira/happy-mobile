import { Feather } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarker from '../assets/map-marker.png';
import api from '../services/api';
import { Orphanage } from './Orphanage';

const OrphanagesMap: React.FC = () => {
  const navigation = useNavigation();
  const [orphanages, setOrphanages] = useState<Array<Orphanage>>([]);

  useFocusEffect(() => {
    api.get('/orphanages')
      .then(({ data }) => {
        setOrphanages(data);
      });
  });

  const handleNavigateToOrphanageDetail = (id: string) => {
    navigation.navigate('OrphanageDetails', { id });
  };

  const handleNativateToCreateOrphanage = () => {
    navigation.navigate('SelectMapPosition');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -26.8663253,
          longitude: -49.1176193,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {
          orphanages.map(({ id, name, latitude, longitude }) => {
            return (
              <Marker
                icon={mapMarker}
                key={id}
                coordinate={{
                  latitude,
                  longitude,
                }}
                calloutAnchor={{
                  x: 2.6,
                  y: 0.8,
                }}
              >
                <Callout tooltip onPress={() => handleNavigateToOrphanageDetail(id)}>
                  <View style={styles.calloutContainer}>
                    <Text style={styles.calloutText}>{name}</Text>
                  </View>
                </Callout>
              </Marker>
            );
          })
        }
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}> {orphanages.length} Orfanatos encontrados</Text>
        <RectButton
          style={styles.createOrphanageButton}
          onPress={handleNativateToCreateOrphanage}
        >
          <Feather name='plus' size={20} color='#fff' />
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#fff',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  footerText: {
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold',
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default OrphanagesMap;
