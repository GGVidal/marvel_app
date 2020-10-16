import React from 'react';
import {Button, Card, Text} from 'react-native-elements';
import {ActivityIndicator, StyleSheet} from 'react-native';

const CardComponent = ({name, charImage, id, description, onNavigate}) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title>
        <Text h4>{name}</Text>
      </Card.Title>
      <Card.Divider />
      <Card.Image
        style={styles.imageContainer}
        resizeMode="contain"
        source={{uri: charImage}}
        PlaceholderContent={<ActivityIndicator />}
      />
      {/* test in 2G */}
      <Text style={{marginBottom: 10}}>{description}</Text>
      <Button
        type="outline"
        buttonStyle={styles.buttonStyle}
        title="CHECK THE COMICS"
        titleStyle={{color: '#cf352e'}}
        onPress={()=> onNavigate()}
      />
    </Card>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F8F8FF',
    borderRadius: 10,
  },
  imageContainer: {
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    borderColor: '#F8F8FF',
  },
});
export default CardComponent;
