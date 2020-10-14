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
    <View style={styles.container}>
      <View style={{flexDirection: 'column', width: 350}}>
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
              icon={<Icon name="search" size={24} color="#fdfcfa" />}
            />
          }
        />
      </View>
      {Object.keys(char).length ? (
        <View>
          <Card containerStyle={{backgroundColor: '#fdfcfa', borderRadius: 10}}>
            <Card.Title>
              <Text h4>{char.name}</Text>
            </Card.Title>
            <Card.Divider />
            <Card.Image
              style={{borderRadius: 10}}
              resizeMode="contain"
              source={{uri: char.charImage}}
              PlaceholderContent={<ActivityIndicator />}
            />
            {/* test in 2G */}
            <Text style={{marginBottom: 10}}>{char.description}</Text>
            <Button
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
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default {backgroundColor: '#a61202', title: <SearchHero />};
