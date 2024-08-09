import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AddSquare } from 'iconsax-react-native';
const TheSanPham = (props) => {
  const { data} = props;
  return (
    <View style={styles.productContainer}>
     
      <Image 
      source={{uri:data.img}}
      style={styles.img}
      >
      </Image>
      <Text style={styles.title}>{data.ten_san_pham}</Text>
      <Text style={styles.price}>{data.gia} VNĐ</Text>

    </View>
  );
};

export default TheSanPham;

const styles = StyleSheet.create({
  productContainer:{
    alignItems : 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  img:{
    width: 135,
    height: 150,
  },
  title:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
   
    color: 'black',
  }
});
