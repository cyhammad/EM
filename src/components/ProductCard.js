/* eslint-disable react-native/no-inline-styles */
import {Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {ref, set, update} from 'firebase/database';
import {auth, database} from '../../firebase';

export const ProductCard = ({navigation, item, likeBtn = true}) => {
  const cartIcon = `<svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.19687 6.34662V5.60296C7.19687 3.87796 8.92768 2.18362 11.0792 2.02262C13.642 1.82329 15.8031 3.44096 15.8031 5.45729V6.51529" stroke="#FAFBFC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.66908 13.1626L3.88902 14.5963C4.09939 16.099 4.78789 17.3333 8.63202 17.3333H14.3695C18.2136 17.3333 18.9021 16.099 19.103 14.5963L19.8201 9.99631C20.0783 8.12564 19.409 6.59998 15.3258 6.59998H7.67577C3.59258 6.59998 2.92321 8.12564 3.18139 9.99631" stroke="#FAFBFC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.8413 9.66663H14.8499" stroke="#FAFBFC" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.14752 9.66663H8.15611" stroke="#FAFBFC" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`;
  const heartIcon = `<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.31966 13.8208C9.07581 13.8998 8.67419 13.8998 8.43034 13.8208C6.3505 13.1692 1.70312 10.4507 1.70312 5.84307C1.70312 3.80915 3.48892 2.16357 5.69069 2.16357C6.99597 2.16357 8.15064 2.74282 8.875 3.63801C9.59936 2.74282 10.7612 2.16357 12.0593 2.16357C14.2611 2.16357 16.0469 3.80915 16.0469 5.84307C16.0469 10.4507 11.3995 13.1692 9.31966 13.8208Z" stroke="#061023" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>`;
  const user = auth.currentUser;
  const addToWishlist = id => {
    console.log(item);
    const listRef = ref(database, 'users/' + user.uid + '/wishlist');
    update(listRef, {
      [item.title]: item,
    });
  };
  return (
    <TouchableOpacity
      style={{paddingHorizontal: 5, paddingBottom: 20}}
      onPress={() => navigation.navigate('ProductDetails', {id: item.id})}>
      <View style={{position: 'relative', alignItems: 'center'}}>
        <Image
          source={{uri: item.image}}
          style={{
            height: 150,
            width: 150,
            borderRadius: 15,
          }}
        />
        {likeBtn ? (
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 0,
              padding: 8,
              backgroundColor: '#D0D1D2',
              borderRadius: 20,
              margin: 5,
            }}
            onPress={() => addToWishlist(item.id)}>
            <SvgXml xml={heartIcon} />
          </TouchableOpacity>
        ) : null}
        <View
          style={{
            position: 'absolute',
            bottom: -20,
            backgroundColor: 'white',
            paddingTop: 5,
            paddingLeft: 5,
            paddingRight: 5,
            borderTopLeftRadius: 23,
            borderTopRightRadius: 23,
          }}>
          <TouchableOpacity
            style={{
              padding: 8,
              backgroundColor: '#061023',
              borderRadius: 20,
            }}>
            <SvgXml xml={cartIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <Text style={{fontFamily: 'Urbanist-Medium', fontSize: 16}}>
          {item.title}
        </Text>
        <Text style={{fontFamily: 'Urbanist-Bold', fontSize: 16}}>
          Rs {item.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
