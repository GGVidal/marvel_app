import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

import Routes from './src/routes';

console.tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'React Native Demo',
  })
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false, 
    errors: {veto: (stackFrame) => false}, 
    overlay: false,
  })
  .connect();

const App = () => <Routes />;

export default App;
