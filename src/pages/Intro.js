import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-elements';

const Intro = () => {
  return (
    <>
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <View style={{marginTop: 50}}>
          <Image
            source={require('../assets/marvel_icon.png')}
            style={{width: 150, height: 150}}
            resizeMode="contain"
          />
        </View>

        <View style={{marginTop: 50, width: 330, marginHorizontal: 15}}>
          <Text h4 style={{color: '#f7fcfe'}}>
            Welcome to Marvel Hero App.
          </Text>
          <Text style={{color: '#abafae', marginTop: 15}}>
            Here you can search your favorite heroes and also check the nearest
            comic stores.
          </Text>
        </View>
      </View>
    </>
  );
};

export default {
  backgroundColor: '#a61202',
  image: undefined,
  title: <Intro />,
  subtitle: '',
};
