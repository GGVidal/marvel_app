import React from 'react';
import Intro from './Intro';
import SearchHero from './SearchHero';
import Onboarding from 'react-native-onboarding-swiper';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const Main = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  const region = {
    latitude: -3.743616,
    longitude: -38.535392,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  };

  const comicStores = [
    {
      latLong: {
        latitude: -3.743573,
        longitude: -38.535328,
      },
      title: 'COMIC 1',
      description: 'COMIC 1 Description',
    },
    {
      latLong: {
        latitude: -3.751546,
        longitude: -38.505034,
      },
      title: 'COMIC 2',
      description: 'COMIC 2 Description',
    },
    {
      latLong: {
        latitude: -3.790889,
        longitude: -38.48072,
      },
      title: 'COMIC 3',
      description: 'COMIC 3 Description',
    },
  ];

  return (
    <Onboarding
      showDone={false}
      showSkip={false}
      pages={[
        Intro,
        {
          backgroundColor: '#a61202',
          title: <SearchHero navigation={navigation} />,
        },
        {
          backgroundColor: '#a61202',
          title: (
            <View style={styles.container}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={region}
                maxZoomLevel={20}
                minZoomLevel={12}>
                {comicStores.map((comic) => (
                  <Marker
                    coordinate={comic.latLong}
                    title={comic.title}
                    description={comic.description}
                  />
                ))}
              </MapView>
            </View>
          ),
        },
      ]}
    />
  );
};
export default Main;
