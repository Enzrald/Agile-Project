import { FlatList, TouchableOpacity, View, Image, StyleSheet, Text, Alert } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Spacer from "../components/Spacer";
import { useState, useRef } from "react";
import Ionicons from "react-native-vector-icons/Ionicons"

const Product = () => {
    const ref = useRef();
    const [selectCategory, setSelectCategory] = useState(null);
    const [product, setProduct] = useState([
        {
            id: 0,
            idCategory: 0,
            name: 'Cà Phê Đen Đá',
            img: 'https://product.hstatic.net/1000075078/product/1639377797_ca-phe-den-da_3cef58a697ce4f408c61f6f3198cf560_large.jpg',
            price: 29000,
            desc: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị, ...',
        },
        {
            id: 1,
            idCategory: 0,
            name: 'Bạc Xỉu',
            img: 'https://product.hstatic.net/1000075078/product/1639377904_bac-siu_aa82c34bdd2748acaf9b93c71d1bb4fc_large.jpg',
            price: 29000,
            desc: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị, ...',
        },
        {
            id: 2,
            idCategory: 0,
            name: 'Cà Phê Sữa Đá',
            img: 'https://product.hstatic.net/1000075078/product/1669736835_ca-phe-sua-da_c68396379e9a419f921c22fa51abe846_large.png',
            price: 29000,
            desc: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị, ...',
        },
        {
            id: 3,
            idCategory: 1,
            name: 'Hi-Tea Yuzu Trân Châu',
            img: 'https://product.hstatic.net/1000075078/product/1669736859_hi-tea-yuzu-tran-chau_00ccb318460c4f2893c7f07e33e43883_large.png',
            price: 59000,
            desc: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị, ...',
        },
        {
            id: 4,
            idCategory: 1,
            name: 'Hi-Tea Dâu Tây Mận Muối Aloe',
            img: 'https://product.hstatic.net/1000075078/product/1679067492_hitea-man-muoi-dau-tay-ver2_ac61907202e54ed6906630da54d677ec_large.jpg',
            price: 59000,
            desc: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị, ...',
        },
        {
            id: 5,
            idCategory: 3,
            name: 'Frosty Bánh Kem Dâu',
            img: 'https://product.hstatic.net/1000075078/product/1686021305_banh-kem-dau-new_3628161404464f73bdd6873cdc739544_large.jpg',
            price: 59000,
            desc: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị, ...',
        },
        {
            id: 6,
            idCategory: 3,
            name: 'Frosty Choco Chip',
            img: 'https://product.hstatic.net/1000075078/product/1686021314_choco-chip-new_13d8dd57d3ea4aa18412a616c9ceda61_large.png',
            price: 59000,
            desc: 'Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị, ...',
        },
    ]);

    const category = [
        {
            id: 0,
            name: 'Cafe',
            img: 'https://i.pinimg.com/564x/ef/87/39/ef8739578ff5ccfdf76b381bd4627ecb.jpg',
        },
        {
            id: 1,
            name: 'Hi-Tea Soda',
            img: 'https://i.pinimg.com/564x/e9/9c/8c/e99c8c7bb773ee8b62bb506398aaed52.jpg',
        },
        {
            id: 2,
            name: 'Cafe Cup',
            img: 'https://i.pinimg.com/474x/97/9a/12/979a12cae125784267bc3c83a648e479.jpg',
        },
        {
            id: 3,
            name: 'Frosty',
            img: 'https://i.pinimg.com/474x/b6/b7/fd/b6b7fd021bf9e617cbc140fb73774204.jpg',
        },
    ];

    const rightSwipe = (id) => {
        return (
            <View style={Styles.containerSwpie}>
                <TouchableOpacity style={Styles.editSwipe} onPress={() => ref.current?.close()} >
                    <Ionicons name='create-sharp' color={'white'} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.deleteSwipe} onPress={() => onDelete(id)} >
                    <Ionicons name='trash-sharp' color={'white'} size={30} />
                </TouchableOpacity>
            </View>
        );
    }

    const onDelete = idDelete => {
        Alert.alert(
            'Xóa User?',
            `Bạn có muốn xóa Product có ID = ${idDelete}?`,
            [
                {
                    text: "Cancel",
                    onPress: () => ref.current?.close(),
                    style: 'cancel'
                },
                {
                    text: "OK",
                    onPress: () => {
                        const dataNew = product.filter(item => item.id !== idDelete);
                        setProduct(dataNew);
                    },
                }
            ]
        );
    }

    return (
        <View style={Styles.container}>
            <Text style={Styles.titleCategory}>Danh mục</Text>
            <FlatList
                style={Styles.containerCateogry}
                data={category}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={Styles.itemCategory}
                        onPress={() => setSelectCategory(selectCategory === item.id ? null : item.id)}
                    >
                        <View>
                            <Image
                                style={Styles.imgCategory}
                                source={{ uri: item.img }}
                            />
                            <Text style={Styles.nameCategory}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

            <Text style={Styles.titleProduct}>Sản phẩm</Text>
            <FlatList
                style={Styles.containerProduct}
                data={product}
                renderItem={({ item }) => (
                    <>
                        {selectCategory === null ?
                            <Swipeable ref={ref} renderRightActions={() => rightSwipe(item.id)}>
                                <View style={Styles.itemProduct}>
                                    <View style={Styles.imgProductContainer}>
                                        <Image
                                            source={{ uri: item.img }}
                                            style={Styles.imgProduct}
                                        />
                                    </View>
                                    <View style={Styles.infoProduct}>
                                        <View style={Styles.rowInfoProduct}>
                                            <Text numberOfLines={2} style={Styles.nameProduct}>{item.name}</Text>
                                        </View>
                                        <Spacer height={5} />
                                        <View style={Styles.rowInfoProduct}>
                                            <Text style={Styles.priceProduct}>{item.price}đ</Text>
                                        </View>
                                    </View>
                                </View>
                            </Swipeable>
                            : item.idCategory === selectCategory ?
                                <Swipeable ref={ref} renderRightActions={() => rightSwipe(item.id)}>
                                    <View style={Styles.itemProduct}>
                                        <View style={Styles.imgProductContainer}>
                                            <Image
                                                source={{ uri: item.img }}
                                                style={Styles.imgProduct}
                                            />
                                        </View>
                                        <View style={Styles.infoProduct}>
                                            <View style={Styles.rowInfoProduct}>
                                                <Text numberOfLines={2} style={Styles.nameProduct}>{item.name}</Text>
                                            </View>
                                            <Spacer height={5} />
                                            <View style={Styles.rowInfoProduct}>
                                                <Text style={Styles.priceProduct}>{item.price}đ</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Swipeable>
                                : null
                        }
                    </>
                )}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default Product;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    titleCategory: {
        marginTop: 10,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 23,
    },
    containerCateogry: {
        marginTop: 10,
        maxHeight: 150,
    },
    itemCategory: {
        marginLeft: 15,
        marginRight: 15,
    },
    imgCategory: {
        width: 100,
        height: 100,
        borderRadius: 50,
        textAlign: 'center',
    },
    nameCategory: {
        textAlign: 'center',
        marginTop: 15,
        fontWeight: '600',
    },
    titleProduct: {
        marginTop: 10,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 23,
    },
    containerProduct: {
        flex: 1,
        marginTop: 10,
    },
    itemProduct: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    imgProductContainer: {
        height: 120,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgProduct: {
        width: 120,
        height: 120,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 0,
    },
    infoProduct: {
        marginTop: 5,
    },
    rowInfoProduct: {
        flexDirection: 'row',
    },
    nameProduct: {
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 13,
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    priceProduct: {
        fontSize: 14,
        marginLeft: 13,
    },
    containerSwpie: {
        backgroundColor: 'white',
        height: '100%',
    },
    editSwipe: {
        width: 100,
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0F9D58',
    },
    deleteSwipe: {
        width: 100,
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF4444',
    },
});