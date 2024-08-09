import { StyleSheet, Text, View ,ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const UserScreen = () => {
  const navigation = useNavigation();
  const edit = () => {
    navigation.navigate('edit');
  };

  return (
    <View style={styles.userScreen}>
      
        
        <View style={styles.infor}>
          <ImageBackground 
          style={{width: 60, height: 60, borderRadius: 50}}
          source={{uri: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'}}
          ></ImageBackground>
          <View style={styles.titleInfor}>
              <Text style={styles.titleName}>Lương Văn Phúc</Text>
              <Text style={styles.titleMail}>phuclv272@gmail.com</Text>
          </View>
         
        </View>
        <View style={styles.chung}>
        <View style={styles.gachChan}>
        <Text style={styles.titleChung}>Chung</Text>
        </View>
        <Pressable onPress={edit}>
          <Text style={[styles.titleChung,{marginBottom:20,color:'black'}]}>Chỉnh sửa thông tin</Text>
        </Pressable>
        
        <Text style={[styles.titleChung,{marginBottom:20,color:'black'}]}>Địa chỉ các chi nhánh</Text>
        <Text style={[styles.titleChung,{marginBottom:20,color:'black'}]}>Lịch sử trồng cây</Text>
        <Text style={[styles.titleChung,{marginBottom:40,color:'black'}]}>Q & A</Text>
          </View> 
          <View style={styles.gachChan}>
        <Text style={styles.titleChung}>Bảo mật và Điều khoản</Text>
        </View>
        <Text style={[styles.titleChung,{marginBottom:20,color:'black'}]}>Điều khoản và điều kiện</Text>
        <Text style={[styles.titleChung,{marginBottom:20,color:'black'}]}>Chính sách quyền riêng tư</Text>
        <Text style={[styles.titleChung,{marginBottom:20,color:'red'}]}>Đăng xuất</Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({

  userScreen: {
    flex: 1,
    backgroundColor: '#fff',
   
    flexDirection: 'column',
    padding:30,
  },
  HeaderTitle:{
    fontSize: 20,
    color: '#000'
  },
  brHeaderTitle:{
   
    width:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    
   
  },
  infor:{
    width: '100%',
    flexDirection: 'row',
    margin:20,
    alignItems: 'center',
    
    
  },
  titleInfor:{
    margin:30,
  },
  titleName:{
    fontSize: 20,
    color: '#000'
  },
  titleChung:{
    fontSize: 20,
  },
  gachChan: {
    borderBottomWidth: 0.5,  
    paddingBottom: 5,
    marginBottom:20, 
  },
  titleChung: {
    fontSize: 20,
    
  },
})