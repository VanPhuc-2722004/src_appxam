import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import TheSanPham from './TheSanPham';

const Bang_SanPham = ({ data, Loai }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{Loai}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data?.map((item) => (
          <TheSanPham
            key={item.idSP}
            title={item.title}
            cart={item.cart}
            style={styles.productCard}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Bang_SanPham;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color:'black',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  productCard: {
    marginRight: 10,
  },
});
