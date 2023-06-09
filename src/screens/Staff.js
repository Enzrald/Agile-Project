import { useRef, useState } from "react";
import { FlatList, StyleSheet, View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons"
import Spacer from "../components/Spacer";

const Staff = () => {
    const ref = useRef();
    const [staff, setStaff] = useState([
        {
            id: 0,
            name: 'Nguyen Sy Tung',
            age: 20,
            phone: '0987123645',
            email: 'nstung2003@gmail.com',
            address: 'Van Canh, Hoai Duc, Ha Noi',
            position: 'Coder',
            avatar: 'https://i.pinimg.com/564x/6b/31/33/6b31330ed51b2641e2f19cd73da784d3.jpg',
        },
        {
            id: 1,
            name: 'Nguyen Thu Huyen',
            age: 20,
            phone: '0321456987',
            email: 'nthuyen@gmail.com',
            address: 'Van Canh, Hoai Duc, Ha Noi',
            position: 'Leader',
            avatar: 'https://i.pinimg.com/564x/04/b1/b6/04b1b61ac7cca51296cac1beb0ba6592.jpg',
        },
        {
            id: 2,
            name: 'Vu Ngoc Hanh',
            age: 19,
            phone: '0765123487',
            email: 'vnhanh@gmail.com',
            address: 'Ngai Cau, An Khanh, Ha Noi',
            position: 'Scum Master',
            avatar: 'https://i.pinimg.com/564x/8f/8d/c9/8f8dc9f31e18655f6fcf35b136c976f0.jpg',
        },
        {
            id: 3,
            name: 'Tran Ngan Ha',
            age: 19,
            phone: '0765123487',
            email: 'tnha@gmail.com',
            address: 'Xuan Phuong, Nam Tu Liem, Ha Noi',
            position: 'Product Owner',
            avatar: 'https://i.pinimg.com/564x/e8/52/06/e852065dc5049e021ffaf0d710fd4723.jpg',
        },
    ]);

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
            'Xóa Staff?',
            `Bạn có muốn xóa Staff có ID = ${idDelete}?`,
            [
                {
                    text: "Cancel",
                    onPress: () => ref.current?.close(),
                    style: 'cancel'
                },
                {
                    text: "OK",
                    onPress: () => {
                        const dataNew = staff.filter(item => item.id !== idDelete);
                        setStaff(dataNew);
                    },
                }
            ]
        );
    }

    return (
        <View style={Styles.container}>
            {staff.length === 0 ? null :
                <FlatList
                    style={Styles.containerStaff}
                    data={staff}
                    renderItem={({ item }) => (
                        <Swipeable ref={ref} renderRightActions={() => rightSwipe(item.id)}>
                            <View style={Styles.item}>
                                <View style={Styles.avatarContainer}>
                                    <Image
                                        source={{ uri: item.avatar }}
                                        style={Styles.avatar}
                                    />
                                </View>
                                <View style={Styles.infoStaff}>
                                    <View style={Styles.rowInfoStaff}>
                                        <Text numberOfLines={2} style={Styles.name}>{item.name}</Text>
                                    </View>
                                    <Spacer height={5} />
                                    <View style={Styles.rowInfoStaff}>
                                        <Text style={Styles.position}>{item.position}</Text>
                                    </View>
                                    <View style={Styles.contactInfoStaff}>
                                        <View style={Styles.rowInfoStaff}>
                                            <Text style={Styles.phone}>Phone: {item.phone}</Text>
                                        </View>
                                        <Spacer height={2} />
                                        <View style={Styles.rowInfoStaff}>
                                            <Text style={Styles.email}>Email: {item.email}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Swipeable>
                    )}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />}
        </View>
    );
}

export default Staff;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    containerStaff: {
        flex: 1,
        marginTop: 10,
    },
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
    infoStaff: {
        marginTop: 5,
    },
    rowInfoStaff: {
        flexDirection: 'row',
    },
    name: {
        fontWeight: '600',
        fontSize: 18,
        marginLeft: 13,
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    position: {
        fontSize: 15,
        marginLeft: 13,
    },
    contactInfoStaff: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    phone: {
        marginLeft: 13,
        fontSize: 13,
    },
    email: {
        marginLeft: 13,
        fontSize: 13,
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