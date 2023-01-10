/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {auth, database} from '../../../firebase';
import {signOut} from 'firebase/auth';
import {Searchbar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import {ProductCard2} from '../../components/ProductCard2';
import {onValue, ref} from 'firebase/database';
import {SvgXml} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const cartIcon = `<svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.19687 6.34662V5.60296C7.19687 3.87796 8.92768 2.18362 11.0792 2.02262C13.642 1.82329 15.8031 3.44096 15.8031 5.45729V6.51529" stroke="#FAFBFC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.66908 13.1626L3.88902 14.5963C4.09939 16.099 4.78789 17.3333 8.63202 17.3333H14.3695C18.2136 17.3333 18.9021 16.099 19.103 14.5963L19.8201 9.99631C20.0783 8.12564 19.409 6.59998 15.3258 6.59998H7.67577C3.59258 6.59998 2.92321 8.12564 3.18139 9.99631" stroke="#FAFBFC" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.8413 9.66663H14.8499" stroke="#FAFBFC" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.14752 9.66663H8.15611" stroke="#FAFBFC" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const heartIcon = `<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.31966 13.8208C9.07581 13.8998 8.67419 13.8998 8.43034 13.8208C6.3505 13.1692 1.70312 10.4507 1.70312 5.84307C1.70312 3.80915 3.48892 2.16357 5.69069 2.16357C6.99597 2.16357 8.15064 2.74282 8.875 3.63801C9.59936 2.74282 10.7612 2.16357 12.0593 2.16357C14.2611 2.16357 16.0469 3.80915 16.0469 5.84307C16.0469 10.4507 11.3995 13.1692 9.31966 13.8208Z" stroke="#061023" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const HomeScreen = ({navigation}) => {
  const [list, setList] = useState('');
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const catRef = ref(database, 'categories');
    onValue(catRef, snapshot => {
      const catList = ['all', ...Object.keys(snapshot.val()), 'others'];
      setCategories(catList);
    });
    const itemsRef = ref(database, 'items');
    onValue(itemsRef, snapshot => {
      const itemList = Object.values(snapshot.val());
      setList(itemList);
    });
  }, []);

  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons
            name="menu"
            onPress={() => navigation.openDrawer()}
            size={24}
            style={styles.drawerBtn}
          />
          <Searchbar
            style={styles.searchBar}
            placeholder="looking for something"
            placeholderTextColor="gray"
            inputStyle={styles.searchBarText}
            elevation={0}
          />
        </View>
        <Swiper
          autoplay={true}
          autoplayTimeout={4}
          style={styles.swiper}
          showsPagination={false}>
          <View style={styles.slide}>
            <LinearGradient
              colors={['#000000', '#282931', '#6A6A6A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.linearGradient]}>
              <View style={styles.sliderView}>
                <View>
                  <Text style={styles.sliderHeading}>Best Selling Plugs </Text>
                  <Text style={styles.sliderSubHeading}>30% OFF on NGK</Text>
                  <View style={styles.shopNowBtn}>
                    <Text style={styles.shopNowTxt}>Shop Now</Text>
                    <MaterialIcons
                      name="east"
                      style={styles.arrowIcon}
                      size={20}
                    />
                  </View>
                </View>
                <Image
                  style={styles.sliderImg}
                  source={require('../../assets/plug2.png')}
                />
              </View>
            </LinearGradient>
          </View>
          <View style={styles.slide}>
            <LinearGradient
              colors={['#000000', '#282931', '#6A6A6A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linearGradient}>
              <View style={styles.sliderView}>
                <View>
                  <Text style={styles.sliderHeading}>Best Selling Tyres </Text>
                  <Text style={styles.sliderSubHeading}>
                    10% OFF on DiamondTyres
                  </Text>
                  <View style={styles.shopNowBtn}>
                    <Text style={styles.shopNowTxt}>Shop Now</Text>
                    <MaterialIcons
                      name="east"
                      style={styles.arrowIcon}
                      size={20}
                    />
                  </View>
                </View>
                <Image
                  style={styles.sliderImg}
                  source={require('../../assets/tyre.png')}
                />
              </View>
            </LinearGradient>
          </View>
          <View style={styles.slide}>
            <LinearGradient
              colors={['#000000', '#282931', '#6A6A6A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.linearGradient}>
              <View style={styles.sliderView}>
                <View>
                  <Text style={styles.sliderHeading}>Best Selling Brakes </Text>
                  <Text style={styles.sliderSubHeading}>
                    50% OFF on JkBrakes
                  </Text>
                  <View style={styles.shopNowBtn}>
                    <Text style={styles.shopNowTxt}>Shop Now</Text>
                    <MaterialIcons
                      name="east"
                      style={styles.arrowIcon}
                      size={20}
                    />
                  </View>
                </View>
                <Image
                  style={styles.sliderImg}
                  source={require('../../assets/brake.png')}
                />
              </View>
            </LinearGradient>
          </View>
        </Swiper>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.categoriesBar}>
            {categories.map((item, index) => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#F6F6F6',
                  paddingHorizontal: 10,
                  borderRadius: 50,
                  marginLeft: 5,
                }}
                onPress={() => {
                  setList(() =>
                    list.filter(
                      listItem =>
                        listItem.category.name.toLowerCase() ===
                        item.toLowerCase(),
                    ),
                  );
                }}>
                <Text style={styles.categoryTxt}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <FlatList
          keyboardShouldPersistTaps="handled"
          showsHorizontalScrollIndicator={false}
          data={list}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity style={{paddingHorizontal: 5, paddingBottom: 20}}>
              <View style={{position: 'relative', alignItems: 'center'}}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: 150,
                    width: 150,
                    borderRadius: 15,
                  }}
                />
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 0,
                    padding: 8,
                    backgroundColor: '#D0D1D2',
                    borderRadius: 20,
                    margin: 5,
                  }}>
                  <SvgXml xml={heartIcon} />
                </TouchableOpacity>
                <View
                  style={{
                    position: 'absolute',
                    bottom: -15,
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
          )}
          horizontal={true}
        />
        <View
          style={{
            backgroundColor: '#282931',
            flex: 1,
            width: '100%',
            paddingLeft: 15,
            paddingRight: 35,
            paddingVertical: 20,
            borderRadius: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#D4D4D4',
              }}>
              Search parts by Cars
            </Text>
            <Icon name="dots-horizontal" style={{color: '#D4D4D4'}} size={20} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 20}}>Honda Civic</Text>
              <View style={{flexDirection: 'row', width: '60%', justifyContent: 'space-between', marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="lightning-bolt"
                    size={18}
                    style={{color: 'white'}}
                  />
                  <Text style={{color: 'white', fontFamily: 'Urbanist-Light'}}>
                    turbo
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="chart-bar"
                    size={16}
                    style={{color: 'white'}}
                  />
                  <Text style={{color: 'white', fontFamily: 'Urbanist-Light',marginLeft: 5}}>
                    2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{padding: 5, backgroundColor: 'white', borderRadius: 20, marginVertical: 10}}>
              <Icon name="arrow-right" size={20} />
            </TouchableOpacity>
          </View>
          <View
            style={{height: 0.2, backgroundColor: 'white', width: '100%'}}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 20}}>Toyota Corolla</Text>
              <View style={{flexDirection: 'row', width: '60%', justifyContent: 'space-between', marginTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="lightning-bolt"
                    size={18}
                    style={{color: 'white'}}
                  />
                  <Text style={{color: 'white', fontFamily: 'Urbanist-Light'}}>
                    CVT-I
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon
                    name="chart-bar"
                    size={16}
                    style={{color: 'white'}}
                  />
                  <Text style={{color: 'white', fontFamily: 'Urbanist-Light',marginLeft: 5}}>
                    2022
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{padding: 5, backgroundColor: 'white', borderRadius: 20, marginVertical: 10}}>
              <Icon name="arrow-right" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    height: 36,
    lineHeight: 40,
    borderRadius: 20,
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
  searchBarText: {
    fontSize: 16,
    padding: 0,
  },
  drawerBtn: {
    padding: 0,
    marginRight: 10,
  },
  swiper: {
    height: 150,
  },
  sliderHeading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sliderSubHeading: {
    color: 'white',
    fontSize: 14,
    fontWeight: '300',
    marginTop: 5,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  linearGradient: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  sliderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  shopNowBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 20,
  },
  shopNowTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  arrowIcon: {
    color: 'white',
    marginLeft: 10,
    marginTop: 5,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderImg: {
    height: 80,
    width: 80,
    margin: 10,
  },
  categoriesBar: {
    flexDirection: 'row',
    width: 500,
    marginRight: 30,
    marginBottom: 20,
  },
  categoryTxt: {
    alignSelf: 'center',
    padding: 5,
    color: 'black',
  },
});
