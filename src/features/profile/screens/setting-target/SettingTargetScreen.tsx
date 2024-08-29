import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ViewStyle, StyleProp, TextInput, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import BaseContainer from '../../../../components/BaseContainer';
import { Colors } from '../../../../assets/colors/Colors';

// Import Icon
import IconAdd from '../../../../assets/icons/ic-add.svg';
import IconMinus from '../../../../assets/icons/ic-minus.svg';
import { styles } from '../setting-target/SettingTargetScreen.style';

interface NumberInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onIncrement: () => void;
    onDecrement: () => void;
    label: string;
    subLabel: string;
    style?: StyleProp<ViewStyle>;
}

const SettingTargetScreen = () => {
    const [goal, setGoal] = useState('');
    const [gender, setGender] = useState('Nam');
    const [age, setAge] = useState('0');
    const [height, setHeight] = useState('0');
    const [weight, setWeight] = useState('0');
    const [intensity, setIntensity] = useState(5);
    const [targetWeight, setTargetWeight] = useState('0');
    const [weightChangeRate, setWeightChangeRate] = useState('');

    const goals = [
        { label: 'Giảm mỡ', value: 'lose_fat' },
        { label: 'Tăng cân', value: 'gain_weight' },
        { label: 'Giữ cân', value: 'maintain' },
    ];

    const weightChangeRates = [
        { label: 'Chậm', value: 'slow' },
        { label: 'Vừa phải', value: 'moderate' },
        { label: 'Nhanh', value: 'fast' },
    ];

    const handleIncrement = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
        setter((prevValue) => (parseInt(prevValue) + 1).toString());
    };

    const handleDecrement = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
        setter((prevValue) => Math.max(0, parseInt(prevValue) - 1).toString());
    };

    const NumberInput: React.FC<NumberInputProps> = ({
        value,
        onChangeText,
        onIncrement,
        onDecrement,
        label,
        subLabel,
    }) => (
        <View style={styles.numberInputWrapper}>
            <Text style={styles.labelNumberInput}>{label} {subLabel}</Text>
            <View style={styles.numberInputContainer}>
                <TouchableOpacity onPress={onDecrement} style={styles.button}>
                    <IconMinus style={styles.iconStyle} />
                </TouchableOpacity>
                <TextInput
                    style={styles.numberInput}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType="numeric"
                />
                <TouchableOpacity onPress={onIncrement} style={styles.button}>
                    <IconAdd style={styles.iconStyle} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <BaseContainer
            isShowHeader={true}
            headerTittle="Thiết lập mục tiêu"
            isShowLeftIcon={true}
            headerTittleStyle={styles.headerStyle}
            headerTittleTextStyle={styles.headerTitleText}
            backgroundColorStatus={Colors.green[600]}
        >
            <ScrollView>
                <View style={styles.container}>
                    <View style={[styles.marginBot, styles.row, styles.marginHorizontal]}>
                        <View style={[styles.flex1, styles.paddingRight]}>
                            <Text style={styles.label}>MỤC TIÊU</Text>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.selectedItemText}
                                selectedTextStyle={styles.selectedItemText}
                                data={goals}
                                labelField="label"
                                valueField="value"
                                placeholder="Chọn mục tiêu"
                                value={goal}
                                onChange={item => setGoal(item.value)}
                            />
                        </View>
                        <View style={styles.flex1}>
                            <Text style={styles.label}>GIỚI TÍNH</Text>
                            <View style={styles.genderContainer}>
                                <TouchableOpacity
                                    style={[styles.genderButton, styles.maleButton, gender === 'Nam' && styles.selectedGender]}
                                    onPress={() => setGender('Nam')}
                                >
                                    <Text style={gender === 'Nam' && styles.selectedItemText}>Nam</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.genderButton, styles.femaleButton, gender === 'Nữ' && styles.selectedGender]}
                                    onPress={() => setGender('Nữ')}
                                >
                                    <Text style={gender === 'Nữ' && styles.selectedItemText}>Nữ</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <NumberInput
                            label="TUỔI"
                            subLabel="(năm)"
                            value={age}
                            onChangeText={setAge}
                            onIncrement={() => handleIncrement(setAge, age)}
                            onDecrement={() => handleDecrement(setAge, age)}
                        />
                    </View>

                    <View style={styles.row}>
                        <NumberInput
                            label="CHIỀU CAO"
                            subLabel="(cm)"
                            value={height}
                            onChangeText={setHeight}
                            onIncrement={() => handleIncrement(setHeight, height)}
                            onDecrement={() => handleDecrement(setHeight, height)}
                        />
                    </View>

                    <View style={[styles.marginBot, styles.row]}>
                        <NumberInput
                            label="CÂN NẶNG"
                            subLabel="(kg)"
                            value={weight}
                            onChangeText={setWeight}
                            onIncrement={() => handleIncrement(setWeight, weight)}
                            onDecrement={() => handleDecrement(setWeight, weight)}
                        />
                    </View>

                    <View style={styles.marginBot}>
                        <Text style={styles.label}>CƯỜNG ĐỘ TẬP LUYỆN</Text>
                        <View style={styles.intensityContainer}>
                            {[1, 2, 3, 4, 5].map((level) => (
                                <TouchableOpacity
                                    key={level}
                                    style={[styles.intensityButton, intensity === level && styles.selectedIntensity]}
                                    onPress={() => setIntensity(level)}
                                >
                                    <Text style={intensity === level && styles.selectedItemText}>{level}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.labelDescription}>Ít hoạt động, chỉ ăn đi làm về ngủ</Text>
                        </View>
                    </View>

                    <View style={[styles.marginBot, styles.row]}>
                        <View style={[styles.marginBot, styles.flex1]}>
                            <Text style={styles.label}>CÂN NẶNG MỤC TIÊU</Text>
                            <View style={styles.targetWeightInputContainer}>
                                <TextInput
                                    style={styles.targetWeightInput}
                                    value={targetWeight}
                                    onChangeText={setTargetWeight}
                                    keyboardType="numeric"
                                />
                                <Text style={styles.targetWeightText}>(kg)</Text>
                            </View>
                        </View>

                        <View style={[styles.marginBot, styles.flex1]}>
                            <Text style={styles.label}>TỐC ĐỘ TĂNG/GIẢM CÂN</Text>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.selectedItemText}
                                selectedTextStyle={styles.selectedItemText}
                                data={weightChangeRates}
                                labelField="label"
                                valueField="value"
                                placeholder="Chọn tốc độ"
                                value={weightChangeRate}
                                onChange={item => setWeightChangeRate(item.value)}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.calculateButton}>
                            <Text style={styles.calculateButtonText}>TÍNH TDEE NGAY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </BaseContainer>
    );
}

export default SettingTargetScreen;