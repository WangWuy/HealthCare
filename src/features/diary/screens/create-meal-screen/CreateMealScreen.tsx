
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { Camera } from 'lucide-react-native';
import BaseContainer from '../../../../components/BaseContainer';
import { Colors } from '../../../../assets/colors/Colors';
import { Spacings } from '../../../../assets/dimens/Spacing';
import { FontSizes } from '../../../../assets/dimens/FontsSize';

import IconAdd from '../../../../assets/icons/ic-add.svg';
import { IconsSize } from '../../../../assets/dimens/IconsSize';

const CreateMealScreen = () => {
    const [mealName, setMealName] = useState('');


    return (
        <BaseContainer
            isShowHeader={true}
            headerTittle="Tạo bữa ăn"
            isShowLeftIcon={true}
            headerTittleStyle={styles.headerStyle}
            headerTittleTextStyle={styles.headerTitleText}
            backgroundColorStatus={Colors.green[600]}
        >
            <View style={styles.content}>
                <TextInput
                    style={styles.input}
                    placeholder="Tên bữa ăn..."
                    value={mealName}
                    onChangeText={setMealName}
                />

                <TouchableOpacity style={styles.addPhotoButton}>
                    {/* <Camera color="#008080" size={24} /> */}
                    <Text style={styles.addPhotoText}>Thêm ảnh</Text>
                </TouchableOpacity>

                <View style={styles.caloriesContainer}>
                    <Text style={styles.caloriesTitle}>Năng lượng</Text>
                    <Text style={styles.caloriesSubtitle}>Năng lượng được app tính tự động</Text>
                    <Text style={styles.caloriesValue}>0 Calo</Text>
                </View>

                <View style={styles.foodSection}>
                    <View style={styles.foodHeader}>
                        <Text style={styles.foodTitle}>Thực phẩm</Text>
                        <TouchableOpacity>
                            <IconAdd width={IconsSize.md} height={IconsSize.md}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.noFoodContainer}>
                        <Text style={styles.noFoodText}>Bạn chưa thêm thực phẩm</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.saveButtonText}>Lưu</Text>
            </TouchableOpacity>
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
    content: {
        flex: 1,
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
    addPhotoButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderStyle: 'dashed',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    addPhotoText: {
        marginLeft: 8,
        color: '#008080',
    },
    caloriesContainer: {
        marginBottom: 16,
    },
    caloriesTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    caloriesSubtitle: {
        fontSize: 14,
        color: '#666',
    },
    caloriesValue: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 4,
    },
    foodSection: {
        flex: 1,
    },
    foodHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    foodTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    noFoodContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        borderStyle: 'dashed',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noFoodText: {
        color: '#666',
    },
    saveButton: {
        backgroundColor: '#008080',
        padding: 16,
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 8,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CreateMealScreen;