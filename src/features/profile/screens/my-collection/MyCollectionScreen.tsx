import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import BaseContainer from '../../../../components/BaseContainer';
import { Colors } from '../../../../assets/colors/Colors';
import { FontSizes } from '../../../../assets/dimens/FontsSize';


const MenuItem = ({ title, calories, image }: { title: string; calories: string; image: any }) => (
    <View style={styles.menuItem}>
        <Image source={image} style={styles.menuImage} />
        <View>
            <Text style={styles.menuTitle}>{title}</Text>
            <Text style={styles.menuCalories}>{calories}</Text>
        </View>
    </View>
);

const MyCollectionScreen = () => {

    const data = [
        {
            title: 'Cơm trứa công ty',
            calories: '1 khẩu phần, 311 Calo',
            image: require('../../../../assets/images/img-meal-01.jpg'),
        },
        {
            title: 'Cơm trưa văn phòng',
            calories: '1 khẩu phần, 828 Calo',
            image: require('../../../../assets/images/img-meal-02.jpg'),
        },
    ];

    return (
        <BaseContainer
            isShowHeader={true}
            headerTittle="Bộ sưu tập"
            isShowLeftIcon={true}
            headerTittleStyle={styles.headerStyle}
            headerTittleTextStyle={styles.headerTitleText}
            backgroundColorStatus={Colors.green[600]}
        >

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Thực phẩm</Text>
                    <Text style={styles.headerText}>Món của bạn</Text>
                    <Text style={styles.headerText}>Hoạt động</Text>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <MenuItem {...item} />}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.menuList}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>+ Thêm mới</Text>
                    <Text style={styles.footerText}>Đã hết</Text>
                </View>
            </View>
        </BaseContainer>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.green[400],
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
    },
    headerTitleText: {
        color: Colors.light,
        fontSize: FontSizes.lg,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: Colors.light,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    menuList: {
        paddingHorizontal: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    menuImage: {
        width: 80,
        height: 80,
        marginRight: 16,
    },
    menuTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    menuCalories: {
        fontSize: 14,
        color: '#888',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    footerText: {
        fontSize: 16,
        color: '#007AFF',
    },
});
export default MyCollectionScreen;