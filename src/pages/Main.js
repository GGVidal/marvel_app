import React from 'react';
import Intro from './Intro';
import SearchHero from './SearchHero';
import Onboarding from 'react-native-onboarding-swiper';
import ComicsMap from '../pages/ComicsMap';

import Colors from '../constants/Colors';
const Main = ({navigation}) => {
  return (
    <Onboarding
      showDone={false}
      showSkip={false}
      showNext={false}
      pages={[
        Intro,
        {
          backgroundColor: Colors.redBackground,
          title: <SearchHero navigation={navigation} />,
          subtitle: '',
          image: undefined
        },
        {
          backgroundColor: Colors.redBackground,
          title: <ComicsMap />,
          subtitle: '',
          image: undefined
        },
      ]}
    />
  );
};
export default Main;
