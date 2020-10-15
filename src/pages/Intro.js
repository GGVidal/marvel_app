import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Intro = () => {
  return (
    <View>
      <Image
        style={styles.image}
        resizeMode="stretch"
        source={require('../assets/marvel-282124.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {alignSelf: 'center', width: 350, height: 250},
});

export default Intro;

