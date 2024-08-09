import { Image, Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../rtk/API';
import { useNavigation } from '@react-navigation/native';

const DangKiScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [tenDangNhap, setTenDangNhap] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [nhapLaiMatKhau, setNhapLaiMatKhau] = useState('');
  const dispatch = useDispatch();

  const dn = () => {
    navigation.navigate('dangnhap'); 
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const dangKy = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Thông báo', 'Email không hợp lệ');
      return;
    }

    if (matKhau !== nhapLaiMatKhau) {
      Alert.alert('Thông báo', 'Mật khẩu không khớp');
      return;
    }

    try {
      const response = await dispatch(register({
        Email: email,
        TenNguoiDung: tenDangNhap,
        MatKhau: matKhau,
      })).unwrap();

      if (response.status) {
        Alert.alert('Thông báo', 'Bạn đã đăng ký thành công');
        navigation.navigate('dangnhap'); // Chuyển hướng đến màn hình đăng nhập
      } else {
        Alert.alert('Thông báo', 'Đăng ký không thành công');
      }
    } catch (error) {
      Alert.alert('Thông báo', 'Đã xảy ra lỗi. Vui lòng thử lại');
    }
  };

  return (
    <View style={{flexDirection:'column',backgroundColor:'#151515',justifyContent:'center',alignItems:'center',height:'100%'}}>
      <View style={{width:'100%',alignItems:'center',marginBottom:50}}>
        <Image
          style={styles.img}
          source={{uri: 'http://daacosmetic.vn/wp-content/uploads/2024/05/427882518_702856682036959_7762571858849231346_n.jpg'}}
        />
        <Text style={styles.ttdangnhap}>ĐĂNG KÍ</Text>
      </View>

      <View style={{width:'100%',alignItems:'center',marginBottom:20}}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'#fff'}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập"
          placeholderTextColor={'#fff'}
          autoCapitalize="none"
          value={tenDangNhap}
          onChangeText={setTenDangNhap}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={'#fff'}
          placeholder="Mật khẩu"
          secureTextEntry
          autoCapitalize="none"
          value={matKhau}
          onChangeText={setMatKhau}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={'#fff'}
          placeholder="Nhập Lại Mật khẩu"
          secureTextEntry
          autoCapitalize="none"
          value={nhapLaiMatKhau}
          onChangeText={setNhapLaiMatKhau}
        />
      </View>

      <View style={{width:'100%',alignItems:'center',marginBottom:50}}>
        <View style={styles.btt}>
          <Pressable onPress={dangKy}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Đăng Kí</Text>
          </Pressable>
        </View>
      </View>
      
      <View style={{width:'100%',alignItems:'center',marginBottom:50}}>
        <Text style={{color: 'white', fontSize: 15, marginTop: 10}}>
          Bạn đã có tài khoản?
          <Pressable onPress={dn}>
            <Text style={{color: 'red', fontWeight: 'bold', fontSize: 15, top: 3, left: 3}}>Đăng nhập</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ttdangnhap:{
    color: 'white',
    fontSize: 25,
  },
  img:{
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input:{
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: 'white',
    borderRadius: 5,
  },
  btt:{
    backgroundColor: 'red',
    width: '80%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default DangKiScreen;
