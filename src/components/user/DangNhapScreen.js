import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { Google } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../rtk/API';
const DangNhapScreen = () => {
  const navigation = useNavigation();
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const dk = () => {
    navigation.navigate('dangki');
  };

  const home = () => {
    navigation.navigate('home');
  };

  const dangNhap = async () => {
    try {
        // Gọi API đăng nhập
        const response = await dispatch(login({
            TenNguoiDung: emailOrUsername,
            MatKhau: password
        })).unwrap(); // unwrap() để nhận dữ liệu trả về từ API

        // Kiểm tra phản hồi từ API
        if (response.status) {
            console.log('Đăng nhập thành công', response);
            home(); // Chuyển đến màn hình chính nếu đăng nhập thành công
        } else {
            console.log('Đăng nhập thất bại', response.message);
            // Hiển thị thông báo lỗi nếu cần
        }
    } catch (error) {
        console.error('Lỗi khi đăng nhập:', error.message);
        // Hiển thị thông báo lỗi nếu cần
    }
};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.img}
          source={{ uri: 'http://daacosmetic.vn/wp-content/uploads/2024/05/427882518_702856682036959_7762571858849231346_n.jpg' }}
        />
        <Text style={styles.ttdangnhap}>ĐĂNG NHẬP</Text>
      </View>
    
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tên đăng nhập hoặc (Email)"
          placeholderTextColor={'#fff'}
          keyboardType="email-address"
          autoCapitalize="none"
          value={emailOrUsername}
          onChangeText={setEmailOrUsername}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={'#fff'}
          placeholder="Mật khẩu"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
      </View>
     
      <View style={styles.buttonContainer}>
        <Pressable style={styles.loginButton} onPress={dangNhap}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </Pressable>
        <Pressable style={styles.googleButton}>
          <View style={styles.googleButtonContent}>
            <Google size={25} color='red' style={styles.icon} />
            <Text style={styles.googleButtonText}>Đăng nhập bằng Google</Text>
          </View>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Quên mật khẩu?</Text>
        <Text style={styles.footerText}>
          Bạn chưa có tài khoản?
          <Pressable onPress={dk}>
            <Text style={styles.registerText}>Đăng ký</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#151515',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  ttdangnhap: {
    color: 'white',
    fontSize: 25,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: 'white',
    borderRadius: 5,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  loginButton: {
    backgroundColor: 'red',
    width: '80%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '80%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButtonContent: {
    flexDirection: 'row',
  },
  icon: {
    marginTop: 2,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  googleButtonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  footerText: {
    color: 'white',
    fontSize: 15,
  },
  registerText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    top: 3,
    left: 3,
  },
});

export default DangNhapScreen;
