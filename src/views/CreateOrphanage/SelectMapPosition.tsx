import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';
import mapMarkerImg from '../../assets/map-marker.png';
import { Position } from './Position';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
});

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation();
  const [position, setPosition] = useState<Position>({} as Position);

  const handleSelectMapPosition = (event: MapEvent) => {
    const { coordinate } = event.nativeEvent;
    setPosition(coordinate);
  }
  const handleNextStep = () => {
    navigation.navigate('OrphanageData', {
      position,
    });
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: -26.8663253,
          longitude: -49.1176193,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        style={styles.mapStyle}
        onPress={handleSelectMapPosition}
      >
        {
          position.latitude && (
            <Marker
            icon={mapMarkerImg}
            coordinate={{
                latitude: position.latitude,
                longitude: position.longitude,
              }}
            />
          )
        }
      </MapView>
      {
        position.latitude && (
          <RectButton style={styles.nextButton} onPress={handleNextStep}>
            <Text style={styles.nextButtonText}>Próximo</Text>
          </RectButton>
        )
      }
    </View>
  )
}

export default SelectMapPosition;
