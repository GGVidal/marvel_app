import React from 'react';
import Intro from './Intro';
import SearchHero from './SearchHero';
import Onboarding from 'react-native-onboarding-swiper';

const Main = (props) => {
  return <Onboarding showSkip={false} pages={[Intro, SearchHero]} />;
};
export default Main;
