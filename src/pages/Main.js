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

  const latLong = {
    latitude: -3.743616,
    longitude: -38.535392,
  };

  return (
    <Onboarding
      showSkip={false}
      pages={[
        {
          backgroundColor: '#a61202',
          image: <Intro />,
          title: 'Choose your hero',
          subtitle: 'Swipe up to search for your favorite hero',
        },
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
                region={region}>
                <Marker
                  coordinate={latLong}
                  title="Title"
                  description="description"
                />
              </MapView>
            </View>
          ),
        },
      ]}
    />
  );
};
export default Main;
