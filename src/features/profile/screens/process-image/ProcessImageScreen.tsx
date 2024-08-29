import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import BaseContainer from '../../../../components/BaseContainer';
import { Colors } from '../../../../assets/colors/Colors';
import { FontSizes } from '../../../../assets/dimens/FontsSize';

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

const WeightItem = ({ title, calories, image }: { title: string; calories: string; image: any }) => (
    <View style={styles.menuItem}>
        <Image source={image} style={styles.menuImage} />
        <View>
            <Text style={styles.menuTitle}>{title}</Text>
            <Text style={styles.menuCalories}>{calories}</Text>
        </View>
    </View>
);

const ProcessImageScreen = () => {
    return (
        <BaseContainer
            isShowHeader={true}
            headerTittle="Hinh ảnh quá trình"
            isShowLeftIcon={true}
            headerTittleStyle={styles.headerStyle}
            headerTittleTextStyle={styles.headerTitleText}
            backgroundColorStatus={Colors.green[600]}
        >

            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <WeightItem {...item} />}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.menuList}
                />
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
    text: {
        color: Colors.light,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    weightList: {
        paddingHorizontal: 16,
    },
    weightItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    date: {
        fontSize: 16,
        color: '#888',
    },
    weight: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        color: '#888',
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
});
export default ProcessImageScreen;