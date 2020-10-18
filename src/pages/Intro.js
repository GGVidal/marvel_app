import React from 'react';
import {View, Image} from 'react-native';
import {Text} from 'react-native-elements';

import Colors from '../constants/Colors';

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
          <Text h4 style={{color: Colors.whiteTitleIntro}}>
            Welcome to Marvel Hero App.
          </Text>
          <Text style={{color: Colors.grayIntro, marginTop: 15}}>
            Here you can search your favorite heroes and also check the nearest
            comic stores.
          </Text>
        </View>
      </View>
    </>
  );
};

export default {
  backgroundColor: Colors.redBackground,
  image: undefined,
  title: <Intro />,
  subtitle: '',
};
