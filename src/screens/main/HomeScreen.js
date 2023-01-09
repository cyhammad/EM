import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {auth} from '../../../firebase';
import {signOut} from 'firebase/auth';
import {Searchbar} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';

const HomeScreen = ({navigation}) => {
  // const user = auth.currentUser;
  // const logout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       console.log('logged out');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  const categories = [
    'All',
    'Oil',
    'Wheel',
    'Engine',
    'Break',
    'Filters',
    'Others',
  ];

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
              <TouchableOpacity style={styles.tabBarStyles}>
                <Text style={styles.categoryTxt}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
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
  tabBarStyles: {
    backgroundColor: '#F6F6F6',
    color: 'black',
    marginTop: 5,
    width: '15%',
    height: '24%',
    borderRadius: 15,
  },
  categoriesBar: {
    flexDirection: 'row',
    width: 500,
    marginRight: 30,
    height: 120,
    marginBottom: 10,
  },
  categoryTxt: {
    alignSelf: 'center',
    padding: 5,
    color: 'black',
  },
});
