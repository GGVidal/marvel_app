import React from 'react';
import Intro from './Intro';
import SearchHero from './SearchHero';
import Onboarding from 'react-native-onboarding-swiper';
import ComicsMap from '../pages/ComicsMap';

const Main = ({navigation}) => {
  
  return (
    <Onboarding
      showDone={false}
      showSkip={false}
      showNext={false}
      pages={[
        Intro,
        {
          backgroundColor: '#a61202',
          title: <SearchHero navigation={navigation} />,
        },
        {
          backgroundColor: '#a61202',
          title: <ComicsMap/> 
        },
      ]}
    />
  );
};
export default Main;
