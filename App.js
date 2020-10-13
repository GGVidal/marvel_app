/* eslint-disable react-native/no-inline-styles */
import {View, TextInput, TouchableHighlight} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

import Intro from './src/pages/Intro';
const Simple = () => (
  <Onboarding
    onDone={() => console.log('done')}
    showSkip={false}
    pages={[
      Intro,
      {
        backgroundColor: '#a61202',
        // image: <Image source={require('./images/circle.png')} />,
        title: (
          <View style={{flexDirection: 'row'}}>
            <View>
              <TextInput
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'white',
                }}
                // value = {this.state.searchString}
                placeholder="Search"
                keyboardType="web-search"
              />
            </View>
            <TouchableHighlight
              style={{alignItems: 'center', justifyContent: 'center'}}
              underlayColor="transparent">
              <View>
                {/* <Icon name="search" size={20} color="#4285F4" /> */}
              </View>
            </TouchableHighlight>
          </View>
        ),
        subtitle: 'Teste',
        // (
        // <View
        //   style={{
        //     backgroundColor: '#fff',
        //     padding: 10,
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //   }}>

        // autoCapitalize="none"
        // autoCorrect={false}
        // placeholder="Search"
        // style={{
        //   borderRadius: 25,
        //   borderColor: '#333',
        //   backgroundColor: '#fff',
        // }}
        // textStyle={{color: '#000'}}

        // </View>
        // ),
      },
    ]}
  />
);

export default Simple;
