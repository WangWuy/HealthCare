
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { Camera } from 'lucide-react-native';
import BaseContainer from '../../../../components/BaseContainer';
import { Colors } from '../../../../assets/colors/Colors';
import { Spacings } from '../../../../assets/dimens/Spacing';
import { FontSizes } from '../../../../assets/dimens/FontsSize';

const CreateFoodScreen = () => {
    const [foodName, setFoodName] = useState('');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('100');
    const [calories, setCalories] = useState('100');
    const [protein, setProtein] = useState('100');
    const [carbs, setCarbs] = useState('0');
    const [fat, setFat] = useState('0');

    return (
        <BaseContainer
            isShowHeader={true}
            headerTittle="Tạo thực phẩm"
            isShowLeftIcon={true}
            headerTittleStyle={styles.headerStyle}
            headerTittleTextStyle={styles.headerTitleText}
            backgroundColorStatus={Colors.green[600]}
        >

            <View style={styles.container}>
                <TouchableOpacity style={styles.imageButton}>
                    {/* <Camera color="#666" size={24} /> */}
                    <Text style={styles.imageButtonText}>Thêm ảnh{'\n'}Thêm ảnh thực phẩm</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    placeholder="Nhập tên thực phẩm"
                    value={foodName}
                    onChangeText={setFoodName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Mô tả"
                    value={description}
                    onChangeText={setDescription}
                />

                <View style={styles.row}>
                    <Text style={styles.label}>Năng lượng tính trên</Text>
                    <TextInput
                        style={styles.numberInput}
                        value={amount}
                        onChangeText={setAmount}
                        keyboardType="numeric"
                    />
                    <Text style={styles.unit}>g</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Năng lượng</Text>
                    <TextInput
                        style={styles.numberInput}
                        value={calories}
                        onChangeText={setCalories}
                        keyboardType="numeric"
                    />
                    <Text style={styles.unit}>Calo</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Protein/Chất đạm</Text>
                    <TextInput
                        style={styles.numberInput}
                        value={protein}
                        onChangeText={setProtein}
                        keyboardType="numeric"
                    />
                    <Text style={styles.unit}>g</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Carbs/Chất bột đường</Text>
                    <TextInput
                        style={styles.numberInput}
                        value={carbs}
                        onChangeText={setCarbs}
                        keyboardType="numeric"
                    />
                    <Text style={styles.unit}>g</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Fat/Chất béo</Text>
                    <TextInput
                        style={styles.numberInput}
                        value={fat}
                        onChangeText={setFat}
                        keyboardType="numeric"
                    />
                    <Text style={styles.unit}>g</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Tiếp theo</Text>
                </TouchableOpacity>
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
        padding: 16,
        backgroundColor: Colors.light,
    },
    imageButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 16,
    },
    imageButtonText: {
        marginLeft: 12,
        color: '#666',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    label: {
        flex: 1,
        fontSize: 16,
    },
    numberInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        width: 100,
        textAlign: 'right',
    },
    unit: {
        marginLeft: 8,
        width: 40,
    },
    button: {
        backgroundColor: '#2c3e50',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CreateFoodScreen;