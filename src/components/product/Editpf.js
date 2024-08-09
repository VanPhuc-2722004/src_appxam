import { Image, Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../rtk/API';
import { ArrowLeft2 } from 'iconsax-react-native'; // Import biểu tượng quay lại

const Editpf = () => {
  const user = useSelector(state => state.app.user); // Lấy thông tin người dùng từ Redux store
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(user?.Email || '');
  const [tenNguoiDung, setTenNguoiDung] = useState(user?.TenNguoiDung || '');
  const [sdt, setsdt] = useState(user?.Sdt || '');
  const [diachi, setDiachi] = useState(user?.Diachi || '');

  // Cập nhật các state khi user thay đổi
  useEffect(() => {
    if (user) {
      setEmail(user.Email);
      setTenNguoiDung(user.TenNguoiDung);
      setsdt(user.Sdt);
      setDiachi(user.Diachi);
    }
  }, [user]);

  const update = async () => {
    if (user && user._id) {
      try {
        const response = await dispatch(updateUser({
          id: user._id,
          Email: email,
          TenNguoiDung: tenNguoiDung,
          Sdt: sdt,
          Diachi: diachi,
        })).unwrap();
        
        if (response.status) {
          Alert.alert('Thông báo', 'Đã thay đổi thành công');
          navigation.goBack(); // Quay lại màn hình trước đó
        } else {
          Alert.alert('Thông báo', 'Cập nhật không thành công');
        }
      } catch (error) {
        Alert.alert('Thông báo', 'Cập nhật không thành công');
      }
    } else {
      console.log('User is undefined or missing _id');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <ArrowLeft2 size={24} color="white" />
        </Pressable>
        <Image
          style={styles.img}
          source={{ uri: 'http://daacosmetic.vn/wp-content/uploads/2024/05/427882518_702856682036959_7762571858849231346_n.jpg' }}
        />
        <Text style={styles.title}>SỬA THÔNG TIN</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={user?.Email || "Email"}
          placeholderTextColor={'#fff'}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder={user?.TenNguoiDung || "Tên đăng nhập"}
          placeholderTextColor={'#fff'}
          autoCapitalize="none"
          value={tenNguoiDung}
          onChangeText={setTenNguoiDung}
        />
        <TextInput
          style={styles.input}
          placeholder={user?.Sdt || "Số điện thoại"}
          placeholderTextColor={'#fff'}
          value={sdt}
          onChangeText={setsdt}
        />
        <TextInput
          style={styles.input}
          placeholder={user?.Diachi || "Địa chỉ"}
          placeholderTextColor={'#fff'}
          value={diachi}
          onChangeText={setDiachi}
        />
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={update}>
          <Text style={styles.buttonText}>Lưu Thay Đổi</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    padding: 10,
    zIndex: 1,
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  form: {
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
  footer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'red',
    width: '80%',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Editpf;
