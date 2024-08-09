import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hello = () => {
  return (
    <View style={{flexDirection:'column',backgroundColor:'#151515',justifyContent:'space-around',alignItems:'center',height:'100%'}}>

     <Image
     style={styles.img}
     source={{uri: 'http://daacosmetic.vn/wp-content/uploads/2024/05/427882518_702856682036959_7762571858849231346_n.jpg'}}
     >

     </Image>
    </View>
  )
}

export default Hello

const styles = StyleSheet.create({
  img:{
    width: 100,
    height: 100,
    marginBottom: 10,
  },
 
})