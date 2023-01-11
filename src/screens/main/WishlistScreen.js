/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {auth, database} from '../../../firebase';
import {onValue, ref} from 'firebase/database';
import {ProductCard} from '../../components/ProductCard';

const WishlistScreen = () => {
  const user = auth.currentUser;
  const [list, setList] = useState([]);
  useEffect(() => {
    const listRef = ref(database, 'users/' + user.uid + '/wishlist');
    onValue(listRef, snapshot => {
      const data = snapshot.val();
      setList(Object.values(data));
    });
  }, [user.uid]);
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          paddingTop: 10,
          flex: 1,
          alignSelf: 'center',
        }}>
        {list ? (
          <FlatList
            keyboardShouldPersistTaps="handled"
            showsHorizontalScrollIndicator={false}
            data={list}
            key={'_'}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <ProductCard item={item} key={item.id} index={index} likeBtn={false} />
            )}
            horizontal={false}
            verticalScrollIndicator={false}
            numColumns={2}
          />
        ) : (
          <Text>No items in wishlist</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default WishlistScreen;
