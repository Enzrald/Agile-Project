import { useRef, useState } from "react";
import { View, StyleSheet, FlatList, Text, Image, TouchableOpacity, Alert } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons"
import Spacer from "../components/Spacer";

const Customer = () => {
    const ref = useRef();
    const [customer, setCustomer] = useState([
        {
            id: 0,
            avatar: 'https://i.pinimg.com/564x/64/37/05/64370541d9b8e5107b33afe98bc2b988.jpg',
            name: 'Nguyen Sy Tung',
            email: 'tungnsph25350@fpt.edu.vn',
            address: 'Van Canh - Hoai Duc - Ha Noi'
        },
        {
            id: 1,
            avatar: 'https://i.pinimg.com/564x/4f/61/28/4f6128a7b8008fee5e674056a6867642.jpg',
            name: 'nstungg',
            email: 'tungnsph25350@fpt.edu.vn',
            address: 'Van Canh - Hoai Duc - Ha Noi'
        },
        {
            id: 2,
            avatar: 'https://i.pinimg.com/564x/63/1d/21/631d21d0ebe8c726b8074b7de28a6dc5.jpg',
            name: 'nstung7323',
            email: 'tungnsph25350@fpt.edu.vn',
            address: 'Van Canh - Hoai Duc - Ha Noi'
        },
    ]);


    const itemView = item => {
        return (
            <Swipeable ref={ref} renderRightActions={() => rightSwipe(item.id)}>
                <View style={Styles.item}>
                    <View style={Styles.avatarContainer}>
                        <Image
                            source={{ uri: item.avatar }}
                            style={Styles.avatar}
                        />
                    </View>
                    <View style={Styles.info}>
                        <View style={Styles.rowInfo}>
                            <Text style={Styles.name}>{item.name}</Text>
                        </View>
                        <Spacer height={5} />
                        <View style={Styles.rowInfo}>
                            <Text style={Styles.email}>{item.email}</Text>
                        </View>
                        {/* <Spacer height={5} />
                        <View style={Styles.rowInfo}>
                            <Text style={Styles.address}>{item.address}</Text>
                        </View> */}
                    </View>
                </View>
            </Swipeable>
        );
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
            'Xóa User?',
            `Bạn có muốn xóa User có ID = ${idDelete}?`,
            [
                {
                    text: "Cancel",
                    onPress: () => ref.current?.close(),
                    style: 'cancel'
                },
                {
                    text: "OK",
                    onPress: () => {
                        const dataNew = customer.filter(item => item.id !== idDelete);
                        setCustomer(dataNew);
                    },
                }
            ]
        );
    }

    return (
        <View style={Styles.container}>
            {customer.length == 0 ? null :
                <FlatList
                    style={Styles.containerCustomer}
                    data={customer}
                    // ListHeaderComponent={
                    //     <>
                    //         <Spacer height={20} />
                    //         <Text style={Styles.listHeaderLine}>Shop Manager</Text>
                    //     </>
                    // }
                    // ListHeaderComponentStyle={Styles.listHeader}
                    // ItemSeparatorComponent={<View style={Styles.separator} />}
                    renderItem={
                        ({ item }) => itemView(item)
                    }
                    keyExtractor={(item) => item.id}
                />
            }
        </View>
    )
}

export default Customer;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    containerCustomer: {
        marginTop: 10,
        flex: 1,
    },
    // listHeader: {
    //     height: 55,
    //     alignItems: 'center',
    //     justifyContent: "center",
    // },
    // listHeaderLine: {
    //     color: '#333',
    //     fontSize: 21,
    //     fontWeight: 'bold',
    // },
    item: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 15,
    },
    avatarContainer: {
        height: 120,
        width: 120,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 0,
    },
    info: {
        marginTop: 5,
    },
    rowInfo: {
        flexDirection: 'row',
    },
    name: {
        fontWeight: '600',
        fontSize: 16,
        marginLeft: 13,
    },
    email: {
        fontSize: 14,
        marginLeft: 13,
    },
    // address: {
    //     fontSize: 14,
    //     marginLeft: 13,
    // },
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
    // separator: {
    //     height: 1,
    //     width: '100%',
    //     backgroundColor: '#cccccc',
    // },
});