// SearchScreen.jsx
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchNormal1 } from 'iconsax-react-native';
import { fetchProducts } from '../../rtk/API'; // Đảm bảo đường dẫn chính xác

const SearchScreen = () => {
    const dispatch = useDispatch();
    const { list: products = [], loading } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <View style={styles.SearchScreen}>
            <View style={{ margin: 30 }}>
                <Text style={styles.textHeader}>Tìm kiếm</Text>
                <View style={styles.SearchInput}>
                    <SearchNormal1 size={30} color="black" />
                    <TextInput placeholder="Nhập từ khóa" />
                </View>
                <View style={styles.SearchContainer}>
                    <ScrollView>
                        {loading ? (
                            <Text>Đang tải...</Text>
                        ) : (
                            products.length > 0 ? (
                                products.map((product) => (
                                    <ItemSearch key={product.id} product={product} />
                                ))
                            ) : (
                                <Text>Không có sản phẩm nào</Text>
                            )
                        )}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

const ItemSearch = ({ product }) => {
    return (
        <View style={styles.brSearchItem}>
            <View style={styles.contenItemSearch}>
                <Image
                    style={styles.imgItemSearch}
                    source={{ uri: product.image }}
                />
                <Text style={styles.titleItemSearch}>{product.name}</Text>
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    SearchScreen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textHeader: {
        fontSize: 25,
        color: 'black',
    },
    SearchInput: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginBottom: 10,
    },
    SearchContainer: {
        width: 300,
        height: '100%',
    },
    brSearchItem: {
        width: '50%',
        height: 170,
        backgroundColor:'red',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    imgItemSearch: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
    },
    contenItemSearch: {
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-evenly',
    },
    titleItemSearch: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
    },
    priceItemSearch: {
        fontSize: 14,
        color: 'gray',
    }
});

export default SearchScreen;
