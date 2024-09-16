import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useSetRecoilState } from 'recoil';

import BaseContainer from '../../../../components/BaseContainer';
import { Colors } from '../../../../assets/colors/Colors';

// Import Icon
import IconAdd from '../../../../assets/icons/ic-add.svg';
import IconMinus from '../../../../assets/icons/ic-minus.svg';

import { styles } from '../setting-target/SettingTargetScreen.style';
import { GOAL_TYPE, WEIGHT_CHANGE_RATE } from '../../../../constants/Constants';
import { showToast } from '../../../../utils/ToastUtils';
import { BaseResponse, isSuccess } from '../../../../api/BaseResponse';
import { getUserGoalsDetailApi, postCreateUserGoalsApi } from '../../api/SettingTargetApi';
import { loadingState } from '../../../../states/States';
import { CreateUserGoalsData } from './../../api/SettingTargetApi';

interface NumberInputProps {
    value: string;
    onChangeText: (value: string) => void;
    onIncrement: () => void;
    onDecrement: () => void;
    label: string;
    subLabel: string;
}

const SettingTargetScreen = () => {
    const [goalType, setGoalType] = useState<string>('0');
    const [gender, setGender] = useState<string>('male');
    const [age, setAge] = useState<string>('0');
    const [height, setHeight] = useState<string>('0');
    const [weight, setWeight] = useState<string>('0');
    const [targetWeight, setTargetWeight] = useState<string>('0');
    const [activityLevel, setActivityLevel] = useState<number>(1);
    const [rate, setRate] = useState<string>('0');

    const setLoadingState = useSetRecoilState(loadingState);

    const goals = [
        { label: 'Giảm mỡ', value: GOAL_TYPE.LOSE_WEIGHT.toString() },
        { label: 'Tăng cân', value: GOAL_TYPE.GAIN_WEIGHT.toString() },
        { label: 'Giữ cân', value: GOAL_TYPE.MAINTAIN_WEIGHT.toString() },
    ];

    const weightChangeRates = [
        { label: 'Chậm', value: WEIGHT_CHANGE_RATE.SLOW.toString() },
        { label: 'Vừa phải', value: WEIGHT_CHANGE_RATE.MEDIUM.toString() },
        { label: 'Nhanh', value: WEIGHT_CHANGE_RATE.FAST.toString() },
    ];

    useEffect(() => {
        handleGetUserGoalDetailApi();
    }, []);

    const handleIncrement = (setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter((prevValue) => (parseInt(prevValue) + 1).toString());
    };

    const handleDecrement = (setter: React.Dispatch<React.SetStateAction<string>>) => {
        setter((prevValue) => Math.max(0, parseInt(prevValue) - 1).toString());
    };

    const handleCreateUserGoalApi = async () => {
        const dataCreate: CreateUserGoalsData = {
            goal_type: parseInt(goalType),
            gender,
            age: parseInt(age),
            height: parseInt(height),
            weight: parseFloat(weight),
            target_weight: parseFloat(targetWeight),
            rate: parseFloat(rate),
            activity_level: activityLevel,
        };
        setLoadingState(true);

        try {
            const res = await postCreateUserGoalsApi(dataCreate);
            if (isSuccess(res)) {
                showToast('Thiết lập mục tiêu thành công', 3000, 'success');
            } else {
                showToast('Đã có lỗi xảy ra', 3000, 'error');
            }
        } catch (error) {
            console.error(error);
            showToast('Đã có lỗi xảy ra, vui lòng thử lại sau', 3000, 'error');
        } finally {
            setLoadingState(false);
            showToast('Đã có lỗi xảy ra, vui lòng thử lại sau', 3000, 'error');
        }
    };

    const handleGetUserGoalDetailApi = async () => {
        setLoadingState(true);
        try {
            const res = await getUserGoalsDetailApi();
            if (isSuccess(res)) {
                // Update state with the received data
                setGoalType(res.data.goal_type.toString());
                setGender(res.data.gender);
                setAge(res.data.age.toString());
                setHeight(res.data.height.toString());
                setWeight(res.data.weight.toString());
                setTargetWeight(res.data.target_weight.toString());
                setActivityLevel(res.data.activity_level);
                setRate(res.data.rate);
                showToast('Đã lấy thông tin mục tiêu thành công', 3000, 'success');
            } else {
                showToast('Đã có lỗi xảy ra', 3000, 'error');
            }
        } catch (error) {
            console.error(error);
            showToast('Đã có lỗi xảy ra, vui lòng thử lại sau', 3000, 'error');
        } finally {
            setLoadingState(false);
        }
    };

    const NumberInput: React.FC<NumberInputProps> = ({
        value,
        onChangeText,
        onIncrement,
        onDecrement,
        label,
        subLabel,
    }) => {
        const handleChangeText = (newValue: string) => {
            const numericValue = newValue.replace(/[^0-9]/g, '');
            onChangeText(numericValue);
        };
        return (
            <View style={styles.numberInputWrapper}>
                <Text style={styles.labelNumberInput}>{label} {subLabel}</Text>
                <View style={styles.numberInputContainer}>
                    <TouchableOpacity onPress={onDecrement} style={styles.button}>
                        <IconMinus style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.numberInput}
                        value={value}
                        onChangeText={handleChangeText}
                        keyboardType="numeric"
                    />
                    <TouchableOpacity onPress={onIncrement} style={styles.button}>
                        <IconAdd style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };


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
                                key={goalType}
                                style={styles.dropdown}
                                placeholderStyle={styles.selectedItemText}
                                selectedTextStyle={styles.selectedItemText}
                                data={goals}
                                labelField="label"
                                valueField="value"
                                placeholder="Chọn mục tiêu"
                                value={goalType}
                                onChange={item => setGoalType(item.value)}
                            />
                        </View>
                        <View style={styles.flex1}>
                            <Text style={styles.label}>GIỚI TÍNH</Text>
                            <View style={styles.genderContainer}>
                                <TouchableOpacity
                                    style={[styles.genderButton, styles.maleButton, gender === 'male' && styles.selectedGender]}
                                    onPress={() => setGender('male')}
                                >
                                    <Text style={gender === 'male' && styles.selectedItemText}>Nam</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.genderButton, styles.femaleButton, gender === 'female' && styles.selectedGender]}
                                    onPress={() => setGender('female')}
                                >
                                    <Text style={gender === 'female' && styles.selectedItemText}>Nữ</Text>
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
                            onIncrement={() => handleIncrement(setAge)}
                            onDecrement={() => handleDecrement(setAge)}
                        />
                    </View>

                    <View style={styles.row}>
                        <NumberInput
                            label="CHIỀU CAO"
                            subLabel="(cm)"
                            value={height}
                            onChangeText={setHeight}
                            onIncrement={() => handleIncrement(setHeight)}
                            onDecrement={() => handleDecrement(setHeight)}
                        />
                    </View>

                    <View style={[styles.marginBot, styles.row]}>
                        <NumberInput
                            label="CÂN NẶNG"
                            subLabel="(kg)"
                            value={weight}
                            onChangeText={setWeight}
                            onIncrement={() => handleIncrement(setWeight)}
                            onDecrement={() => handleDecrement(setWeight)}
                        />
                    </View>

                    <View style={styles.marginBot}>
                        <Text style={styles.label}>CƯỜNG ĐỘ TẬP LUYỆN</Text>
                        <View style={styles.intensityContainer}>
                            {[1, 2, 3, 4, 5].map((level) => (
                                <TouchableOpacity
                                    key={level}
                                    style={[styles.intensityButton, activityLevel === level && styles.selectedIntensity]}
                                    onPress={() => setActivityLevel(level)}
                                >
                                    <Text style={activityLevel === level && styles.selectedItemText}>{level}</Text>
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
                                value={(rate).toString()}
                                onChange={item => setRate(item.value)}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.calculateButton}
                            onPress={handleCreateUserGoalApi}>
                            <Text style={styles.calculateButtonText}>TÍNH TDEE NGAY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </BaseContainer>
    );
}
export default SettingTargetScreen;