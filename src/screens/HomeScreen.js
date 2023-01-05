import {View} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/counter';

const HomeScreen = ({navigation}) => {
  const {value} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View>
      <Text variant="displayLarge">HomeScreen</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => navigation.navigate('Profile')}>
        Button
      </Button>
      <Text variant="displayLarge" style={{color: 'black'}}>
        {value}
      </Text>
      <Button icon="folder" mode="contained-tonal" onPress={()=>dispatch(increment())}>
        +
      </Button>
      <Button icon="pin" mode="elevated" onPress={()=>dispatch(decrement())}>
        -
      </Button>
      <Button icon="react" mode="outlined" onPress={()=>dispatch(incrementByAmount(33))}>
        +33
      </Button>
    </View>
  );
};

export default HomeScreen;
