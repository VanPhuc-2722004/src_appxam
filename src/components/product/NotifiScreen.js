import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React from 'react'

const NotifiScreen = () => {
  return (
    <View style={styles.NotifiScreen}>
    <Text style={styles.textHeader}>
      Thông báo
    </Text>
   <View style={styles.NotifiTime}>
  <Text style={styles.time}>Thứ ,ngày /tháng /năm</Text>
      
   </View>

<View style={styles.NotifiContainer}>
    <ScrollView>
        <ItemNotifi></ItemNotifi>
    </ScrollView>
</View>
      
    
</View>
  )
}
const ItemNotifi = () => {
  return (
    <View style={styles.brNotifiItem}>
       <Image 
       style={styles.imgItemNotifi}
       source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8DuadLpfy5BUJk84yatm8loSLTWT-_P_1hg&s'}}>
       </Image>
       <View style={styles.contenItemNotifi}>
       <Text style={styles.titleItemNotifi}>Trạng thái đơn hàng</Text>
            <Text style={styles.titleItemNotifi}>Tên sản phẩm | Model</Text>
           
            <Text style={styles.titleItemNotifi}>Số lượng:100</Text>
       </View>
    </View>
  )
}

export default NotifiScreen

const styles = StyleSheet.create({
  NotifiScreen: {
    margin:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 25,
    color: 'black',
    
  },
  NotifiTime:{
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    height:50,
    borderBottomColor: 'black',
    borderBottomWidth:1,
    marginBottom:10,
   
  },
  time:{
    fontSize: 20,
    color: 'black',
   
    marginLeft:10,

  },
  NotifiContainer:{
    marginTop:'',
    width:'100%',
    height:'auto',

  },
  brNotifiItem:{
    width:'100%',
    flexDirection: 'row',
    
    marginBottom:10,
  },
  imgItemNotifi:{
    width:100,
    height:100,
    borderRadius:10,
    marginBottom:10,
  },
  contenItemNotifi:{
    flexDirection: 'column',
    height:'100%',
    justifyContent: 'space-evenly',
  },
  titleItemNotifi:{
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginBottom:5,
    marginLeft:10,
  }
})