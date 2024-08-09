import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Animated, ImageBackground, FlatList } from 'react-native';
import React, {useState, useRef ,useEffect} from 'react';
import { ShoppingCart, ArrowRight } from 'iconsax-react-native';
import Bang_SanPham from './Bang_SanPham';
import { dataSanPham } from '../../data/dataSanPham';
import { COLORS, ANIMATIONS } from '../../../constants/theme'; // Đường dẫn chính xác
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../rtk/API';

import { useNavigation } from '@react-navigation/native';
import TheSanPham from './TheSanPham';
const HomeScreen = () => {
  const navigation = useNavigation();
  
  const scrollY = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const [listSanPham, setListSanPham] = useState([]);
  const bannerOpacity = scrollY.interpolate(ANIMATIONS.bannerOpacity);
  const bannerScaleY = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0.7],
    extrapolate: 'clamp'
  });
  const bannerTranslateY = scrollY.interpolate(ANIMATIONS.bannerTranslateY);
  const listTranslateY = scrollY.interpolate(ANIMATIONS.listTranslateY);


  useEffect(() => {
    
    dispatch(getProducts('66ab638db0051d5c7c05abd0'))
        .unwrap()
        .then(data => {
            console.log('Fetched data:', data);
            setListSanPham(data);
        })
        .catch(err => {
          console.log('API Response:', response); // Kiểm tra phản hồi đầy đủ
console.log('API Response Data:', response.data); // Kiểm tra dữ liệu cụ thể

            console.log('Error:', err);
        });
}, []);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerHome}>
        <View style={{ flexDirection: 'row', backgroundColor: '#F6F6F6' }}>
          <View style={styles.brTextHeader}>
            <Text style={styles.textHeader}>ROWENA - Hãy sống theo cách của bạn</Text>
          </View>
          <View style={styles.brIcon}>
            <View style={styles.iconSearch}>
              <ShoppingCart size={30} color='black' />
            </View>
          </View>
        </View>
        <Animated.View style={{ opacity: bannerOpacity, transform: [{ translateY: bannerTranslateY }, { scaleY: bannerScaleY }] }}>
          <ImageBackground
            style={styles.imgBanner}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNmO5KUuAUow4n09OE9GwDVSMzbl0j9k4j3Q&s' }}
          >
            <TouchableOpacity style={styles.buttonHeader}>
              <Text style={styles.textButtonHeader}>Tìm hiểu thêm</Text>
              <ArrowRight size={30} color='black' />
            </TouchableOpacity>
          </ImageBackground>
        </Animated.View>
      </View>
      <FlatList
              //data={DataProduct}
              data={listSanPham}
              renderItem={({ item }) =>
                <TouchableOpacity>
                  <TheSanPham data={item} />
                </TouchableOpacity>}
              keyExtractor={item => item._id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom:70}}
              numColumns={2}
              
            />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerHome: {
    height: 320,
    width: '100%',
    overflow: 'hidden',
  },
  brTextHeader: {
    width: '80%',
    height: 110,
  },
  textHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    padding: 20,
    flexWrap: 'wrap',
  },
  brIcon: {
    width: '20%',
    height: 100,
    justifyContent: 'center',
  },
  iconSearch: {
    backgroundColor: '#ffffff',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: 5,
    marginLeft: 10,
  },
  imgBanner: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    alignItems: 'flex-start',
  },
  buttonHeader: {
    marginLeft: 20,
    flexDirection: 'row',
    backgroundColor: '#F6F6F6',
    margin: 10,
    width: 220,
    height: 40,
    borderRadius: 10,
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonHeader: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    paddingRight: 20,
  },
  bodyHome: {
    paddingTop: 20,
    width: '100%',
    height:'auto'
  },
});