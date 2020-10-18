import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';

import Colors from '../constants/Colors';

const Searchbar = ({fetchChar}) => {
  const [searchName, setSearchName] = useState('');
  return (
    <Input
      onChange={(e) => setSearchName(e.nativeEvent.text)}
      onSubmitEditing={(e) => {
        fetchChar(e.nativeEvent.text);
      }}
      containerStyle={{width: 330}}
      inputStyle={{color: Colors.blackInputColor}}
      placeholder="Type your hero's name"
      placeholderTextColor={Colors.grayIntro}
      rightIcon={
        <Button
          onPress={() => fetchChar(searchName)}
          type="clear"
          icon={<Icon name="search" size={24} color={Colors.blackHeaderLocalization} />}
        />
      }
    />
  );
};
export default Searchbar;
