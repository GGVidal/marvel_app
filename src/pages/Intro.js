import React from 'react';
import {View, Image} from 'react-native';

const Intro = () => {
  return (
    <View>
      <Image
        resizeMode="stretch"
        style={{
          alignSelf: 'center',
          width: 350,
          height: 350,
        }}
        source={require('../assets/marvel-282124.png')}
      />
    </View>
  );
};

export default {
  backgroundColor: '#a61202',
  image: <Intro />,
  title: 'Choose your hero',
  subtitle: 'Swipe up to search for your favorite hero',
};
