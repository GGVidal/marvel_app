import React, {useState} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import _ from 'lodash';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {getChar} from '../services/API';
import Searchbar from '../components/Searchbar';
import CardComponent from '../components/Card';

const SearchHero = ({navigation}) => {
  const [char, setChar] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const onNavigate = () => {
    navigation.navigate('Comics', {
      id: char.id,
    });
  };
  const fetchChar = async (charName) => {
    const res = await getChar(charName);
    const {id, name, description, thumbnail, comics} = res[0];
    const {path, extension} = thumbnail;
    const charImage = `${path}.${extension}`;
    const comicUri = comics.collectionURI;
    const charObj = {
      id,
      name,
      description,
      charImage,
      comicUri,
    };
    setChar(charObj);
  };
  const {name, charImage, comicUri, description, id} = char || {};
  return (
    <>
      <View style={styles.container}>
        <Searchbar fetchChar={fetchChar} />
      </View>

      {_.isEmpty(char) ? (
        <View style={styles.descriptionContainer}>
          <Icon name="search" size={56} color="#F8F8FF" />
          <Text h4 style={{color: '#F8F8FF'}}>Find your favorite hero.</Text>
          <Text style={{color: '#848482', marginTop: 5}}>
            And you can also check some infos about your hero
          </Text>
        </View>
      ) : null}

      <View style={styles.infoContainer}>
        {Object.keys(char).length ? (
          <CardComponent
            name={name}
            id={id}
            charImage={charImage}
            comicUri={comicUri}
            description={description}
            onNavigate={onNavigate}
          />
        ) : null}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F8F8FF',
    borderRadius: 10,
    maxHeight: 60,
  },
  infoContainer: {
    marginBottom: 80,
    minHeight: 150,
  },
  descriptionContainer : {
    marginTop: 100, 
    flex: 1, 
    flexDirection: 'column', 
    alignItems: "center"
  }
});
export default SearchHero;
