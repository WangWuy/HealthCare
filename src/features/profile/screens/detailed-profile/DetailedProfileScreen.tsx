import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import BaseContainer from '../../../../components/BaseContainer';
import { Colors } from '../../../../assets/colors/Colors';
import { Spacings } from '../../../../assets/dimens/Spacing';
import { FontSizes } from '../../../../assets/dimens/FontsSize';
import { IconsSize } from '../../../../assets/dimens/IconsSize';

import IconProfile from '../../../../assets/icons/ic-profile-green.svg';

const DetailedProfileScreen = () => {
    const profileData = [
        { icon: <IconProfile color="#008080" style={styles.iconStyle} />, label: 'Tên hiển thị', value: 'Quang Huy Huỳnh' },
        { icon: <IconProfile color="#008080" style={styles.iconStyle} />, label: 'Địa chỉ email', value: 'mrhuy10a13@gmail.com' },
        { icon: <IconProfile color="#008080" style={styles.iconStyle} />, label: 'Điện thoại', value: '0399071340' },
        { icon: <IconProfile color="#008080" style={styles.iconStyle} />, label: 'Giới tính', value: 'Nam' },
        { icon: <IconProfile color="#008080" style={styles.iconStyle} />, label: 'Tuổi', value: '24' },
        { icon: <IconProfile color="#008080" style={styles.iconStyle} />, label: 'Mức độ vận động', value: 'Ít hoạt động' },
        { icon: <IconProfile color="#008080" style={styles.iconStyle} />, label: 'Chiều cao', value: '171 cm' },
        { icon: <IconProfile color="#008080" style={styles.iconStyle} />, label: 'Cân nặng hiện tại', value: '70 kg' },
        { icon: <IconProfile color="#008080" style={styles.iconStyle} />, label: 'Cân nặng mục tiêu', value: '73 kg' },
        { icon: <IconProfile color="#008080" style={styles.iconStyle} />, label: 'BMI', value: '23.9' },
    ];

    return (
        <BaseContainer
            headerTittle='Hồ sơ của tôi'
            headerTittleStyle={styles.headerStyle}
            headerTittleTextStyle={styles.headerTitleText}
            isShowLeftIcon={true}
        >
            <ScrollView>

                <View style={styles.profileHeader}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/100' }}
                        style={styles.avatar}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>Quang Huy Huỳnh</Text>
                        <View style={styles.accountInfo}>
                            <Text style={styles.accountText}>Tài khoản Eatsy: 535442</Text>
                            <TouchableOpacity>
                                {/* <Copy color="#008080" size={20} /> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.detailsContainer}>
                    {profileData.map((item, index) => (
                        <View key={index} style={styles.detailItem}>
                            {item.icon}
                            <View style={styles.detailText}>
                                <Text style={styles.detailLabel}>{item.label}</Text>
                                <Text style={styles.detailValue}>{item.value}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </BaseContainer>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: Colors.green[400],
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
    },
    headerTitleText: {
        color: Colors.light,
        fontSize: FontSizes.lg,
        fontWeight: 'bold',
        marginRight: 20,
    },
    iconStyle: {
        width: IconsSize.md,
        height: IconsSize.md,
    },
    placeholder: {
        width: 24,
    },
    profileHeader: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    profileInfo: {
        justifyContent: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    accountInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    accountText: {
        fontSize: 14,
        color: '#666',
        marginRight: 8,
    },
    detailsContainer: {
        padding: 16,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    detailText: {
        marginLeft: 16,
        flex: 1,
    },
    detailLabel: {
        fontSize: 14,
        color: '#666',
    },
    detailValue: {
        fontSize: 16,
        fontWeight: '500',
    },
});

export default DetailedProfileScreen;