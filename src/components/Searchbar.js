import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button} from 'react-native-elements';
const Searchbar = ({fetchChar}) => {
  return (
    <Input
      onSubmitEditing={(e) => {
        fetchChar(e.nativeEvent.text);
      }}
      containerStyle={{width: 330}}
      inputStyle={{color: '#4d4b50'}}
      placeholder="Type your hero's name"
      placeholderTextColor="#abafae"
      rightIcon={
        <Button
          type="clear"
          icon={<Icon name="search" size={24} color="#100c08" />}
        />
      }
    />
  );
};
export default Searchbar;
