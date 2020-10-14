import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Card, ListItem} from 'react-native-elements';
import {getChar} from '../services/API';

const SearchHero = () => {
  const [char, setChar] = useState({});
  const fetchChar = async (charName) => {
    const res = await getChar(charName);
    const {id, name, description, thumbnail, comics} = res[0];
    console.tron.log(id, name, description)
  };
  return (
    <View style={styles.container}>
      <View>
        <Input
          onEndEditing={(e) => {
            fetchChar(e.nativeEvent.text);
          }}
          inputStyle={{color: '#fdfcfa'}}
          placeholder="Type your hero's name"
          placeholderTextColor="#abafae"
          rightIcon={
            <Button
              type="clear"
              onPress={() => console.log('Teste')}
              icon={<Icon name="search" size={24} color="#fdfcfa" />}
            />
          }
        />
      </View>
      <View>
        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={<Icon name="code" color="#ffffff" />}
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //  height: 50,
    //  marginBottom: 450
    flex: 1,
    flexDirection: 'column',
  },
});

export default {backgroundColor: '#a61202', title: <SearchHero />};
