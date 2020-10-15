import React from 'react';
import Intro from './Intro';
import SearchHero from './SearchHero';
import Onboarding from 'react-native-onboarding-swiper';

const Main = ({navigation}) => {
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
          title: <SearchHero navigation={navigation}/>,
        },
      ]}
    />
  );
};
export default Main;
