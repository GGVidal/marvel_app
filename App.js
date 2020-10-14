/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-community/async-storage'

import Intro from './src/pages/Intro';
import SearchHero from './src/pages/SearchHero';
import Reactotron from 'reactotron-react-native';

console.tron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: "React Native Demo"
  })
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    networking: { // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/
    },
    editor: false, // there are more options to editor
    errors: { veto: (stackFrame) => false }, // or turn it off with false
    overlay: false, // just turning off overlay
  })
  .connect();
const Simple = () => (
  <Onboarding
    onDone={() => console.log('done')}
    showSkip={false}
    pages={[
      Intro,
      SearchHero
    ]}
  />
);

export default Simple;
