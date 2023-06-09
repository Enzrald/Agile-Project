import { useState, useRef } from "react";
import { FlatList, StyleSheet, View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons"
import Spacer from "../components/Spacer";
import FormatCurrency from "../helpers/FormatCurrency";

const Order = () => {
    const ref = useRef();
    const [selectedItem, setSelectedItem] = useState(0);
    const statusOrder = [
        {
            id: 0,
            status: 'Đang thực hiện'
        },
        {
            id: 1,
            status: 'Đã hoàn tất'
        },
        {
            id: 2,
            status: 'Đã hủy'
        },
    ];
    const product = [
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
    ];
    const [order, setOrder] = useState([
        {
            id: 0,
            statusOrder: 0,
            date: '18/05/2022',
            time: '15:03',
        },
        {
            id: 1,
            statusOrder: 0,
            date: '12/07/2022',
            time: '14:20',
        },
        {
            id: 2,
            statusOrder: 1,
            date: '12/05/2023',
            time: '20:29',
        },
        {
            id: 3,
            statusOrder: 2,
            date: '09/06/2023',
            time: '00:42',
        },
    ]);
    const orderDetail = [
        {
            id: 0,
            idOrder: 0,
            idProduct: 3,
        },
        {
            id: 1,
            idOrder: 0,
            idProduct: 1,
        },
        {
            id: 2,
            idOrder: 0,
            idProduct: 5,
        },
        {
            id: 3,
            idOrder: 0,
            idProduct: 2,
        },
        {
            id: 4,
            idOrder: 0,
            idProduct: 2,
        },
        {
            id: 5,
            idOrder: 0,
            idProduct: 2,
        },
        {
            id: 6,
            idOrder: 1,
            idProduct: 4,
        },
        {
            id: 7,
            idOrder: 2,
            idProduct: 6,
        },
        {
            id: 8,
            idOrder: 2,
            idProduct: 0,
        },
        {
            id: 9,
            idOrder: 3,
            idProduct: 4,
        },
        {
            id: 10,
            idOrder: 3,
            idProduct: 6,
        },
    ];

    const getInfoProductFromOrder = (id, status) => {
        let listProductDetail = [];
        const listOrderDetail = orderDetail.filter(item => item.idOrder === id);

        for (let item of listOrderDetail) {
            listProductDetail.push(product.find(it => it.id === item.idProduct));
        }

        switch (status) {
            case 'getName()': {
                let nameProduct = '';
                let totalProduct = listProductDetail.length;

                for (let item of listProductDetail) {
                    nameProduct += item.name + (totalProduct == 1 ? '' : ', ');
                    --totalProduct;
                    if (listProductDetail.length != 2 && listProductDetail.length - totalProduct == 2) {
                        nameProduct += ` ${totalProduct} sản phẩm khác`;
                        return nameProduct;
                    }
                }
                return nameProduct;
            }
            case 'getPrice()': {
                let totalPrice = 0;
                for (let item of listProductDetail) {
                    totalPrice += item.price;
                }
                return totalPrice;
            }
        }
    }

    const checkSeparator = (item) => {
        let list = [];
        if (item.statusOrder == selectedItem) {
            for (let obj of order) {
                if (obj.statusOrder == selectedItem) {
                    list.push(obj);
                }
            }
        }

        if (list.length == 1) {
            return false;
        }
        else if (list.findIndex(i => i.id == item.id) == list.length - 1) {
            return false;
        }
        else {
            return true;
        }
    }

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
            'Xóa Order?',
            `Bạn có muốn xóa Order có ID = ${idDelete}?`,
            [
                {
                    text: "Cancel",
                    onPress: () => ref.current?.close(),
                    style: 'cancel'
                },
                {
                    text: "OK",
                    onPress: () => {
                        const dataNew = order.filter(item => item.id !== idDelete);
                        setOrder(dataNew);
                    },
                }
            ]
        );
    }

    const itemViewOrder = (item) => (
        <>
            {item.statusOrder === selectedItem ?
                <Swipeable ref={ref} renderRightActions={() => rightSwipe(item.id)}>
                    <View style={[Styles.itemOrder, checkSeparator(item) && Styles.itemOrderSeparator]}>
                        <View style={Styles.imgOrderContainer}>
                            <Image
                                style={Styles.imgOrder}
                                source={{ uri: 'https://i.pinimg.com/564x/44/eb/bf/44ebbf137cf770e9a5c3ae39da5c323b.jpg' }}
                            />
                        </View>
                        <View style={Styles.infoOrder}>
                            <Text numberOfLines={2} style={Styles.infoNameProductOrder}>{getInfoProductFromOrder(item.id, 'getName()')}</Text>
                            <Spacer height={10} />
                            <Text style={Styles.infoDateTimeProductOrder}>{item.time} - {item.date}</Text>
                        </View>
                        <View style={Styles.infoPriceOrder}>
                            <Text style={Styles.infoPriceProductOrder}>{FormatCurrency(getInfoProductFromOrder(item.id, 'getPrice()'))}</Text>
                        </View>
                    </View>
                </Swipeable>
                : null
            }
        </>
    )

    return (
        <View style={Styles.container}>
            <FlatList
                style={Styles.containerStatusOrder}
                data={statusOrder}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[Styles.containerStatusOrderItem, selectedItem === item.id && Styles.selectedItem]} onPress={() => setSelectedItem(item.id)}>
                        <Text style={[Styles.statusOrder, selectedItem === item.id && Styles.selectedText]}>{item.status}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

            <FlatList
                style={Styles.containerOrder}
                data={order}
                renderItem={({ item }) => itemViewOrder(item)}
                keyExtractor={item => item.id.toString()}
                ListHeaderComponentStyle={Styles.listHeader}
            />
        </View>
    );
}

export default Order;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    containerStatusOrder: {
        marginTop: 15,
        marginLeft: 15,
        maxHeight: 30,
    },
    containerStatusOrderItem: {
        // backgroundColor: '#dedede',
        borderRadius: 50,
        paddingHorizontal: 12,
        paddingVertical: 6,
        justifyContent: 'center',
        marginRight: 15,
    },
    statusOrder: {
        fontWeight: '400',
        fontSize: 14,
        color: '#FE8B00',
    },
    selectedItem: {
        backgroundColor: '#FE8B00'
    },
    selectedText: {
        color: '#F7F7F7'
    },
    containerOrder: {
        marginTop: 10,
        marginLeft: 15,
    },
    itemOrder: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        minHeight: 90,
        alignItems: 'center',
        marginRight: 15,
    },
    itemOrderSeparator: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        minHeight: 90,
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: .3,
        marginRight: 15,
    },
    imgOrderContainer: {
        width: 50,
        height: 50,
    },
    imgOrder: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    infoOrder: {
        flex: 1,
        maxWidth: 250,
        marginLeft: 15,
        // backgroundColor: 'yellow',
    },
    infoNameProductOrder: {
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        lineHeight: 23,
    },
    infoDateTimeProductOrder: {
        color: '#333'
    },
    infoPriceOrder: {
        marginLeft: 'auto',
        alignItems: 'flex-end',
    },
    infoPriceProductOrder: {
        marginLeft: 10,
        marginTop: 20,
        color: '#333',
        alignContent: 'flex-end',
        fontSize: 16,
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