import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {getChar} from '../services/API';
import Searchbar from '../components/Searchbar';
import CardComponent from '../components/Card';

const SearchHero = ({navigation}) => {
  const [char, setChar] = useState({});

  const onNavigate = () => {
    navigation.navigate("Comics")
  }
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
      comicUri
    };
    console.tron.log(charObj);
    setChar(charObj);
  };
  const {name, charImage, comicUri, description, id} = char || {};
  return (
    <>
      <View style={styles.container}>
        <Searchbar fetchChar={fetchChar} />
      </View>
      {Object.keys(char).length ? (
        <View style={styles.infoContainer}>
          <CardComponent
            name={name}
            id={id}
            charImage={charImage}
            comicUri={comicUri}
            description={description}
            onNavigate={onNavigate}
          />
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
  infoContainer: {
    marginBottom: 80,
  },
});
export default SearchHero;
