import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
  Pressable,
  TextInput,
  Image,
  Alert,
  Dimensions,
  Button,
} from 'react-native';
import {productData} from '../global/Data';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import {colors} from '../../global/globalStyles';
import {ProductCard} from '../components/ProductCard';
import {add} from 'react-native-reanimated';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_Height = Dimensions.get('window').height;

export default function Wishlist({navigation}) {
  // const [img, setImg] = useState('');
  // const [name, setName] = useState('');
  // const [key, setkey] = useState('');
  // const [price, setPrice] = useState('');
  const [clickCount, setClickCount] = useState(0);

  const [list, setList] = useState([]);

  return (
    <View
      style={{flex: 1, marginLeft: 5, backgroundColor: colors.cardBackground}}>
      <View
        style={{
          flexDirection: 'row',
          height: 40,
          width: 350,
          marginLeft: 10,
          marginBottom: 25,
        }}>
        <MaterialIcons
          name="menu"
          style={{
            color: colors.black1,
            marginLeft: 20,
            marginTop: 16,
            height: 30,
          }}
          size={30}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
        <View style={{marginTop: 10}}>
          <View style={styles.textInput2}>
            <Animatable.View animation={'fadeInLeft'} duration={800}>
              <MaterialIcons
                name="search"
                style={{color: colors.black1}}
                size={20}
              />
            </Animatable.View>

            <TextInput
              style={{width: '75%', height: 40}}
              placeholder={'Search you wishlist .... '}
            />

            <Animatable.View animation={'fadeInLeft'} duration={800}>
              <MaterialIcons
                name="sort"
                style={{color: colors.black1, marginRight: '5%'}}
                size={20}
              />
            </Animatable.View>
          </View>
        </View>
      </View>
      <Text
        style={{
          backgroundColor: 'lightgrey',
          height: 25,
          width: 90,
          color: 'white',
          alignSelf: 'flex-end',
          borderRadius: 12,
          marginRight: 20,
          paddingLeft: 10,
        }}
        onPress={() =>
          navigation.navigate('Cart', {Lust: list, listToSet: setList})
        }>
        Add to Cart
      </Text>
      <View>
        <FlatList
          keyboardShouldPersistTaps="handled"
          style={{marginBottom: 10}}
          data={productData}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductDetails', {id: index})
              }>
              <View style={styles.imageView}>
                <ProductCard
                  screenWidth={SCREEN_WIDTH * 0.425}
                  screenHeight={SCREEN_Height * 0.19}
                  images={item.images}
                  productName={item.productName}
                  price={item.price}
                />

                <TouchableOpacity
                  // disabled={item.id == 1 && clickCount == 1 ? true : false}
                  onPress={() => {
                    setList([
                      ...list,
                      {
                        myImage: item.images,
                        myName: item.productName,
                        myPrice: item.price,
                        myCompany: item.company,
                        myID: item.id,
                      },
                    ]);
                    // setClickCount(1);
                  }}>
                  <View style={styles.view4}>
                    <MaterialIcons
                      name="local-mall"
                      style={{
                        color: colors.cardBackground,
                        marginLeft: 10,
                        marginTop: 4,
                      }}
                      size={20}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
          horizontal={false}
          verticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.3775,
    height: SCREEN_WIDTH * 0.6275,
    marginLeft: 30,
    marginBottom: 0,
  },
  textInput2: {
    borderWidth: 1,
    borderRadius: 22,
    marginHorizontal: 20,
    borderColor: '#E4DFDF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
  },

  view4: {
    color: colors.cardBackground,
    backgroundColor: colors.black1,
    height: 33,
    width: 39,
    marginTop: -90,
    borderRadius: 50,
    marginLeft: 5,
  },
});
