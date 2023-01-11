/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Image, ScrollView, Button} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../global/globalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function ProductDetails({route, navigation}) {
  const productData = [
    {
      productName: 'Carburator',
      price: '3500',
      company: 'Carby',
      businessAddress: '22 Bessie street, Cape Town',
      images:
        'https://c4.wallpaperflare.com/wallpaper/847/847/790/audi-engine-wallpaper-preview.jpg',
      description:
        'Most fine carburator in the world having the world class power and deliver speed , giving you the horse power of 550hp',

      id: 0,
      category: 'engine',
    },

    {
      productName: 'Tyres',
      price: '4200',
      company: 'Service',

      businessAddress: '22 Bessie street, Cape Town',
      images:
        'https://img.freepik.com/premium-photo/black-isolation-rubber-tire-black-backgrounds_180633-2401.jpg',
      description:
        'HubSpots free Blog Ideas Generator tool gives you a years worth of blog post ideas in a matter of seconds. Create your own topics and titles now.',

      id: 1,
    },

    {
      productName: 'Steering',
      price: '15000',
      company: 'SoftSteers',

      businessAddress: ' 17 Olivia Rd, Johannesburg',
      images:
        'https://thumbs.dreamstime.com/b/steering-wheel-isolated-black-background-white-black-leather-modern-car-steering-wheel-isolated-black-background-170459598.jpg',
      coordinates: {
        lat: -26.1886781,
        Ing: 28.244879,
      },
      category: 'interior',

      description:
        'The news a few months ago that Annie Ernaux was going to be awarded the Nobel Prize for Literature prompted me to think that a round-up of reviews of books by non-English authors, or set in foreign countries, would make quite an interesting article. Some of these have been',

      id: 2,
    },

    {
      productName: 'Brakes',
      price: '12000',
      company: 'NoN-Stop',
      category: 'brakes',

      businessAddress: '15 Atlas Rd, Kempton Park',
      images:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsv0_DnPAUK9Vntpo9OJLp6j35xI0dO_6mKA&usqp=CAU',
      description:
        'Specific books, and general categories. Some of these books have been reviewed here before, but I thought it might be useful for people to have all of them in one place.',

      id: 3,
    },

    {
      productName: 'GearsSet',
      price: '2399',
      company: 'GearBg',
      category: 'engine',

      businessAddress: '15 Atlas Rd, Kempton Park',
      images:
        'https://media.istockphoto.com/id/1150507732/photo/various-car-parts-and-accessories-on-black-background.jpg?s=612x612&w=0&k=20&c=UZW9qADTmNxFlrDIfi1e6mpZbHXb0vV17VOATtd_kYI=',
      description:
        'Why shouldn’t nonfiction writing be as well-crafted, interesting, even exciting as fiction?',

      id: 4,
    },
    {
      productName: 'Rims',
      company: 'RSRims',
      category: 'wheel',

      price: '4999',
      businessAddress: '15 Atlas Rd, Kempton Park',
      images:
        'https://img.freepik.com/premium-photo/new-black-alloy-wheels-dark-textured-black-background-wheel-car-spare-parts-auto-repair-tire-shop_114160-2102.jpg?w=2000',
      description:
        'Most fine carburator in the world having the world class power and deliver speed , giving you the horse power of 550hp',

      id: 5,
    },
    {
      productName: 'StainlessRims',
      price: '6128',
      category: 'wheel',

      businessAddress: '15 Atlas Rd, Kempton Park',
      images:
        'https://img.freepik.com/premium-photo/alloy-wheels-black-background-new-spare-parts-car-car-tuning_114160-861.jpg?w=2000',
      description:
        'Most fine carburator in the world having the world class power and deliver speed , giving you the horse power of 550hp',

      id: 6,
    },
    {
      productName: 'Brakes',
      company: 'RehbarBrakes',
      category: 'brakes',

      price: '2000',
      businessAddress: '15 Atlas Rd, Kempton Park',
      images:
        'https://media.istockphoto.com/id/1034249292/photo/set-of-car-parts-isolated-on-white-background-3d.jpg?s=612x612&w=0&k=20&c=BwXl3LzQau4v40nl9INYToE0mC1SYDA4gBkylspbYis=',
      description:
        'Most fine carburator in the world having the world class power and deliver speed , giving you the horse power of 550hp',

      id: 7,
    },
    {
      productName: 'Brakes',
      category: 'brakes',

      company: 'Carby',
      price: '50000',
      businessAddress: '15 Atlas Rd, Kempton Park',
      images:
        'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhcmUlMjBwYXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      description:
        'Having a hard time coming up with great blog post ideas? Heres a list of 103 original blog post ideas that you can write about today!',

      id: 8,
    },
    {
      productName: 'Brakes',
      company: 'Carby',
      category: 'brakes',

      price: '15000',
      businessAddress: '15 Atlas Rd, Kempton Park',
      images:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsv0_DnPAUK9Vntpo9OJLp6j35xI0dO_6mKA&usqp=CAU',
      description:
        ' but which can be incredibly useful. Today’s topic is how to generate random text. First, though, why would you wish to do so? Blogger Doug Woods recently joked that you could use the random text feature to bulk up a report in order to fool your boss into thinking you',

      id: 9,
    },
    {
      productName: 'Brakes',
      price: '25000',
      company: 'Carby',
      category: 'brakes',

      businessAddress: '15 Atlas Rd, Kempton Park',
      images:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsv0_DnPAUK9Vntpo9OJLp6j35xI0dO_6mKA&usqp=CAU',
      description:
        'Being able to produce chunks of text very quickly is useful to see what the appearance of the finished piece of writing will look like, or to test how many words you can get on the page with a particular fon',

      id: 10,
    },
    {
      productName: 'Brakes',
      price: '25000',
      company: 'Carby',
      category: 'brakes',

      businessAddress: '15 Atlas Rd, Kempton Park',
      images:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsv0_DnPAUK9Vntpo9OJLp6j35xI0dO_6mKA&usqp=CAU',
      description:
        'Being able to produce chunks of text very quickly is useful to see what the appearance of the finished piece of writing will look like, or to test how many words you can get on the page with a particular fon',

      id: 11,
    },
  ];
  const {id} = route.params;
  const img = productData[id]?.images;
  const name = productData[id]?.productName;
  const price = productData[id]?.price;
  const description = productData[id]?.description;
  const address = productData[id]?.businessAddress;
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <View style={{flex: 1, backgroundColor: colors.cardBackground}}>
      <Image
        style={{
          ...styles.image,
          width: '90%',
          height: '40%',
          marginLeft: 20,
          borderRadius: 12,
          marginTop: 20,
        }}
        source={{uri: img}}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            style={{
              ...styles.image,
              width: 45,
              height: 45,
              marginLeft: 30,
              borderRadius: 12,
              marginTop: 38,
            }}
            source={{uri: img}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              ...styles.image,
              width: 50,
              height: 50,
              marginLeft: 15,
              borderRadius: 12,
              marginTop: 35,
            }}
            source={{uri: img}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              ...styles.image,
              width: 65,
              height: 65,
              marginLeft: 15,
              borderRadius: 12,
              marginTop: 25,
            }}
            source={{uri: img}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{
              ...styles.image,
              width: 75,
              height: 75,
              marginLeft: 15,
              borderRadius: 12,
              marginTop: 20,
            }}
            source={{uri: img}}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            color: colors.black2,
            marginLeft: 30,
            fontSize: 22,
            fontWeight: '500',
          }}>
          {name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '60%',
          }}>
          <View style={{flexDirection: 'row'}}>
            <MaterialIcons
              name="star"
              style={{
                color: colors.black1,
                marginLeft: 30,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
            <MaterialIcons
              name="star"
              style={{
                color: colors.black1,
                marginLeft: 2,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
            <MaterialIcons
              name="star"
              style={{
                color: colors.black1,
                marginLeft: 2,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
            <MaterialIcons
              name="star"
              style={{
                color: colors.black1,
                marginLeft: 2,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
            <MaterialIcons
              name="star-border"
              style={{
                color: colors.black1,
                marginLeft: 2,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </View>
          <View>
            <Text style={{fontWeight: '300', color: '#C0C0C0'}}>
              Reviews(123)
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: colors.black3,
              marginLeft: 30,
              fontSize: 18,
              fontWeight: '500',
            }}>
            Rs{' '}
          </Text>
          <Text
            style={{
              color: colors.black3,
              marginLeft: 4,
              fontSize: 18,
              fontWeight: '500',
            }}>
            {price}
          </Text>
        </View>

        <View>
          <Text style={{marginLeft: 30, marginTop: 10}}>Variant</Text>

          <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
            <TouchableOpacity>
              <Text style={styles.txt}>XS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10}}>
              <Text style={styles.txt}>S</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft: 10}}>
              <Text style={styles.txt}>M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                marginLeft: 10,
                marginTop: -3,
                borderRadius: 5,
                borderColor: '#535353',
              }}>
              <Text style={[styles.txt, {paddingRight: 8, paddingVertical: 3}]}>
                L
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            disabled={count <= 0 ? true : false}
            onPress={() => {
              setTotal(count * price);
              setCount(count - 1);
            }}
            style={{
              borderWidth: 1,
              marginLeft: 30,
              marginTop: 10,
              borderRadius: 5,
              borderColor: '#535353',
              width: 30,
              height: 30,
            }}>
            <Text
              style={{
                fontSize: 24,
                alignSelf: 'center',
                color: '#535353',
                marginTop: -3,
              }}>
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.Text,
              {fontSize: 20, marginTop: 10, marginLeft: 15},
            ]}>
            {count}
          </Text>

          <TouchableOpacity
            onPress={() => {
              setTotal(count * price);
              setCount(count + 1);
            }}
            style={{
              borderWidth: 1,
              marginLeft: -5,
              marginTop: 10,
              borderRadius: 5,
              borderColor: '#535353',
              width: 30,
              height: 30,
            }}>
            <Text
              style={{
                fontSize: 24,
                alignSelf: 'center',
                color: '#535353',
                marginTop: -3,
              }}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 30}}>
            <Text style={[styles.txt, {fontSize: 17}]}>Total : Rs </Text>
            <Text style={[styles.txt, {fontSize: 17}]}>{total}</Text>
          </View>
          <View
            style={{
              backgroundColor: colors.black1,
              marginTop: 20,
              width: 140,
              borderRadius: 6,
              marginRight: 20,
              height: 40,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MaterialIcons
              name="local-mall"
              style={{
                color: colors.cardBackground,
                marginLeft: 10,
                marginTop: 8,
                height: 30,
              }}
              size={20}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
            <Text
              style={{
                fontSize: 16,
                color: 'white',
                marginRight: 16,
                marginTop: 8,
              }}>
              Add to Cart
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
    color: colors.black1,
    marginLeft: 30,
    margin: 20,
  },
  txt: {
    marginLeft: 10,
    color: colors.black2,
  },
});
