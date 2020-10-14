import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Card, Text} from 'react-native-elements';
import {ActivityIndicator} from 'react-native';

import {getChar} from '../services/API';

const SearchHero = () => {
  const [char, setChar] = useState({});

  const fetchChar = async (charName) => {
    const res = await getChar(charName);
    const {id, name, description, thumbnail, comics} = res[0];
    const {path, extension} = thumbnail;
    const charImage = `${path}.${extension}`;
    const charObj = {
      id,
      name,
      description,
      path,
      charImage,
    };
    console.tron.log(charObj);
    setChar(charObj);
  };
  return (
    <>
      <View style={styles.container}>
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
      </View>
      {Object.keys(char).length ? (
        <View style={styles.infoContainer}>
          <Card containerStyle={{backgroundColor: '#F8F8FF', borderRadius: 10}}>
            <Card.Title>
              <Text h4>{char.name}</Text>
            </Card.Title>
            <Card.Divider />
            <Card.Image
              style={{borderRadius: 10, marginBottom: 10}}
              resizeMode="contain"
              source={{uri: char.charImage}}
              PlaceholderContent={<ActivityIndicator />}
            />
            {/* test in 2G */}
            <Text style={{marginBottom: 10}}>{char.description}</Text>
            <Button
              type="outline"
              buttonStyle={{
                borderRadius: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                borderColor: '#F8F8FF',
              }}
              title="CHECK THE COMICS"
              titleStyle={{color: '#cf352e'}}
            />
          </Card>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F8F8FF',
    borderRadius: 10,
    maxHeight: 80,
  },
  infoContainer: {marginBottom: 80}
});

export default {backgroundColor: '#a61202', title: <SearchHero />};
