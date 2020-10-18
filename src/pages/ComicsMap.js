import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Header} from 'react-native-elements';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import _ from 'lodash';

const ComicsMaps = () => {
  const [comic, setComic] = useState({});

  const comicStores = [
    {
      latLong: {
        latitude: -3.743573,
        longitude: -38.535328,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      title: 'Reboot Comic Store',
    },
    {
      latLong: {
        latitude: -3.751546,
        longitude: -38.505034,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      title: 'Revistas & Cia',
    },
    {
      latLong: {
        latitude: -3.790889,
        longitude: -38.48072,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      title: 'Revistaria Art Cult',
    },
  ];
  console.tron.log('comic', comic);
  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          backgroundColor: 'white',
        }}
        onPress={() => {
          setComic(item);
        }}>
        <Text style={{marginLeft: 10}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  return (
    <>
      <Header
      leftComponent={{ icon: 'menu', color: 'black' }}
      rightComponent={{ icon: 'home', color: 'black' }}
        centerComponent={{
          text: 'COMICS LOCALIZATION',
          style: {color: '#100c08'},
        }}
        containerStyle={{backgroundColor: '#F8F8FF'}}
      />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={comic.latLong}
          maxZoomLevel={20}
          minZoomLevel={12}>
          {!_.isEmpty(comic) ? (
            <Marker coordinate={comic.latLong} title={comic.title} />
          ) : null}
        </MapView>
      </View>
      <SafeAreaView style={{marginTop: 350}}>
        <View style={{justifyContent: 'center', flex: 1, width: 220}}>
          <FlatList
            data={comicStores}
            keyExtractor={(item, index) => index.toString()}
            enableEmptySections={true}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            removeClippedSubviews={true}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 350,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    marginTop: 60,
    ...StyleSheet.absoluteFillObject,
  },
});
export default ComicsMaps;
