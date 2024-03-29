import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import _ from 'lodash';

import {getCharComics} from '../services/API';
import Colors from '../constants/Colors';
const Comics = ({route}) => {
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [offset, setOffset] = useState(0);
  const {id} = route.params;
  useEffect(() => {
    const firstFetch = async () => {
      await getData();
    };
    firstFetch();
  }, []);

  const getData = async () => {
    console.log('getData');
    setLoading(true);
    try {
      const res = await getCharComics(id, offset);
      setOffset(offset + 20);
      setDataSource([...dataSource, ...res]);
      setLoading(false);
    } catch (err) {
      console.error(error);
    }
  };
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={getData}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>{_.isEmpty(dataSource)? 'Loading' : 'Load More'}</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };
  
  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
        <Image
          style={{height: 50, width: 50, borderRadius: 25}}
          source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
        />
        <Text style={{marginLeft: 10}}>{item.id}</Text>
        <Text style={{marginLeft: 10, flex: 1}}>{item.title}</Text>
        <Text style={{marginLeft: 10}}>{item.prices[0].price}</Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: Colors.grayFlatlist,
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FlatList
          data={_.uniqBy(dataSource, 'id')}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          enableEmptySections={true}
          renderItem={ItemView}
          ListFooterComponent={renderFooter}
          removeClippedSubviews={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: Colors.redLoadMoreComics,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Comics;
